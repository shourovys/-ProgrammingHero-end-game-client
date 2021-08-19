import { all, takeEvery, put, call } from 'redux-saga/effects';
import { notification } from 'antd';
import { history, store as reduxStore, store } from 'index';
import { auth } from 'services/auth';
import actions from './actions';
import ReactGA from 'react-ga';

export function* LOGIN({ payload }) {
  const { email, password } = payload;
  console.log('payload',payload);
  const provider = 'jwt';
  console.log('redux',reduxStore.getState());
console.log('provider',provider);
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  });
  const success = yield call(auth(provider).login, email, password);
  yield put({
    type: 'user/LOAD_CURRENT_ACCOUNT',
  });
  if (success) {
    yield history.push('/');

    ReactGA.pageview('/dashboard');

    ReactGA.set({
      userId: email,
      // any data that is relevant to the user session
      // that you would like to track with google analytics
    });
    // notification.success({
    //   message: 'Update profile.',
    //   description: 'Please complete your profile!. ',
    // });
  } else {
    notification.error({
      message: 'Invalid credentials.',
      description: 'Please input correct email and password. ',
    });
  }
}

export function* LOAD_CURRENT_ACCOUNT() {
  const provider = 'jwt';
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  });
  const response = yield call(auth(provider).currentAccount);
  if (response) {
    const { uid: id, email, photoURL: avatar } = response;
    yield put({
      type: 'user/SET_STATE',
      payload: {
        id,
        name: 'Administrator',
        email,
        avatar,
        role: 'admin',
        authorized: true,
      },
    });
  }
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  });
  console.log(reduxStore.getState().user,'user data');
}

export function* LOGOUT() {
  const provider = 'jwt';
  yield call(auth(provider).logout);
  yield put({
    type: 'user/SET_STATE',
    payload: {
      id: '',
      name: '',
      role: '',
      email: '',
      avatar: '',
      authorized: false,
      loading: false,
      refresh: '',
      access: '',
    },
  });
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ]);
}
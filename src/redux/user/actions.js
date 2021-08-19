import { createUserApi, loginUserApi } from "../../api";
import { showModal, showNotification } from "../Notification/Action";

export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const Add_LOGIN_USER = "Add_LOGIN_USER";
export const LOGOUT = "LOGOUT";

export const createAccount =
  (formData, setLoading, history) => async (dispatch) => {
    try {
      const { data } = await createUserApi(formData);
      dispatch({type:Add_LOGIN_USER,payload:data})
      dispatch(showModal({ massageType: "success", content: data.message }));
      setLoading(false);
      history.push('/');
    } catch (error) {
      dispatch(
        showNotification({
          message: error?.response?.data?.message,
          massageType: "error",
        })
      );
      setLoading(false);
    }
  };

export const loginAccount =
  (formData, setLoading, history) => async (dispatch) => {
    try {
      const { data } = await loginUserApi(formData);
      dispatch({type:Add_LOGIN_USER,payload:data})
      dispatch(showModal({ massageType: "success", content: data.message }));
      setLoading(false);
      history.push("/");
    } catch (error) {
      dispatch(
        showNotification({
          message: error?.response?.data?.message,
          massageType: "error",
        })
      );
      setLoading(false);
    }
  };

export const logOut = () => {
  localStorage.setItem("profile", "null");
  return {
    type: LOGOUT,
    payload: {
      id: "",
      username: "",
      email: "",
      token: null,
    },
  };
};

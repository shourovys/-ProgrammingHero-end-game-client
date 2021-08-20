import { createUserApi, loginUserApi } from "../../api";
import { showNotification } from "../Notification/Action";

export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const Add_LOGIN_USER = "Add_LOGIN_USER";
export const LOGOUT = "LOGOUT";

export const createAccount =
  (formData, setLoading) => async (dispatch) => {
    try {
      const { data } = await createUserApi(formData);
      console.log("🚀 ~ file: actions.js ~ line 12 ~ data", data)
      dispatch({type:Add_LOGIN_USER,payload:data})
      dispatch(showNotification({ massageType: "success", message: 'Account created successfully' }));
      setLoading(false);
    } catch (error) {
      dispatch(
        showNotification({
          message: error?.response?.data?.message,
          massageType: "error",
        })
      );
      setLoading(false);
      console.log(error);
    }
  };

export const loginAccount =
  (formData, setLoading) => async (dispatch) => {
    try {
      const {data}= await loginUserApi(formData);
      console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data)
      dispatch({type:Add_LOGIN_USER,payload:data})
      dispatch(showNotification({ massageType: "success", message: `welcome ${data.userInfo.username}` }));
      setLoading(false);
    } catch (error) {
      dispatch(
        showNotification({
          message: error?.response?.data?.message,
          massageType: "error",
        })
      );
      setLoading(false);
      console.log(error);
    }
  };

export const logOut = () => {
  localStorage.setItem("profile", "null");
  return {
    type: LOGOUT,
    payload: {
      userInfo:{
        id: "",
      username: "",
      email: "",
      isAdmin: false
      }
    },
  };
};
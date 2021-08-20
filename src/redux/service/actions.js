import { addServiceApi, getServiceApi } from "../../api";
import { showNotification } from "../Notification/Action";

export const ADD_SERVICE = "ADD_SERVICE";
export const addService = (formData, setLoading,history) => async (dispatch) => {
  try {
    const { data } = await addServiceApi(formData);
    dispatch({ type: ADD_SERVICE, payload: data });
    setLoading(false);
    dispatch(
      showNotification({
        message: "New Service Added Successfully",
        massageType: "success",
      })
    );
    history.push('/')
  } catch (error) {
    console.log("🚀 ~ file: actions.js ~ line 20 ~ error", error);

    dispatch(
      showNotification({
        message: error.Error || "Some error happened, Please try again",
        massageType: "error",
      })
    );
    setLoading(false);
  }
};

export const UPDATE_SERVICE = "UPDATE_SERVICE";
export const updateFoodItem =
  (formData, setLoading) => async (dispatch) => {
    console.log("🚀 ~ file: actions.js ~ line 35 ~ formData", formData);
    try {
      // const { data } = await updateFoodItemApi(formData);
      // dispatch({ type: UPDATE_SERVICE, payload: data });
      setLoading(false);
      dispatch(
        showNotification({
          message: "Food Item updated Successfully",
          massageType: "success",
        })
      );
    } catch (error) {
      console.log("🚀 ~ file: actions.js ~ line 20 ~ error", error);

      dispatch(
        showNotification({
          message: error.Error || "Some error happened, Please try again",
          massageType: "error",
        })
      );
      setLoading(false);
    }
  };

export const GET_SERVICE = "GET_SERVICE";
export const getService = () => async (dispatch) => {
    try {
      const { data } = await getServiceApi();
      dispatch({ type: GET_SERVICE, payload: data });
    } catch (error) {
      console.log("🚀 ~ file: actions.js ~ line 20 ~ error", error)
    }

  }
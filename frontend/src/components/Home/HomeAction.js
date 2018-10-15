
import * as api from "./../components/utils/api";
import * as ACTION_TYPES from "./HomeActionTypes";

// import toastr from "toastr";

export const loginWithCredentials = (data, callback, historyObj) => (
    dispatch,
    getState
) => {
    return api
        .loginWithCredentials("/register", data)
        .then(response => response.json())
        .then(responseData => {
            
            if (callback && typeof callback === "function") {
                callback();
            }
            localStorage.setItem("token", responseData.data.token);
            dispatch({ type: ACTION_TYPES.LOGIN_END, value: true });
            dispatch({
                type: ACTION_TYPES.LOGIN_SESSION,
                value: responseData.data.token,
            });
            
            historyObj.push("/login");
        })
        .catch(err => {
            err.json().then(err => {
                if (callback && typeof callback === "function") {
                    callback();
                }
                // toastr.error(err.errorMessage);
                dispatch({
                    type: ACTION_TYPES.LOGIN_ERROR,
                    value: err.errorMessage,
                });
            });
        });
};

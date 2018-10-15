//all the call should go from this api
import * as http from "./http";
// import toastr from "toastr";



//login with default credentials
export const loginWithCredentials = (url, data) => {
    return http.post(url, null, data);
};

//valideToken
export const validateLoginToken = (url, callback) => (dispatch, getState) => {
    return http
        .post(url, null)
        .then(resp => resp.json())
        .then(res => {
            dispatch({
                type: "AUTH_LOGIN",
                validatedToken: true,
                loading: false,
            });
            // if (Bro(res).doYouEven("data.companyId")) {
            //     dispatch(getCompanyConfigs(res.data.companyId));
            // }
        })
        .catch(err => {
            dispatch({
                type: "AUTH_LOGIN",
                validatedToken: false,
                loading: false,
            });
            // toastr.error("Please login first");
        });
};


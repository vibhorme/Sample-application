import React from "react";
import { connect } from "react-redux";
import Login from "./../components/Login/Login";
import { loginSubmit } from "./../actions/loginAction";

const mapStateToProps = state => {
    return {
        //user: state.loginReducer.user,
        //isLoading: state.loginReducer.isLoading,
        // error: state.error,
        state:'welcome'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginSubmit: obj => {
            dispatch(loginSubmit(obj));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

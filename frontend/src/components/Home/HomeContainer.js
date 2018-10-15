import { connect } from "react-redux";
import Login from "./Home";
import { loginWithCredentials } from "./HomeActions";

const mapStateToProps = state => {
    return {
        loginError: state.loginReducer.loginError,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (data, setLoader, history) =>
            dispatch(loginWithCredentials(data, setLoader, history)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

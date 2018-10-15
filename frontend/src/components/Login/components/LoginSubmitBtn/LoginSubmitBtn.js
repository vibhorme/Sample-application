import React from "react";
import PropTypes from "prop-types";

const LoginSubmitBtn = props => (
    <button type="submit" className="login__submit">
        <span
            style={{
                display: `${!props.formLoader ? "inline-block" : "none"}`,
            }}
        >
            Login
        </span>
        <i
            className="fa fa-circle-o-notch fa-spin"
            style={{
                display: `${props.formLoader ? "inline-block" : "none"}`,
            }}
        />
    </button>
);

LoginSubmitBtn.propTypes = {
    formLoader: PropTypes.bool,
};

export default LoginSubmitBtn;

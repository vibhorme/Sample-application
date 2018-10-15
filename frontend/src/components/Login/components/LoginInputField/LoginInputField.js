import React from "react";
import PropTypes from "prop-types";

const LoginInputField = props => (
    <div className="login__field-wrapper">
        <div className="login__field-input">
            <i
                className={`fa ${props.icon} login__field-icon`}
                aria-hidden="true"
            />
            <input
                {...props.input}
                type={props.type}
                placeholder={props.placeholder}
                aria-label={props.ariaLabel}
            />
        </div>
        <div className="login__field-error">
            {props.meta && props.meta.touched ? props.meta.error : ""}
        </div>
    </div>
);

LoginInputField.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    ariaLabel: PropTypes.string,
};

export default LoginInputField;

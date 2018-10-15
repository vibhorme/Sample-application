import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import validate from "./utils/validate";

// Components
import LoginInputField from "./components/LoginInputField";
import LoginSubmitBtn from "./components/LoginSubmitBtn";

// CSS
import "./Login.css";

// Img
import logo from "./img/check1.png";

class Login extends Component {
    state = {
        formLoader: false,
    };

    loginSubmit = formData => {
        this.setState({
            formLoader: true,
        });
        console.log(formData);

        // just to emulate api response time
        setTimeout(() => {
            this.setState({
                formLoader: false,
            });
        }, 1000);
    };

    render() {
        // Redux form props
        const { handleSubmit } = this.props;

        return (
            <div className="login">
                <form
                    className="login__dialog"
                    onSubmit={handleSubmit(this.loginSubmit)}
                >
                    <img src={logo} alt="" width="80" />
                    <div className="login__head">Welcome</div>
                    <div className="login__head">Please Login</div>
                    <div className="login__info">
                        This is where your login credentials are needed in order
                        to proceed with your account
                    </div>
                    <Field
                        name="email"
                        component={LoginInputField}
                        type="text"
                        placeholder="Email"
                        icon="fa-envelope-o"
                        ariaLabel="Email"
                    />
                    <Field
                        name="password"
                        component={LoginInputField}
                        type="password"
                        placeholder="Password"
                        icon="fa-lock"
                        ariaLabel="Password"
                    />
                    <LoginSubmitBtn formLoader={this.state.formLoader} />
                </form>
            </div>
        );
    }
}

Login = reduxForm({
    form: "login_form",
    validate,
})(Login);

export default Login;


import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import validate from "./../Login/utils/validate"


import {loginWithCredentials} from "./HomeAction";
// Components
import LoginInputField from "./../Login/components/LoginInputField";
import LoginSubmitBtn from "./../Login/components/LoginSubmitBtn";

// CSS
import "./../Login/Login.css";

// Img
import logo from "./img/check1.png";


 

 import "./home.css";

class Login extends Component {
    state = {
        formLoader: false,
    };

    homeSubmit = formData => {
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
     check = formData => {
         this.props.loginWithCredentials()
         this.setLoader();
        this.props.login(formData, this.setLoader, this.props.history);
         console.log("check");
     }

     cancel = () => {
         console.log("click cancel");
     }

     signin =() => {
         console.log("signin");
     }

    render() {
        // Redux form props
        const { handleSubmit } = this.props;

        return (
            <div className="login">
                <form
                    className="login__dialog"
                    onSubmit={handleSubmit(this.check)}
                >
                    <img src={logo} alt="" width="80" />
                    <div className="login__head">Welcome</div>
                    <div className="login__head">Please Login</div>
                    
                    <Field
                        name="username"
                        component={LoginInputField}
                        type="text"
                        placeholder="enter your name"
                        icon="fa-envelope-o"
                        ariaLabel="Email"
                        Required
                    />
                    
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
                    {/* <LoginSubmitBtn formLoader={this.state.formLoader} /> */}
                    <div className = "button" style = {{ margin: "19px 0px " }} >
                        <button className = " check" onClick = {this.check} >
                            Signup
                        </button>
                        <button  className = " check " onClick = {this.cancel} >
                               cancel
                        </button>
                    </div>
                    <div> already registered?
                         <button onClick = {this.signin}>
                                 Signin
                        </button>
                    </div>
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


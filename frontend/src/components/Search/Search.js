
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import validate from "./../Login/utils/validate";

import SelectBox from "../components/selectBox/SelectBox";
import "./check.css";

class Search extends Component {
    state = {
        formLoader: false,
    };

    sampleSubmit = formData => {
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
     search = formData => {
         this.setState ({
             formLoader: true,
         })
         console.log("check");
     }

     

    render() {
        const sampleType = [
            {
                text: "html",
                value: "html",
            },
            {
                text: "css",
                value: "css",
            },
            {
                text: "javascript",
                value: "javascript",
            },
            {
                text: "react",
                value: "react",
            }
        ];
        // Redux form props
        const { handleSubmit } = this.props;

        return (
            <div className="login">
                <form
                    className="search"
                    onSubmit={handleSubmit(this.sampleSubmit)}
                >
                <div className = "data" style = {{display: "flex" }}>
                     <div>
                    <Field
                                component={SelectBox}
                                options={sampleType}
                                label="Sample Type"
                                name="c"
                                marginRight="4%"
                                width="180px"
                            />
                    </div>
                                                         
                    <div className = "button" style = {{  margin: "19px 0px" , display: "flex" ,  paddingBottom: "19px" , marginTop: "0px" }}  >
                        <button className = "check" onClick = {this.search} >
                                Search
                        </button>
                        <button  className = "check" onClick = {this.cancel} >
                                cancel
                        </button>
                    </div>
                </div>
                    <div> data
                          </div>
                    
                </form>
            </div>
        );
    }
}


 
 Search= reduxForm({
    form: "SearchForm",
    validate,
})(Search);

export default Search;


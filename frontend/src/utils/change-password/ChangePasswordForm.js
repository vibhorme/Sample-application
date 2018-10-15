import React, { Component } from "react";
import Loader from "./../../components/Loader";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import BackIco from "material-ui/svg-icons/navigation/arrow-back";
import { Link } from "react-router";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import validate from "./validate";
import Dropzone from "react-dropzone";
import { toastr } from "react-redux-toastr";
import { toastrOptions } from "./../toastr";
import Api from "./../api";
import PopoverTip from "./..//popover/PopoverContainer";
import {
	darkInput,
	dialogStyling,
	inputStyling
} from "./../../components-material/Style";
import {
	renderTextField,
	renderBoxTextField
} from "./../../components-material/Input";
import {
	renderSelectField,
	renderMultiSelectField,
	renderBoxSelectField
} from "./../../components-material/Select";

let password = {};
var isClosed;
const selector = formValueSelector("changePasswordForm");
let _ = require("underscore");
class ChangePassword extends Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		const { handleSubmit, handleClose} = this.props;

		return (
			<form
				style={{ background: "#fafafa" }}
				id="changePasswordForm"
				className="widgetInner"
				onSubmit={handleSubmit}
				name="updateAffiliateAccountInfoForm"
				ref="form"
			>

				{/*<div style={{ margin: 20 }}>
					<label className="form-floating-label">
						Old Password*
					</label>
					<Field
						name="oldPassword"
						type="password"
						component={renderBoxTextField}
						exStyle={{ width: 355, height: 40 }}
					/>
				</div>*/}

				<div style={{ margin: 20 }}>
					<label className="form-floating-label">
						New Password*

						    <PopoverTip
		                namespace="password"
		                containerEl={
		                  (
		                    this.props.children,
                    {
	                      icon: "help-outline",
	                      className: "grey icon-sm",
	                      verticalAlign: "middle",
	                      marginLeft: 5
                    }
                  )
                }
                content={
                  "Password should be alpha numeric, must be 6 to 16 characters,must contain atLeast 1 upper case letter and atLeast 1 lower case letter and atLeast 1 special character."
                }
              />
					</label>
					<Field
						name="newPassword"
						component={renderBoxTextField}
						type="password"
						exStyle={{ width: 355, height: 40 }}
					/>
				</div>

				<div style={{ margin: 20 }}>
					<label className="form-floating-label">
						Confirm Password*
					</label>
					<Field
						name="confirmPassword"
						component={renderBoxTextField}
						type="password"
						exStyle={{ width: 355, height: 40 }}
					/>
				</div>

				<div className="alignBtnContainer form-bottom-wrap" style={{paddingBottom:0}}>
					<RaisedButton label="Update" type="submit" primary={true} />
					 	<FlatButton
					 	style={{marginLeft : 10}}
        				label="Cancel"
        				primary={true}
        				onClick={this.props.handleClose} />
				</div>
			</form>
		);
	}
}
ChangePassword = reduxForm({
	form: "changePasswordForm",
	fields: ["newPassword", "confirmPassword"],
	validate: validate
})(ChangePassword);

function setInitialValues(state) {
	password = {
		newPassword: selector(state, "newPassword"),
		confirmPassword: selector(state, "confirmPassword")
	};
}
ChangePassword = connect(state => ({
	initialValues: setInitialValues(state)
}))(ChangePassword);
export default ChangePassword;

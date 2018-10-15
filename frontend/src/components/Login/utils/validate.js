// Validate Form
const validate = values => {
    const errors = {};

    // Errors
    const reqError = "This field is required";
    const emailError = "Enter a valid email";

    // Regex
    /* eslint-disable no-useless-escape */
    const emailRegex = /^([a-z A-Z 0-9 _\.\-])+\@(([a-z A-Z 0-9\-])+\.)+([a-z A-z 0-9]{2,})$/;
    /* eslint-enable no-useless-escape */

    // email
    if (!values.email) {
        errors.email = reqError;
    }
    if (values.email && !values.email.match(emailRegex)) {
        errors.email = emailError;
    }

    // password
    if (!values.password) {
        errors.password = reqError;
    }
    return errors;
};

export default validate;

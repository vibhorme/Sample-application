 const validate = (values: Object, props: Object) => {

   const errors = {
     
  };

 var password = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[0-9]){1,})(?=(.*[^a-zA-Z0-9_]){1,})(?!.*[\n ])[0-9a-zA-Z~!@#$%^&*.]{6,16}$/;
  
   if (!values.newPassword) errors.newPassword = "Required";

   if (!values.confirmPassword) errors.confirmPassword = "Required";

   if (values.newPassword && !password.test(values.newPassword)) {
     errors.newPassword =
       "Password should be alpha numeric, must be 6 to 16 characters,must contain atLeast 1 upper case letter and atLeast 1 lower case letter and atLeast 1 special character";
   }

   if (values.confirmPassword && values.confirmPassword !== values.newPassword) {
     errors.confirmPassword = "Password must match";
   }
   return errors;
};

export default validate;




  
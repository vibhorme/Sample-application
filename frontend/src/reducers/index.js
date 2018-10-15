// endpoint for the store, combines and creates root reducer

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";



export default combineReducers({
    form: formReducer,
    
});

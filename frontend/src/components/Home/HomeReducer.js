
import * as ACTION_TYPES from "./HomeActionTypes";

const initialState = {
    isLoggedIn: false,
    logout: false,
    session: "",
    userDetails: {},
    validatedToken: false,
    loading: true,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_END:
            return Object.assign({}, state, {
                isLoggedIn: action.value,
            });
        case ACTION_TYPES.LOGIN_ERROR:
            return Object.assign({}, state, {
                loginError: action.value,
            });
        case ACTION_TYPES.LOGIN_SESSION:
            return Object.assign({}, state, {
                session: action.value,
            });
        case ACTION_TYPES.UPDATE_AUTH_MODEL:
            return {
                ...state,
                [action.model]: action.value,
            };
        case "AUTH_LOGIN":
            return {
                ...state,
                validatedToken: action.validatedToken,
                loading: action.loading,
            };
        default:
            return state;
    }
};

export default loginReducer;

import * as types from "./../actions/_types";

const initialState = {
    user: {},
    isLoading: false,
    isSending: false,
    isFetching: false,
    open: false,
};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case types.SIGNIN:
            return signinRequest(state, action);
        case types.SIGNIN_SUCCESS:
            return signinSuccess(state, action);
        case types.SIGNIN_FAILURE:
            return signinFailure(state, action);
        default:
            return state;
    }
}

function signinRequest(state, action) {
    return Object.assign({}, state, {
        isLoading: true,
    });
}

function signinSuccess(state, action) {
    return Object.assign({}, state, {
        isLoading: false,
        user: action.payload.user.data,
    });
}

function signinFailure(state, action) {
    return Object.assign({}, state, {
        isLoading: false,
        error: action.payload.errorMessage,
    });
}

export default loginReducer;

export const LoginRequest = "LOGIN_REQUEST";
export const LoginSuccess = "LOGIN_SUCCESS";
export const LoginFailure = "LOGIN_FAILURE";

const loginState = {
    userInfo: {},
    isRequest: false,
    isLogin: false
}

export const loginReducer = (state = loginState, action) => {
    if (action.type === LoginRequest) {
        return action.loginState;
    } else if (action.type === LoginSuccess) {
        return action.loginState;
    } else if (action.type === LoginFailure) {
        return action.loginState;
    }
    return state;
}

export const action_login_request = () => {
    return {
        type: LoginRequest,
        loginState: {
            userInfo: {},
            isRequest: true,
            isLogin: false
        }
    }
}
export const action_login_success = (state) => {
    return {
        type: LoginSuccess,
        loginState: {
            userInfo: state,
            isRequest: false,
            isLogin: true
        }
    }
}
export const action_login_failure = () => {
    return {
        type: LoginFailure,
        loginState: {
            userInfo: {},
            isRequest: false,
            isLogin: false,
        }
    }
}

    
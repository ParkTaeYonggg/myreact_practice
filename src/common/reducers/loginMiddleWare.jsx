import axios from "axios";
import {action_login_success, action_login_failure} from "./loginReducer";

export default function LoginMiddleWare (url, dispatch) {
    axios({
        url: url,
        method: "post",
        baseURL: "http://localhost:8080",
        withCredentials: true
    })
    .then(res => {
        if (res.data.id !== undefined) {
            dispatch(action_login_success(res.data));
            alert("환영합니다.");
        } else {
            dispatch(action_login_failure());
            alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
        }
    })
    .catch(error => { alert("관리자에게 문의하세요. (에러 : " + error + ")") })
}
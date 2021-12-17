import {combineReducers, createStore} from "redux";
import {loginReducer} from "./reducers/loginReducer";




// 리덕스 리듀서 컴바인
const rootReducer = combineReducers({
    loginReducer,
    
});

// 스토어 만들기
const store = createStore(rootReducer);

export default store;
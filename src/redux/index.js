// state관리를 위함
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    InsertResultInfo,
    RealInsertInfo,
    ChangeResultInfo,
    ResultInfo,
    unsuitableInfo,
    prescribeInfo,
    userInfo,
    oneUserInfo,
    unsuitableSampleInfo,
    smsInfo,
} from './modules';

const middlewares = [thunk];

// 리듀서 합치기
const reducers = combineReducers({
    unsuitableInfo,
    prescribeInfo,
    userInfo,
    oneUserInfo,
    unsuitableSampleInfo,
    ResultInfo,
    InsertResultInfo,
    RealInsertInfo,
    ChangeResultInfo,
    smsInfo,
});

let store; // 전

// 개발환경일때만 적용되는것들
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);

    // 스토어 구성을 할때 WidthDevTools에 합친다. 개발환경
    store = createStore(
        reducers,
        composeWithDevTools(applyMiddleware(...middlewares))
    );
} else {
    store = createStore(reducers, compose(applyMiddleware(...middlewares))); // 배포환경
}

export default store; // 전

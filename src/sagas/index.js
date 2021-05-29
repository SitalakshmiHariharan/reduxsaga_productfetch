import {put, takeLatest, all} from 'redux-saga/effects';

function* fetchProduct(){
    console.log("Inside worker saga");
    const json = yield fetch('https://ngapi4.herokuapp.com/api/getProducts')
                    .then(res => res.json(),);
    yield put({type:'PRODUCT_RECEIVED', json: json,});   
}

function* actionWatcher(){
    console.log("Inside watcher saga");
    yield takeLatest('GET_PRODUCT', fetchProduct)
}

export default function* rootSaga(){
    console.log("Inside root saga");
    yield all([
        actionWatcher(),
    ]);
}
/**
 * Created by GeShuai on 2019/3/10.
 */
import { takeEvery,put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionType';
import axios from 'axios';
import { initListAction } from './actionCreators'
function* getInitList() {
    try{
        const res = yield axios.get('./list.json');
        const action = initListAction(res.data);
        put(action);
    }catch(e){
        console.log('list.json网络请求失败');
    }

    /*axios.get('/list.json').then((res) => {
        const data = res.data;*/

        /*store.dispatch(action);

    })*/

}
function* mySaga(){
    yield takeEvery(GET_INIT_LIST, getInitList);
}
export default mySaga;
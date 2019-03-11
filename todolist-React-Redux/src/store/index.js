/**
 * Created by GeShuai on 2019/3/10.
 */
import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(reducer);
export default store;
/*Created by GeShuai on 2019/3/10.*/


import { ADD_ITEM,DELETE_ITEM, CHANGE_INPUT_VALUE} from './actionType';
const defaultState = {
    inputValue:'',
    list:[],
}
export default (state = defaultState ,action) => {

    switch (action.type)
    {
        case CHANGE_INPUT_VALUE:
        /*case 'change_input_value':*/
        {
            const newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        }
        case ADD_ITEM:
       /* case 'add_item':*/
        {
            const newState = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;

        }
        case DELETE_ITEM:
        /*case 'delete_item':*/
        {
            const newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index,1);
            return newState;

        }
        default:
            /*console.log('helloworld!');*/


    }
    return state;
}
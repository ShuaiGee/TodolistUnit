/**
 * Created by GeShuai on 2019/3/10.
 */
import React from 'react';
import { connect } from 'react-redux';
import { DELETE_ITEM,ADD_ITEM,  CHANGE_INPUT_VALUE} from './store/actionType';

const Todolist = ((props) => {
    const { inputValue,list,changeInputValue,handleClick,handleDelete} = props;
    return (
        <div>
            <div>
                <input  value={inputValue}
                        onChange={changeInputValue}

                />
                <button onClick={handleClick}

                >提交</button></div>
            <ul>
                {
                    list.map((item,index) => {
                        return <li onClick={handleDelete}
                                   key={index}>{item}</li>
                    })
                }

            </ul>
        </div>
    )

})//无状态组件



const mapStateToProps = ((state) => {
    return {
       inputValue:state.inputValue,
        list:state.list,
    }
})
const mapDispatchToProps = ((dispatch) => {
    return {
        changeInputValue(e){
            const action = {
                type:CHANGE_INPUT_VALUE,
                /*type:'change_input_value',*/
                value:e.target.value
            };
            /*console.log(e.target.value);*/
            dispatch(action);
        },
        handleClick(){
            const action = {
                type:ADD_ITEM,
                /*type:'add_item'*/
            };
            dispatch(action);
        },
        handleDelete(index){
            const action = {
                type:DELETE_ITEM,
                /*type:'delete_item',*/
                index
            };
            dispatch(action);
        }
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Todolist);
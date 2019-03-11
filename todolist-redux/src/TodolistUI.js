/**
 * Created by GeShuai on 2019/3/10.
 */
import React,{ Component } from 'react';
import { Input,Button,List} from 'antd';

class TodolistUI extends Component
{
    render(){
        return (
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <div>
                    <Input
                        onChange={this.props.handleInputChange}
                        placeholder="todo info"
                        style={{width:'300px',marginRight:'10px'}}
                        value={this.props.inputValue}
                    />
                    <Button
                        onClick={this.props.handleBtnClick}
                        type="primary">提交</Button>
                </div>
                <List
                    style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => (
                        <List.Item
                        onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
            </div>
        )
    }

}
export default TodolistUI;
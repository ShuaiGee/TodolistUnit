import React, { Component,Fragment } from 'react';
import './style.css'
import TodoItem from './TodoItem'
class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue:'',
      list:[]
    }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleBtnClick = this.handleBtnClick.bind(this);
      this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  componentWillMount(){
    /*console.log('componentWillMount');*/
  }

  render() {
    /*console.log('render');*/
    return (
        <Fragment>
      <div>
          {/*这下面是一个input框*/}
        <label htmlFor="insertArea">输入内容</label>
        <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
      />
        <button
            onClick={this.handleBtnClick}
        >提交</button></div>
      <div>
        <ul>
            {
              this.state.list.map((item,index)=>{
                return (
                <div>
                  <TodoItem
                            key={index}
                            content={item}
                            index={index}
                            ItemDelete={this.handleItemDelete}
                  />
                    {/*<li
                     key={index}
                     onClick={this.handleItemDelete.bind(this,index)}
                     dangerouslySetInnerHTML={{__html:item}}
                     >
                     </li>*/}
                </div>
                    )
            })
            }
        </ul>
      </div>
        </Fragment>
    );
  }
  componentDidMount(){
    /*console.log('componentDidMount');*/
  /*  axios.get('/api/todolist')
     .then(()=>{alert('succ')})
     .catch(()=>{alert('error')})*//*如何获得Ajax请求*/

  }
  /*shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }*/
  handleInputChange(e){
    const value = e.target.value;
    this.setState(() => ({inputValue:value}))
  }
  handleBtnClick(){
    this.setState((prevState) => ({
        list:[...prevState.list,prevState.inputValue],
        inputValue:''
    }));

  }
  handleItemDelete(index){
    //immutable state不允许我们做任何更改
      this.setState((prevState) => {
          const list = [...prevState.list];
          list.splice(index,1);
          return {list}
      })

  }
}

export default Todolist;

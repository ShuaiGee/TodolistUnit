/**
 * Created by GeShuai on 2019/3/7.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        const {content} = this.props;
      return <div onClick={this.handleClick}>{content}</div>
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    handleClick(){
        const {ItemDelete,index} = this.props;
        ItemDelete(index)
    }

}
TodoItem.propTypes = {
    /*test:PropTypes.string.isRequired,*/
    content: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    ItemDelete:PropTypes.func,
    index:PropTypes.number

}
/*TodoItem.defaultProps = {
    test:'HelloWorld!'

}*/
export default TodoItem;
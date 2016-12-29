import React, { Component } from 'react';
import store from '../store';

class CommentBox extends Component{
  constructor(){
    super();
    this.state={
      comments:store.getState().comments
    }
  }
  hundleSubmit(e){
    e.preventDefault();
    console.log(store.getState());
    store.dispatch({type:'ADD_COMMENT',xx:this.refs.content.value})
    console.log(store.getState());
    // 让输入框里保存一次数据就会清零
    this.refs.commentForm.reset();
    // console.log(this.refs);
    this.setState({comments: store.getState().comments });
    // console.log(this.refs.content.value);
    // let content = this.refs.content.value;
    // let comments = this.state.comments;
    // comments.push(content);
    // this.setState({ comments });
  }
  render(){
    let commentList = this.state.comments.map( (res,i) =>
      <div key={i} className='comment'>
        <span>{res}</span>
      </div>
    )
    return(
      <div className="comment-box">
        {commentList}
        <form ref='commentForm' className='comment-form' onSubmit={this.hundleSubmit.bind(this)} >
          <input type='text' className='input' ref='content' />
          <button type='submit' className='submit-btn' >save</button>
        </form>
        <div className='underline'></div>
      </div>
    )
  }
}
export default CommentBox;

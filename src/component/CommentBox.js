import React, { Component } from 'react';

class CommentBox extends Component{
  constructor(){
    super();
    this.state={
      comments:[
        'hello1',
        'hello2'
      ]
    }
  }
  hundleSubmit(e){
    e.preventDefault();
    console.log(this.refs.content.value);
    let content = this.refs.content.value;
    let comments = this.state.comments;
    comments.push(content);
    this.setState({ comments });
    this.refs.commentForm.reset();
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

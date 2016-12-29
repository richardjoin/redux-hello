import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostBody extends Component{
  render(){
    return(
      <div className="post-body">
        PostBody
        <div className="comment-num">
           { this.props.comments.length }...
           { this.props.id }
        </div>
     </div>
    )
  }
}
const mapStateToProps = (state) => ({
  comments: state.comments,
  posts: state.posts
})
export default connect(mapStateToProps)(PostBody);

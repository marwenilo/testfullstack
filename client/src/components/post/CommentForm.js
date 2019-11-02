import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');
  return (
    <div className="post-form">
    <div className="p discComm">
      <h3>Leave a Comment</h3>
    </div>
    <form className="form my-1" onSubmit={e => {
      e.preventDefault();
      addComment (postId, { text });
      setText('');
    }}>
      <textarea
      className="textComm"
        name="text"
        cols="30"
        rows="5"
        placeholder="Create a post"
        value={text}
        onChange={e => setText(e.target.value)}
        required
      ></textarea>
      <input type="submit" className="btn btn-dark subComm" value="Submit" />
    </form>
  </div>
  )
}

CommentForm.propTypes = {
addComment: PropTypes.func.isRequired
}

export default connect(null, { addComment })(CommentForm);

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';
const CommentItem = ({
  postId,
  comment:{ _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => {
  return (
    <div className="Contan">
          <div className='textConta'>
            <Link to={`/profile/${user}`}>
              <img
                className="round-imgr"
                src={avatar}
                alt="avatar"
              />
              <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <p className='postP2'>
             {text}
            </p>
             <p className='postP'>
                Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
            </p>
            {!auth.loading && user === auth.user._id && (
              <button onClick={ e => deleteComment(postId, _id)} type="button" className="btn btn-danger">
                <i className="fas fa_timex"></i>
              </button>
            )}
          </div>
        </div>
  )
};

CommentItem.propTypes = {
postId: PropTypes.number.isRequired,
comment: PropTypes.object.isRequired,
auth: PropTypes.object.isRequired,
deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
 auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem) ;
 
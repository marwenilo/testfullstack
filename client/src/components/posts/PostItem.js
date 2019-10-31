import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';



const PostItem = ({ addLike, removeLike, deletePost, auth, post:{ _id, text, name, avatar, user, likes, comments, date }, showActions }) =>(
 <div className='Contan' >
   {/* className="post bg-white p-1 my-1" */}
  {/* <div> */}
   {/* <img src='./test.jpg' alt='post img'/> */}
   
   {/* <img src='../' alt='img' className="travelImg"/> */}
   <img className='postImg' src='https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2017/12/06/why-sugar-and-why-so-much-who-investigates-the-food-industry-s-sweet-tooth/7624387-1-eng-GB/Why-sugar-and-why-so-much-WHO-investigates-the-food-industry-s-sweet-tooth_wrbm_large.jpg' alt='img'/>
          {/* <div> */}
          
          <div className='textConta'>
            
            <Link className='userConta' to={`/profile/${user}`}>
              <img
                className="round-imgr"
                src={avatar}
                alt="avatar"/>
              <h4>{name}</h4>
            </Link>
           
          {/* </div>
          <div> */}
            <p className='postP2'>
              {text}
            </p>
           
            </div>
            <p className='postP'>
                Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
            </p>
             
           
<div className='btnConta'>
            {showActions && <Fragment>
            <button onClick={e => addLike(_id)} type="button" className="btn btn-light">
              <i className="fas fa-thumbs-up"></i> {' '}
              <span>{ likes.length > 0 && (<span>{likes.length}</span>)} </span>
            </button>
            <button onClick={e => removeLike(_id)}  type="button" className="btn btn-light">
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Discussion { comments.length > 0 && (<span className='comment-count'>{comments.length}</span>)} 
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button onClick={e => deletePost(_id)}    
            type="button"
            className="btn btn-danger">
            <i className="fas fa-times"></i>
          </button>
            ) }               

                  </Fragment>}
                  </div>
            
            
          {/* </div>
          </div> */}
        </div>
);

PostItem.defaultProps ={
  showActions: true
}

PostItem.propTypes = {
post: PropTypes.object.isRequired,
auth: PropTypes.object.isRequired,
addLike: PropTypes.func.isRequired,
removeLike: PropTypes.func.isRequired,
deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem);

import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({profile: {
  status,
  // company,
  location,
  social,
  user: { name, avatar }
}}) => {
  return (
    <div className="profileTop">
    <img
      className="round-img my-1"
      src={avatar}
      alt="avatar"
    />
    <h1 className="memberName">{name.toUpperCase()}</h1>
    <p className="memberJob"> {status}   </p>
    <p className="memberAdress">{location && <span>{location}</span>}</p>
    <div className="icons my-1">
      
      {
        social && social.facebook &&  (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
        )
      }
         
         {
        social && social.youtube &&  (
          <a href={social.youtube} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube fa-2x"></i>
                </a>
        )
      }
         
         {
        social && social.instagram &&  (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram fa-2x"></i>
                </a>
        )
      }
      
    </div>
  </div>
  )
}

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired

}

export default ProfileTop
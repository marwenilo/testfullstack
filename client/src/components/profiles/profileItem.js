import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RoomIcon from '@material-ui/icons/Room';
import IconButton from '@material-ui/core/IconButton';
import WorkIcon from '@material-ui/icons/Work';
import './profiles.css';

const ProfileItem = ({ profile: {
  user: { _id, name, avatar },
  location,
  status
}}) => {
  return (
    <div className="profile" >
      <img src={avatar} alt="img" className="profilImg"/>
     
        <h2 className="userName" >{name.toUpperCase()}</h2>
        
        <div className="adress">
        <i class="fas fa-map-marker-alt" style={{margin:"25px 10px 0px 0px"}} ></i>
      <p className="userAdress">{location && <span>{location}</span>}</p>
        </div>
        <div className="job">
        <i class="fas fa-briefcase" ></i>
        <p className="userJob">{status && <span >{status}</span>}</p>
        </div>
        
        <Link to={`/profile/${_id}`}  style={{fontSize:"20px", color:"white"}} className="btnProfile" > View Profile</Link>
    </div>
  )
}
ProfileItem.propTypes = {
profile: PropTypes.object.isRequired,
}

export default ProfileItem
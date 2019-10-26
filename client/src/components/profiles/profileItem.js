import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const ProfileItem = ({ profile: {
  user: { _id, name, avatar },
  location,
  company
}}) => {
  return (
    <div className="profile bg-light">
      <img src={avatar} alt="img" className="round-img"/>
      <div>
        <h2>{name}</h2>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <p>{company && <span>{company}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary"> View Profiles</Link>
      </div>
    </div>
  )
}

ProfileItem.propTypes = {
profile: PropTypes.object.isRequired,
}

export default ProfileItem

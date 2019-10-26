import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  ACCOUNT_DELETE
} from './type';

//Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
const res = await axios.get('/api/profile/me');

dispatch({
  type: GET_PROFILE,
  payload: res.data
})
  } catch(err){
dispatch({
  type: PROFILE_ERROR,
  payload: { msg: err.response.statusText, status: err.response.status }
});
  }
};
//get all profile
export const getProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  try {
const res = await axios.get('/api/profile');

dispatch({
  type: GET_PROFILES,
  payload: res.data
})
  } catch(err){
dispatch({
  type: PROFILE_ERROR,
  payload: { msg: err.response.statusText, status: err.response.status }
});
  }
};

//get profile by id
export const getProfileById = userId => async dispatch => {
  try {
const res = await axios.get(`/api/profile/user/${userId}`);

dispatch({
  type: GET_PROFILE,
  payload: res.data
})
  } catch(err){
dispatch({
  type: PROFILE_ERROR,
  payload: { msg: err.response.statusText, status: err.response.status }
});
  }
};

// Create or Update a profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('api/profile', formData, config);
    
dispatch({
  type: GET_PROFILE,
  payload: res.data
});
dispatch(setAlert(edit ? 'Profile Updated': 'Profile Created', 'success'));

if(!edit){
  history.push('/dashboard')
;}
  } catch (err) {
    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
//Delete accout && profile

export const deleteAccount = () => async dispatch => {
  if(window.confirm('Are you sure? This can NOT be undone'))
  try {
const res = await axios.delete('/api/profile'); 

dispatch({type: CLEAR_PROFILE });
dispatch({type: ACCOUNT_DELETE });

dispatch(setAlert('Your Account has been permanantly deleted'));
  } catch(err){
dispatch({
  type: PROFILE_ERROR,
  payload: { msg: err.response.statusText, status: err.response.status }
});
  }
}
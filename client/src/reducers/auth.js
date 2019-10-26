import {
  REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, ACCOUNT_DELETE
} from '../actions/type';

const initialState = {
token: localStorage.getItem('token'),
isAuthenticated: null,
loading: true,  
user: null
}
export default function(state = initialState, action) {
  const { type, payload} = action;
switch(type) {
  case USER_LOADED:
    return{
      ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
    }
  case REGISTER_SUCCESS:
    case LOGIN_SUCCESS: 
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case LOGOUT:
        case ACCOUNT_DELETE:
          localStorage.removeItem('token');
          return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false
          };



          // mochkelt el token yetfasskh
          case AUTH_ERROR:
              localStorage.removeItem('token');
          return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false
          };
          default:
            return state;
  }
}
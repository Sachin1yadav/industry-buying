import {
    LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  RESET_USER_DATA,
//   LOGOUT_FAIL
  } from './auth.action.types'

let userDetails = JSON.parse(localStorage.getItem("userData"))
  const initialState = {
    status:false,
    userData:userDetails,
    isauth:userDetails?true:false
  }

  export const  authReducerfunc = (state=initialState,{type,payload})=>{
    switch (type) {
        case LOGIN_SUCCESS:{
            localStorage.setItem("userData",JSON.stringify(payload))
            return {...state, isauth:true}
        }
        case LOGIN_FAIL:{
            return {...state, status:false}
        }
        case SIGNUP_SUCCESS:{
            return {}
        }
        case SIGNUP_FAIL:{
            return {}
        }
        case RESET_USER_DATA:{
          console.log('hogya logout')
            localStorage.removeItem("userData")
            return {...state, isauth:false}
        }
        default:{
            return {...state}
        }
    }
  }
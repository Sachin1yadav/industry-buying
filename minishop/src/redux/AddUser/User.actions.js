import {USER_ADD_FAIL, USER_ADD_SUCCESS} from './User.actionTypes'
import { addNewUserApi, logoutUserApi } from './User.api'

export const addNewUser  = (userData)=> async(dispatch)=>{
  let newData = {
    active:true,
    name:userData.name,
    email:userData.email,
    id:userData.id,
    cart:[],
    whishList:[],
  }
  console.log(newData)
    try{
      let res = await addNewUserApi(newData)
      dispatch({type:USER_ADD_SUCCESS, payload:res})
    }catch(err){
        dispatch ({type:USER_ADD_FAIL})
    }
}

export const logoutUser = (userdata)=> async(dispatch)=>{
  let userStatus = {...userdata,active:false}
  try{
    let res = logoutUserApi(userStatus)
  }catch(err){
    console.log(err)
  }
}
import React from 'react'
import { useDispatch } from 'react-redux'
import AuthService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
const LogoutBtn = () => {
    const dispatch=useDispatch()

    const logoutHandler=()=>{
       AuthService.logout().then(()=>{
        dispatch(logout())
       })
    }
  return (
    <p
        className='font-semibold text-1xl' onClick={logoutHandler }
        >Logout</p>
  )
}

export default LogoutBtn
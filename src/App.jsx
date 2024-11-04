import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import AppwriteService from "./appwrite/config"
import {login, logout} from "./store/authSlice"
import {storePosts} from "./store/postSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
function App() {
  
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    }).finally(() => setLoading2(false))
  }, [])
  useEffect(() => {
    AppwriteService.getPosts([]).then((posts) => {
      if (posts) {
        dispatch(storePosts({ posts }))
      }else{
        dispatch(storePosts({ posts: [] }))
      }
    }
    ).finally(() => setLoading(false))
  }, [])

  
  return !loading && !loading2 ? (
    <div className='w-full'>
      <div className='w-full block'>
        <Header />
        <main className='mb-10'>
       <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
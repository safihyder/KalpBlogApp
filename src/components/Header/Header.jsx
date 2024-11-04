
import React from 'react'
import {Container, Logo, LogoutBtn,Button} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true,
      img:"/Images/home.png"
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
      img:"/Images/login.png"
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
      img:"/Images/signup.png"
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
      img:"/Images/posts.png"

  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
      img:"/Images/add.png",
  },
  ]

//font-family: "Rubik Wet Paint", system-ui;
// font-weight: 400;
// font-style: normal;
  return (
    <header className='py-3 shadow bg-transparent  text-white rounded-[10px]'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link className='flex flex-column justify-center items-center' to='/'>
              <h1 className='text-5xl font-bold font-Rubik'><span className='text-[#41b2de]'>Kalp</span> Blogs</h1>
              </Link>
          </div>
          <ul className='flex ml-auto justify-center items-center gap-3'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <Button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 flex justify-center items-center duration-200 bg-slate-300 rounded-full font-semibold gap-1'
                >
                  <img src={item.img} className="w-[25px]" alt="" />
                  {item.name}</Button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <Button className='flex flex-column justify-center items-center bg-slate-300'>
                  <img className='w-[25px]' src="/Images/logout.png" alt="" />
                <LogoutBtn />
                </Button>
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header

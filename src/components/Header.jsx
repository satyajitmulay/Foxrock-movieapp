/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import "../App.css"
import userIcon from "../assets/user.png"
import { IoSearchOutline } from 'react-icons/io5'
import { navigation } from '../constants/navigation'


export default function Header() {

  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")

  const [searchInput, setSearchInput] = useState(removeSpace)
  const navigate = useNavigate();
  
  useEffect(() => {
    if(searchInput){
      navigate(`/search?q=${searchInput}`)
    }
  },[searchInput])


  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
        <div className='container mx-auto px-3 flex items-center h-full'>
        <Link to={"/"}>
          <div 
            className='text-gradient font-extrabold text-2xl lg:text-3xl rounded mb-1'
            style={{ width: '150px', height: '30px' }}
          >
            FOXROCK
          </div>
        </Link>
            <nav className='hidden lg:flex items-center gap-1 ml-5'>
              {
                navigation.map((nav,index)=>(
                  <div key={nav.label}>
                    <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                      {nav.label}
                    </NavLink>
                  </div>
                ))
              }
            </nav>
            <div className='ml-auto flex items-center gap-5'>
                <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder='search here ...'
                        className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'  
                        onChange={(e)=>setSearchInput(e.target.value)}
                        value={searchInput}
                      />
                      <button className='text-2xl text-white'>
                        <IoSearchOutline/>
                      </button>
                </form>
              <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                <img
                 src={userIcon}
                 className='w-full h-full' 
                 alt='user'/>
              </div>
            </div>
        </div>

    </header>
  )
}

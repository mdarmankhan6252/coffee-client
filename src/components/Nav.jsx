import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FaUser } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import ThemeController from './ThemeController';
import { AuthContext } from '../provider/AuthProvider';

const Nav = () => {
   const [scrollPosition, setScrollPosition] = useState(0)
   const { user, logOut } = useContext(AuthContext)
   const [showNav, setShowNav] = useState(true)
   const [menu, setMenu] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollPos = window.scrollY;

         if (currentScrollPos < scrollPosition) {
            setShowNav(true)
         }
         else {
            setShowNav(false)
         }
         setScrollPosition(currentScrollPos)
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [scrollPosition])




   return (
      <nav className={`fixed top-0 right-0 left-0  py-5 bg-gray-50/80 z-10 backdrop-blur-sm transition-transform duration-500 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
         <div className='flex items-center justify-between max-w-7xl mx-auto px-2'>
            <Link to='/' className=' items-center space-x-2 hidden sm:flex'>
               <img src={logo} alt="logo" className='w-10' />
               <div className='font-semibold text-lg leading-5'>
                  Coffee
               </div>
            </Link>
            <ul className='*:uppercase space-x-5 font-semibold sm:block hidden'>
               <NavLink to='/'>home</NavLink>
               <NavLink to='/about'>About</NavLink>
               {user && <NavLink to='/addProduct'>Add product</NavLink>}
               
               { user ? <>
                  <NavLink to='/users'>Users</NavLink>
                  <span onClick={() => logOut()} className='bg-[#ff0000] text-white py-1 px-2 rounded-md cursor-pointer'>Sign Out</span>
                  </>
               :
                  <NavLink to='/signIn'>Sign In</NavLink>
               }
            </ul>

            <div onClick={() => setMenu(!menu)} className='text-3xl cursor-pointer sm:hidden '>
               {menu ? <IoCloseOutline /> : <RiMenu2Fill />}
            </div>

            <div className='flex items-center space-x-3'>
               <ThemeController />
               <div title={user?.email} className='border-2 border-transparent ring-2 ring-lime-500 rounded-full p-1.5'>
                  <FaUser className='text-lg' />
               </div>
            </div>

            {/* small screen */}

            <ul className={`*:uppercase font-semibold absolute flex flex-col space-y-6 top-[74px] pl-2 h-screen  pr-10 bg-gray-300/20 backdrop-blur-sm sm:hidden duration-500 ${menu ? 'left-0' : '-left-48'}`}>
               <Link to='/' className=' items-center space-x-2 flex'>
                  <img src={logo} alt="logo" className='w-10' />
                  <div className='font-semibold text-lg leading-5'>
                     Coffee
                  </div>
               </Link>

               <NavLink to='/addArticles'>Add Articles</NavLink>
               <NavLink to='/allArticles'>All Articles</NavLink>
               <NavLink to='/subscription'>Subscription</NavLink>
               <NavLink to='/dashboard'>Dashboard</NavLink>
               <NavLink to='/myArticles'>My Articles</NavLink>
               <NavLink to='/premiumArticles'>Premium Articles</NavLink>
            </ul>

         </div>
      </nav>
   );
};

export default Nav;
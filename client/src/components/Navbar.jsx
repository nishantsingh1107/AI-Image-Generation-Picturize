import React, { useContext } from 'react';
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const { user, setShowLogin, logout, credit } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-between py-2'>
            <Link to='/'>
                <img src={assets.logo} alt='' className='w-28 sm:w-32 lg:w-40' />
            </Link>
            <div>
                {user ?
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <button onClick={() => { navigate('/buy') }} className='flex items-center gap-1 bg-red-100 px-2 sm:px-3 py-1 sm:py-2 rounded-full hover:scale-105 transition-all duration-700 border border-red-300 min-w-[120px]'>
                            <img className='w-4' src={assets.credit_star} alt='' />
                            <p className='text-xs sm:text-sm font-semibold text-gray-700'>Credits left: {typeof credit === 'number' ? credit : 0}</p>
                        </button>
                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>
                        <div className='relative group'>
                            <img src={assets.profile_icon} className='w-10 drop-shadow' alt='' />
                            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                    <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex items-center gap-2 sm:gap-5'>
                        <p onClick={() => { navigate('/buy') }} className='cursor-pointer'>Pricing</p>
                        <button onClick={() => setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full hover:scale-105 transition-all duration-700'>Login</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar

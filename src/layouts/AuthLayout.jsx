import React from 'react';
import Logo from 'media/logo.png';
import { Link } from 'react-router-dom';


const AuthLayout = ({children}) => {
    return (
        <div className= 'min-h-screen flex flex-col items-cemter justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8'>
           <div className='w-full flex items-start'>
               <Link to='/'>
                   <i className='fas fa-home cursor-pointer hover:text-indigo-500'/>
               </Link>
           </div>
            <div className='max-w-md w-full'>
               <img className='mx-auto h-52 w-auto' src={Logo} alt='workflow' />
               {children}
            </div>
        </div>
    )
}

export default AuthLayout

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-red-400'>
           <ul className='flex w-full justify-between my-3'>
               <li>Logo</li>
               <li>nvegacion1</li>
               <li>nvegacion2</li>
               <li>nvegacion3</li>
               <li>nvegacion4</li>
               <li className='px-3'>
                   {/* link q nos lleve al login */}
                   <Link to='/login'>
                   <button  className='bg-indigo-500 pd-2 text-white rounded-lg shadow-md hover:bg-indigo-700' > Iniciar Sesion</button>
                   </Link>
                   
               </li>

           </ul>
        </nav>
    )
}

export default Navbar

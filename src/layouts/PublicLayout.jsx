import Navbar from 'componentes/Navbar'
import Footer from 'componentes/Footer'
import React from 'react'

const PublicLayout = ({children}) => {
    return (
        <div className='flex flex-col justify-between h-screen'>
           <Navbar/>
           {/* para que el navbar se quede fijo */}
           <div className='h-full overflow-scroll bg-blue-400'>
               <main className='h-full'>{children}</main>
           <Footer/>

            </div>
        </div>
    );
};

export default PublicLayout


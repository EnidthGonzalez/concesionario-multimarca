import Sidebar from 'componentes/Sidebar'
import React, { Children } from 'react'

const PrivateLayout = ({children}) => {
    return (
        <div>
          <Sidebar/>
          {children} 
        </div>
    )
}

export default PrivateLayout

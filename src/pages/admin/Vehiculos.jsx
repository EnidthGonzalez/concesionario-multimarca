import React, { useEffect, useState } from 'react';

//realizar un formulario que le pida al usuario 

const Vehiculos = () => {
    const [edad,setEdad] = useState(0);

    const [esMenorDeEdad, setEsMenorDeEdad]= useState(false);
    const [mostrarCamposAdicionales, setMostrarCamposAdicionales]= useState(false);

    useEffect(()=>{
        if(edad >= 18){
            setEsMenorDeEdad(false);
        }
        else{
            setEsMenorDeEdad(true);
        }
    },[edad])

    return (
   /* Hay 2 formas de manejar la reactividad (huts)=> son funciones */
   <from className='flex flex-col '>
       <h2>Formulario de Creacion de Vehiculos:</h2>
       <label htmlFor='edad'>
           Por favor ingrese su edad
           <input 
            value={edad} onChange={(e)=>
            {setEdad(e.target.value);
            }} 
            className='border border-gray-600' 
            name= 'edad' 
            type='number'
            />
       </label>
       {esMenorDeEdad ? ( 
          <span className='text-3xl text-red-500'>
             !USTED ES MENOR DE EDAD, no puede hacer pagos¡
          </span>
          ):(
          <span className='text-3xl text-green-500'>
              !USTED ES MAYOR DE EDAD, SI puede hacer pagos¡
          </span>
        )}  
        <button onClick={()=> setMostrarCamposAdicionales(!mostrarCamposAdicionales)} type='button'  className='text-white bg-indigo-500'>Mostrar Campos Adicionales</button>  
        {mostrarCamposAdicionales &&
        <div>
            <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type='text' />
            <input  className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type='text' />
            <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo'  type='text' />
            <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type='text' />
        </div>}   
   </from>
    );
};

export default Vehiculos

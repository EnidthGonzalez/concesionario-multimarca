import React, { useEffect, useState } from 'react';

const Vehiculos = () => {
   // ponemos las interactividades que tiene la pagina
   // 2.manejar estdos useState
   const [nombreVehiculo, setNombreVehiculo]= useState("");//acas se escribe algo para el valor predefinido
    useEffect(() =>{
       //ejecutaamos una secuncia de pasos y esa seguencia de pasos se va a ejecutar
       // cada vez que se pongan las variables en los[], si se deja vacio se ejecutara una sola vez
        console.log('Hola soy un useEffect que se ejecuta solo una vez cuando la pagina se renderiza, porque tiene el array de dependencias vacio');
       //paso2
       //paso3
       //...
    },[]);
 
    //otra forma:
    useEffect(() => {
        console.log("Esto es una variable que se ejecuta cada que cambia ael valor de nombre vehiculo")
        console.log("El valor de la variable es ", nombreVehiculo);
    },[nombreVehiculo]);

    const cambioDeMarca=(e)=>{
        console.log('Marca:', e.target.Value);
    }

    const enviarDatosAlBackend = () =>{
        console.log("El valor de la variable nombreVehiculo es: ", nombreVehiculo)
    };

    return (
   /* Hay 2 formas de manejar la reactividad (huts)=> son funciones */
   <from className='flex flex-col '>
       <h2>Formulario de Creacion de Vehiculos:</h2>
       {/* onchange= permite que cada vez eue el input cambie se pueda ejecutar una funcion y hay 2 formas:*/}
       {/*     <input 
        onchange={(e) => {
            console.log(e.target.Value);
            }} 
            type="text" 
            placeholder='Nombre del Vehiculo' 
            /> */}
        <input 
          onChange={(e) => {
            //necesito guardarlos en una variable
                setNombreVehiculo(e.target.Value);
            }} 
            value ={nombreVehiculo} //valor predefinido
            type="text" 
            placeholder='Nombre del Vehiculo' 
            />
       <input onchage= {cambioDeMarca} type="text" placeholder='marca del vehiculo'/>

       <input type="text" placeholder='modelo'/>
       <button type='button' onClick={enviarDatosAlBackend} className='bg-indigo-500 text-white'>Enviar Datos</button>
   </from>
    )
}

export default Vehiculos

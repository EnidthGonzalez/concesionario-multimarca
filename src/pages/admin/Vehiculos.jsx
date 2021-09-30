import React, { useEffect, useState } from 'react';

const vehiculosBackend= [
    {
         nombre:'corolla',
         marca:'toyota',
         modelo: '2014'
    },
    {
         nombre:'Sandero',
         marca:'Toyota',
         modelo: '2014'
    },
    {
        nombre:'Douster',
        marca:'Renauld',
        modelo: '2014'
   },
]

const Vehiculos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [vehiculos, setVehiculos] = useState([]);
    const [textoBoton, setTextoBoton] = useState('crear nuevo vehiculo');

    useEffect(()=>{
        //obtener lista de vehiculos desde el backend
        setVehiculos([vehiculosBackend]);
    },[]);

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton("crear nuevo vehiculo")
        }
        else {
            setTextoBoton("Mostrar todos los vehiculos");
        }
    }, [mostrarTabla]);

    return (
        <div className='flex h-full w-full flex-col items-center justify-start p-8'>
            <div className='flex flex-col'>
                <h2 className='text-3xl font-extrabold text-gray-800'>pagina de administracion de vehiculos</h2>
                <button onClick={() => {
                    setMostrarTabla(!mostrarTabla);
                }}

                    className="text-white bg-indigo-500 p-5 rounded-full m-6 w-28 self-end"
                >
                    {textoBoton}
                </button>
            </div>
            {mostrarTabla ? (
            <TablaVehiculos listaVehiculos={vehiculos} /> 
            ): (
            <FormularioCreacionVehiculos />
            )}
        </div>
    );
};
const TablaVehiculos = ({listaVehiculos}) => {
    useEffect(()=>{
    console.log('este es el listado de vehiculos en el componente de tabla', listaVehiculos);
    },[listaVehiculos]);
    return ( 
    <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-extrabold text-gray-800' >Todos los vehiculos</h2>
    <table>
        <thead>
          {/* ponemos los titulos */}
          <tr>
              <th>Nombre del Vehiculo</th>
              <th>Marca del Vehiculo</th>
              <th>Modelo del Vehiculo</th>
          </tr>
        </thead>
        <tbody>
            {listaVehiculos.map((vehiculo)=>{
                return(
                    <tr>
                    <td>{vehiculo.nombre}</td>
                    <td>{vehiculo.marca}</td>
                    <td>{vehiculo.modelo}</td>
                </tr>
                );
            })}
        </tbody>
      </table>
    </div>
    );
};
const FormularioCreacionVehiculos = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo Vehiculo</h2>
            <form className='grid grid-cols-2 '>
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
                <button className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'>Guardar Vehiculo
                </button>
            </form>
        </div>
    );
}

export default Vehiculos

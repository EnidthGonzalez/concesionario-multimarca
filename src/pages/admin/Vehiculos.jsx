import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const vehiculosBackend = [
    {
        nombre: 'corolla',
        marca: 'toyota',
        modelo: '2014'
    },
    {
        nombre: 'Sandero',
        marca: 'Toyota',
        modelo: '2014'
    },
    {
        nombre: 'Douster',
        marca: 'Renauld',
        modelo: '2014'
    },
]

const Vehiculos = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [vehiculos, setVehiculos] = useState([]);
    const [textoBoton, setTextoBoton] = useState('crear nuevo vehiculo');
    const [colorBoton, setColorBoton] = useState('indigo')

    useEffect(() => {
        //obtener lista de vehiculos desde el backend
        setVehiculos([vehiculosBackend]);
    }, []);

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton("crear nuevo vehiculo")
            setColorBoton('indigo')
        }
        else {
            setTextoBoton("Mostrar todos los vehiculos");
            setColorBoton('green')
        }
    }, [mostrarTabla]);

    return (
        <div className='flex h-full w-full flex-col items-center justify-start p-8'>
            <div className='flex flex-col'>
                <h2 className='text-3xl font-extrabold text-gray-900'>
                    pagina de administracion de vehiculos</h2>
                <button onClick={() => {
                    setMostrarTabla(!mostrarTabla);
                }}
                    // stringliterals(``) y donde quiera meter la variable ${nombre de variable}
                    className={`text-white bg-${colorBoton}-500 p-5 rounded-full m-6 w-28 self-end`}
                >
                    {textoBoton}
                </button>
            </div>
            {mostrarTabla ? (
                <TablaVehiculos listaVehiculos={vehiculos} />
            ) : (
                <FormularioCreacionVehiculos 
                funcionParaMostrarLaTabla={setMostrarTabla} 
                listaVehiculos={vehiculos}
                funcionParaAgregarUnVehiculo={setVehiculos}/>
            )}
            {/* libreria: https://fkhadra.github.io/react-toastify/introduction/ */}
           <ToastContainer position="button-center" autoClose={5000}/>
        </div>
    );
};
const TablaVehiculos = ({ listaVehiculos }) => {
    useEffect(() => {
        console.log('este es el listado de vehiculos en el componente de tabla', listaVehiculos);
    }, [listaVehiculos]);
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
                    {listaVehiculos.map((vehiculo) => {
                        return (
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
const FormularioCreacionVehiculos = ({funcionParaMostrarLaTabla, listaVehiculos, funcionParaAgregarUnVehiculo}) => {
    const [nombre, setNombre] = useState();
    const [marca, setMarca] = useState();
    const [modelo, setModelo] = useState();

    const enviarAlBackend = () => {
        console.log('nombre', nombre, 'marca', marca, 'modelo', modelo);
        if(nombre=== ""|| marca == null){
            toast.error('Ingrese todas las informaciones');          
        } else{
        toast.success('Vehículo creado con éxito')
        funcionParaMostrarLaTabla(true);
        //lista vehiculos es un estado, le agregamos la funcion set para cambiarla
        funcionParaAgregarUnVehiculo([
            ...listaVehiculos,
            {nobre:nombre, marca:marca, modelo:modelo},
        ]);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo Vehiculo</h2>
            <form className='flex flex-col'>
                <label className='flex flex-col' htmlFor='nombre'>
                    Nombre del Vehiculo
                    <input
                        name='nombre'
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        type="text"
                        placeholder='Corolla'
                        value={nombre}
                        onChange={(e) => {
                            setNombre(e.target.value);
                        }}
                        required
                    />
                </label>
                <label className='flex flex-col' htmlFor='marca'>
                    Marca del Vehiculo
                    {/* drowdauns  para seleccionar entre varios*/}
                    <select
                       name='marca'
                        value={marca}
                        onChange={(e) => {
                            setMarca(e.target.value);
                        }}

                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' name='marca'
                        required>
                        {/* este opcion primerito que no sea seleccionable */}
                        <option disabled>Seleccione una opción</option>
                        <option >Renault</option>
                        <option >Toyota</option>
                        <option >Ford</option>
                        <option >Mazda</option>
                        <option >Chevrolet</option>

                    </select>
                </label>
                <label className='flex flex-col' htmlFor='modelo'>
                    Modelo del Vehiculo
                    <input
                        name='modelo'
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        type="number"
                        min={1992}
                        max={2022}
                        placeholder='2014'
                        value={modelo}
                        onChange={(e) => {
                            setModelo(e.target.value);
                        }}
                        required
                    />
                </label>
                <button
                    type='submit'
                    className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
                    onClick={() => {
                        enviarAlBackend();
                    }}
                >
                    Guardar Vehiculo
                </button>
            </form>
        </div>
    );
}

export default Vehiculos

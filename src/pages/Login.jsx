import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className='flex flex-col w-full justify-center items-center'>
            <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>
              Inicia sesion en tu cuenta
            </h2>
            <form  className='mt-8 max-w-md'>
                <div>
                    <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900  focus:outline-none focus:ring-indigo-500' type="email" placeholder='dsl@g.com' required/>
                    <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900  focus:outline-none focus:ring-indigo-500' type="password" required/>
                </div>

            <div className='flex justify-beetwing'>
            <div>
                <label htmlFor='recuerdame'>
                    <input type="checkbox" name='recuerdame' />
                    Recuerdame
                </label>
            </div>
            <div>
                <Link to="*">¿olvidaste tu contraseña?</Link>
            </div>
            </div>

            <div>
                <Link to='/admin'>
                <button type='submit'>Inisiar Sesion</button>
                </Link>           
            </div>
            <div>
                O
            </div>
            <div>
                <button>Continua con google</button>
            </div>
          </form>
      </div>
    );
};

export default Login

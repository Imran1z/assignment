import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({});


  const handleChange =(e)=>{
    setFormData({...formData,[e.target.id]: e.target.value})
  }
  return (
<div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Login</h1>
      <form  className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
          id='username'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}  
        />

        <button
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >Login
        </button>
      
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/signup'}>
          <span className='text-blue-700'>Login</span>
        </Link>
      </div>
    </div>  )
}

export default Login
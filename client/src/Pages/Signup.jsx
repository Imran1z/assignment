import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({});
  const navigate =useNavigate()

  console.log(formData)


  const handleChange =(e)=>{
    setFormData({...formData,[e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        throw new Error('Failed to sign up');
      }
  
      const data = await res.json();
  
      // Store data in local storage
      localStorage.setItem('userData', JSON.stringify(data));
  
      console.log('Data stored in local storage:', data);
  
      // You can redirect to another page or perform other actions after storing the data
      navigate('/login');

    } catch (error) {
      console.log('An error has occurred:', error.message);
    }
  };
  
  return (
<div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit}  className='flex flex-col gap-4'>
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
        >Sign UP
        </button>
      
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/login'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>  )
}

export default Signup
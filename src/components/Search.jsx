import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { input } from '../store/authSlice'

import { useNavigate } from 'react-router-dom'

const Search = () => {


const[data,setData] = useState()

const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {

        e.preventDefault();

    const values =  e.target.elements.search.value;
        
       setData(e.target.elements.search.value)

       console.log(data);
       
       dispatch(input({search:values}))
       navigate("/")
       
    }
    
  return (
    <div>
<form onSubmit={handleSubmit} className='flex' >
<label htmlFor="search"></label>
    <input type="text" placeholder='Search' name='search' className='border-2 text-center text-black border-amber-400'/>
    <button className='border-2 border-amber-400 text-amber-400 px-4 hover:bg-amber-400 hover:text-white duration-500'>Search</button>
</form>

    </div>
  )
}

export default Search
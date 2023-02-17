import React, { useState } from 'react'
import './searchbar.css'
import { FaSearch } from 'react-icons/fa'
import Persons from './Persons';

const Search = () => {
    const [val,setVal]=useState("");
    function handleInput(e){
        setVal(e.target.value);
    }
  return (
    <>
        <div className='search-input'>
            <label htmlFor='input'><span><FaSearch className='icon'/></span></label>
            <input type='text' placeholder='Search' value={val} onChange={handleInput} id='input'/>
        </div>
        <Persons search={val}/>
    </>
  )
}

export default Search
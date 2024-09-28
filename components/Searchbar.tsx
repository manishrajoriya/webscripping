"use client"
import React from 'react'

function Searchbar() {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
  const handleSearch = () => {
    
  }
  return (
    <form
     className='flex flex-wrap gap-4 mt-12'
     onSubmit={handleSubmit}
    >
        <input 
         type="text"
         placeholder='Enter prduct link'
         className='searchbar-input'
        />

        <button type='submit' className='searchbar-btn'>
            Search
        </button>

    </form>
  )
}

export default Searchbar
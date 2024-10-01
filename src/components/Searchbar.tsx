"use client"
import React, { FormEvent, useState } from 'react'

const isValidAmazonProductURL = (url: string) => {
   try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname
    if (hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.endsWith('amazon')) {
      return true
    }
   } catch (error) {
    return false
   }
   return false
}

function Searchbar() {
  const [searchPrompt, setSearchPrompt] = useState("")
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const isValidLink = isValidAmazonProductURL(searchPrompt)

        if (!isValidLink) {
          return alert("Please provide a valid amazon valid link")
        }
    }
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    
  }
  return (
    <form
     className='flex flex-wrap gap-4 mt-12'
     onSubmit={handleSubmit}
    >
        <input 
         type="text"
         value={searchPrompt}
         onChange={(e) => setSearchPrompt(e.target.value)}
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
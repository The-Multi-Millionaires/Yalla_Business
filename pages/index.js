import styles from '../styles.module.css'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function Home(props){
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    let toSearch = e.target.searching.value;
    router.push('search/[id].js',`search/${toSearch}`)
  }

  return(
    <>
      <form onSubmit={handleSubmit} >
          <input type="text" name='search' placeholder='Search any store' id='searching'/>
          <button className='button' type="submit" >Search </button>
      </form>
    </>
)}
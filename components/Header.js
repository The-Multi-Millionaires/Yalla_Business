import Link from 'next/link'
import React, { Component, useState } from 'react'
import { useRouter } from 'next/router'
import Login from '../components/Login'
// import '../styles/header.css'


export default function Header(props){
  const router = useRouter();

//   let name = window.localStorage.getItem('name');
//   console.log(name);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let toSearch = e.target.searching.value;
    router.push('search/[id].js',`search/${toSearch}`)
  }


  return(
    <>
      <header className='headerBar'>
        <nav id="navvv">
          <img className="imggg" src="/logo.gif" alt="my image" />
          {/* <h1 className="h111">Yalla Business </h1> */}

          <form onSubmit={handleSubmit} >
            <div className="wrap">
                <div className="search">
                    <input type="text" name='search' id="searching" placeholder='Search' className="searchTerm"/> <button type="submit" className="searchButton">Search </button>
                </div>
            </div>
              {/* <button className='button' type="submit" >Search </button> */}
          </form>

          <h2 className="h222">osama </h2>
          <button type="submit" className="LogoutButton">Logout</button>

        </nav>
      </header>
    </>
)}
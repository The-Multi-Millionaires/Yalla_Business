import Link from 'next/link'
import React, { Component, useState } from 'react'
import { useRouter } from 'next/router'
import Login from '../components/Login'
// import '../styles/header.css'

import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookmark,  faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,

} from '@fortawesome/free-brands-svg-icons';

library.add(


    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,

);



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
        <nav className="headerNavBar">
         
          <div className='headerIcons'>
            <FontAwesomeIcon icon={faHome} style={{ color: '#660708', width: '48px', height: '50px', marginRight: '16%'}} />
            <FontAwesomeIcon icon={faBookmark} style={{ color: '#660708', width: '30px', height: '50px', marginRight: '17%'}} />
            <FontAwesomeIcon icon={ faUsers} style={{ color: '#660708', width: '47px', height: '50px'}} />
          </div>


          <img className="headerLogo" src="/logo2.gif" alt="my image" />

          <form className="wrap" onSubmit={handleSubmit} >
              <input type="text" name='search' id="searching" placeholder='Search' className="searchTerm"/> 
              <button type="submit" className="searchButton">Search </button> 
          </form>

         

        </nav>
         <div className='userHeaderInfo'>
            <h2 className="userNameHeaderBar">osama </h2>
            <FontAwesomeIcon icon={ faSignOutAlt} style={{ color: '#660708', width: '30px', height: '80px '}} />
          </div>
      </header>
    </>
)}
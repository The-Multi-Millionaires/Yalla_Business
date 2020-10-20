import Link from 'next/link'
import React, { Component, useState } from 'react'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookmark,  faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function Homepageheader(props){
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
         <header className="header">
            <img src='/our-logo.png' className="logo"/>
            <ul className="nav">
                <li>osama</li>
                <li><a  href='homepage'>
            Signout</a></li>
            </ul>
        
          
                {/* <form  class="flex-form" onSubmit={handleSubmit}>
            <input type="search" name='search' id="searching" placeholder="Search"/>
            <button type="submit" >Search</button>
                </form> */}
               
            
          </header>
          <form className="wraposama" onSubmit={handleSubmit} >
              <input type="text" name='search' id="searching" placeholder='Search' className="searchTermosama"/> 
              <button type="submit" className="searchButtonosama">Search </button> 
          </form>
      </>
  )}
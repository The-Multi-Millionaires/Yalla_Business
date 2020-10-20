import styles from '../styles.module.css'
import Link from 'next/link'
import React, { Component, useState } from 'react'
import { useRouter } from 'next/router'
import Login from '../components/Login'
// import '../styles/header.css'
import Header from '../components/Header'
import Homepageheader from '../components/Homepageheader'


export default function Home(props){
  const router = useRouter();

  // let name = window.localStorage.getItem('name');
  // console.log(name);
  
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   let toSearch = e.target.searching.value;
  //   router.push('search/[id].js',`search/${toSearch}`)
  // }



  return(
    <>
      {/* <Header /> */}
      <Homepageheader />

      {/* <form onSubmit={handleSubmit} >
          <input type="text" name='search' placeholder='Search any store' id='searching'/>
          <button className='button' type="submit" >Search </button>
      </form> */}
    </>
)}
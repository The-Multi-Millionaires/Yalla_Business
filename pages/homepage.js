import styles from '../styles.module.css'
import Link from 'next/link'
import React, { Component, useState } from 'react'
import { useRouter } from 'next/router'
import Login from '../components/Login'


export default function Home(props){
  const router = useRouter();

  let name = window.localStorage.getItem('name');
  console.log(name);
  
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

// export async function getServerSideProps(context){
//     const id=context.query.id
//     console.log(id);
//     const res= await fetch(`https://localhost:8000/yalla_business_app/api/users?search=${id}`)
//     console.log(res);
//     const singleData = await res.json();
//     return {props: {info: singleData}}
// }
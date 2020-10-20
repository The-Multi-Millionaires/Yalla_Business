import styles from '../styles.module.css'
import Link from 'next/link'
import React, { Component, useState } from 'react'
import { useRouter } from 'next/router'
import Login from '../components/Login'


export default function Home(){
  const router = useRouter();
  const [token, setToken] = useState('');


  const userLogin = (tok) => {
    setToken(tok[0]);
    console.log("This from index",tok[0],tok[2],tok[3]);
    if(tok[0]){
      window.localStorage.setItem('name', tok[1]);
      window.localStorage.setItem('user_obj',tok[3]);
      window.localStorage.setItem('firstName',tok[4]);
      

      router.push('homepage')
      
    }
  }

  return(
    <>
      <Login userLogin={userLogin} />
    </>
)}


import styles from '../styles.module.css'
import Link from 'next/link'
import React, { Component, useState } from 'react'
import { useRouter } from 'next/router'
import Login from '../components/Login'
// import '../styles/header.css'
import Header from '../components/Header'
import Homepageheader from '../components/Homepageheader'
import Footer from '../components/Footer'



export default function Home(props){
  const router = useRouter();

  return(
    <>
      {/* <Header /> */}
      {/* <main className="homepagebody"> */}


      
      <Homepageheader />
      {/* </main> */}
      {/* <form onSubmit={handleSubmit} >
          <input type="text" name='search' placeholder='Search any store' id='searching'/>
          <button className='button' type="submit" >Search </button>
      </form> */}

      <p className='rev1'>Each review has a personal story</p>
      <p className='rev2'>So what is yours!</p>
      <hr className='hrHomePage' />
      <h2 className='tobrowsebycat'>Browse Businesses by Category</h2>
                  <section id="allNews">
                <div className="contents">

                <Link key='1' href="/category/[id].js" as={`/category/Resturant`}>                    
                    <a href="/{1}">
                        <div className="conts">
                            <div  className="cont">
                                <div className="imgCover">
                                    <h2>Restaurant</h2>
                                </div>
                            </div>
                        </div>
                        
                    </a>
                    </Link>
                    <Link key='2' href="/category/[id].js" as={`/category/Clothes`}>                    
                    <a href="/{1}">
                        <div className="conts">
                        <div  className="cont">
                            <div className="imgCover">
                                <h2>Clothes</h2>
                            </div>
                        </div>
                        </div>

                    </a>
                    </Link>
                    <Link key='3' href="/category/[id].js" as={`/category/Services`}>                    
                    <a href="/{1}">
                        <div className="conts">
                            <div  className="cont">
                            <div className="imgCover">
                                <h2>Services</h2>
                            </div>
                        </div>
                        </div>

                    </a>
                    </Link>
                <Link key='4' href="/category/[id].js" as={`/category/Fashion`}>                    

                    <a href="/sport">
                        <div className="conts">
                            <div  className="cont">
                            <div className="imgCover">
                                <h2>Fashion</h2>
                            </div>
                        </div>
                        </div>

                    </a>
                    </Link>

                </div>
                <div className="contents">
                <Link key='5' href="/category/[id].js" as={`/category/Beauty`}>                    
                    <a href="/health">
                        <div className="conts">
                            <div  className="cont">
                            <div className="imgCover">
                                <h2>Beauty</h2>
                            </div>
                        </div>
                        </div>

                    </a>
                    </Link>

                <Link key='6' href="/category/[id].js" as={`/category/Entertainment`}>                    
                    <a href="/tech">
                        <div className="conts">
                            <div  className="cont">
                            <div className="imgCover">
                                <h2 >Entertainment</h2>
                            </div>
                        </div>
                        </div>

                    </a>
                    </Link>
                    <Link key='7' href="/category/[id].js" as={`/category/Education`}>                    
                    <a href="/{1}">
                        <div className="conts">
                            <div  className="cont">
                            <div className="imgCover">
                                <h2>Education</h2>
                            </div>
                        </div>
                        </div>
                        
                    </a>
                    </Link>
                    <Link key='8' href="/category/[id].js" as={`/category/Electrical`}>                    
                    <a href="/{1}">
                        <div className="conts">
                            <div  className="cont">
                            <div className="imgCover">
                                <h2>Electrical</h2>
                            </div>
                        </div>
                        </div>

                    </a>
                    </Link>

                </div>
                </section>

                {/* <section>
                  <p>Be heard
Commentat is free and open to every company and consumer everywhere. Sharing your experiences helps others make better choices and companies up their game.</p>
                </section> */}

        <Footer />

    </>
)}
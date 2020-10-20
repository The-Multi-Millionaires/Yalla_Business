import Link from 'next/link'
import React, { Component, useState } from 'react'
import { useRouter } from 'next/router'
import Login from '../components/Login'
// import '../styles/header.css'

import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookmark,  faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import {
//     faGithubAlt,
//     faGoogle,
//     faFacebook,
//     faTwitter,

// } from '@fortawesome/free-brands-svg-icons';

// library.add(


//     faGithubAlt,
//     faGoogle,
//     faFacebook,
//     faTwitter,

// );

class Localstorage extends Component{
  constructor(props) {
      console.group("0000000000000000000000000000")
      
      super(props);
      this.state = {
        user_id:0,
        first_name:'',
        last_name:'',
        thing: "things"
      };
      console.log("Props XXXX",this.props)
    };

    componentDidMount() {
        console.log(this.props)
        console.group("0000000000000000000000000000")
        const firstName = localStorage.getItem(this.props.name)
        this.state.first_name=firstName
        console.log("this.state.first_name",this.state.first_name,firstName,this.props.name)
      // localStorage.setItem('user_id', JSON.stringify(this.state.user_id)) 
      // localStorage.setItem('firstName', JSON.stringify(this.state.first_name))  
      // localStorage.setItem('name', JSON.stringify(this.state.first_name))  
      // localStorage.setItem('_increment', JSON.stringify(this.state.first_name))  
  
    }
    render(){
    return(<h2 className="userNameHeaderBar">Still{this.state.first_name}</h2>)
    }
}

export default function Header(props){
  const router = useRouter();

//   let name = window.localStorage.getItem('name');
//   console.log(name);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let toSearch = e.target.searching.value;
    router.push('search/[id].js',`search/${toSearch}`)
  }
  function getuserName(props){


    
    // var user_obj=window.localStorage.getItem('user_obj')
    // var first_name=window.localStorage.getItem('firstName')
    // console.log("This is first name",typeof(first_name))
    // console.log("This is first name",typeof(`Mohammed`))
    

  return(<h2 className="userNameHeaderBar">{first_name}</h2>)
  }

  return(
    <>
      <header className='headerBar'>
        <nav className="headerNavBar">
         
          <div className='headerIcons'>
            <a  href='homepage'>
              <FontAwesomeIcon className='allheadericonns' icon={faHome} style={{ color: '#660708', width: '48px', height: '50px', marginRight: '16%'}} />
            </a>
            
            <a  href='homepage'>
              <FontAwesomeIcon className='allheadericonns' icon={faBookmark} style={{ color: '#660708', width: '30px', height: '50px', marginRight: '17%'}} />
              </a>

            <a  href='homepage'>
              <FontAwesomeIcon className='allheadericonns' icon={ faUsers} style={{ color: '#660708', width: '47px', height: '50px'}} />
            </a>

          </div>

          <a className="headerLogo" href='homepage'>
            <img className="headerLogoimg" src="/logo2.gif" alt="my image" />
          </a>
          <form className="wrap" onSubmit={handleSubmit} >
              <input type="text" name='search' id="searching" placeholder='Search' className="searchTerm"/> 
              <button type="submit" className="searchButton">Search </button> 
          </form>

         

        </nav>
         <div className='userHeaderInfo'>
            {/* <h2 className="userNameHeaderBar">{getuserName()}</h2> */}
            {/* <p>{getuserName()}</p> */}
            {/* <p>{Localstorage}</p> */}
            <Localstorage name='firstName'/>
            <a  href='homepage'>
              <FontAwesomeIcon className='allheadericonns' icon={ faSignOutAlt} style={{ color: '#660708', width: '30px', height: '41px', marginTop:'16px'}} />
            </a>
          </div>
      </header>
    </>
)}
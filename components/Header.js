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
var i ='qqqqqqq';
class Localstorage extends Component{
  constructor(props) {      
      super(props);
      this.state = {
        user_id:0,
        first_name:'mmmmmmmmmmm',
        last_name:'',
        thing: "things"
      };

    };

    componentDidMount() {

        const firstName = localStorage.getItem(this.props.name)
        this.setState({first_name:firstName})  
    }
    render(){
    return(<h2 className="userNameHeaderBar">{this.state.first_name}</h2>)
    }
}
export default function Header(props){
  const router = useRouter();

  
  const handleSubmit = (e) => {
    e.preventDefault()
    let toSearch = e.target.searching.value;
    router.push('search/[id].js',`search/${toSearch}`)
  }

  return(
    <>
      {/* <header className='headerBar'>
        <nav className="headerNavBar"> */}

          {/* <h1 className='logoTitle'>Commentat</h1> */}
          {/* <form className="wrap" onSubmit={handleSubmit} >
              <input type="text" name='search' id="searching" placeholder='Search' className="searchTerm"/> 
              <button type="submit" className="searchButton">Search </button> 
          </form> */}

         

        {/* </nav>
         <div className='userHeaderInfo'>
            <Localstorage name='firstName'/>
            <a  href='homepage'>
              <FontAwesomeIcon className='allheadericonns' icon={ faSignOutAlt} style={{ color: '#00a53c', width: '30px', height: '40px', marginTop:'16px'}} />
            </a>
          </div>
      </header> */}

                
      <header className='headerBar'>
        <nav className="headerNavBar">

          <h1 className='logoTitle'>Commentat</h1>

          <ul className='newNavBar'>
            <li className='newNavBarLI'>
               <a> Home </a></li>
            <li className='newNavBarLI'><a>All Stores</a></li>
            <li className='newNavBarLI'><a>Catagories</a></li>
            <li className='newNavBarLI'><a>About Us</a></li>
          </ul>
        </nav>

         <div className='userHeaderInfo'>
            <Localstorage name='firstName'/>
            <a  href='homepage'>
              <FontAwesomeIcon className='allheadericonns' icon={ faSignOutAlt} style={{ color: '#00a53c', width: '30px', height: '40px', marginTop:'16px'}} />
            </a>
          </div>
      </header>
    </>
)}
import Link from 'next/link'
import React, { Component, useState } from 'react'
import { useRouter } from 'next/router'
import Login from '../components/Login'
// import '../styles/header.css'
import {Redirect} from 'react-router'
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookmark,  faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


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
        console.log(this.props)
      
        const firstName = localStorage.getItem(this.props.name)
        this.setState({first_name:firstName})
     
    }
    render(){
      
    return(<h2 className="userNameHeaderBar">{this.state.first_name}</h2>)
    }
}
// console.log(i)
export default function Header(props){
  const router = useRouter();

//   let name = window.localStorage.getItem('name');
//   console.log(name);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let toSearch = e.target.searching.value;
    // router.push('/')
console.log("Path name",router.pathname)
if(router.pathname=='/homepage'){

  router.push('search/[id].js',`search/${toSearch}`,{ shallow: true })
}else {
  

}
  }


    
    // var user_obj=window.localStorage.getItem('user_obj')
    // var first_name=window.localStorage.getItem('firstName')
    // console.log("This is first name",typeof(first_name))
    // console.log("This is first name",typeof(`Mohammed`))
    

  // return(<h2 className="userNameHeaderBar">{first_name}</h2>)
  // }

  return(
    <>
      <header className='headerBar'>
        <nav className="headerNavBar">
         
          {/* <div className='headerIcons'>
            <a  href='homepage'>
              <FontAwesomeIcon className='allheadericonns' icon={faHome} style={{ color: '#660708', width: '48px', height: '50px', marginRight: '16%'}} />
            </a>
            
            <a  href='homepage'>
              <FontAwesomeIcon className='allheadericonns' icon={faBookmark} style={{ color: '#660708', width: '30px', height: '50px', marginRight: '17%'}} />
              </a>

            <a  href='homepage'>
              <FontAwesomeIcon className='allheadericonns' icon={ faUsers} style={{ color: '#660708', width: '47px', height: '50px'}} />
            </a>

          </div> */}
{/* 
          <a className="headerLogo" href='homepage'>
            <img className="headerLogoimg" src="/logo2.gif" alt="my image" />
          </a> */}
          <Link href="/homepage">
          {/* <a>Home</a> */}
          <h1 className='logoTitle'>Yalla Business</h1>
        </Link>
        
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
              <FontAwesomeIcon className='allheadericonns' icon={ faSignOutAlt} style={{ color: '#00a53c', width: '30px', height: '40px', marginTop:'16px'}} />
            </a>
          </div>
      </header>
    </>
)}
import Link from 'next/link'
import React, { Component, useState } from 'react'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookmark,  faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


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

          
      <header className='headerBar'>
        <nav className="headerNavBar">

          <h1 className='logoTitle'>Commentat</h1>

          <ul className='newNavBar'>
            <li className='newNavBarLI'>
            <Link key='1' href="/homepage.js" as={`/home`}>                    
            
               <a href='/homepage.js'> Home </a>
               </Link></li>
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

        <div className='heroContainer'>
           <div className='titleContainer'>
              <p className="pfordana">Behind every comment is an experience that matters</p>
              <form className="wraposama" onSubmit={handleSubmit} >
                  <input type="text" name='search' id="searching" placeholder='Find restaurants, stores or anything!' className="searchTermosama"/> 
                  <button type="submit" className="searchButtonosama">Search </button> 
              </form>
            </div>
        </div>

      </>
  )}
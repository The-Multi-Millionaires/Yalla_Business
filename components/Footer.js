import Link from 'next/link'
import React, { Component, useState } from 'react'
import { useRouter } from 'next/router'
import Login from '../components/Login'
// import '../styles/header.css'

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

        const firstName = localStorage.getItem(this.props.name)
        this.setState({first_name:firstName})  
    }
    render(){
    return(<h2 className="userNameHeaderBar">{this.state.first_name}</h2>)
    }
}
export default function Header(props){
  const router = useRouter();

  


  return(
    <>
    <footer>
        <div id="footer">
            <nav id="footerNav">
                <ul>
                    <li><a href="/news">Home</a></li>
                    <li><a href="/sport">All Stores</a></li>
                    <li><a href="/health">Categories</a></li>
                    <li><a href="/tech">About Us</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </nav>
            <div id="logo1">
                <img src="/our-logo.png" alt="" />

            </div> 
            <div id="logo2">

            <ul>
                <li className="contact">
                    
                    <p>☎ +9627770004567</p>
                </li>
                <li className="contact">
                    {/* <img src="img/email.png" /> */}
                    <p>commentat@info.com</p>
                </li>
                </ul>
                </div> 
 
        </div>
        <div id="copy">
            <hr />
            <p>Commentat &copy; 2020 &middot; All Copyrights are reserved</p>
        </div>
    </footer>
    </>
)}
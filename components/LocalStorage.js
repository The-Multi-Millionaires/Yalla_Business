import { extend } from 'jquery'
import React, { Component, useState } from 'react'


export default class Localstorage extends Component{
    constructor() {
        console.group("0000000000000000000000000000")

        super();
        this.state = {
            user_id:0,
            first_name:'',
            last_name:'',
          thing: "things"
        };
      };
      componentDidmount() {
          console.log(this.props)
          console.group("0000000000000000000000000000")
        // localStorage.setItem('user_id', JSON.stringify(this.state.user_id)) 
        // localStorage.setItem('firstName', JSON.stringify(this.state.first_name))  
        // localStorage.setItem('name', JSON.stringify(this.state.first_name))  
        // localStorage.setItem('_increment', JSON.stringify(this.state.first_name))  
    
      }
      
}
// import { extend } from 'jquery'
import React, { Component, useState } from 'react'


export default class Localstorage extends Component{
    constructor(props) {
        console.group("Iam here")
        super(props)

        // super();
        this.state = {
            user_id:0,
            first_name:'',
            last_name:'',
            store_id:'',
          thing: "things"
        };
      };
      componentDidmount() {
        console.log("bbbbbbbbbbbbb")
        const item = localStorage.setItem(this.props.name)
//         this.setState({store_id:item})
          // console.log(this.props)
          // console.group("0000000000000000000000000000")
        // localStorage.setItem('user_id', JSON.stringify(this.state.user_id)) 
        // localStorage.setItem('firstName', JSON.stringify(this.state.first_name))  
        // localStorage.setItem('name', JSON.stringify(this.state.first_name))  
        // localStorage.setItem('_increment', JSON.stringify(this.state.first_name))  
    
      }
      
}



// class Localstorage extends Component{
//   constructor(props) {
//       // console.group("0000000000000000000000000000")
      
//       super(props);
//       this.state = {
//         user_id:0,
//         first_name:'mmmmmmmmmmm',
//         last_name:'',
//         thing: "things"
//       };
//       // this.componentDidMount();
//       // console.log("Props XXXX",this.props)
//     };

//     componentDidMount() {
//         // console.log(this.props)
//         // console.group("0000000000000000000000000000")
//         const firstName = localStorage.getItem(this.props.name)
//         this.setState({first_name:firstName})
//         // this.state.first_name=firstName
//         // i = firstName
//         // console.log("this.state.first_name",this.state.first_name,firstName,this.props.name)
//       // localStorage.setItem('user_id', JSON.stringify(this.state.user_id)) 
//       // localStorage.setItem('firstName', JSON.stringify(this.state.first_name))  
//       // localStorage.setItem('name', JSON.stringify(this.state.first_name))  
//       // localStorage.setItem('_increment', JSON.stringify(this.state.first_name))  
  
//     }
//     render(){
//       // this.componentDidMount() 
//       // console.log("First name",this.state.first_name,i)
//     return(<h2 className="userNameHeaderBar">{this.state.first_name}</h2>)
//     }
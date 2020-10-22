import React, { Component} from 'react';
import jQuery from 'jquery'
// import d3 from 'd3'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

const url = 'https://yalla-business-api.herokuapp.com/yalla_business_app/api/users';

class Login extends Component {

  state = {
    credentials: {username: '', password: ''},
    signUpCred: {first_name:'',last_name:'',username: '', email:'' ,password: '', passwordsec:''},
    userpicrev: {last_name:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYNQCl5AwQhKoWfRaVb5UnaRJOAbiqOw8rGg&usqp=CAU'}

  }

  componentDidUpdate() {
    // console.log("from login page",this.state)
    localStorage.setItem('user_id', this.state.user_id) 
    localStorage.setItem('firstName', this.state.first_name||this.state.signUpCred.first_name)  
    localStorage.setItem('userpicrev', this.state.last_name||this.state.userpicrev.last_name)  

      // window.localStorage.setItem('user_id', tok[2]);

    // console.log("props",this.props)
    // localStorage.setItem('name', JSON.stringify(this.state.first_name))  
    // localStorage.setItem('_increment', JSON.stringify(this.state.first_name))  

  }
  login = event => {
    var desired_name=this.state.credentials.username;
    // console.log(this.state.credentials.username)
    var id_user;


    fetch('https://yalla-business-api.herokuapp.com/yalla_business_app/api/users?search='+desired_name)
    .then(response=>response.json())
    .then(data => {console.log(data)
      var i=0
    data.map(elem=>{
      // console.log(elem.username)
      if(elem.username==desired_name){
        // console.log(elem)
          this.state.user_id=elem.id;
          this.state.user_obj=elem;
          this.state.first_name=elem.first_name
          this.state.last_name=elem.last_name

          

  var user_id=elem.id;
        i=elem.id
      
      }
      
    })}).catch(res=>console.log(res))
    
    
    fetch('https://yalla-business-api.herokuapp.com/auth/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.props.userLogin([data.token,this.state.credentials.username]);
        // console.log(this.state.credentials.username);

      }
      
    )
    .catch( error => console.error(error))
  }

  register = event => {
    // fetch('https://yalla-business-api.herokuapp.com/yalla_business_app/api/users/', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(this.state.signUpCred)
    // })
    // .then( data => data.json())
    // .then(
    //   data => {
    //     console.log(data.token);
    //   }
    // )
    // .catch( error => console.error(error))
    this.reviewCreateHandler();
  }
  async reviewCreateHandler() {
    // console.log(this.state.signUpCred.username);
    const response = await axios.post(url, {
        "username": this.state.signUpCred.username,
        "password": this.state.signUpCred.password,
        "first_name": this.state.signUpCred.first_name,
        "last_name": this.state.userpicrev.last_name,
        "email": this.state.signUpCred.email
    });

    console.log(response);

}
  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  inputChangedSignUp = event => {
    const cred1 = this.state.signUpCred;
    cred1[event.target.name] = event.target.value;
    this.setState({signUpCred: cred1});
  }

  componentDidMount() {
          $('#signup').click(function() {
          $('.pinkbox').css('transform', 'translateX(80%)');
          $('.signin').addClass('nodisplay');
          $('.signup').removeClass('nodisplay');
        });
        
          $('#signin').click(function() {
          $('.pinkbox').css('transform', 'translateX(0%)');
          $('.signup').addClass('nodisplay');
          $('.signin').removeClass('nodisplay');
        });
  }

  render() {
    return (
      // <html lang="en">
      
      //   <link
      //     href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
      //     rel="stylesheet"
      //   />
      //  <script src="../static/js/jquery.main.js" async/>
      
      // <body>
        
      
    
          <div className="containerSignin">
          <div className="welcome">
            <div className="pinkbox">
              <div className="signup nodisplay">
                <h1 className='h1'>register</h1>
                {/* <form autoComplete="off"> */}
                 
                  <input type="text" placeholder="First Name" name="first_name" value={this.state.signUpCred.first_name}
                  onChange={this.inputChangedSignUp} className='input'/>

                  <input type="text" placeholder="Last Name" name="last_name" value={this.state.signUpCred.last_name}
                  onChange={this.inputChangedSignUp} className='input'/> 
                  
                  <input type="text" placeholder="username" name="username" value={this.state.signUpCred.username}
                  onChange={this.inputChangedSignUp} className='input'/>

                  <input type="email" placeholder="email" name="email" value={this.state.signUpCred.email}
                  onChange={this.inputChangedSignUp} className='input'/>
                  <input type="password" placeholder="password" name="password" value={this.state.signUpCred.password}
                  onChange={this.inputChangedSignUp} className='input'/>
                  <input type="password" placeholder="confirm password" name="passwordsec" value={this.state.signUpCred.passwordsec}
                  onChange={this.inputChangedSignUp} className='input'/>
                  <button onClick={this.register} id='abutton' className="button submittt">create account </button>
                {/* </form> */}
              </div>
              <div className="signin">
                <h1 className='h1'>sign in</h1>
                {/* <form className="more-padding"> */}
                  <input type="text" name="username" placeholder="username" value={this.state.credentials.username}
                  onChange={this.inputChanged} className='input'/>
                  <input type="password" name="password" placeholder="password" value={this.state.credentials.password}
                  onChange={this.inputChanged} className='input'/>
                  {/* <div className="checkbox">
                    <input type="checkbox" id="remember" /><label htmlFor="remember">remember me</label>
                  </div> */}
        
                  <button onClick={this.login} className="button submittt">login</button>
                {/* </form> */}
              </div>
            </div>
            <div className="leftbox">
              <h2 className="title"><span className='span'>WELCOME</span></h2>
              <p className="desc" id="backword">BACK </p>
              <img className="flower smaller" src="/commentat.png" alt="1357d638624297b" border="0"/>
              <p className="account">have an account?</p>
              <button className="button" id="signin">login</button>
            </div>
            <div className="rightbox">
              <h2 className="title"><span className='span'>HELLO</span></h2>
              <p className="desc"> BECOME A MEMBER <span className='span'>Join Us Now</span></p>
              <img className="flower" src="/commentat.png"/>
              <p className="account">don't have an account?</p>
              <button className="button" id="signup">sign up</button>

              
            </div>
          </div>
        </div>
        
         
        

    );
  }
}

export default Login;


import React, { Component} from 'react';
import jQuery from 'jquery'
import d3 from 'd3'
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Login extends Component {

  state = {
    credentials: {username: '', password: ''}
  }

  login = event => {
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
    fetch('https://yalla-business-api.herokuapp.com/yalla_business_app/api/users/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.token);
      }
    )
    .catch( error => console.error(error))
  }
  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
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
        
      
    
          <div className="container">
          <div className="welcome">
            <div className="pinkbox">
              <div className="signup nodisplay">
                <h1>register</h1>
                <form autoComplete="off">
                  <input type="text" placeholder="username"/>
                  <input type="email" placeholder="email"/>
                  <input type="password" placeholder="password"/>
                  <input type="password" placeholder="confirm password"/>
                  <button className="button submit">create account </button>
                </form>
              </div>
              <div className="signin">
                <h1>sign in</h1>
                {/* <form className="more-padding"> */}
                  <input type="text" name="username" placeholder="username" value={this.state.credentials.username}
                  onChange={this.inputChanged}/>
                  <input type="password" name="password" placeholder="password" value={this.state.credentials.password}
                  onChange={this.inputChanged}/>
                  {/* <div className="checkbox">
                    <input type="checkbox" id="remember" /><label htmlFor="remember">remember me</label>
                  </div> */}
        
                  <button onClick={this.login} className="button submit">login</button>
                {/* </form> */}
              </div>
            </div>
            <div className="leftbox">
              <h2 className="title"><span>BLOOM</span></h2>
              <p className="desc">pick your perfect <span>bouquet</span></p>
              <img className="flower smaller" src="https://image.ibb.co/d5X6pn/1357d638624297b.jpg" alt="1357d638624297b" border="0"/>
              <p className="account">have an account?</p>
              <button className="button" id="signin">login</button>
            </div>
            <div className="rightbox">
              <h2 className="title"><span>BLOOM</span></h2>
              <p className="desc"> pick your perfect <span>bouquet</span></p>
              <img className="flower" src="https://preview.ibb.co/jvu2Un/0057c1c1bab51a0.jpg"/>
              <p className="account">don't have an account?</p>
              <button className="button" id="signup">sign up</button>

              
            </div>
          </div>
        </div>
        
         
        

    );
  }
}

export default Login;


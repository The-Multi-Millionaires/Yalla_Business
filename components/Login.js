import React, { Component} from 'react';

class Login extends Component {

  state = {
    credentials: {username: '', password: ''},
    user_id:0,
    user_obj:{}
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
        console.log(elem.id)
          this.state.user_id=elem.id;
          this.state.user_obj=elem;

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
        this.props.userLogin([data.token,this.state.credentials.username,this.state.user_id,this.state.user_obj]);
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

  render() {
    return (
      <div>
        <h1>Login user form</h1>

        <label>
          Username:
          <input type="text" name="username"
           value={this.state.credentials.username}
           onChange={this.inputChanged}/>
        </label>
        <br/>
        <label>
          Password:
          <input type="password" name="password"
           value={this.state.credentials.password}
           onChange={this.inputChanged} />
        </label>
        <br/>
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default Login;
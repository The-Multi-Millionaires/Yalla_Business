import React from 'react'

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            User_id: '', 
            Store_id: '', 
            Store_location: '', 
            Store_pic: '', 
            Comment:'', 
            Review_rate: 1,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();

        let userid = event.target.username.value;
        let storeid = event.target.password.value;

        
        this.setState((state, props) => ({
            User_id: userid, 
            Store_id: storeid, 
   
        }), ()=>{
            // console.log(this.state);
             this.props.onReviewCreate(this.state);

    });
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <input type="text" name='username' placeholder='username' id='username'/>
                <input type="text" name='password' placeholder='password' id='password'/>
                {/* <input type="text" name='search' placeholder='location' id='Store_location'/>
                <input type="text" name='search' placeholder='pic' id='Store_pic'/>
                <input type="text" name='search' placeholder='comment' id='Comment'/>
                <input type="text" name='search' placeholder='rate' id='Review_rate'/> */}
                <button>ok</button>
            </form>
        )
    }
}
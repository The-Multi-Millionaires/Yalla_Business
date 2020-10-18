import React from 'react'
import axios from 'axios'

import SignupForm from '../components/SignupForm'


const url = 'https://yalla-business-api.herokuapp.com/yalla_business_app/login';
// const url = 'https://snacksapi.herokuapp.com/api/v1/snacks/';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.reviewCreateHandler = this.reviewCreateHandler.bind(this);
    }

    async reviewCreateHandler(review) {
        const response = await axios.post(url, {            
            "username": 'dana1234',
            "password": 1234,
    });   
    console.log(response);
  
    }

    render() {
        return (
            <div className="container">
                <SignupForm onReviewCreate={this.reviewCreateHandler} />
            </div>
        )
    }
}

export default Home
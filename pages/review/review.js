import React from 'react'
import axios from 'axios'

import ReviewForm from '../../components/ReviewForm'


const url = 'https://yalla-business-api.herokuapp.com/yalla_business_app/api/v1/review/';
// const url = 'https://snacksapi.herokuapp.com/api/v1/snacks/';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.reviewCreateHandler = this.reviewCreateHandler.bind(this);
    }

    async reviewCreateHandler(review) {
        const response = await axios.post(url, {            
            "user_id": 1,
            "store_id": 1,
            "store_location": review.Store_location,
            "store_pic":  review.Store_pic,
            "comment":  review.Comment,
            "review_rate":  review.Review_rate
    });   
  
    }

    render() {
        return (
            <div className="container">
                <ReviewForm onReviewCreate={this.reviewCreateHandler} />
            </div>
        )
    }
}

export default Home
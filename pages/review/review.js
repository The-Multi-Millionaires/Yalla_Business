import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
// import{FaStar} from 'react-icon/fa';

import { faStar, faHighlighter } from '@fortawesome/free-solid-svg-icons';


// function useHover() {
//     const [value, setValue] = useState(false);
// }
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons

// const {useState} = React;

// const StarRating = ()=> {
//         const [rating,setRating] = useState(null);
//         const [hover,setHover]= useState(null);
//         // const [hover,setHover]=useHover();

//         return(
//             <>
//             <div>
//                 {[...Array(5)].map((star,i)=>{
//                     const ratingValue = i +1;
//                     return (
//                         <label>
//                             <input
//                             type='radio'
//                             name='rating'
//                             value={ratingValue}
//                             onClick={() =>setRating(ratingValue)}
//                             onMouseOver={()=>setHover(ratingValue)}
//                             onMouseLeave={()=>setHover(null)}
//                             />
//                             <faStar
//                             className='star'
//                             color={ratingValue <=(hover || rating) ? "#ffc107" : "#e4e59"}
//                             size={100}
//                             onMouseOver={()=>setHover(ratingValue)}
//                             onMouseLeave={()=>setHover(null)}
//                             />

//                         </label>
//                     )
//                 })}
//             </div>
//             <p>{rating}</p>
//             </>
//         )
//     }







import ReviewForm from '../../components/ReviewForm'
import Header from '../../components/Header'
// import StarRatingDemo from '../../components/starsCreator'
import GetStar from '../../components/starsCreator'

// if (!window) {
//     require('localstorage-polyfill');
// }
// function componentDidMount() {
// const data = localStorage.getItem('name')
// console.log(data)
// }
// componentDidMount()


const url = 'https://yalla-business-api.herokuapp.com/yalla_business_app/api/v1/review/';
// const url = 'https://snacksapi.herokuapp.com/api/v1/snacks/';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rate: 0,
        }
        this.reviewCreateHandler = this.reviewCreateHandler.bind(this);
    }

    async reviewCreateHandler(review) {
        const response = await axios.post(url, {
            "user_id": 1,
            "store_id": 1,
            "store_location": review.Store_location,
            "store_pic": review.Store_pic,
            "comment": review.Comment,
            "review_rate": this.state.rate
        });

    }


    rate_star = star => {
        // let new_star= star ? star:0;
        console.log(star)
        // this.setState({
        //     rate: star
        // })
        this.state.rate = star
    }
    //   rate_star= star =>{console.log(star)
    //   }


    render() {
        return (
            <>
                {/* <Header /> */}

                <div className="container_res">
                    < GetStar new_rate={this.rate_star} />

                <div className="container">
                    <ReviewForm onReviewCreate={this.reviewCreateHandler} />
                </div>
                

                </div>
            </>
        )
    }
}

export default Home
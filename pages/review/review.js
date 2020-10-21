import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
// import{FaStar} from 'react-icon/fa';

import { faStar, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';


// function useHover() {
//     const [value, setValue] = useState(false);
// }
import { library } from '@fortawesome/fontawesome-svg-core';
import Header from '../../components/Header'


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
// import Header from '../../components/Header'
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
            review_user_profile: "Unknown User",
            store_name: 'Unknown Store',
            store_img_rev: 'https://lh3.googleusercontent.com/proxy/WGsJ71xPRNUXOrlp_N41W71f7lJ9gso5rBPVMLsPmgE5HAsBRcKUvLvHOFhExm_BPIBrhDLV9KrAakhmIxEF0CblFHUdM9AZq71VBKx1vRBdHdG09YROjGJ-XixEXw',

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
            "review_rate": this.state.rate,
            "review_user_profile": this.state.review_user_profile
        });

    }

    componentDidMount() {
        const firstName = localStorage.getItem('firstName')
        const item = localStorage.getItem('store_id', this.props.name)
        const img = localStorage.getItem('img_url')
        const store_name = localStorage.getItem('store_name_rev')
        console.log(item)
        this.setState({
            store_id: item, review_user_profile: firstName,
            store_img_rev: img, store_name: store_name

        });
        // console.log($(body)
        // console.log($('.store_name_review_res').parent().parent().css('background-image','url(' + '/logo2.gif' +')'))
        // $('.store_name_review_res').parent().parent().css({'background-image':'url(' + 'https://www.seanfoster.co.nz/wp-content/uploads/2018/10/customer-service-five-stars-750.jpg' +')'})
        // $('.div_name_image').parent().parent().css({ 'background-image': 'url(' + 'https://s3-eu-west-1.amazonaws.com/uploads.playbaamboozle.com/uploads/images/21359/1591744910_49812' + ')', 'background-size': 'cover' })
        // "background":"#000",
        // "color":"#000"
        // https://www.seanfoster.co.nz/wp-content/uploads/2018/10/customer-service-five-stars-750.jpg


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
        console.log(this.state, "00000000000")
        return (
            <>
                {/* <Header /> */}
                <Header />
                {/* <main className='main_res'> */}
<div className='twoimages_form_rev'>


                <div className="container_res">
                    < GetStar new_rate={this.rate_star} />

                    <div className="container">
                        <ReviewForm onReviewCreate={this.reviewCreateHandler} />
                    </div>
                    <div className='div_name_image'>
                        <h2 className='store_name_review_res'>Store : {this.state.store_name}</h2>
                        {/* <img className='imgae_rev_form_res' src={this.state.store_img_rev} /> */}

                    </div>

                </div>
                <div className='imagenear_form_res'>
                    <img src={this.state.store_img_rev} />
                </div>
</div>
                {/* </main> */}
            </>
        )
    }
}

export default Home
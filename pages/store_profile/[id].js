import styles from '../../styles.module.css'
import { useRouter } from 'next/router'
// import DisplayStoreReviews from '../../components/DisplayStoreReviews'
import Header from '../../components/Header'
import React, { Component, useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core';
// import Localstorage from '../../components/LocalStorage'
// Localstorage

// import your icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,

} from '@fortawesome/free-brands-svg-icons';

library.add(


    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,

);




class Localstorage extends Component{
    constructor(props) {
        console.group("0000000000000000000000000000")
        
        super(props);
        this.state = {
          user_id:0,
          first_name:'mmmmmmmmmmm',
          last_name:'',
          store_id:'',
          thing: "things"
        };
        // this.componentDidMount();
        console.log("Props XXXX",this.props)
      };
  
      componentDidMount() {
          // console.log(this.props)
          // console.group("0000000000000000000000000000")
        //   console.log(i)
          const item = localStorage.setItem('store_id',this.props.name)
          console.log(item)
          this.setState({store_id:'item'})
          // this.state.first_name=firstName
          // i = firstName
          // console.log("this.state.first_name",this.state.first_name,firstName,this.props.name)
        // localStorage.setItem('user_id', JSON.stringify(this.state.user_id)) 
        // localStorage.setItem('firstName', JSON.stringify(this.state.first_name))  
        // localStorage.setItem('name', JSON.stringify(this.state.first_name))  
        // localStorage.setItem('_increment', JSON.stringify(this.state.first_name))  
    
      }
      render(){
        // this.componentDidMount() 
        // console.log("First name",this.state.first_name,i)
    //   return(<h2 className="userNameHeaderBar">{this.state.first_name}</h2>)
    return null
      }
  }
function starCreator(num) {
    num=parseInt(num);
    let colored=[];
    let blacked=[];
    for(var i =0;i<num;i++){
        colored.push('1');
    }
    for(var i =0;i<(5-num);i++){
        blacked.push('1');
    }
    // console.log("***************",colored)
  return (
      <>
      {/* <p>{num}</p> */}
    <p>
  <span>{}</span>
        <span>
      {colored.map(name => (
          <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
          ))}
          {blacked.map(name => (
          <FontAwesomeIcon icon={faStar} style={{ color: 'grey' }} />
          ))}
          </span>
    </p>
    </>
  );
}


export default function singleView(props){
    console.log(props)
    const router = useRouter()

    let filled_stars = props.info.review_rank
    let stars=''
    for(let i =0; i<filled_stars ; i++){
        stars += '⭐' 
    }
    let rest = 5-filled_stars;
    for(let i =0; i<rest ; i++){
        stars += '☆' 
    }
    
    let sum =0;
    props.review.map((data) => sum += data.review_rate )
    let avg = Math.round( sum/(props.review.length))
    // console.log(avg);

    let price = '';

    for(let i=0; i < props.info.price; i++){
        price += '$';
    }
    // console.log(price);
    
    // let name = window.localStorage.getItem('name');

        

    return(
        <>
            <main className='storeProfileMain'>
            <Localstorage  name={props.info.id}/>

                <Header />

                <div className="storeInfo">

                    <img className='storeProfilePic' src={props.info.pro_pic} />

                    <div className='details'>
                        <h2 className='storeName'>{props.info.store_name}</h2>
                        <p className='profileRate'>{starCreator(props.info.review_rank)}</p>
                        <span className='howMuch'>{props.review.length} reviews</span>

                        <p className='profileLocation'>{props.info.store_location}</p>

                        <p className='profileDescription'>{props.info.store_description}</p>
                        <p className='storeNumber'> ☎ 0{props.info.phone_number}</p>

                        <span className='storeHours'> Hours: </span>
                        <span className='storeHoursTime'> {props.info.opening_times}</span>
                        
                        <p className='storePrice'> 💵 Price Range {price}</p>

                    </div>

                </div>
                <hr className="solid" />
                <div className='storePics'>
                    <img className='storeImgs' src={props.info.images} />
                    <img className='storeImgs' src={props.info.images} />
                    <img className='storeImgs' src={props.info.images} />
                    <img className='storeImgs' src={props.info.images} />
                    <img className='storeImgs' src={props.info.images} />
                    <img className='storeImgs' src={props.info.images} />
                </div>

                <hr className="solid2" />

                <div className='storeReviews'>
                    <span className='reviewHeader'>Reviews </span>
                    <span className='reviewHeaderNumber'> </span>

                    {props.review.map((data,index) =>
                        <>
                        <section className='allReviews'>
                            <div className='userReviewToStore'>
                                <img className='userOfReviewPic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYNQCl5AwQhKoWfRaVb5UnaRJOAbiqOw8rGg&usqp=CAU'/>
                                <div className='nextToImg'>
                                    <>
                                    {/* {userName(1)} */}
                                    <h4 className='userOfReviewName'>{props.users[index].username}</h4>
                                    <p className='locationOfReview'>{data.store_location}</p>
                                    </>

                                </div>
                                <p className='Userstars'>{starCreator(data.review_rate)}</p>


                            </div>
                            <div className='breakerForComments'></div>

                            <div className='storeReviewComment'>
                                <p className='commentPReview'>{data.comment}</p>
                            </div>
                        </section>
                        </>


                    )}
                </div>

            </main>
     
        </>
    );
}
// var i=100;
export async function getServerSideProps(context){
    const id=context.query.id
    // console.log(id);
    const res= await fetch(`https://yalla-business-api.herokuapp.com/yalla_business_app/api/v1/stores/${id}`)
    const singleData = await res.json();

    const res2= await fetch(`https://yalla-business-api.herokuapp.com/yalla_business_app/api/v1/review/?search=${id}&search_fields=store_id__id`)
    const singleData2 = await res2.json();
    // console.log(singleData2);
    let allusers=[]
    for(let i=0; i<singleData2.length; i++){
        let res2= await fetch(`https://yalla-business-api.herokuapp.com/yalla_business_app/api/users/${singleData2[i].user_id}`)
        let newUser = await res2.json();  
        allusers.push(newUser)      
    }
    // console.log(allusers);
    
    // console.log("single",singleData1);
    // i=singleData.id
    // console.log(i)
    return {props: {info: singleData, review: singleData2, users: allusers}}
}

import styles from '../styles.module.css'
import { useRouter } from 'next/router'
// import DisplayStoreReviews from '../../components/DisplayStoreReviews'
import Header from '../components/Header'

import { library } from '@fortawesome/fontawesome-svg-core';

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


export default function singleView(props){
    const router = useRouter()
    const all=[3,1,2,5]
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
      return (
          <>
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

    return(
        <>
            <main className='storeProfileMain'>

                <Header />

                <div className="userProfileInfo">

                    <img className='userProfilePicInfo' src='https://www.worldfuturecouncil.org/wp-content/uploads/2020/06/blank-profile-picture-973460_1280-1.png' />

                    <div className='userProfiledetails'>
                        <h2 className='userProfileName'>Dana Abbadi</h2>
                        <p className='userProfileLocatin'>Amman, Jordan</p>
                        {/* <span className='howMuch'>{props.review.length} reviews</span> */}

                        {/* <p className='profileLocation'>{props.info.store_location}</p> */}

                        <p className='userProfileDescription'>Hello, bhbk.vhfcxgdfnb mc;slakdvamc;adn;jv alskj'ijvLDSjv;Sm;ksMDVLKhrIU</p>
                        {/* <p className='storeNumber'> ☎ 0{props.info.phone_number}</p> */}

                        {/* <span className='storeHours'> Hours: </span>
                        <span className='storeHoursTime'> {props.info.opening_times}</span> */}
                        
                        {/* <p className='storePrice'> 💵 Price Range {price}</p> */}

                    </div>

                </div>


                <hr className="usersolid2" />

                <div className='alluserReviews'>
                    <span className='showUserHeader'>Reviews </span>
                    {/* <span className='reviewHeaderNumber'> </span> */}
                    <div className='inOnePlace'>
                    {all.map((data,index) =>
                        <>
                        <section className='userPallReviews'>
                            <div className='userPuserReviewToStore'>
                                <img className='userPuserOfReviewPic' src='https://www.hashemrestaurants.com/uploads/1/2/2/6/122631411/pictures-10_orig.jpg'/>
                                <div className='userPnextToImg'>
                                    <>
                                    {/* {userName(1)} */}
                                    <h4 className='userPuserOfReviewName'>KFC</h4>
                                    <p className='userPlocationOfReview'>Khalda, Amman</p>
                                    </>

                                </div>
                                <p className='userPUserstars'>{starCreator(3)}</p>


                            </div>
                            <div className='userPbreakerForComments'></div>

                            <div className='userPstoreReviewComment'>
                                <p className='userPcommentPReview'>Amazing atmosphere, friendly staff</p>
                            </div>
                        </section>
                        </> 
                        )} 
                    </div>

                   
                </div>

            </main>
     
        </>
    );
}

// export async function getServerSideProps(context){
//     const id=context.query.id 

//         let res2= await fetch(`https://yalla-business-api.herokuapp.com/yalla_business_app/api/users/${singleData2[i].user_id}`)
//         let newUser = await res2.json();  
    
    
//     const res2= await fetch(`https://yalla-business-api.herokuapp.com/yalla_business_app/api/v1/review/?search=${id}&search_fields=store_id__id`)
//     const singleData2 = await res2.json();
//     // console.log(singleData2);

//     // console.log(allusers);

//     // console.log(singleData2);
//     return {props: {info: singleData, review: singleData2, users: allusers}}
// }

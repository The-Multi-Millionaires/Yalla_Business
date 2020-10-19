import styles from '../../styles.module.css'
import { useRouter } from 'next/router'
// import DisplayStoreReviews from '../../components/DisplayStoreReviews'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header'


export default function singleView(props){
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

                <Header />

                <div className="storeInfo">

                    <img className='storeProfilePic' src={props.info.pro_pic} />

                    <div className='details'>
                        <h2 className='storeName'>{props.info.store_name}</h2>
                        <p className='profileLocation'>{props.info.store_location}</p>

                        <p className='profileDescription'>{props.info.store_description}</p>
                        <p className='storeNumber'> ☎ 0{props.info.phone_number}</p>

                        <span className='storeHours'> Hours: </span>
                        <span className='storeHoursTime'> {props.info.opening_times}</span>
                        
                        <p className='storePrice'> 💵 Price Range {price}</p>

                    </div>

                    <p className='profileRate'>{stars}</p>
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

                <hr className="solid" />

                <div className='storeReviews'>
                    <span className='reviewHeader'>Reviews </span>
                    <span className='reviewHeaderNumber'>{props.review.length} </span>

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

                            </div>

                            <div className='storeReviewComment'>
                                <p className='Userstars'>{stars}</p>
                                <p>{data.comment}</p>
                            </div>
                        </section>
                        </>


                    )}
                </div>

            </main>
     
        </>
    );
}
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

    // console.log(singleData2);
    return {props: {info: singleData, review: singleData2, users: allusers}}
}

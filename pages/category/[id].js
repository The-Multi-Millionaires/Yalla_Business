import styles from '../../styles.module.css'
// import searchResults from '../../searchResults.module.css'
// import '../../styles/storeProfile.css'
// styles/storeProfile.css
import Header from  '../../components/Header'
import { useRouter } from 'next/router'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer'
import Homepageheader from '../../components/Homepageheader'




export default function singleView(props) {
    const router = useRouter()
    function rankStars(num) {
        let arr = []
        arr.length = num;
        let starLogo = <FontAwesomeIcon icon={faStar} />
        let re = arr.map(elem => {
            <FontAwesomeIcon icon={faStar} />
        })
        // starLogo+=starLogo
        //         for(var i =0;i<num;i++){
        // starLogo
        //         }
        console.log(num, starLogo, re)
        return (num)
    }
function routetoStore(store){
    console.log("RouteTo Store")
    router.push('../store_profile/[id].js', `../store_profile/${store.id}`)
    
}

var arr=['1','1','1','1','1','1','1','1']

const names = ['1','1','1','1'];
names.length=5;

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


    return (
        <>
             <Header />
                 <main>
                    
                    <div className="mainInfoDiv_res">
                        <div className='forHeaderDana'>
                            <h2 className='onSearchDana'>All Stores</h2>
                        </div>
                        <div className='searchSquares'>
                            {arr.map(e=>{<p>{e}</p>})}
                            {props.info.map(store =>
                                <>
                                    <div className='singleInfo_res' onClick={() => routetoStore(store)}>
                                        {/* <img className='singleInfo_res_img' src={store.images} /> */}
                                        <img className='singleInfo_res_img' src={store.pro_pic} />
                                        
                                        <a className='singleInfo_res_p' onClick={() => routetoStore(store)}>{store.store_name}</a>
                                        <p className='singleInfo_res_loc'>{store.store_location}</p>
                                        <p className='singleInfo_res_rank' >{starCreator(store.review_rank)}</p>


                                    </div>

                                </>
                            )}
                        </div>
                    </div>
            </main>
        <Footer />


        </>
    );
}
export async function getServerSideProps(context) {
    const id = context.query.id
    console.log(id)
    const res = await fetch(`https://yalla-business-api.herokuapp.com/yalla_business_app/api/v1/stores?search=${id}&search_fields=catagories`)
    const singleData = await res.json();
    return { props: { info: singleData,search_word:id } }
}
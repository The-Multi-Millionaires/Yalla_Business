import styles from '../../styles.module.css'
// import searchResults from '../../searchResults.module.css'
// import '../../styles/storeProfile.css'
// styles/storeProfile.css
import Header from  '../../components/Header'
import { useRouter } from 'next/router'
// import the library
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

// arr.length=10
// console.log(arr)
    return (
        <>
        <Header />
            <main>

                    <h3 className='searchResult_h3_res'>Search Result for : {props.search_word}</h3>
                {/* <h1 className="ghafri">Mohammed</h1> */}
                <div className="mainInfoDiv_res">
                    {/* {console.log(props.search_word)} */}
                    {arr.map(e=>{<p>{e}</p>})}
                    {starCreator(3)}
                    {props.info.map(store =>
                        <>
                            {/* {console.log(store)} */}
                            <div className='singleInfo_res' onClick={() => routetoStore(store)}>
                                {/* <img className='singleInfo_res_img' src={store.images} /> */}
                                <img className='singleInfo_res_img' src="https://imgs.xkcd.com/comics/woodpecker.png" />
                                

                                <p className='singleInfo_res_rank' > Rank is : {starCreator(store.review_rank)}</p>

                                <a className='singleInfo_res_p' onClick={() => routetoStore(store)}>Store name : {store.store_name}</a>

                                <p className='singleInfo_res_loc'>Store Location :{store.store_location}</p>

                            </div>

                        </>
                    )}
                </div>
            </main>

        </>
    );
}
export async function getServerSideProps(context) {
    // console.log(context)
    const id = context.query.id
    const res = await fetch(`https://yalla-business-api.herokuapp.com/yalla_business_app/api/v1/stores?search=${id}`)
    const singleData = await res.json();
    return { props: { info: singleData,search_word:id } }
}
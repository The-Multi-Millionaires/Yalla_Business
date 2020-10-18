import styles from '../../styles.module.css'
// import searchResults from '../../searchResults.module.css'
// import '../../styles/storeProfile.css'
// styles/storeProfile.css
import { useRouter } from 'next/router'


export default function singleView(props){
    const router = useRouter()


    return(
        <>
        <main>
            <h1 className="ghafri">Mohammed</h1>
        <div className="infoDiv">
        {props.info.map(store =>
            <>
            <span onClick={() => router.push('../store_profile/[id].js',`../store_profile/${store.id}`)}>{store.store_name}</span>

            </>
        )}
        </div>
        </main>
     
</>
    );
}
export async function getServerSideProps(context){
    const id=context.query.id
    const res= await fetch(`https://yalla-business-api.herokuapp.com/yalla_business_app/api/v1/stores?search=${id}`)
    const singleData = await res.json();
    return {props: {info: singleData}}
}
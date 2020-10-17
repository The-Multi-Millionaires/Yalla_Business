import styles from '../../styles.module.css'
import { useRouter } from 'next/router'


export default function singleView(props){
    const router = useRouter()


    return(
        <>
        <main>
        <div className="infoDiv">
        <p>{props.info.store_name}</p>
        <p>{props.info.store_id}</p>

        </div>
        </main>
     
</>
    );
}
export async function getServerSideProps(context){
    const id=context.query.id
    const res= await fetch(`https://yalla-business-api.herokuapp.com/yalla_business_app/api/v1/stores/${id}`)
    
    const singleData = await res.json();
    console.log(singleData);
    return {props: {info: singleData}}
}
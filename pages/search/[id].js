import styles from '../../styles.module.css'


export default function singleView(props){
    const router = useRouter()
    return(
        <>
        <main>
        <div className="infoDiv">
        {props.info.map(store =>
            <>
            <a></a>
            <p>{store.store_name}</p>
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
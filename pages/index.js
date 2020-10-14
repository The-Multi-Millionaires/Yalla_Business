import styles from '../styles.module.css'

export default function Home() {
  return (
    <div className={styles.hello}>
      <p>Hello World</p>
    </div>
  )
}

export async function getServerSideProps(){
  const res = await fetch('http://127.0.0.1:8000/api/v1/stores')
  const dataObj = await res.json();
  console.log(dataObj);
  return {props: {users: dataObj}}
}

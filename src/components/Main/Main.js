import React from 'react'
import { useEffect ,useRef,useContext} from 'react'
import AuthContext from '../../auth-context'



const Main = (props) => {
 const btnRef =useRef(null)
 const authContext=useContext(AuthContext)
 console.log(authContext.auth);
 useEffect(()=>{
  console.log('main.js useEffect');
   btnRef.current.click()
  return ()=>{
    console.log("cleanup run");
  }
 },[])
  return (
  <>
  <button onclick={props.login}>login</button>
    <h1>bookShop</h1>
    <button ref={btnRef} className='redBtn' onClick={authContext.login}>show/hide</button>
  </>
  )
}

export default Main
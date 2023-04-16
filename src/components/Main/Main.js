import React from 'react'
import { useEffect ,useRef} from 'react'
  


const Main = (props) => {
 const btnRef =useRef(null)
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
    <button ref={btnRef} className='redBtn' onClick={props.show}>show/hide</button>
  </>
  )
}

export default Main
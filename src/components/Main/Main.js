import React from 'react'
import { useEffect } from 'react'
const Main = (props) => {
 useEffect(()=>{
  console.log('mainjs useEffect');
  setTimeout(() => {
    alert("main.js alert2000")
  }, 2000);
  return ()=>{
    console.log("cleanup run");
  }
 },[])
  return (
  <>
    <h1>bookShop</h1>
    <button className='redBtn' onClick={props.show}>show/hide</button>
  </>
  )
}

export default Main
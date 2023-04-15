import React from 'react'

const Main = (props) => {
  return (
  <>
    <h1>bookShop</h1>
    <button className='redBtn' onClick={props.show}>show/hide</button>
  </>
  )
}

export default Main
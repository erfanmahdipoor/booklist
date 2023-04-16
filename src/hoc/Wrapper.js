import React from "react"

const Wrapper= (props)=>{
    return(
        <div className={props.center}>
            {props.children}
        </div>
    )
}
// export default Wrapper
// import React from "react";
// const Wrapper=(WrappedComponent,className)=>{
//     return(props)=>{
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     }
// }
// export default Wrapper
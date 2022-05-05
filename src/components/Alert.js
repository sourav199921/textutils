import React from 'react'

export default function Alert(props) {
   const capitalize=(word)=>{
     let str=word.toLowerCase();
     return str.charAt(0).toUpperCase()+str.slice(1);
   }

  return (props.alert &&
    <div>
       <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       {capitalize(props.alert.type)}    :    {props.alert.message} 
         {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
     </div>
      
    </div>
  )
}

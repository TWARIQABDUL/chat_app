import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function ErrorHandler(prop) {
    const [showCode,setShow]= useState(false)
    useEffect(()=>{
        if (prop.code == "ERR_NETWORK") {
            setShow(true)
        }
    },[])
  return (
    <div className='error'>
        <p> {showCode ?'Check your network conection or'  : 'some thing went wrong'} try to reload you App <Link to='#'>retry</Link></p>
    </div>
  )
}

export default ErrorHandler
import React, { useContext, useEffect, useState } from 'react'
import me from '../image/1.jpg'
import { Link } from 'react-router-dom'
import SessionContext from '../session/session'
import axios from 'axios'
function TopApp() {

    const {session} = useContext(SessionContext)
    const [profile_img, setProfile] =useState('')
    const [profile,setPro] =useState("")
    useEffect(()=>{
      axios.get(`https://testafriatemarket.000webhostapp.com/resources/users/userinfo/?user=${session}`)
      .then(res =>{ 
      setProfile(`https://testafriatemarket.000webhostapp.com/resources/img/${res.data.image}`)
      setPro(res.data.image)
      if (profile != "") {
        localStorage.setItem("profile",profile)
      }
    })
    },[profile])
  return (
    <div className='flex'>
          <h1>Appname</h1>
          <Link to={`profile?user=${session}`}>
          <img  src={profile_img != '' ? profile_img : ''} className='circle'/>
          </Link>
        </div>
  )
}

export default TopApp
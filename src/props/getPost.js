import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ErrorHandler from '../components/error';
import Post from '../components/post'
function GetPost() {
  const [userLi, setPost] = useState([]);
  const [era,setEra]=useState('')
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    axios.get("https://testafriatemarket.000webhostapp.com/resources/users/")
    .then(res =>{ 
      setPost(res.data)
      setLoading(false)
    })
    // .then(resData=>setPost(resData))
    .catch((error)=>{
      setEra(error.code)
      console.log(error.code);
    })
  },[])
  if (era != '') {
    return (<ErrorHandler code ={era}/>)
  }
  return (
    <div>
      {
      loading ? <div className = "loader"></div> :userLi.map(u=><Post key={u.ID} post={u} />)
    }</div>
  )
}

export default GetPost
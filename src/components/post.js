import React, { useContext, useState } from 'react'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { BsFillHeartFill } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {MdPublic} from 'react-icons/md'
import SessionContext from '../session/session'
import axios from 'axios'
import Comment from './comment'
function Post({ post }) {
  const [comment,showCMNT]=useState(false)
  const [posto,setPost]=useState()
  const {session} = useContext(SessionContext);
  const showComment =(some)=>{
    showCMNT(!comment)
  }
  const urls = "https://testafriatemarket.000webhostapp.com/resources/img/";
  const like =(use)=>{
    const pst_to_like = use;
    const form_data = new FormData();

    form_data.append('user',session);
    form_data.append('post',pst_to_like);
    axios({
      method:'POST',
      url:'https://testafriatemarket.000webhostapp.com/resources/users/like/',
      data:form_data,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })

  }
  return (
    <div className='post'>
      <div className='top-user'>
        <div className='useInfo'>
          <img src={urls + post.images} />
          <div className='account-info'>
          <Link to='/'>
            <h1>{post.name}</h1>
          </Link>
          <p><MdPublic/> <span>public</span></p>
          </div>
        </div>
        <FiMoreHorizontal className='right icon' />
      </div>
      <div className='media'>
        <p>{post.post}</p>
        {post.img == 0 ? '' : <img loading ="lazy" src={urls + post.img} className='post-img' />}
      </div>
      <div className='bottom-user'>
        <div>
          <BsFillHeartFill className='icon like' onClick={()=>{
            like(post.post_ID)
          }}  />
          <span>{post.likes}</span></div>
        <div>
          <FaRegComment className='icon ' onClick={()=>{
            showComment(post.post_ID)
            setPost(post.post_ID)
          }}/>
          <span>100,3</span>
        </div>
        <div><FiSend className='icon' /></div>
      </div>
      {comment ? <Comment post={posto} fun={showComment}/> :''}
    </div>
  )
}

export default Post
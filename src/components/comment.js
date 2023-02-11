import React, { useContext } from 'react'
import im from '../image/1.jpg'
import {AiOutlineClose} from 'react-icons/ai'
import SessionContext from '../session/session'
import axios from 'axios';
import { useState } from 'react';

function Comment(prop) {
    const {session}=useContext(SessionContext);
    const [c_ment, set_cmnt] = useState()
    const addComment = ()=>{
        const f_data = new FormData();
        f_data.append("user",session);
        f_data.append("comment",c_ment);
        f_data.append("post",prop.post);
    axios({
        method: 'POST',
        url: 'https://testafriatemarket.000webhostapp.com/resources/users/addcomment/',
        data: f_data,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(set_cmnt(''))
    }
  return (
    <div className='comment-holder'>
        <button className='close' onClick={()=>{
                prop.fun();

            }}>
            <AiOutlineClose />
        </button>
        <div className='text-input-box'>
            <input type='text' value={c_ment}  placeholder='type your comment..' onChange={(e)=>{
                set_cmnt(e.target.value);
            }}/>
            <button onClick={addComment}>comment</button>
        </div>
        <div className='list-comment-box'>
            <div className='comment-box'>
                <img src={im}/>
                <div className='text-coment'>
                    <h4>Twariq</h4>
                    <p>wow it nice pic{prop.post}</p>
                </div>
            </div>
            <div className='comment-box'>
                <img src={im}/>
                <div className='text-coment'>
                    <h4>Twariq</h4>
                    <p>wow it nice pic</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comment
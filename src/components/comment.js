import React, { useContext, useEffect } from 'react'
import im from '../image/1.jpg'
import { AiOutlineClose } from 'react-icons/ai'
import SessionContext from '../session/session'
import axios from 'axios';
import { useState } from 'react';
import Cometbox from './commentbox';

function Comment(prop) {
    const { session } = useContext(SessionContext);
    const [c_ment, set_cmnt] = useState()
    const [comentList, setComent] = useState([])

    
    const addComment = () => {
        const f_data = new FormData();
        f_data.append("user", session);
        f_data.append("comment", c_ment);
        f_data.append("post", prop.post);
        axios({
            method: 'POST',
            url: 'https://testafriatemarket.000webhostapp.com/resources/users/addcomment/',
            data: f_data,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then(res=>{
            let lastComment = commentList.length
            var id =0
            if (lastComment<1) {
                id = 1  
            }else{
                id = parseInt(comentList[lastComment-1].ID)+1
            }
            let Newcomment = {
                ID: id,
                coment: c_ment,
                image: localStorage.getItem("profile"),
                name: localStorage.getItem("name"),
                post: prop.post,
                user: localStorage.getItem("sessionData")
            }
            console.log("before new comment",comentList);

            setComent((prev)=> [...prev,Newcomment])
            console.log("after new comment",comentList);

             set_cmnt('')
        })
    }
    useEffect(() => {
        const cmt_data = new FormData()
        cmt_data.append('post_id', prop.post)
        axios({
            method: "POST",
            url: "https://testafriatemarket.000webhostapp.com/resources/users/addcomment/getcomment.php",
            data: cmt_data,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then(resp => {
            setComent(resp.data)
            console.log(resp.data);
        })
    }, [])
    const commentList = comentList.map(com => <Cometbox key={com.ID} list={com}/>)
    return (
        <div className='comment-holder'>
            <button className='close' onClick={() => {
                prop.fun();
            }}>
                <AiOutlineClose />
            </button>
            <div className='text-input-box'>
                <input type='text' value={c_ment} placeholder='type your comment..' onChange={(e) => {
                    set_cmnt(e.target.value);
                }} />
                <button onClick={addComment}>comment</button>
            </div>
            <div className='list-comment-box'>
                {comentList == "" ? "be first to comment" : commentList}
               
            </div>
        </div>
    )
}

export default Comment
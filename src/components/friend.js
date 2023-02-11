import axios from 'axios';
import React, { useContext, useState } from 'react'
import SessionContext from '../session/session';
import ChatHeader from './chatHeader';

function Friend({ friend }) {
    const [friends,setFriend] = useState(false)
    // const {session}=useContext(SessionContext);
  const {session} = useContext(SessionContext)
//   console.log("frienst",session)
    const askFriend = (val)=>{
        const formDt = new FormData;
        formDt.append("sender",session)
        formDt.append("reciever",val.target.value)

        axios({ // axios ask freind
            method: 'POST',
            url:"https://testafriatemarket.000webhostapp.com/resources//users/addfriends/",
            // url:"http://192.168.1.70/resources//users/addfriends/",
            data: formDt,
            config: {headers:{'Content-Type':'multipart/form-data'}}
        }).then((res)=>{
            setFriend(res.data)
            // console.log(res.data);
            // console.log(friends);
        })
    }
    // const tst = useContext(Session)
  const urls = "https://testafriatemarket.000webhostapp.com/resources/img/";

    return (
        
        <div className='friend'>
            
            <img src={urls+friend.images} alt='hello'/>
            <div className='info'>
                <p>{friend.name}</p>
                <div className='button'>
                    <button className='btn accept'
                     value={friend.userId} 
                     onClick={askFriend}>Add friend</button>
                    <button className='btn'>delete</button>
                </div>
            </div>
        </div>
    )
}

export default Friend
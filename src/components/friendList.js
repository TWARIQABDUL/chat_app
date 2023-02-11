import axios from 'axios';
import React, { useContext, useState } from 'react'
import SessionContext from '../session/session';
import ChatHeader from './chatHeader';
import {Link} from 'react-router-dom'
function FriendList({ friend }) {
    const [friends,setFriend] = useState(false)
  const {session} = useContext(SessionContext)
    // const tst = useContext(Session)
  const urls = "https://testafriatemarket.000webhostapp.com/resources/img/";

    return (
        
        <div className='friend'>
            
            <img src={urls+friend.images} alt='hello'/>
            <div className='info'>
                <p>{friend.userName}</p>
                <div className='button'>
                    <Link to={`/message/?id=${friend.userId}&&conv=${friend.conv_id}`} className='btn accept'
                    // value={friend.userId}
                     >message</Link>
                    <button className='btn'>profile</button>
                </div>
            </div>
        </div>
    )
}

export default FriendList
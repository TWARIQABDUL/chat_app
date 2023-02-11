import React from 'react'
import Chat from './chat'

function Conversation({message}) {
    if (message =='') {
    console.log("here is empty ",message);
    }
    return (
        <div className='msg-containe-content'>
            <Chat uid ={message.sender} msgbody = {message.message}/>
        </div>
    )
}

export default Conversation
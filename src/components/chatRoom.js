import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FcPrevious } from 'react-icons/fc'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import SessionContext from '../session/session'
import axios from 'axios'
import Conversation from './conversation'
import ErrorHandler from './error'
import { BsEmojiSmile } from 'react-icons/bs'
function ChatRoom() {
    const [eror, setError] = useState('')
    const [messageList, setmessageList] = useState([])
    const [message, setMessage] = useState('')
    const { session } = useContext(SessionContext)
    const [userInfo, setUserInfo] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const ulrs = window.location.search;
    const serchpar = new URLSearchParams(ulrs)
    var user = {}
    // console.log(serchpar);
    let reciever = serchpar.get('id')
    let conv_id = serchpar.get('conv')
    // console.log(conv_id);

    const sendMessage = () => {
        const messageBody = new FormData()
        messageBody.append('sender', session)
        messageBody.append('reciever', reciever)
        messageBody.append('message', message)
        messageBody.append('conv_id', conv_id)
        if (message != "") {
            axios({
                method: 'POST',
                url: "https://testafriatemarket.000webhostapp.com/resources/users/sendmessage/",
                data: messageBody,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            }).then((res) => {
                // console.log(res.data)
                let lastelem = messageList.length
                var newID = 0
                if (lastelem<0) {
                    newID = 1
                }else{
                    newID = messageList[lastelem - 1].ID + 1
                }
                let newmessage = {
                    ID: newID,
                    sender: session,
                    reciever: reciever,
                    conv_id: conv_id,
                    message: message
                }
                setmessageList((prev) => [...prev, newmessage])
                setMessage("")
            });
        }


    }

    useEffect(() => {
        const childs = document.querySelector("textarea");
        childs.addEventListener('keyup', e => {
            childs.style.height = `54px`;

            let Height = e.target.scrollHeight;
            childs.style.height = `${Height}px`;
        })
    }, [])
    const getMessages = async () => {
        axios.get(`https://testafriatemarket.000webhostapp.com/resources/users/sendmessage/getmessages.php?conv_id=${conv_id}&r_c=${reciever}`)
            .then((res) => {
                setmessageList(res.data)
            })
            .catch((error) => {
                setError(error.code)

            })
    };

    const usersInfo = async () => {
        await fetch(`https://testafriatemarket.000webhostapp.com/resources/users/getuser/?user=${reciever}`)
            .then((res) => res.json())
            .then((data) => { setUserInfo(data) })
        setLoaded(true)
    }
    useEffect(() => {
        getMessages();
        usersInfo();

    }, [])
    if (eror != '') {
        return (<ErrorHandler code={eror} />)
    } else {
        return (
            <div className='main-message-window'>
                <div className='top-chat-header'>
                    <div className='info'>
                        <Link to="../friends">
                            <FcPrevious className='icon' />
                        </Link>
                        <img src={
                            loaded ? `https://testafriatemarket.000webhostapp.com/resources/img/${userInfo.profile}` : ""
                        } />
                        <h1>{loaded ? userInfo.name : "..."}</h1>
                    </div>
                    <FiMoreHorizontal className='icon' />
                </div>
                <div className='message-body-container'>
                    {messageList.map((message) => <Conversation key={message.ID} message={message} />)}
                </div>
                <div className='message-btn-holder'>
                    <div className='emojis'><BsEmojiSmile /></div>
                    <div className='user-input'>
                        <textarea
                            placeholder='Write a message'
                            onChange={(e) => {
                                setMessage(e.target.value)

                            }
                            } value={message}
                        ></textarea>
                    </div>
                    <div className='user-btn-send'>
                        <button className='btn send' onClick={sendMessage}> <FiSend className='icon' /> </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatRoom
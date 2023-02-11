import React, { useContext, useEffect, useState } from 'react'
import Message from '../components/message'
import axios, { Axios } from 'axios'
import SessionContext, { SessionProvider } from '../session/session';
import ErrorHandler from '../components/error';
function GetMessage() {
    const { session } = useContext(SessionContext)
    const url = 'https://testafriatemarket.000webhostapp.com/resources/img/1.jpg';
    const [message, setMessages] = useState([]);
    const [eror,setError]=useState('')
  const [loading,setLoading] = useState(true)


    useEffect(() => {
        axios.get(`https://testafriatemarket.000webhostapp.com/resources/users/sendmessage/messagelist.php?me=${session}`)
        .then((res) => {
            setMessages(res.data)
            setLoading(false)
        })
            .catch((error)=>{
                setError(error.code)
                setLoading(false)
            })
    }, [])
    if (eror != '' ) {
        return(<ErrorHandler code ={eror}/>)
    }else{
    const mesages = message.map(message => <Message key={message.userid} msg={message} />)
    return (
        <div>
             { loading ? <div className='loader'></div> : mesages}
        </div>
    )
    }
}

export default GetMessage
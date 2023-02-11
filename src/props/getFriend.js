import axios from 'axios';
import React,{useContext, useEffect, useState} from 'react'
import ErrorHandler from '../components/error';
import Friend from '../components/friend'
import SessionContext from '../session/session';
function GetFriend() {
    const {session} = useContext(SessionContext)
    const [usersList,setUserList] = useState([]);
    const [eror,setError]=useState('')
  const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://testafriatemarket.000webhostapp.com/resources/users/freinds/?Id=${session}`)
        .then(res=>{
            setUserList(res.data)
            setLoading(false)
        })
        .catch((error)=>{
            setError(error.code)
            setLoading(false)
        })

        // console.log(usersList);
    },[])
    if (eror != '' ) {
        return(<ErrorHandler code ={eror}/>)
    }else{
    return(
        <div>
            {loading ? <div className='loader'></div> : usersList.map(friend => <Friend key={friend.userId} friend={friend} />)}
        </div>
    )
    }
}

export default GetFriend
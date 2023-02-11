import axios from 'axios';
import React,{useContext, useEffect, useState} from 'react'
import ErrorHandler from '../components/error';
import Friend from '../components/friend'
import FriendList from '../components/friendList';
import SessionContext from '../session/session';

function GetFriendList() {
    const {session} = useContext(SessionContext)
    const [usersList,setUserList] = useState([]);
    const [eror,setError]=useState('')
  const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://testafriatemarket.000webhostapp.com/resources/users/freinds/allfriends/?me=${session}`)
        .then(res=>{
            setUserList(res.data)
            setLoading(false)})
        .catch((error)=>{
            setError(error.code)
            setLoading(false)
        })
        // .then(friend=>setUserList(friend))
    },[])
    if (eror != '' ) {
        return(<ErrorHandler code ={eror}/>)
    }else{
    return(
        <div>
            {loading ? <div className='loader'></div> :
            usersList.map(friend => <FriendList key={friend.ID} friend={friend} />)}
        </div>
    )}
}

export default GetFriendList
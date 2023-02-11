import React,{useState,useEffect} from 'react'
import UserInfo from './userinfo'

function GetUserInfo(user) {
    const id =user.id
    const [info,setInfo] = useState([])
    console.log(id);
    useEffect(() => {
        fetch(`http://192.168.1.70/resources/users/userinfo/?user=${id}`)
            .then(res => res.json())
            .then(resdt => setInfo(resdt))
    }, [])
    
    if (info =="")return
    const users = info.map(xyz => <UserInfo data={xyz}/>)
    
  return (
    <div>
        {users}
    </div>
    
    // <UserInfo data={pp}/>
  )
}

export default GetUserInfo
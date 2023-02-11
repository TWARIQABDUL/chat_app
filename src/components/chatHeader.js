import React,{useEffect,useState}from 'react'
import GetFriend from '../props/getFriend';
import GetFriendList from '../props/getFriendList';
import FriendList from './friendList';

function ChatHeader() {
    const [askFriend,showFreind] = useState(false);

    useEffect(()=>{
        const list = document.getElementById('list');
        const friendList = document.getElementById('freinds');
        list.addEventListener('click',()=>{
            showFreind(true)
        })
        friendList.addEventListener('click',()=>{
            showFreind(false)
        })
    },[])
  return (<>
    <div className='freinds-header'>
        <div className='btn-head' id='freinds'>
            freinds
        </div>
        <div className='btn-head' id='list'>
            list
        </div>
    </div>
    {askFriend ? <GetFriendList/> : <GetFriend/> }
    </>
  )
}

export default ChatHeader
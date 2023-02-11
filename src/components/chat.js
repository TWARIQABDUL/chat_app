import React, { useContext } from 'react'
import SessionContext from '../session/session'
import Left from './left'
import Right from './right'

function Chat(props) {
    const {session} = useContext(SessionContext)
    const sender = props.uid

    if (sender == session) {
        return(
            <Right msg={props.msgbody}/>
        )
    }else{
        return(
            <Left  msg={props.msgbody}/>
        )
    }
}

export default Chat
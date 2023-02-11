import React from 'react'
import Notification from '../components/notification'

function GetNotification() {
    const url = 'http://192.168.1.67/resources/img/1.jpg'
    const notificationList=[
        {
            id:1,
            user:'twariq',
            body:'twariq has bd to day',
            img: url
        },
        {
            id:2,
            user:'twariq',
            body:'twariq has bd to day'
        },
        {
            id:3,
            user:'twariq',
            body:'twariq has bd to day'
        },
    ]
    const notifications = notificationList.map(notification => <Notification key={notification.id}  notif={notification}/>)
  return (
    <div>
        {notifications}
    </div>
  )
}

export default GetNotification
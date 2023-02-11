import React from 'react'
import {Link} from 'react-router-dom'
function Message({ msg }) {

  return (
    <div className='friend msgs'>

      <img src={`https://testafriatemarket.000webhostapp.com/resources/img/${msg.image}`} alt='profile' className='mesagepic' />
      <Link to={`/message/?id=${msg.userid}&conv=${msg.convId}`}>
      <div className='info'>
        <p>{msg.name}</p>
        <p>{msg.latest}</p>
      </div>
      </Link>
    </div>
  )
}

export default Message
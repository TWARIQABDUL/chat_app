import React from 'react'
import { FcPrevious } from 'react-icons/fc'
import { Link } from 'react-router-dom'

function Imagewindow(props) {
  return (
    <div className='story-preview' style={{ backgroundImage: `url(${props.img})` }}>
            <Link to='/'>
                {/* <img src={img_URL}/> */}
                <FcPrevious /><p>back</p>
            </Link>
            {props.txt}
            <button>Post</button>
        </div>
  )
}

export default Imagewindow
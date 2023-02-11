import React,{useContext} from 'react'
import { AiOutlineHome, AiOutlineShop } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { TiMessages } from 'react-icons/ti'
import { MdOutlineNotificationAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Header() {
    // const sms = useContext(Session)
    return (
        <div className='header'>
            <div className='sm-screen'>
                <nav>
                    <ul>
                        <li><Link to='/'> <AiOutlineHome className='icon' /></Link></li>
                        <li><Link to='/friends'> <FaUserFriends className='icon'/></Link></li>
                        <li><Link to='/messages'> <TiMessages className='icon'/></Link></li>
                        <li><Link to='/notifications'> <MdOutlineNotificationAdd className='icon'/></Link></li>
                        <li><Link to='/market'> <AiOutlineShop className='icon'/></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
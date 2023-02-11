import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/header'
import { AiOutlineLogout } from 'react-icons/ai'
import im from '../image/1.jpg'
import GetUserInfo from '../props/getUserInfo'
import UserInfo from '../props/userinfo'
import SessionContext from '../session/session'
function Profile() {
    const [preview, setPreview] = useState(null)
    const [info, setInfo] = useState([])
    const [img_URL, setImg_URL] = useState(null)
    const [isloading, setLoading] = useState(false)
    const url = window.location.search
    const sear = new URLSearchParams(url)
    const user = sear.get('user')
    const [postText, setText] = useState('')
    const formData = new FormData();
    const { setSession } = useContext(SessionContext)
    const navigate = useNavigate()
    const img_url = 'https://testafriatemarket.000webhostapp.com/resources/img'
    useEffect(() => {
        fetch(`https://testafriatemarket.000webhostapp.com/resources/users/userinfo/?user=${user}`)
            .then(res => res.json())
            .then(resdt => setInfo(resdt))
    }, [])
    const Logout = () => {
        localStorage.removeItem("sessionData");
        setSession(null)
        navigate('/')
    }
    const post = () => {
        setLoading(true)
        formData.append('userId', user)
        formData.append('image', img_URL)
        formData.append('post', postText)
        console.log(img_URL);
        axios({
            method: "POST",
            url: 'https://testafriatemarket.000webhostapp.com/resources/users/uploadprofile/upload/index.php',
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then(ex => {
            setLoading(false)
            setText('')
            setPreview(null)
        })
    }
    useEffect(() => {
        const input = document.getElementById('im_post')
        input.addEventListener('change', (e) => {
            const file = input.files[0]
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                setPreview(reader.result)
                setImg_URL(file)
            };
        })
    })
    return (
        <div>
            <Header />
            <div className='main-profile'>
                <img src={`${img_url}/${info.image}`} className='profile-img' />
                <div className='user-info'>
                    <div className='infos'>
                        <p>{info.name}</p>
                        <p>{info.num_freind} friends</p>
                    </div>
                    <div className='more'>
                        <p>more</p>
                    </div>
                </div>
                <div className='butons-hold'>
                    <Link to='/uploadprofile'>Edit Profile</Link>
                    <button onClick={Logout}><AiOutlineLogout /> Logout</button>
                </div>
                <div className='post-some'>
                    <textarea cols='3' value={postText} onChange={(e) => {
                        setText(e.target.value)
                    }}></textarea>
                    <input type='submit' value='Post' onClick={post} />

                </div>
                <div className='add-image'>
                    {preview != null ? <div className='im_preview'> <img src={preview} /></div> : ''}
                    {isloading ? <div className='loader'></div> : ''}
                    <input type='file' id='im_post' accept='image/jgp,image/png, image/jpeg' hidden />
                    <label htmlFor='im_post'>add photo</label>
                </div>
            </div>
        </div>
    )
}

export default Profile
import React, { useEffect, useRef, useId, useState, useContext } from 'react'
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BiLogIn } from 'react-icons/bi'
import SessionContext from '../session/session'
import axios, { Axios } from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
// const fs = require('fs')
function Login() {
    const [load, setLoad] = useState(false)
    const { setSession } = useContext(SessionContext)
    const { name } = useContext(SessionContext)
    const [error, setEror] = useState('')
    const [uname, setUname] = useState('');//store user name
    const [pwd, setPwd] = useState('');//store password as pwd
    const navigate = useNavigate()
    // register
    const [userName, setUsername] = useState('');//store password as pwd
    const [email, setEmail] = useState('');//store password as pwd
    const [tel, setTel] = useState('');//store password as pwd
    const [password, setPassword] = useState('');//store password as pwd
    const [rpwd, setrPwd] = useState('');//store password as pwd
    const [gender,setGender]=useState('')
    function onsub(e) {//function to hundle submit login form
        e.preventDefault();
        setLoad(true)
        let formData = new FormData()
        var data = {
            name: uname,
            password: pwd
        }
        formData.append('name', uname)
        formData.append('pwd', pwd)
        axios({
            method: 'POST',
            // url: 'http://192.168.1.70/resources/users/login.php',
            url: 'https://testafriatemarket.000webhostapp.com/resources/users/login.php',
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then((resp) => {
            // var dd = JSON.parse(resp.data)
            if (resp.status == 200 && resp.data.status == 'succes') {
                window.localStorage.setItem('sessionData', JSON.stringify(resp.data.uid));
                navigate('/')
                setSession(resp.data.uid)
                setLoad(false)
            } else {
                setEror(resp.data)
            }
        }).catch(err =>{
            setLoad(false)
        })
    }
    const inputValue = (e) => {// function to get value from user name in login form
        setUname(e.target.value)
    }
    const pwdValue = (e) => {// function to get value from user password in login form
        setPwd(e.target.value)
    }
    const getUserName = (e) => {// function to get value from user name in register form
        setUsername(e.target.value)
    }
    const getEmail = (e) => {// function to get value from user email from register form
        setEmail(e.target.value)
    }
    const getPhone = (e) => {// function to get value from user phone number from register form
        setTel(e.target.value)
    }
    const getPassword = (e) => {// function to get value from user password in register form
        setPassword(e.target.value)
    }
    const rpwdValue = (e) => {// function to get value from user password in login form
        setrPwd(e.target.value)
    }
    const getRadio = (e)=>{
        setGender(e.target.value)
    }
    // console.log(Session);
    const register = (e) => {//register a new user
        e.preventDefault();
        setLoad(true)
        let regFormData = new FormData();
        regFormData.append('user', userName)
        regFormData.append('email', email)
        regFormData.append('phone', tel)
        regFormData.append('gender', gender)
        regFormData.append('password', password)
        regFormData.append('retype', rpwd)
        axios({
            method: 'POST',
            url: 'https://testafriatemarket.000webhostapp.com/resources/users/register/',
            // url: 'http://192.168.1.70/resources/users/register/',
            data: regFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then((resp) => {
            console.log(resp.data.rText);
            if (resp.data.rText == "succes" && resp.status == 200) {
                window.localStorage.setItem('sessionData', JSON.stringify(resp.data.user));
                setSession(resp.data.user)
                setLoad(false)
                navigate('/')
                // setSession(resp.data.user)
                // console.log(resp.data);
            }
            // console.log();
        }).catch(error =>{
            setLoad(false)
        })
    }

    useEffect(() => {

        const lgbtn = document.getElementById('lgbtn');
        const rgbtn = document.getElementById('rgbtn');
        const login = document.getElementById('login')
        const register = document.getElementById('register')
        lgbtn.addEventListener('click', () => {
            rgbtn.classList.remove('active')
            login.style.display = 'block';

            // login.style.transform = 'translateX(0)';
            lgbtn.classList.add('active')
            register.style.display = 'none';
            // register.style.transform = 'translateX(100%)';
        })
        rgbtn.addEventListener('click', () => {
            lgbtn.classList.remove('active')
            rgbtn.classList.add('active')
            register.style.display = 'block';
            login.style.display = 'none';
        })
    }, [])
    return (
        <div className='main'>
                        <p>{error}</p>
            <form>
                <div className='title'>
                    <h1 id='lgbtn' className='active'>Login{name}</h1>
                    <h1 id='rgbtn'>register</h1>
                </div>
                <section>
                    <div className='logins' id='login'>
                        <div>
                            <input type='text'
                                placeholder='Username'
                                onChange={inputValue} />
                            <AiOutlineUser className='icon' />
                        </div>
                        <div>
                            <input type='Password'
                                placeholder='Password'
                                onChange={pwdValue} />
                            <RiLockPasswordLine className='icon' />
                        </div>
                        <div>
                            {load ? <div className='loader'></div> : <input type='submit' value='login' onClick={onsub} />}
                        </div>
                    </div>
                    <div className='registers' id='register'>
                        <p>{error}</p>
                        <div className='inputs'>
                            <input type='text'
                                placeholder='Username'
                                onChange={getUserName} />
                            <AiOutlineUser className='icon' />

                        </div>
                        <div className='inputs'>
                            <input type='email'
                                placeholder='Email'
                                onChange={getEmail} />
                            <AiOutlineMail className='icon' />
                        </div>
                        <div className='inputs'>
                            <input type='tel'
                                placeholder='Phone'
                                onChange={getPhone} />
                            <AiOutlinePhone className='icon' />
                        </div>
                        <div className='radio'>
                            male<input type='radio' value='M' name='gender' onChange={getRadio}/>
                            female<input type='radio' value='F' name='gender' onChange={getRadio}/>
                        </div>
                        <div className='inputs'>
                            <input type='password'
                                placeholder='Password'
                                onChange={getPassword} />
                            <RiLockPasswordLine className='icon' />
                        </div>
                        <div className='inputs'>
                            <input type='password'
                                placeholder='Re Type Password'
                                onChange={rpwdValue} />
                            <RiLockPasswordLine className='icon' />
                        </div>
                        <div className='inputs'>
                        {load ? <div className='loader'></div> : <input type='submit' value='register' onClick={register} />}
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default Login
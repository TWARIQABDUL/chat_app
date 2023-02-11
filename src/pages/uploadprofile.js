import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FcPrevious } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import im from '../image/1.jpg'
import SessionContext from '../session/session'


function UploadPic() {



  const [status,setStatus] = useState(null)
  const {session} = useContext(SessionContext)
  const [img_URL, setURL] = useState()
  const [isloading,setLoading]=useState(false)
  const LoadImage = (prop) => {
    return (
      <div className='main-container'>
        <img src={prop.image} />
        {isloading ? <div className='loader'></div> :<button onClick={prop.submit}>Upload Profile</button>}
      </div>
    )
  }
  const uploadImage=()=>{
    const profile = new FormData()
    profile.append('user_id',session)
    profile.append('image',img_URL)
    setLoading(true)
    axios({
      method: "POST",
      url: 'https://testafriatemarket.000webhostapp.com/resources/users/uploadprofile/',
      data: profile,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(res =>{setStatus(res.data); setLoading(false)})
    .catch(erros =>{
      console.log(erros.message);
    })
  }
  const [isuplod, setUpload] = useState(false)
  const [imag,setImag]= useState()
  useEffect(() => {
    const label = document.querySelector('label');
    const inputFile = document.querySelector('input');

    label.addEventListener('click', () => {
      inputFile.addEventListener('change', (e) => {
        const file = inputFile.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          setImag(reader.result)
          setUpload(true)
          setURL(file)
        };
      })
    })
  }, [])
  return (
    <div className='back'>
      {status != null ? <div className='error'><h1>{status.message}</h1></div> : <></>}
      <Link to='..' relative='path'>
        <FcPrevious /><p>back</p>
      </Link>

      {isuplod ? <LoadImage image = {imag} submit={uploadImage}/> : <><label htmlFor='file'>select profile</label> <input type='file' id='file' accept='image/png,image/jpg,image/jpeg' hidden /> </>}

    </div>
  )
}

export default UploadPic
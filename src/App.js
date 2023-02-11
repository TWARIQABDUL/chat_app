import { useContext, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Post from './components/post';
import Login from './pages/log';
import GetPost from './props/getPost';
import GetStory from './props/getStory';
import Story from './props/story';
import  SessionContext from './session/session';
import me from './image/1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import TopApp from './components/topApp';
function App() {
  const {session} = useContext(SessionContext)

  // console.log(session);
const navigate = useNavigate()
  useEffect(()=>{
  // const {session} = useContext(SessionContext)

    if (session == null) {
      navigate('/login') 
    }
  },[])
    return(
      <div className='App'>
        <TopApp/>
        {/* <div className='flex'>
          <h1>App name</h1>
          <Link to={`profile?user=${session}`}>
          <img src={me} className='circle'/>
          </Link>
        </div> */}
        <Header />
        
        <Story />
        <GetPost />
      </div>
    )
  
}

export default App;

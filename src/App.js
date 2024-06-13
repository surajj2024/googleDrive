
import { useState } from 'react';
import './App.css';
import Data from './components/Data';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import { auth, provider } from './firebase';

function App() {
  const [sidebar, setSidebar] = useState(true);

  const [user, setUser] =  useState(null);
  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(({ user }) => setUser(user) )
    .catch(err => alert(err.message))
  }

  return (
    <>
    {
      user ? (
        <>
          <Header photoURL = {user.photoURL} setSidebar={setSidebar} />
          <div className="App">
            <Home sidebar={sidebar} />
          </div>
        </>  
      ) : (
        <div className='loginWrapper'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png' alt="gdrive"  />
          <button onClick={signIn} >Sign in to Google Drive</button>
        </div>
      )
    }
      
    </>
    
  );
}

export default App;

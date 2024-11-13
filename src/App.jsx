import Chat from './Components/ChatLayout/Chat';
import Details from './Components/ChatLayout/Details';
import UserList from './Components/ChatLayout/Users/UserList';
import Auth from './Components/Auth/Auth';
import Notification from './Components/ReuseComp/Notification';
import LoadingProvider from './Components/Auth/LoadingContext';
import { useEffect, useRef } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import useUserStore from './lib/Store/useUserStore';

function App() {
  const { currentUser, fetchUserInfo } = useUserStore();

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, (user)=>{
      fetchUserInfo(user.id); // fetch userInfo through id
    })

    return () => {
      unSub();
    }
  },[fetchUserInfo])
  
  return (
    <div className="w-[90vw] h-[90vh] bg-slate-900 flex rounded-xl overflow-hidden">
      {
        currentUser ? (
          <>
            <UserList />
            <Chat />
            <Details />
        
          </>
        ) : (
              <LoadingProvider>
                <Auth/>
              </LoadingProvider>
            )
      }
      <Notification />
    </div>
  )
}

export default App;

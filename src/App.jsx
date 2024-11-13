import Chat from './Components/ChatLayout/Chat';
import Details from './Components/ChatLayout/Details';
import UserList from './Components/ChatLayout/UserChats/UserList';
import Auth from './Components/Auth/Auth';
import Notification from './Components/ReuseComp/Notification';
import LoadingProvider from './Components/Auth/LoadingContext';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import useUserStore from './lib/Store/useUserStore';

function App() {
  const { currentUser, fetchUserInfo } = useUserStore();

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, (user)=>{
      if(user){
        fetchUserInfo(user.uid); // fetch userInfo through id
      }
      else{
        fetchUserInfo(null);
      }
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

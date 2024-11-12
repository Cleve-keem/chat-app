import Chat from './Components/ChatLayout/Chat';
import Details from './Components/ChatLayout/Details';
import UserList from './Components/ChatLayout/Users/UserList';
import Auth from './Components/Auth/Auth';
import Notification from './Components/ReuseComp/Notification';
import LoadingProvider from './Components/Auth/LoadingContext';

function App() {
  const user = false;
  
  return (
    <div className="w-[90vw] h-[90vh] bg-slate-900 flex rounded-xl overflow-hidden">
      {
        user ? (
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

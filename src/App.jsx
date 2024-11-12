import Chat from './Components/ChatLayout/Chat';
import Details from './Components/ChatLayout/Details';
import UserList from './Components/ChatLayout/Users/UserList';
import Auth from './Components/Auth/Auth';
import Notification from './Components/ReuseComp/Notification';

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
        ) : (<Auth/>)
      }
      <Notification />
    </div>
  )
}

export default App;

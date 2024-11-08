import Chat from './Components/ChatLayout/Chat';
import Details from './Components/ChatLayout/Details';
import UserList from './Components/ChatLayout/Users/UserList';
import SharedLayout from './Components/ChatLayout/SharedLayout';

function App() {
  const user = false;
  
  return (
    <div className="w-[100vw] h-[100vh] md:w-[90vw] md:h-[90vh] bg-slate-900 flex rounded-xl overflow-hidden">
      {
        user ? (
          <>
            <UserList />
            <Chat />
            <Details />
        
          </>
        ) : (<SharedLayout/>)
      }
    </div>
  )
}

export default App;

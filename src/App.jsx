import Chat from './Components/Chat';
import Details from './Components/Details';
import UserList from './Components/User/UserList';


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
        ) : (<Login />)
      }
    </div>
  )
}

export default App;

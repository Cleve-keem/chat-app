import Chat from './Components/Chat';
import Details from './Components/Details';
import UserList from './Components/User/UserList';

function App() {
  return (
    <div className="w-[100vw] h-[100vh] md:w-[90vw] md:h-[90vh] bg-green-300 bg-opacity-30 flex">
      <UserList />
      <Chat />
      <Details />
    </div>
  )
}

export default App

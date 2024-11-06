import Chat from './Components/Chat';
import Details from './Components/Details';
import List from './Components/List';

function App() {
  return (
    <div className="flex">
      <List />
      <Chat />
      <Details />
    </div>
  )
}

export default App

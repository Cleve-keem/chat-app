import {useState} from 'react';

const users = [
    {
      id: 1,
      name: "Alice",
      profilePicture: "https://example.com/images/alice.jpg",
      status: "Online",
      lastSeen: "2024-11-06T12:34:56Z",
      messages: [
        { 
          id: 101, 
          senderId: 1, 
          receiverId: 2, 
          content: "Hi, how are you?", 
          timestamp: "2024-11-06T12:30:00Z", 
          read: true 
        },
        { 
          id: 102, 
          senderId: 2, 
          receiverId: 1, 
          content: "I'm good! How about you?", 
          timestamp: "2024-11-06T12:31:00Z", 
          read: false 
        },
      ]
    },
    {
      id: 2,
      name: "Bob",
      profilePicture: "https://example.com/images/bob.jpg",
      status: "Offline",
      lastSeen: "2024-11-06T11:45:00Z",
      messages: [
        { 
          id: 103, 
          senderId: 2, 
          receiverId: 1, 
          content: "Are you available for a call later?", 
          timestamp: "2024-11-06T11:40:00Z", 
          read: true 
        },
        { 
          id: 104, 
          senderId: 1, 
          receiverId: 2, 
          content: "Yes, let's do it.", 
          timestamp: "2024-11-06T11:42:00Z", 
          read: false 
        },
      ]
    },
    {
      id: 3,
      name: "Charlie",
      profilePicture: "https://example.com/images/charlie.jpg",
      status: "Away",
      lastSeen: "2024-11-06T10:20:00Z",
      messages: [
        { 
          id: 105, 
          senderId: 3, 
          receiverId: 1, 
          content: "Don't forget the meeting at 3 PM.", 
          timestamp: "2024-11-06T09:15:00Z", 
          read: false 
        },
      ]
    }
];
  

function ChatList(){
    const [add, setAdd] = useState(false);
    return(
        <div className="chatlist">
            <div className="addUser flex items-center gap-2 p-4">
                <div className="search flex items-center flex-1 bg-[#36454f] px-2 py-1 gap-2 rounded-[5px]">
                    <img 
                        className="w-4 h-4 object-fit" 
                        src="search.png" 
                        alt="search icon" />
                    <input
                        className="flex-1 bg-inherit outline-none placeholder:italic" 
                        type="text"
                        placeholder="search..." 
                    />
                </div>
                <div className="addIcon bg-[#36454f] p-1 rounded-[5px]">
                    <img 
                        className="w-5 p-1"
                        src={add? "minus.png" : "plus.png"}
                        alt="plus icon"
                        onClick={()=>setAdd(!add)}
                    />
                </div>
            </div>
            <ul className="userChat">
                <li className="chatInfo flex p-4 gap-2 border-[#36454f] border-b-2">
                    <img
                        className="border-2 border-white w-12 h-12 rounded-full object-fit"
                        src="avatar.png"
                        alt="" 
                    />
                    <div className="text">
                        <h3>Edimalo</h3>
                        <p className='text-[12px] text-[#e5e4e2]'>Lorem ipsum dolor sit amet</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default ChatList;
import {useState} from 'react';

const users = [
    {
      id: 1,
      name: "Alice",
      profilePicture: "avatar.png",
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
      profilePicture: "avatar.png",
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
      id: 4,
      name: "Edimalo",
      profilePicture: "avatar.png",
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
    },
    {
      id: 5,
      name: "Ayo isreal",
      profilePicture: "avatar.png",
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
    },
    {
      id: 5,
      name: "jimme",
      profilePicture: "avatar.png",
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
    },
    {
      id: 6,
      name: "Favour",
      profilePicture: "avatar.png",
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
    },
    {
      id: 7,
      name: "Twin",
      profilePicture: "avatar.png",
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
    },
    {
      id: 8,
      name: "Esther",
      profilePicture: "avatar.png",
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
    },
    {
      id: 9,
      name: "Bashir",
      profilePicture: "avatar.png",
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
        <div className="chatlist flex-1 overflow-y-scroll overflow-x-hidden no-scrollbar">
            <div className="addUser flex items-center gap-4 p-4">
                <div className="search flex items-center flex-1 bg-[#36454f] px-2 py-1 gap-2 rounded-[5px]">
                    <img 
                        className="w-4 h-4 object-fit" 
                        src="search.png" 
                        alt="search icon" />
                    <input
                        className="flex-1 w-full bg-inherit outline-none placeholder:italic" 
                        type="text"
                        placeholder="search..." 
                    />
                </div>
                <div className="addIcon bg-[#36454f] p-1 rounded-[5px]">
                    <img 
                        className="w-5 p-1"
                        src={add ? "minus.png" : "plus.png"}
                        alt="plus icon"
                        onClick={()=>setAdd(!add)}
                    />
                </div>
            </div>
            <ul className="userChat">
                {users.map((user, index) => (

                <li key={index} className="chatInfo flex flex-1 items-center p-4 gap-2 border-[#36454f] border-b-2">
                    <img
                        className="border-2 border-white w-12 h-12 rounded-full object-fit"
                        src={user ? user.profilePicture : "avatar.png"}
                        alt="user profile" 
                    />
                    <div className="texts flex flex-col">
                        <span className='text-[14px]'>{user.name}</span>
                        {user.messages.map((message, i) => (
                            <p key={i} className='text-[11px] text-[#e5e4e2]'>{message.content}</p>
                        ))}
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}
export default ChatList;
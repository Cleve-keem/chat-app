import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import useUserStore from "../../../lib/Store/useUserStore";
import AddUser from "./addUser";
import useChatStore from "../../../lib/Store/useChatStore";

function ChatList() {
  const [chats, setChats] = useState([]);
  const [add, setAdd] = useState(false);

  const { currentUser } = useUserStore();
  const { changeChat } = useChatStore();

  useEffect(() => {
    if (!currentUser || !currentUser.id) return;

    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const chatList = res.data()?.chats || []; // Ensure chatList is defined

        const promises = chatList.map(async (chat) => {
          const userDocRef = doc(db, "users", chat.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();
          return { ...chat, user };
        });

        const chatData = await Promise.all(promises);

        setChats(
          chatData.sort((a, b) => {
            return b.updatedAt - a.updatedAt;
          })
        );
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  const handleSelect = async (chat) => {
    changeChat(chat.chatId, chat.user);
  };

  return (
    <div className="chatlist flex-1 overflow-y-scroll overflow-x-hidden no-scrollbar">
      <div className="addUser flex items-center gap-4 p-4 relative">
        <div className="search flex items-center flex-1 bg-[#36454f] px-2 py-1 gap-2 rounded-[5px]">
          <img
            className="w-4 h-4 object-fit"
            src="search.png"
            alt="search icon"
          />
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
            onClick={() => setAdd(!add)}
          />
        </div>
      </div>
      <ul className="userChat">
        {chats?.map((chat) => (
          <li
            key={chat.chatId}
            className="chatInfo flex flex-1 items-center p-4 gap-2 border-[#36454f] border-b-2"
            onClick={() => {
              handleSelect(chat);
            }}
          >
            <img
              className="border-2 border-white w-12 h-12 rounded-full object-fit"
              src="avatar.png"
              alt="user profile"
            />
            <div className="texts flex flex-col">
              <span className="text-[14px]">{chat.user.username}</span>
              <p className="text-[11px] text-[#e5e4e2]">{chat.lastMessage}</p>
            </div>
          </li>
        ))}
        ;
      </ul>
      {add && <AddUser /> }
    </div>
  );
}
export default ChatList;

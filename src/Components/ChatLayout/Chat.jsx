import phoneIcon from "../../../public/phone.png";
import micIcon from "../../../public/mic.png";
import infoIcon from "../../../public/info.png";
import videoIcon from "../../../public/video.png";
import pictureIcon from "../../../public/img.png";
import cameraIcon from "../../../public/camera.png";
import emoji from "../../../public/emoji.png";
import EmojiPicker from "emoji-picker-react";
import avatar from "../../../public/avatar.png";
import IconList from "../ReuseComp/IconList";
import { useEffect, useRef, useState } from "react";
import useUserStore from "../../lib/Store/useUserStore";
import useChatStore from "../../lib/Store/useChatStore";
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

const topIcons = [phoneIcon, videoIcon, infoIcon];
const bottomLeftIcons = [pictureIcon, cameraIcon, micIcon];
const bottomRightIcons = [emoji]

function Chat(){
    const [chat, setChat] = useState();
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const {currentUser} = useUserStore();
    const {chatId, userInfo} = useChatStore();

    const endRef = useRef(null);

    useEffect(()=>{
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [])

    useEffect(()=>{
        const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
            setChat(res.data())
        });
        return () => unSub();
    },[chatId.id])

    
    const handleEmoji = (e) =>{
        setvalue((state) => state + e.emoji);
        setOpen(false);
    }

    const handleSend = async () => {
        if (text === "") return;

        try{
            await updateDoc(doc(db, "chats", chatId), {
                message:arrayUnion({
                    senderId: currentUser.id,
                    text,
                    createdAt: new Date()
                })
            })

            // TRACKING THE LAST_MESSAGE
            const userIDs = [currentUser.id, userInfo.id];

            userIDs.forEach(async (id) => {
                const userChatsRef = doc(db, "userchats", id) // LOCATING USERCHATS DOCUMENT
                const userChatsSnapshot = await getDoc(userChatsRef);
    
                if (userChatsSnapshot.exists()){
                    const userChatsData = userChatsSnapshot.data()
    
                    const chatIndex = userChatsData.chats.findIndex(item => item.chatId === chatId);
    
                    userChatsData.chats[chatIndex].lastMessage = text;
                    userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
                    userChatsData.chats[chatIndex].updatedAt = Date.now();
    
                    await updateDoc(userChatsRef, {
                        chats:userChatsData.chats
                    }) 
                }
            });


            // await updateDoc()
        }
        catch(error){
            console.log(error.message)
        }

    }

    console.log("chatId",chatId)
    // console.log("This is the currentUser ", currentUser)
    
    return (
        <div className="chat flex flex-col flex-2 border border-[#36454f]">
            <div className="top flex items-center justify-between p-4 border-b-2 border-[#36454f]">
                <div className="user flex items-center gap-4">
                    <img className="w-14 rounded-full border-2 border-white object-cover" src="avatar.png" alt="user avatar" />
                    <div className="texts">
                        <h4>{userInfo.username}</h4>
                        <small>Busy...</small>
                    </div>
                </div>
                <IconList icons={topIcons} />
            </div>
            
            {/* The cneter section of the chat */}
            <div className="center p-4 flex flex-col overflow-y-scroll no-scrollbar gap-3">
                {chat?.message?.map((message) => (
                    <div className="message own max-w-[70%] flex gap-2" key={message.createdAt}>
                        {/* <img className="w-10 h-10 rounded-full object-cover border border-white" src={avatar} alt="avatar" /> */}
                        <div className="texts">
                            {message.img && <img src={message.img} alt="img" />}
                            <p className="bg-slate-500 p-3 rounded-[10px]">{message.text}</p>
                            {/* <span>1 mins ago</span> */}
                        </div>
                    </div>
                ))}
                <div ref={endRef}></div>
            </div>

            {/* bottom section of the chat app */}
            <div className="bottom flex items-center justify-between border-t-2 border-[#36454f] gap-2 p-4 mt-auto">
                <IconList icons={bottomLeftIcons} />
                <input 
                    type="text"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    className="flex-1 bg-[#36454f] border-none outline-none text-white p-2 rounded-[5px]"
                    placeholder="Type a message..." 
                />
                <div className="relative">
                    <img 
                        className="w-4"
                        src={bottomRightIcons} 
                        onClick={()=>setOpen(!open)} 
                        alt="emoji icon" 
                    />
                    <div className="picker absolute bottom-10 ">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="bg-blue-600" onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}
export default Chat;
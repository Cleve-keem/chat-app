import phoneIcon from "../../../public/phone.png";
import micIcon from "../../../public/mic.png";
import infoIcon from "../../../public/info.png";
import videoIcon from "../../../public/video.png";
import IconList from "../Reuseable/IconList";
import pictureIcon from "../../../public/img.png";
import cameraIcon from "../../../public/camera.png";
import emoji from "../../../public/emoji.png";
import EmojiPicker from "emoji-picker-react";
import avatar from "../../../public/avatar.png";
import { useEffect, useRef, useState } from "react";

const topIcons = [phoneIcon, videoIcon, infoIcon];
const bottomLeftIcons = [pictureIcon, cameraIcon, micIcon];
const bottomRightIcons = [emoji]

function Chat(){
    const [open, setOpen] = useState(false);
    const [value, setvalue] = useState("");

    const endRef = useRef(null);

    useEffect(()=>{
        endRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [])
    
    const handleEmoji = (e) =>{
        setvalue((prev) => prev + e.emoji);
        setOpen(false);
    }
    
    return (
        <div className="chat flex flex-col flex-2 border border-[#36454f]">
            <div className="top flex items-center justify-between p-4 border-b-2 border-[#36454f]">
                <div className="user flex items-center gap-4">
                    <img className="w-14 rounded-full border-2 border-white object-cover" src="avatar.png" alt="user avatar" />
                    <div className="texts">
                        <h4>John Doe</h4>
                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
                    </div>
                </div>
                <IconList icons={topIcons} />
            </div>
            
            {/* The cneter section of the chat */}
            <div className="center p-4 flex flex-col overflow-y-scroll no-scrollbar gap-3">
                <div className="message max-w-[70%] flex gap-2">
                    <img className="w-10 h-10 rounded-full object-cover border border-white" src={avatar} alt="avatar" />
                    <div className="texts">
                        <p className="bg-slate-500 p-3 rounded-[10px]">Hi favour 🤪</p>
                        <span>1 mins ago</span>
                    </div>
                </div>
                <div className="message own max-w-[70%] flex gap-2">
                    <div className="texts">
                        <p className="p-3 rounded-[10px]">Hello Ayo Israel</p>
                        <span>1 mins ago</span>
                    </div>
                </div>
                <div className="message max-w-[70%] flex gap-2">
                    <img className="w-10 h-10 rounded-full object-cover border border-white" src={avatar} alt="avatar" />
                    <div className="texts">
                        <p className="bg-slate-500 p-3 rounded-[10px]">What's up?</p>
                        <span>1 mins ago</span>
                    </div>
                </div>
                <div className="message own max-w-[70%] flex gap-2">
                    <div className="texts">
                        <p className="bg-own p-3 rounded-[10px]">I am fine thank you, how are you doing today?</p>
                        <span>1 mins ago</span>
                    </div>
                </div>
                <div className="message max-w-[70%] flex gap-2">
                    <img className="w-10 h-10 rounded-full object-cover border border-white" src={avatar} alt="avatar" />
                    <div className="texts">
                        <p className="bg-slate-500 p-3 rounded-[10px]">I am doing great. I believe you are good as well</p>
                        <span>2 mins ago</span>
                    </div>
                </div>
                <div className="message own max-w-[70%] flex gap-2">
                    <div className="texts">
                        <p className="bg-slate-500 p-3 rounded-[10px]">Sure i am doing alright o. There is something i need to show you. A picture</p>
                        <span>2 mins ago</span>
                    </div>
                </div>
                <div className="message max-w-[70%] flex gap-2">
                    <img className="w-10 h-10 rounded-full object-cover border border-white" src={avatar} alt="avatar" />
                    <div className="texts">
                        <p className="bg-slate-500 p-3 rounded-[10px]">Okay send it over let me see</p>
                        <span>2 mins ago</span>
                    </div>
                </div>
                <div className="message own max-w-[70%] flex gap-2">
                    <div className="texts">
                        <img src="image.jpg" alt="" />
                        <p className="p-3 rounded-[10px]">It's a picture i took with my phone few mins ago. What do you think?</p>
                        <span>3 mins ago</span>
                    </div>
                </div>
                <div className="message max-w-[70%] flex gap-2">
                    <img className="w-10 h-10 rounded-full object-cover border border-white" src={avatar} alt="avatar" />
                    <div className="texts">
                        <p className="bg-slate-500 p-3 rounded-[10px]">It is great. I love it. i will save it.</p>
                        <span>3 mins ago</span>
                    </div>
                </div>
                <div className="message own max-w-[70%] flex gap-2">
                    <div className="texts">
                        <p className="p-3 rounded-[10px]">Thank you. Okay then. i will let you know anytime i take a new photo.</p>
                        <span>3 mins ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>

            {/* bottom section of the chat app */}
            <div className="bottom flex items-center justify-between border-t-2 border-[#36454f] gap-2 p-4 mt-auto">
                <IconList icons={bottomLeftIcons} />
                <input 
                    type="text"
                    value={value}
                    onChange={(e)=>setvalue(e.target.value)}
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
                <button className="bg-blue-600">Send</button>
            </div>
        </div>
    )
}
export default Chat;
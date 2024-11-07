import phoneIcon from "../../public/phone.png";
import micIcon from "../../public/mic.png";
import videoIcon from "../../public/video.png";
import IconList from "./Reuseable/IconList";
import pictureIcon from "../../public/img.png";
import cameraIcon from "../../public/camera.png";
import emoji from "../../public/emoji.png";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const topIcons = [phoneIcon, videoIcon, micIcon];
const bottomLeftIcons = [pictureIcon, cameraIcon, micIcon];
const bottomRightIcons = [emoji]

function Chat(){
    const [open, setOpen] = useState(false);
    const [value, setvalue] = useState("");
    
    const handleEmoji = (e) =>{
        setvalue((prev) => prev + e.emoji);
        setOpen(false);
    }
    
    return (
        <div className="chat flex-2 h-full border border-[#36454f]">
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
            <div className="center">Center</div>
            <div className="bottom relative flex items-center justify-between border-t-2 border-[#36454f] gap-2 p-4 m-auto">
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
                <button className="border-none outline-none bg-blue-600 p-2 rounded-[4px]">Send</button>
            </div>
        </div>
    )
}
export default Chat;
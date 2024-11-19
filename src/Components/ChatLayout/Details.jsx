import { auth } from "../../lib/firebase";
import useUserStore from "../../lib/Store/useUserStore";
import useChatStore from "../../lib/Store/useChatStore";

function Details(){
    // const {currentUser} = useUserStore();
    const {chatId, userInfo} = useChatStore();

    return(
        <div className="details flex-1 flex flex-col overflow-y-scroll no-scrollbar">
            <div 
                className="user
                flex flex-col
                items-center
                p-5 gap-3
                border-[#36454f]
                border-b-2 sticky top-0 z-10 bg-slate-900"
            >
                <img className="w-24 border border-white rounded-full" src="avatar.png" alt="" />
                <h2 className="text-xl">{userInfo.username}</h2>
                <p>Lorem ipsum dolor</p>
            </div>
            <div className="userInfo p-4 flex flex-col gap-3">
                <div className="options">
                    <div className="title flex justify-between items-center">
                        <span>Chat Settings</span>
                        <img className="w-6 p-1.5 bg-[#36454f] rounded-full" src="arrowUp.png" alt="arrow icon" />
                    </div>
                </div>
                <div className="options">
                    <div className="title flex justify-between items-center">
                        <span>Privacy & Help</span>
                        <img className="w-6 p-1.5 bg-[#36454f] rounded-full" src="arrowUp.png" alt="arrow icon" />
                    </div>
                </div>
                <div className="options">
                    <div className="title flex justify-between items-center">
                        <span>Notifications</span>
                        <img className="w-6 p-1.5 bg-[#36454f] rounded-full" src="arrowUp.png" alt="arrow icon" />
                    </div>
                </div>
                <div className="options">
                    <div className="title flex justify-between items-center">
                        <span>Shared Photos</span>
                        <img className="w-6 p-1.5 bg-[#36454f] rounded-full" src="arrowDown.png" alt="arrow icon" />
                    </div>
                    <div className="photos flex flex-col gap-3 mt-4">
                        <div className="photoItem flex justify-between items-center">
                            <div className="photoDetails flex items-center gap-3">
                                <img className="w-7 rounded-[5px]" src="image.jpg" alt="image" />
                                <span className="text-[#B0B0B0]">photo_2024_2.jpg</span>
                            </div>
                            <img className="w-6 p-1.5 bg-[#36454f] rounded-full" src="download.png" alt="download icon" />
                        </div>
                        <div className="photoItem flex justify-between items-center">
                            <div className="photoDetails flex items-center gap-3">
                                <img className="w-7 rounded-[5px]" src="image.jpg" alt="image" />
                                <span className="text-[#B0B0B0]">photo_2024_2.jpg</span>
                            </div>
                            <img className="w-6 p-1.5 bg-[#36454f] rounded-full" src="download.png" alt="download icon" />
                        </div>
                        <div className="photoItem flex justify-between items-center">
                            <div className="photoDetails flex items-center gap-3">
                                <img className="w-7 rounded-[5px]" src="image.jpg" alt="image" />
                                <span className="text-[#B0B0B0]">photo_2024_2.jpg</span>
                            </div>
                            <img className="w-6 p-1.5 bg-[#36454f] rounded-full" src="download.png" alt="download icon" />
                        </div>
                        <div className="photoItem flex justify-between items-center">
                            <div className="photoDetails flex items-center gap-3">
                                <img className="w-7 rounded-[5px]" src="image.jpg" alt="image" />
                                <span className="text-[#B0B0B0]">photo_2024_2.jpg</span>
                            </div>
                            <img className="w-6 p-1.5 bg-[#36454f] rounded-full" src="download.png" alt="download icon" />
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div className="title flex justify-between items-center">
                        <span>Shared Files</span>
                        <img className="w-6 p-1.5 bg-[#36454f] rounded-full" src="arrowUp.png" alt="arrow icon" />
                    </div>
                </div>
                <button className="bg-red-500 bg-opacity-[0.5] mt-2 hover:bg-opacity-80">Block User</button>
                <button className="w-full bg-blue-600 bg-opacity-[0.5] mt-2 hover:bg-opacity-100" onClick={()=>auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}
export default Details;
import moreIcon from "../../../public/more.png";
import videoIcon from "../../../public/video.png";
import editIcon from "../../../public/edit.png";

const UserIcons = [moreIcon, videoIcon, editIcon];


function UserInfo(){
    return (
        <div className="userInfo flex items-center justify-between p-3">
            <div className="user flex items-center gap-4">
                <img className="w-14 rounded-full border border-2 border-white object-cover" src="avatar.png" alt="user avatar" />
                <h4>John Doe</h4>
            </div>
            {/* <div className="icons"> */}
            <ul className="flex gap-3">
                {UserIcons.map((UserIcon, index) => (
                    <li
                        className=""
                        key={index}>
                        <img className="w-4" src={UserIcon} alt="" /> 
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UserInfo;
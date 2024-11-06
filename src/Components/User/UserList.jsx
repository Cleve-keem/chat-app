import UserInfo from "./UserInfo";
import ChatList from "./ChatList";

function List (){
    return (
        <div className="list flex flex-col flex-1 border-r-[#]">
            <UserInfo />
            <ChatList />
        </div>
    )
}
export default List;
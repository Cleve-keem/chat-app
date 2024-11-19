import { create } from "zustand";
import useUserStore from "./useUserStore";

const useChatStore = create((set) => ({
    chatId: null,
    user: null ,
    isCurrentUserBlocked: false,
    isReceiverBlocked: false,

    changeChat: (chatId, userInfo)=>{
        const currentUser = useUserStore.getState().currentUser;

        if(!currentUser || !userInfo){
            console.log("Invalid currentUser or user: ", {currentUser, userInfo});
            return set({
                chatId: null,
                user: null ,
                isCurrentUserBlocked: false,
                isReceiverBlocked: false,
            })
        }

        const isBlockedByUser = Array.isArray(userInfo?.blocked) && userInfo.blocked.includes(currentUser.id);
        const hasBlockedUser = Array.isArray(currentUser?.blocked) && currentUser.blocked.includes(userInfo.id);
    
        // check if current user is blocked
        if(isBlockedByUser){
            return set({
                chatId,
                user: null,
                isCurrentUserBlocked: true,
                isReceiverBlocked: false,
            })
        }

        // check if the receiver is blocked
        else if(hasBlockedUser){
            return set({
                chatId,
                user: user,
                isCurrentUserBlocked: false,
                isReceiverBlocked: true,
            })
        }
        else{
            return set({
                chatId,
                userInfo,
                isCurrentUserBlocked: false,
                isReceiverBlocked: true,
            })
        }
    },
    changeBlock: () =>{
        set((state)=> ({...state, isReceiverBlocked: !state.isReceiverBlocked }))
    }
}))
export default useChatStore;
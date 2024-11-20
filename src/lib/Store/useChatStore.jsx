import { create } from "zustand";
import useUserStore from "./useUserStore";

const useChatStore = create((set) => ({
    chatId: null,
    user: null ,
    isCurrentUserBlocked: false,
    isReceiverBlocked: false,

    changeChat: (chatId, user)=>{
        const currentUser = useUserStore.getState().currentUser;

        if(!currentUser || !user){
            console.log("Invalid currentUser or user: ", {currentUser, user});
            return set({
                chatId: null,
                user: null ,
                isCurrentUserBlocked: false,
                isReceiverBlocked: false,
            })
        }

        const isBlockedByUser = Array.isArray(user?.blocked) && user.blocked.includes(currentUser.id);
        const hasBlockedUser = Array.isArray(currentUser?.blocked) && currentUser.blocked.includes(user.id);
    
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
                user,
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
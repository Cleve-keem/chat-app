import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../firebase";

const useUserStore = create((set)=> ({
    currentUser: null,

    fetchUserInfo: async (uid) => {
        if(!uid) return { currentUser: null }

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        try{
            if(docSnap.exists()){
                set({currentUser: docSnap.data()})
            }
            else{
                set({currentUser: null})
            }
        }
        catch(error){
            console.log(error.message);
            set({ currentUser: null })
        }
    }
}))
export default useUserStore;
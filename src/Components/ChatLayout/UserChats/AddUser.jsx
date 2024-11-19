import { arrayUnion, collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useState } from "react";
import useUserStore from "../../../lib/Store/useUserStore";

function AddUser(){
  const [ user, setUser ] = useState(null);
  const {currentUser} = useUserStore();

  const handleSearch = async (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");

    try{
      const userCollection = collection(db, "users"); // going through the collection of all the user in database
      const q = query(userCollection, where("username", "==", username)); // locate the user whose {username == "input name"}

      const querySnapshot = await getDocs(q); // collecting the informations

      if(!querySnapshot.empty){
        const docSnap = querySnapshot.docs[0];
        const userData = docSnap.data()
        setUser(userData);
      }
      else{
        console.log("No user found with",username)
      }
    }
    catch(error){
      console.log(error)
    }
  }

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try{
      const newChatRef = doc(chatRef);

      // CREATING TWO DOCUMENT IN THE CHATS COLLECTION
      await setDoc(newChatRef, {
        createdAt: serverTimestamp(), // First Doc
        message: [],                  // Second Doc
      });

    // PUSHING FIVE DOCUMENT IN THE USERNAME CHATS ARRAY!
      await updateDoc(doc(userChatsRef, user.id), { // Stored in the user doc to track the currentUser.
        chats:arrayUnion({
          chatId: newChatRef.id,
          // isSeen: false,
          lastMessage: " ",
          receiverId: currentUser.id, // Here is to keep track of the user receiving the message.
          updatedAt: Date.now()
        })
      });

      // PUSHING SAME FIVE DOCUMENT TO THE CURRENT-USER CHATS ARRAY!
      await updateDoc(doc(userChatsRef, currentUser.id), { // Stored in the current user doc to track the user
        chats:arrayUnion({
          chatId: newChatRef.id,
          // isSeen: false,
          lastMessage: " ",
          receiverId: user.id, // Here is to keep track of the sender Id to receiving the message.
          updatedAt: Date.now()
        })
      })
    }catch(error){
      console.log(error.message);
    }
  }

  return (
    <div className="add_user w-max h-max absolute top-0 left-0 right-0 bottom-0 m-auto p-4 bg-slate-800 rounded-xl">
      <form className="search_user flex gap-3 mb-4" onSubmit={handleSearch}>
        <input className="rounded-[5px] p-4 bg-[#36454f] placeholder:text-white" type="text" name='username' placeholder='Username'/>
        <button type="submit" className="bg-blue-600">Search</button>
      </form>
      {user && <div className="userList flex justify-between">
        <div className="details flex items-center gap-3">
          <img className="w-16 rounded-full border" src="avatar.png" alt=""/>
          <span>{user.username}</span>
        </div>
        <button className="bg-red-900" onClick={handleAdd}>Add</button>
      </div>}
    </div>
  )
}export default AddUser;
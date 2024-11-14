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

    // console.log(username);

    try{
      const userCollection = collection(db, "users"); // going through the collection of all the user in database
      const q = query(userCollection, where("username", "==", username)); // locate the user whose {username == "input name"}

      const querySnapshot = await getDocs(q); // collecting the informations

      // console.log(querySnapshot)

      if(!querySnapshot.empty){
        const docSnap = querySnapshot.docs[0];
        const userData = docSnap.data()
        setUser(userData);
        // console.log("User found: ", userData)
      }
      else{
        console.log("No user found with",username)
      }
    }
    catch(error){
      console.log(error)
    }

    // console.log(user)
  }

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    
    try{
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        lastMessage: serverTimestamp(),
        message: []
      })

      await updateDoc(doc(userChatsRef, user.id), {
        chats:arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now()
        })
      })
      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats:arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now()
        })
      })

      console.log(newChatRef.id)
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
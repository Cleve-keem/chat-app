function AddUser(){
  return (
    <div className="add_user w-max h-max absolute top-0 left-0 right-0 bottom-0 m-auto p-4 bg-slate-800 rounded-xl">
      <form className="search_user flex gap-3 mb-4">
        <input className="rounded-[5px] p-4 bg-[#36454f] placeholder:text-white" type="text" name='addUser' placeholder='Username'/>
        <button className="bg-blue-600">Search</button>
      </form>
      <div className="userList flex justify-between">
        <div className="details flex items-center gap-3">
          <img className="w-16 rounded-full border" src="avatar.png" alt=""/>
          <span>username</span>
        </div>
        <button className="bg-red-900">Add</button>
      </div>
    </div>
  )
}export default AddUser;
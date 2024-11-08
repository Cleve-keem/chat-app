
function Login(){
    return(
        <div className="login flex-1 flex items-center justify-center">
            <div className="item flex flex-col items-center gap-6">
                <h1 className="text-2xl font-bold">Welcome Back, John</h1>
                <div className="inputs w-full flex flex-col gap-3">
                    <input
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Username"
                    />
                    <input type="password" id="password" name="password" placeholder="password"/>
                </div>
                <button className="bg-blue-600 w-full">Login</button>
                <p>Don't have an account? <a href="" className="underline text-blue-700 ml-1">Sign Up</a></p>
            </div>
        </div>
    )
}
export default Login
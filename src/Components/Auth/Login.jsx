import { useContext } from 'react';
import { toast } from 'react-toastify';
import { LoadingContext } from './LoadingContext';

function Login({ onClick }){
    const { isLoading, setIsLoading } = useContext(LoadingContext);
    
    const handleLogin = (e) => {
        // setIsLoading(true);
        e.preventDefault();
        toast.warn("Wrong Password or Email!", {
            position: "top-center",
            theme: "dark",
        });
    }
    
    return(
        <div className="login flex-1 flex items-center justify-center gap-[7rem]">
            <div className="ads w-[300px]">
                <h1 className="mb-1">Lorem ipsum dolor consectetur adipisicing <span className="text-blue-500">Neque laudantium</span>.</h1>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing elit.</small>
            </div>
            <div className="item flex flex-col items-center gap-6">
                <h1 className="text-2xl font-bold">Welcome Back, John</h1>
                <form className='w-full flex flex-col gap-4' onSubmit={handleLogin}>
                    <div className="inputs flex flex-col gap-3">
                        <input
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Username"
                            />
                        <input type="password" id="password" name="password" placeholder="password"/>
                    </div>
                    <button type='submit' className="bg-blue-600 w-full">Login</button>
                </form>
                <p>Don't have an account? <span onClick={onClick} className="underline text-blue-700 ml-1 cursor-pointer">Sign Up</span></p>
            </div>
        </div>
    )
}
export default Login;
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { LoadingContext } from './LoadingContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';

function Login({ onClick }){
    const { isLoading, setIsLoading } = useContext(LoadingContext);
    
    const handleLogin = async (e) => {
        setIsLoading(true);
        e.preventDefault();

        const formData = new FormData(e.target);
        const { email, password } =  Object.fromEntries(formData);

        try{
            await signInWithEmailAndPassword(auth, email, password);
        }
        catch(error){
            toast.warn(error.message, {
                position: "top-center",
                theme: "dark",
            });
        }
        finally{
            setIsLoading(false);
        }
        
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
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="email"
                            />
                        <input type="password" id="password" name="password" placeholder="password"/>
                    </div>
                    <button type='submit' disabled={isLoading} className={`w-full ${isLoading? "bg-blue-300" : "bg-blue-600"}`}>
                        {isLoading? "Signing in..." : "Sign in"}
                    </button>
                </form>
                <p>Don't have an account? <span onClick={onClick} className="underline text-blue-700 ml-1 cursor-pointer">Sign Up</span></p>
            </div>
        </div>
    )
}
export default Login;
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase';
import { LoadingContext } from './LoadingContext';
import { useContext } from 'react';

function SignUp({ onClick }){
    const {isLoading, setIsLoading } = useContext(LoadingContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target);
        // const data = Object.fromEntries(formData);
        const { firstName, lastName, username, email, password } = Object.fromEntries(formData);

        try{
            const res = await createUserWithEmailAndPassword(auth, email, password); // creating an auth user

            // creating user in the database
            await setDoc(doc(db, "users", res.user.uid), {
                firstName,
                lastName,
                username,
                email,
                password,
                id: res.user.uid,
                block: []
            });
            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: []
            });

            toast.success("Account created!", {
                position: "top-center",
                theme: 'dark'
            });

        }
        catch(error){
            console.error(error)
            toast.error(error.message, {
                position: 'top-center',
                theme: 'dark'
            });
        }
        finally{
            setIsLoading(false);
        }
    }

    // alert(isLoading)    
    return(
        <div className="SignUp flex items-center gap-[7rem]">
            <div className="ads w-[300px]">
                <h1 className="mb-1">Lorem ipsum dolor consectetur adipisicing <span className="text-blue-500">Neque laudantium</span>.</h1>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing elit.</small>
            </div>
            <div className="item flex flex-col items-center gap-6">
                <h1 className="text-2xl font-bold">Create new account</h1>
                <form onSubmit={handleRegister} className='w-full flex flex-col gap-4'>
                    <div className="inputs w-full flex flex-col gap-3">
                        <div className="name flex gap-2">
                            <input
                                type="text" 
                                id="fname" 
                                name="firstName" 
                                placeholder="First name"
                            />
                            <input type="text" id="lname" name="lastName" placeholder="Last name"/>
                        </div>
                        <input type="text" id="usename" name="username" placeholder="Username"/>
                        <input type="email" id="email" name="email" placeholder="Email"/>
                        <input type="password" id="pwd" name="password" placeholder="Password"/>
                    </div>
                    <button type='submit' disabled={isLoading} className={`w-full ${isLoading? "bg-blue-300" : "bg-blue-600 "}`}>
                        {isLoading? "Creating account..." : "Sign Up"}
                    </button>
                </form>
                <p>Already have an account? <span onClick={onClick} className="underline text-blue-700 ml-1 cursor-pointer">Login</span></p>
            </div>
        </div>
    )
}
export default SignUp;
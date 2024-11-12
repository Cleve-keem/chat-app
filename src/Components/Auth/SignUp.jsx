import { toast } from 'react-toastify';

function SignUp({ onClick }){

    const handleRegister = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        // const data = Object.fromEntries(formData);
        const { firstName, lastName, email, password } = Object.fromEntries(formData);
                
        toast.success("Account created!", {
            position: "top-center",
            theme: 'dark'
        });
    }

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
                        <input type="email" id="email" name="email" placeholder="Email"/>
                        <input type="password" id="pwd" name="password" placeholder="Password"/>
                    </div>
                    <button type='submit' className="bg-blue-600 w-full">Sign Up</button>
                </form>
                <p>Already have an account? <span onClick={onClick} className="underline text-blue-700 ml-1 cursor-pointer">Login</span></p>
            </div>
        </div>
    )
}
export default SignUp;
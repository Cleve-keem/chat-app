import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

function Auth(){
    const [ownAcc, setOwnAcc ] = useState(true);

    function goToLogin(e){
        e.preventDefault();
        setOwnAcc(true)
    }

    function goToSignUp(e){
        e.preventDefault()
        setOwnAcc(false)
    }

    return(
        <div className="auth flex w-full items-center justify-center">
            {ownAcc? <Login onClick={goToSignUp}/> : <SignUp onClick={goToLogin}/>}
        </div>
    )
}
export default Auth;
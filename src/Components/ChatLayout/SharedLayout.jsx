import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login & SignUp/Login';
import SignUp from './Login & SignUp/SignUp';

function SharedLayout(){
    return(
        <Router>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<SignUp/>} />
            </Routes>
        </Router>
    )
}
export default SharedLayout;
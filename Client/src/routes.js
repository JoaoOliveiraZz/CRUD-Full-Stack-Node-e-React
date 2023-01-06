import {Routes, Route} from 'react-router-dom';
import ShowUsers from './components/showUsers';
import SignUpForm from './components/makeUsers';
import EditUser from './components/editUser';

function Router(){

    return(
        <Routes>
            <Route path='/makeuser' element={ <SignUpForm /> } />
            <Route path='/showusers' element={ <ShowUsers />} />
            <Route path='/edituser/:id/:Nome/:Email/:Senha' element={ <EditUser />} />
        </Routes>
    )

}

export default Router;
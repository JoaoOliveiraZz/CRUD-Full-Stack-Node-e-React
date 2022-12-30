import {Routes, Route} from 'react-router-dom';
import ShowUsers from './components/showUsers';
import SignUpForm from './components/makeUsers';

function Router(){

    return(
        <Routes>
            <Route path='/makeuser' element={ <SignUpForm /> } />
            <Route path='/showusers' element={ <ShowUsers />} />
        </Routes>
    )

}

export default Router;
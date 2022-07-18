import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Container from './components/Container';
import ContainerCreate from './components/containerCreate';
import Main from './pages/Main';
import { UserProvider } from "./common/context/User";
import ProtectedRoutes from './components/privateRoute';

export default function AppRouter(){
    return(
        <Router>
            <UserProvider>
                <Routes>
                    <Route path='/' element={<Container />}/>
                    <Route element={<ProtectedRoutes />}>
                    <Route path='main' element={<Main />}/>
                    </Route>
                    <Route path='register' element={<ContainerCreate />}/>
                </Routes>
            </UserProvider>
        </Router>
    )
}
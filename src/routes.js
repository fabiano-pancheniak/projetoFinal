import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { getModeForUsageLocation } from 'typescript';
import Container from './components/Container';
import Main from './pages/Main';

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Container />}/>
                <Route path='main' element={<Main />}/>
            </Routes>
        </Router>
    )
}
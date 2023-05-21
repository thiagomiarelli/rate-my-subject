import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import List from '../pages/Dashboard/SubjectGrid/SubjectGrid';
import Dashboard from '../pages/Dashboard/Dashboard';
import Subject from '../pages/Subject';
import Evaluate from '../pages/Evaluate';


function PrivateRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='dashboard' element={<Dashboard />}>
                    <Route path='home' element={<List />}/>
                    <Route path='subject/:id' element={<Subject/>}/>
                    <Route path='subject/evaluate/:id' element={<Evaluate/>}/>
                </Route>
                <Route path="*" element={<Navigate to="dashboard/home" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PrivateRoutes;

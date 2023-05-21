import {Outlet} from 'react-router-dom';
import List from './SubjectGrid/SubjectGrid';
import Navbar from '../../components/Navbar/Navbar';

 export default function Dashboard() {
    return(
        <div className="Dashboard">
            <Navbar/>
            <Outlet/>
        </div>
    )
 }
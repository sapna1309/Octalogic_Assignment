import {Routes,Route} from 'react-router-dom';
import Login from '../pages/Login';
import Courses from '../pages/Courses';
import DashbordOverview from '../pages/DashbordOverview';

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<DashbordOverview/>} />
        <Route path='/courses' element={<Courses/>} />
    </Routes>
  )
}

export default Allroutes
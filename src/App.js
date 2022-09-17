import React from 'react'
import {BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './containers/Login';
import Report from './containers/Report';
import DashboardNav from './containers/dashboard/DashboardNav';
import DashboardHome from './containers/dashboard/DashboardHome';

function App() {
  return (
    <Router>
     <Routes>
      <Route path='/' exact element={<Login />} />
      <Route path='/report' element={<Report/>} />
      <Route path='/dashboard' element={<LayoutsWithDashboard/>}>
 <Route path='/dashboard' element={<DashboardHome/>}/>
  </Route>
     </Routes>
    </Router>
  );
}
function LayoutsWithDashboard(){
    return (
      <>
<DashboardNav  />
<Outlet />

      </>
    )
  }

export default App;

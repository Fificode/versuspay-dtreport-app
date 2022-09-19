import React from 'react'
import {BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './containers/Login';
import Report from './containers/Report';
import DashboardNav from './containers/dashboard/DashboardNav';
import DashboardHome from './containers/dashboard/DashboardHome';
import AddIncident from './containers/dashboard/AddIncident';
import AddRecipient from './containers/dashboard/AddRecipient';
import ReportList from './containers/dashboard/ReportList';
import RecipientList from './containers/dashboard/RecipientList';
import ManageIncident from './containers/dashboard/ManageIncident';
import ManageRecipient from './containers/dashboard/ManageRecipient';
import Email from './containers/Email';

function App() {
  return (
    <Router>
     <Routes>
      <Route path='/' exact element={<Login />} />
      <Route path='/report' element={<Report/>} />
      <Route path='/dashboard' element={<LayoutsWithDashboard/>}>
 <Route path='/dashboard' element={<DashboardHome/>}/>
 <Route path='/dashboard/addincident' element={<AddIncident/>}/>
 <Route path='/dashboard/addrecipient' element={<AddRecipient/>}/>
 <Route path='/dashboard/reportlist' element={<ReportList/>}/>
 <Route path='/dashboard/recipientlist' element={<RecipientList/>}/>
 <Route path='/dashboard/manageincident' element={<ManageIncident/>}/>
 <Route path='/dashboard/managerecipient' element={<ManageRecipient/>}/>
 <Route path='/dashboard/email' element={<Email/>}/>
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

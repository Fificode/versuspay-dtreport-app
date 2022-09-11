import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './containers/Login';
import Report from './containers/Report';

function App() {
  return (
    <Router>
     <Routes>
      <Route path='/' exact element={<Login />} />
      <Route path='/report' element={<Report/>} />
     </Routes>
    </Router>
  );
}

export default App;

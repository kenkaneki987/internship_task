import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BusinessRegistration from './components/BusinessRegistration';
import DepartmentManagement from './components/DepartmentManagement';
import EmployeeManagement from './components/EmployeeManagement';
import './App.css';

function App() {
  const [departments, setDepartments] = useState([]);

  return (
    <Router>
      <div className="app">
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Business Registration</Link>
          <Link to="/departments" className="nav-link">Departments</Link>
          <Link to="/employees" className="nav-link">Employees</Link>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<BusinessRegistration />} />
            <Route 
              path="/departments" 
              element={<DepartmentManagement departments={departments} setDepartments={setDepartments} />} 
            />
            <Route 
              path="/employees" 
              element={<EmployeeManagement departments={departments} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

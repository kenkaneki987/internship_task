import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BusinessRegistration from './components/BusinessRegistration';
import DepartmentManagement from './components/DepartmentManagement';
import EmployeeManagement from './components/EmployeeManagement';
import './App.css';

function App() {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'Sales', hod: '', description: 'Handles all sales operations and customer relationships' },
    { id: 2, name: 'Marketing', hod: '', description: 'Manages brand promotion and marketing strategies' },
    { id: 3, name: 'Finance', hod: '', description: 'Oversees financial operations and accounting' },
    { id: 4, name: 'Human Resources', hod: '', description: 'Manages employee relations and recruitment' },
    { id: 5, name: 'Operations', hod: '', description: 'Handles day-to-day business operations' },
    { id: 6, name: 'IT', hod: '', description: 'Manages technology infrastructure and systems' },
    { id: 7, name: 'Customer Service', hod: '', description: 'Handles customer support and satisfaction' },
    { id: 8, name: 'Research & Development', hod: '', description: 'Focuses on innovation and product development' }
  ]);

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

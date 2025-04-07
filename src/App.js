import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Pages/Footer.jsx';
import CreateParent from './components/Pages/CreateParent.jsx';
import Dashboards from './main_components/Dashboards.jsx';
import CreateAdmin from './main_components/CreateAdmin.jsx';

// Move ProtectedRoute outside to avoid recreation
const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/" replace />;
};  

function App() {



  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token') // Double bang converts to boolean
);

  



  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <LayoutWrapper 
        isAuthenticated={isAuthenticated}
        setIsAuthenticated = {setIsAuthenticated}
        logout={logout}
      />
    </Router>
  );
}

function LayoutWrapper({ isAuthenticated, setIsAuthenticated, logout }) {
  const location = useLocation();
  const hideHeaderFooter = ['/dashboard', '/new_account'].some(path => 
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!hideHeaderFooter && <Header  setIsAuthenticated = {setIsAuthenticated} />}
      
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/new_account1231" element={<CreateAdmin />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboards logout={logout} />
            </ProtectedRoute>
          }
        />
       
        
    
      
        <Route
          path="/"
          element={
            <Navigate to={isAuthenticated ? "/" : "/"} />
          }
        />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
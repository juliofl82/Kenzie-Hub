import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import useStore from './store/TechStore'; 
import TechList from './components/TechList/TechList.jsx';
import TechCard from './components/TechCard/TechCard.jsx';
import SignAuthForm from './components/Login/SignAuthForm.jsx';
import RegisterForm from './components/UserRegister/RegisterForm.jsx';
import ProfilePage from './components/Profile/ProfilePage.jsx';

function App() {
  const { user, techs, removeTech } = useStore();
  const isAuthenticated = !!user;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignAuthForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;



















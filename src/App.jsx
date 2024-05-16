import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import useStore from './store/TechStore.js'; 
import TechList from './components/TechList/TechList.jsx';
import TechCard from './components/TechCard/TechCard.jsx';
import SignAuthForm from './form/SignAuthForm.jsx';

function App() {
  const { user, fetchUserProfile, techs, setTechs, removeTech } = useStore();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserProfile(token);
    }
  }, [fetchUserProfile]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignAuthForm />} />
        <Route
          path="/techs"
          element={
            user ? (
              <>
                <h1>Techs</h1>
                <TechList>
                  {techs.map(tech => (
                    <TechCard key={tech.id} tech={tech} removeTech={() => removeTech(tech.id)} />
                  ))}
                </TechList>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;







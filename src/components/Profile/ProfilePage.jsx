import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TechList from '../TechList/TechList.jsx';
import CreateTechModal from '../CreateTechModal/CreateTechModal.jsx';
import useStore from '../../store/TechStore';
import styles from "./styles.module.scss";

const ProfilePage = () => {
  const { user, fetchUserProfile, logout, isModalOpen, openModal, closeModal } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserProfile(token);
    } else {
      navigate('/login');
    }
  }, [fetchUserProfile, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <div className={styles.profileHeader}>
        <h1>Kenzie Hub</h1>
        <button className='buttonDisabledHover' onClick={() => window.location.href = '/login'}>
          Sair
        </button>
        </div>
        <div className='profileGrid' >
          <h2>Olá, {user.name}</h2>
      <p>Módulo atual cadastrado para o usuário: {user.course_module}</p>      
      <button onClick={openModal}>Adicionar Tecnologia</button>
      <TechList onEdit={() => {}} />
      {isModalOpen && <CreateTechModal closeModal={closeModal} />}
        </div>
      
    </div>
  );
};

export default ProfilePage;

























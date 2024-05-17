import React from 'react';
import useStore from '../../store/TechStore';
import TechList from '../TechList/TechList';
import CreateTechModal from '../CreateTechModal/CreateTechModal';

function ProfilePage() {
  const { techs, isModalOpen, openModal, closeModal } = useStore();

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <button onClick={openModal}>Adicionar Tecnologia</button>
      <TechList techs={techs} />
      {isModalOpen && <CreateTechModal onClose={closeModal} />}
    </div>
  );
}

export default ProfilePage;












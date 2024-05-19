import React, { useState } from 'react';
import useStore from '../../store/TechStore';

function EditProfileModal({ onClose }) {
  const { user, updateUserProfile, setTechs, techs, addTech, removeTech } = useStore();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);
  const [contact, setContact] = useState(user.contact);
  const [courseModule, setCourseModule] = useState(user.course_module);
  const [newTech, setNewTech] = useState('');
  const [techStatus, setTechStatus] = useState('Iniciante');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, bio, contact, course_module: courseModule };
    await updateUserProfile(updatedUser);
    onClose();
  };

  const handleAddTech = async () => {
    if (newTech) {
      const techData = { title: newTech, status: techStatus };
      await addTech(techData);
      setNewTech('');
    }
  };

  const handleRemoveTech = async (techId) => {
    await removeTech(techId);
  };

  return (
    <div className="modal">
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio" required />
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contato" required />
        <input type="text" value={courseModule} onChange={(e) => setCourseModule(e.target.value)} placeholder="Módulo do Curso" required />
        <button type="submit">Salvar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
      <h3>Tecnologias</h3>
      <ul>
        {techs.map(tech => (
          <li key={tech.id}>
            {tech.title} - {tech.status}
            <button onClick={() => handleRemoveTech(tech.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newTech} onChange={(e) => setNewTech(e.target.value)} placeholder="Nova Tecnologia" />
      <select value={techStatus} onChange={(e) => setTechStatus(e.target.value)}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <button onClick={handleAddTech}>Adicionar Tecnologia</button>
    </div>
  );
}

export default EditProfileModal;

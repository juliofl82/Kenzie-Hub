import React, { useState } from 'react';
import useStore from '../../store/TechStore';

function CreateTechModal({ onClose }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const addTech = useStore(state => state.addTech);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const techData = { title, status };
    try {
      await addTech(techData);
      onClose();
    } catch (error) {
      console.error('Erro ao adicionar tecnologia:', error);
    }
  };

  return (
    <div className="modal">
      <h2>Adicionar Tecnologia</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Nome da Tecnologia" 
          required 
        />
        <select 
          value={status} 
          onChange={(e) => setStatus(e.target.value)} 
          required
        >
          <option value="" disabled>Selecione o Status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit">Salvar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
}

export default CreateTechModal;










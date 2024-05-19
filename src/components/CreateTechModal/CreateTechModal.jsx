import React, { useState } from 'react';
import useStore from '../../store/TechStore';

const CreateTechModal = ({ closeModal }) => {
  const { addTech } = useStore();
  const [tech, setTech] = useState({ title: '', status: 'Iniciante' });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTech(tech);
      closeModal();
    } catch (error) {
      setError(error.response?.data?.message || 'Erro ao adicionar tecnologia');
      console.error('Erro ao adicionar tecnologia:', error);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Adicionar Nova Tecnologia</h2>
        <label>
          Título:
          <input
            type="text"
            value={tech.title}
            onChange={(e) => setTech({ ...tech, title: e.target.value })}
            required
          />
        </label>
        <label>
          Status:
          <select
            value={tech.status}
            onChange={(e) => setTech({ ...tech, status: e.target.value })}
            required
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </label>
        <button type="submit">Adicionar</button>
        <button type="button" onClick={closeModal}>Cancelar</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default CreateTechModal;













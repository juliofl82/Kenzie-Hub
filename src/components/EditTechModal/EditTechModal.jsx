import React, { useState } from 'react';
import useStore from '../../store/TechStore';

function EditTechModal({ tech, onClose }) {
  const [name, setName] = useState(tech.name);
  const [level, setLevel] = useState(tech.level);
  const updateTech = useStore(state => state.updateTech);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTech({ id: tech.id, name, level });
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit">Salvar</button>
        <button type="button" onClick={onClose}>Fechar</button>
      </form>
    </div>
  );
}

export default EditTechModal;




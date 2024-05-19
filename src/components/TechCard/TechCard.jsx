import React from 'react';
import useStore from '../../store/TechStore';

function TechCard({ tech, onEdit }) {
  const removeTech = useStore(state => state.removeTech);


  return (
    <li>
      {tech.title} - {tech.status}
      <button onClick={() => removeTech(tech.id)}>Remover</button>
      <button onClick={onEdit}>Editar</button>
    </li>
  );
}

export default TechCard;






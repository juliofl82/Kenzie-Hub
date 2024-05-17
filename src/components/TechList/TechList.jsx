import React from 'react';
import useStore from '../../store/TechStore';
import TechCard from '../TechCard/TechCard';

function TechList({ onEdit }) {
  const { techs } = useStore();

  console.log('TechList rendering techs:', techs);

  return (
    <ul>
      {techs.map(tech => (
        <TechCard key={tech.id} tech={tech} onEdit={() => onEdit(tech)} />
      ))}
    </ul>
  );
}

export default TechList;




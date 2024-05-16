import React from "react";
import useStore from "../../store/TechStore";

function TechCard({ tech }) {
    const removeTech = useStore(state => state.removeTech);

    return (
      <li>
        {tech.name} - {tech.level}
        <button onClick={() => {
          console.log('Removing tech:', tech);
          removeTech(tech.id);
        }}>Remover</button>
      </li>
    );
}

export default TechCard;

  
import React, { useState } from "react";
import useStore from "../../store/TechStore";

function EditTechModal({ tech, onClose }) {
    const [updatedTech, setUpdatedTech] = useState(tech);
    const setTechs = useStore(state => state.setTechs);

    const handleSubmit = () => {
        console.log('Updating tech:', updatedTech);
        setTechs(prevTechs => prevTechs.map(t => t.id === updatedTech.id ? updatedTech : t));
        onClose();
    };

    return (
        <div>
            <h2>Edit Tech</h2>
            <input
                type="text"
                value={updatedTech.name}
                onChange={(e) => setUpdatedTech({ ...updatedTech, name: e.target.value })}
                placeholder="Tech Name"
            />
            <input
                type="text"
                value={updatedTech.level}
                onChange={(e) => setUpdatedTech({ ...updatedTech, level: e.target.value })}
                placeholder="Tech Level"
            />
            <button onClick={handleSubmit}>Update Tech</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default EditTechModal;


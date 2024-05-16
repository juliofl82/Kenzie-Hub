import React, { useState } from "react";
import useStore from "../../store/TechStore";

function CreateTechModal({ onClose }) {
    const [tech, setTech] = useState({ name: '', level: '' });
    const addTech = useStore(state => state.addTech);

    const handleSubmit = () => {
        console.log('Creating tech:', tech);
        addTech(tech);
        onClose();
    };

    return (
        <div>
            <h2>Create Tech</h2>
            <input
                type="text"
                value={tech.name}
                onChange={(e) => setTech({ ...tech, name: e.target.value })}
                placeholder="Tech Name"
            />
            <input
                type="text"
                value={tech.level}
                onChange={(e) => setTech({ ...tech, level: e.target.value })}
                placeholder="Tech Level"
            />
            <button onClick={handleSubmit}>Add Tech</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default CreateTechModal;


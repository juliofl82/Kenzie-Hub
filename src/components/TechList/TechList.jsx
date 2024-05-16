import React from "react";
import useStore from "../../store/TechStore";
import TechCard from "../TechCard/TechCard";

function TechList() {
    const techs = useStore(state => state.techs);

    return (
        <div>
            <h2>Lista de Tecnologias</h2>
            <ul>
                {techs.map(tech => (
                    <TechCard key={tech.id} tech={tech}/>
                ))}
            </ul>
        </div>
    );
}

export default TechList;

import React from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Logo from "../images/stitchr_logo.fw.png";

function HomePage() {
    return (
        <div>
            <img src={Logo} />
        <div id="project-list">
            {allProjects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
        </div>
    );
}

export default HomePage;
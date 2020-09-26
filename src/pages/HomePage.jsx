import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Logo from "../images/stitchr_logo.fw.png";

function HomePage() {
    // variables
    const [projectList, setProjectList] = useState([]);
    
    // methods
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}stitchr`)
        .then((results) => {
        return results.json();
        }).then((data) => {
            setProjectList(data);
        });
    }, []);

    // template
    return (
        <div>
            <img id="main-logo" src={Logo} />
        <div id="project-list">
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
        </div>
    );
}

export default HomePage;
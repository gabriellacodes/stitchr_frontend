import React, { useState, useEffect } from "react";
import { allProjects } from "../../data";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import useFullPageLoader from "../../components/FullPageLoader/useFullPageLoader";
import './HomePage.css'

function HomePage() {
    // variables
    const [projectList, setProjectList] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    
    // methods
    useEffect(() => {
        showLoader();
        fetch(`${process.env.REACT_APP_API_URL}stitchr`)
        .then((results) => {
        return results.json();
        }).then((data) => {
            setProjectList(data);
            hideLoader();
        });
    }, []);

    // template
    return (
        <div id="project-list">
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
            {loader}
        </div>
    );
}

export default HomePage;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectPage () {
    const [projectData, setProjectData] = useState({ likes: [] });  const { id } = useParams();
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}stitchr/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
        });
    }, []);

    return (
        <div>
            <h2>{projectData.title}</h2>
            <img src={projectData.image}/>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <h3>Likes:</h3>
            <ul>
                {projectData.likes.map((likesData, key) => {
                    return (
                        <li>
                            ${likesData.amount} from {likesData.supporter}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ProjectPage;
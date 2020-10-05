import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFullPageLoader from "../../components/FullPageLoader/useFullPageLoader";
import DeleteProject from "../../components/DeleteProject/DeleteProject";
import EditDetail from "../../components/EditDetail/EditDetail";
// import EditProject from "../../components/EditProject/EditProject";
import './ProjectPage.css'

function ProjectPage () {
    const [projectData, setProjectData] = useState({ likes: [] });
    const { id } = useParams();
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [editProject, setEditProject] = useState(false)

    const handleClick = () => {
        setEditProject(!editProject)
    }

    useEffect(() => {
        showLoader();
        fetch(`${process.env.REACT_APP_API_URL}stitchr/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
            hideLoader();
        });
    }, []);

    return (
        <div>
            <h2>{projectData.title}</h2>
            <div className="project-data-container">
                <img src={projectData.image}/>
                <div className="owner-options">
                    <EditDetail
                        projectOwner={projectData.owner_id}
                        onClick={handleClick}
                    />
                    <DeleteProject projectOwner={projectData.owner_id} />
                </div>
                <div className="project-data-detail">
                    <h3>Created at {projectData.date_created}</h3>
                    <h3>{`Status: ${projectData.is_open}`}</h3>
                    <h3>Who's liked this shirt?</h3>
                    <ul>
                        {projectData.likes.map((likesData, key) => {
                            return (
                                <li>
                                    ${likesData.amount} from {likesData.supporter}
                                </li>
                            )
                        })}
                    </ul>
                {loader}
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
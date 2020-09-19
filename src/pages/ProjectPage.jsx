import React from "react";
import { oneProject } from "../data";

function ProjectPage () {
    return (
        <div>
            <h2>{oneProject.title}</h2>
            <img src={oneProject.image}/>
            <h3>Created at: {oneProject.date_created}</h3>
            <h3>Status: {oneProject.is_open}</h3>
            <h3>Likes:</h3>
            <ul>
                {oneProject.likes.map((likesData, key) => {
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
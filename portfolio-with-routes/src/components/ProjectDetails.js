import React from 'react';
import { myProjects } from './Projects';
import { Link, useParams } from 'react-router-dom';

export default function ProjectDetails(props) {
    console.log(props);

    const getProject = id => {
        const projectFilter = proj => {
            return proj.id === id;
        }
        return myProjects.find(projectFilter)
    }

    const projectId = useParams().id
    // WTF is that 10 doing there?
    const foundProject = getProject(projectId, 10);
    
    return (
        <div>
            <h2>
                {foundProject.name}
                <span style={{fontSize:"14px"}}>
                    {foundProject.year}
                </span>
            </h2>
            <h3>
                Used technologies: {foundProject.technologies}
            </h3>
            <p>
                {foundProject.description}
            </p>
            <Link to='/projects'>Back</Link>
        </div>
    )
}

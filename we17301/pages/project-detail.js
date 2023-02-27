import Header from "../components/Header";
import { router, useEffect, useState } from "../lib";
import { projects } from "../data";
import ProjectGallery from "../components/ProjectGallery";
import ProjectInfo from "../components/ProjectInfo";

const ProjectDetailPage = ({ data: { id } }) => {
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/projects/" + id)
            .then((response) => response.json())
            .then((data) => setProject(data))
            .catch((error) => console.log(error));
    }, []);
    return `
    ${Header()}
    <main>
        ${ProjectGallery({ project })}
        <div>
            ${ProjectInfo({ project })}
        </div>
    </main>
    `;
};
export default ProjectDetailPage;

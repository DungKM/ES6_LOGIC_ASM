import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { useEffect, useState } from "../lib";
import { getProjects } from "../api/project";
const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        // fetch("http://localhost:3000/projects")
        //     .then((response) => response.json())
        //     .then((data) => setProjects(data));
        getProjects().then(({ data }) => setProjects(data));
    }, []);
    return `
    ${Header()}
    <div>
        ${ProjectList({ projects })}
    </div>
    `;
};
export default ProjectsPage;
// <div>Dự án mẫu</div><div>Dự án tốt nghiệp</div>

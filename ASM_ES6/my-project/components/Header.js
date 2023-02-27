import { getMenus } from "../api/menu";
import { router, useEffect, useState } from "../lib";

const Header = () => {
  const [project, setProject] = useState([]);
  console.log(project);

  useEffect(() => {
    getMenus()
      .then((data) => setProject(data));
  }, []);
  return `
  ${project.map(({ path, name }) => `<a href="${path}">${name}</a>`).join("")}
  `;
};

export default Header;

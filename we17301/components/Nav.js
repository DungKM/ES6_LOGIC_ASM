import { menuList } from "../data";

const Nav = () => {
    return `
    <ul>
        ${menuList.map(({ path, name }) => `<li><a href="${path}">${name}</a></li>`).join("")}
    </ul>
    `;
};
export default Nav;

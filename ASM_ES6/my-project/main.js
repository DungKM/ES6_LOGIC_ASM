import { render, router } from "./lib";
import AddProjectPost from "./pages/admin/posts/AddProjectPost";
import ProjectPosts from "./pages/admin/posts/ProjectPosts";
import EditProjectPost from "./pages/admin/posts/UpdateProjectPost";
import HomePage from "./pages/clients/home";

// client app
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/admin/posts/projectpost", () => render(ProjectPosts, app));
router.on("/admin/posts/projectpost/add", () => render(AddProjectPost, app))
router.on("/admin/posts/projectpost/:id/edit",({data})=>render(()=>EditProjectPost(data),app))
router.resolve();

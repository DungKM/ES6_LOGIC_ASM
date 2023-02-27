import instance from "./config";

const getMenus = () => {
  return instance.get("/menu");
};
const getMenu = (id) => {
  return instance.get(`/menu/${id}`, id);
};

const AddMenu = (menu) => {
  return instance.post("/menu", menu);
};
const DeleteMenu = (id) => {
  return instance.delete(`/menu/${id}`, id);
};
const UpdateMenu = (menu) => {
  return instance.put(`/menu/${menu.id}`, menu);
};

export { getMenus, getMenu, AddMenu, DeleteMenu, UpdateMenu };

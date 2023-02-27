import instance from "./config";

getMenus = () => {
    return instance.get("/menu")
}
getMenu = (id) => {
    return instance.get(`/menu/${id}`,id)
}

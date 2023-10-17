import { localhostUserToModel } from "../mappers/localhost-user.mapper";


export const loadUsersByPage = async (page = 1) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);

    const data = await res.json();

    const users = data.map(userLike => localhostUserToModel(userLike));

    return users;
}
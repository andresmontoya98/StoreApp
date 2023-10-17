import { localhostUserToModel } from "../mappers/localhost-user.mapper";

export const getUserById = async (id) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(url);
    const data = await res.json();

    const user = localhostUserToModel(data);
    // console.log(user);
    return user;
}
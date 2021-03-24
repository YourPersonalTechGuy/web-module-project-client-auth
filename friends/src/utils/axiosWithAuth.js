import axios from "axios";

export const axiosWithAuth = (url) => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: url,
        headers: {
            authorization: token
        }
    })
}
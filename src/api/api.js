import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "3fabe218-a95b-478b-a3e2-33a59b605d6d"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data;});
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {return response.data})
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {return response.data;})
    }
}
export const headerAPI = {
    auth() {
        return instance.get(`auth/me`).then(response => {return response.data})
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {return response.data})
    }
}
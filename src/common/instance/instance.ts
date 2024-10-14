import axios from "axios"

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "bdddab54-0906-470b-b839-c930a74d2799",
  },
})

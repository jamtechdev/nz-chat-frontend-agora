import axios from "axios"
import { server } from "../config/config"

export const createMetting = async (createrData) => {
    try {
        const { data } = await axios.post(`${server}/users/create-meeting`, createrData);
        return data;
    } catch (error) {
        throw error
    }
}

export const joinMeeting = async (meetingId, userData) => {
    try {
        const { data } = await axios.put(`${server}/users/join-meeting?meetingId=${meetingId}`, userData);
        return data;
    } catch (error) {
        throw error
    }
}
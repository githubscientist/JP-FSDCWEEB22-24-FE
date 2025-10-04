import axios from "axios";

const baseURL = "https://jp-fsdcweeb22-24-be.onrender.com/api/v1";

const protectedInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Include cookies in requests
});

export default protectedInstance;
import axios from "axios";


const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmQ2NzI2M2FiNzRkOWZiOTI0Y2NmNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzM1NzM3NCwiZXhwIjoxNjczNjE2NTc0fQ.Y7q5d1vMBs0dIAAD1V_RMKPbo3aLDpAmpRGTt1JYPVs"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})
import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api", // Укажите базовый URL вашего API
});

// Добавляем токен в заголовки всех запросов
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // Получаем токен из localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Добавляем токен в заголовок Authorization
    }
    return config;
});


export default API;

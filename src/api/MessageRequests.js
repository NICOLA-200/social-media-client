import axios from 'axios'


const API = axios.create({ baseURL: 'https://social-media-backend-chi.vercel.app' });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);

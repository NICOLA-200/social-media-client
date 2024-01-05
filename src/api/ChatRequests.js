import axios from 'axios'


const API = axios.create({ baseURL: 'https://social-media-backend-chi.vercel.app' });

export const createChat = (data) => API.post('/chat/', data);

export const deleteChat = (_id) => API.delete('/chat/delete', _id)

export const userChats = (id) => API.get(`/chat/${id}`);

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);
     

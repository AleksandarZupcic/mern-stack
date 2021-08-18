import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/cinema"
});

export const insertMovie = (payload) => api.post(`/movie`, payload);
export const getAllMovies = () => api.get(`/movie`);
export const getMovieById = (id) => api.get(`/movie/${id}`);
export const updateMovie = (id, payload) =>  api.put(`/movie/${id}`, payload);
export const deleteMovie = (id) => api.delete(`/movie/${id}`);

const apis = { insertMovie, getAllMovies, getMovieById, updateMovie, deleteMovie };

export default apis;
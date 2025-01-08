import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_HOST_IP_ADDRESS;
console.log("THIS IS CUSTOM",API_BASE_URL);
//const API_BASE_URL = "http://localhost:8085";

// Add a new game
export const addGame = (game) => axios.post(`${API_BASE_URL}/add`, game);

// Get all games
export const getAllGames = () => axios.get(`${API_BASE_URL}/getAll`);

// Update a game by ID
export const updateGame = (id, updatedGame) => axios.put(`${API_BASE_URL}/update/${id}`, updatedGame);

// Delete a game by ID
export const deleteGame = (id) => axios.delete(`${API_BASE_URL}/delete/${id}`);

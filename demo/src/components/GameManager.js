import React, { useEffect, useState } from "react";
import { addGame, getAllGames, updateGame, deleteGame } from "../api";

const GameManager = () => {
  const [games, setGames] = useState([]);
  const [newGame, setNewGame] = useState({ name: "", genre: "", rating: 0 });
  const [editingGame, setEditingGame] = useState(null);

  // Fetch all games when the component mounts
  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await getAllGames();
      setGames(response.data);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  const handleAddGame = async () => {
    try {
      await addGame(newGame);
      fetchGames();
      setNewGame({ name: "", genre: "", rating: 0 });
    } catch (error) {
      console.error("Error adding game:", error);
    }
  };

  const handleUpdateGame = async () => {
    if (!editingGame) return;
    try {
      await updateGame(editingGame.id, editingGame);
      fetchGames();
      setEditingGame(null);
    } catch (error) {
      console.error("Error updating game:", error);
    }
  };

  const handleDeleteGame = async (id) => {
    try {
      await deleteGame(id);
      fetchGames();
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  return (
    <div className="container">
      <h1>Game Manager</h1>

      {/* Add Game Form */}
      <div>
        <h2>Add Game</h2>
        <input
          type="text"
          placeholder="Name"
          value={newGame.name}
          onChange={(e) => setNewGame({ ...newGame, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Genre"
          value={newGame.genre}
          onChange={(e) => setNewGame({ ...newGame, genre: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newGame.rating}
          onChange={(e) => setNewGame({ ...newGame, rating: e.target.value })}
        />
        <button onClick={handleAddGame}>Add Game</button>
      </div>

      {/* Edit Game Form */}
      {editingGame && (
        <div>
          <h2>Edit Game</h2>
          <input
            type="text"
            placeholder="Name"
            value={editingGame.name}
            onChange={(e) =>
              setEditingGame({ ...editingGame, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Genre"
            value={editingGame.genre}
            onChange={(e) =>
              setEditingGame({ ...editingGame, genre: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Rating"
            value={editingGame.rating}
            onChange={(e) =>
              setEditingGame({ ...editingGame, rating: e.target.value })
            }
          />
          <button onClick={handleUpdateGame}>Update Game</button>
        </div>
      )}

      {/* Games List */}
      <div>
        <h2>Games List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id}>
                <td>{game.name}</td>
                <td>{game.genre}</td>
                <td>{game.rating}</td>
                <td>
                  <button onClick={() => setEditingGame(game)}>Edit</button>
                  <button onClick={() => handleDeleteGame(game.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameManager;

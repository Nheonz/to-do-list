import { useState } from "react";

const TodoForm = ({ onAddTodo, newTodoText, setNewTodoText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      onAddTodo(newTodoText); // Llama a la función de agregar tarea
      setNewTodoText(""); // Limpia el campo de entrada
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col space-y-4">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        className="border p-2 rounded w-full text-lg"
        placeholder="Escribe una nueva tarea"
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition"
      >
        Agregar Tarea
      </button>
    </form>
  );
};

export default TodoForm;

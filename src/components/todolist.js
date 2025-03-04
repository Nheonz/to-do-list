"use client";

import React, { useState } from "react";
import TodoItem from "./todoitem";

const TodoList = () => {
  const [todos, setTodos] = useState([]); //Contiene todas las tareas
  const [newTodoText, setNewTodoText] = useState(""); // El texto que un usuario escribe para agregar una nueva tarea

  // <--- Esta función agrega una nueva tarea al arreglo "todos" y luego limpia el campo de texto --->
  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      const newTodo = {
        id: Date.now(),
        text: newTodoText,
        completed: false,
      };
      setTodos([...todos, newTodo]); // Agrega la nueva tarea al estado
      setNewTodoText(""); // Limpia el campo de entrada
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map(
        (todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo // Marca tarea como completada
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Elimina la tarea por id
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-4">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button onClick={handleAddTodo} className="mt-2 btn btn-primary w-full">
          Agregar Tarea
        </button>
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
        />
        // Aquí, mapeamos todas las tareas y las pasamos al componente TodoItem;
        //  para que cada tarea sea representada de forma independiente
      ))}
    </div>
  );
};

export default TodoList;

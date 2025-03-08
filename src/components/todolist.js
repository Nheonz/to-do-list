"use client";

import React, { useState, useEffect } from "react";
import TodoItem from "./todoitem";
import TodoForm from "./todoform";

const TodoList = () => {
  const [todos, setTodos] = useState([]); // Contiene todas las tareas
  const [newTodoText, setNewTodoText] = useState(""); // El texto que un usuario escribe para agregar una nueva tarea
  const [isOpen, setIsOpen] = useState(true); // Estado para controlar si la lista está abierta o cerrada

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

  // Aquí, mapeamos todas las tareas y las pasamos al componente TodoItem;
  //  para que cada tarea sea representada de forma independiente
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Formulario de agregar tarea */}
      <TodoForm
        onAddTodo={handleAddTodo}
        newTodoText={newTodoText}
        setNewTodoText={setNewTodoText}
      />

      {/* Botón para abrir y cerrar la lista de tareas */}
      <button
        onClick={() => setIsOpen(!isOpen)} // Cambia el estado de isOpen al hacer clic
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        {isOpen ? "Cerrar Lista" : "Abrir Lista"}{" "}
        {/* Texto que cambia dependiendo del estado */}
      </button>

      {/* Lista de tareas con animación */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden mt-4 ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Mapear todas las tareas y mostrarlas en el componente TodoItem */}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={handleToggleComplete}
            ondelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

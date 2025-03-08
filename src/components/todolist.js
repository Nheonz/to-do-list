"use client";

import React, { useState, useEffect } from "react";
import TodoItem from "./todoitem";
import TodoForm from "./todoform";

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

      {/* Lista de tareas */}
      <div className="mt-6 space-y-4">
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

import React, { useState } from "react"; // Contiene todas las tareas
import TodoItem from "./todoitem";

export default todolist;

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
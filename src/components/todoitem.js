"use client";

// <--- Importacion de React y useState --->
import { useState, useEffect } from "react";
import TodoForm from "./todoform";
import TodoList from "./todolist";

// <--- Definicion de componente todoitem --->
const todoitem = ({ todo, onToggleComplete, ondelete }) => {
  // Estados locales con useState
  const [isEditing, setIsEditing] = useState(false); // Este estado indica si estamos en modo edicion para la tarea
  const [editedText, setEditedText] = useState(todo.text); // Es el texto de la tarea minetras se esta editando. Se inicializa con el texto original de la tarea (todo.text)

  const handleEdit = () => {
    setIsEditing(true);
    // Esta funcion permite que se muestre el campo de edicion de texto
  };

  const handleSave = () => {
    if (editedText.trim() !== "") {
      todo.text = editedText; // Actualiza el texto
    }
    setIsEditing(false); // Una vez se edita la tarea, cambia el estado  sale del modo edicion
  };

  return (
    // <--- Renderizado del componente --->
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center">
        <input // Es un chebox que se marca si la tarea esta completada, se llama la funcion, pasando el id de la tarea, lo que permite cambiar su estado
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="mr-4"
        />

        {isEditing ? ( // Edicion de la tarea, si es true, se muestra el campo de texto para editar
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="border p-2 rounded"
          />
        ) : (
          <span // Si es false, solo se muestra el texto de la tarea, si esta completada se mostrara con una linea tachada
            className={`flex-1 ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        {isEditing ? ( // <--- Botones para editar, guardar y eliminar: Si la tarea está en modo de edición;
          //  (isEditing es true), se muestra un botón para guardar los cambios --->
          <button onClick={handleSave} className="btn btn-primary">
            Guardar
          </button>
        ) : (
          <button onClick={handleEdit} className="btn btn-primary">
            Editar
          </button>
        )}
        <button onClick={() => ondelete(todo.id)} className="btn btn-danger">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default todoitem;

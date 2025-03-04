// <--- Importacion de React y useState --->
import { useState } from "reacts";

// <--- Definicion de componente todoitem --->
const todoitem = ({ todo, ontogglecompelte, ondelete }) => {
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
  };
};

const Todoform = ({ onAddTodo }) => {
  const [newTodoText, setNewTodoText] = useState("");
  //Estado newtodotext para almacenar el texto de la nueva tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      onAddTodo(newTodoText);
      setNewTodoText("");
    }
  };
};

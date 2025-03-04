import TodoList from "../components/todolist";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6">Lista de Tareas</h1>
        <TodoList />
      </div>
    </div>
  );
}

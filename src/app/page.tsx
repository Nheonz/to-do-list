import TodoList from "/Users/Juan/Desktop/v01/todo-list/components/todolist";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6">Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;

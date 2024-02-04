import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api";

<script src="https://kit.fontawesome.com/23f5c9f2c3.js" crossorigin="anonymous"></script>

export default async function Home() {
  const todos = await getAllTodos();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-500 -mt-32">
        Todo
      </h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded^lg">
          <AddTask />
          <TodoList todos={todos}/>
        </div>
      </div>
    </main>
  );
}

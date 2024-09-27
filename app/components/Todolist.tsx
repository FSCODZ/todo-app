// /app/components/TodoList.tsx
'use client'; // Markera komponenten som en client component
import React, { useState } from 'react';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]); // State för uppgifter
  const [newTask, setNewTask] = useState<string>(''); // State för ny uppgift

  // Funktion för att lägga till en ny uppgift
  const addTask = () => {
    if (newTask.trim() !== '') { // Kontrollera att uppgiften inte är tom
      setTasks([newTask, ...tasks]); // Lägg till den nya uppgiften
      setNewTask(''); // Rensa inputfältet
    }
  };

  // Funktion för att ta bort en uppgift
  const removeTask = (taskToRemove: string) => {
    setTasks(tasks.filter(task => task !== taskToRemove)); // Filtrera bort den uppgift som ska tas bort
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden mt-16"> {/* Ändra bg-white till bg-gray-900 */}
      <div className="px-4 py-2">
        <h1 className="text-white font-bold text-2xl uppercase">To-Do List</h1> {/* Ändra texten till vit */}
      </div>
      <form className="w-full max-w-sm mx-auto px-4 py-2" onSubmit={(e) => { e.preventDefault(); addTask(); }}>
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} // Hantera inmatning
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      <ul className="divide-y divide-gray-200 px-4">
        {tasks.map((task, index) => (
          <li key={index} className="py-4 flex items-center justify-between">
            <span className="text-lg font-medium text-white">{task}</span> {/* Ändra textfärgen till vit */}
            <button
              className="bg-red-500 hover:bg-red-700 text-white text-sm py-1 px-2 rounded"
              onClick={() => removeTask(task)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

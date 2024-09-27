'use client'; 
import React, { useState } from 'react';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]); 
  const [newTask, setNewTask] = useState<string>(''); 

  const addTask = () => {
    if (newTask.trim() !== '') { 
      setTasks([newTask, ...tasks]); 
      setNewTask(''); 
    }
  };

  const removeTask = (taskToRemove: string) => {
    setTasks(tasks.filter(task => task !== taskToRemove)); 
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden mt-16"> 
      <div className="px-4 py-2">
        <h1 className="text-white font-bold text-2xl uppercase">To-Do List</h1>
      </div>
      <form className="w-full max-w-sm mx-auto px-4 py-2" onSubmit={(e) => { e.preventDefault(); addTask(); }}>
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} 
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
            <span className="text-lg font-medium text-white">{task}</span> 
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

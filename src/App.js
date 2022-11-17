import './App.css';
import React, {useState} from 'react';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([])

  const handleInputChange = (e) =>{
    if(e){
      setTask(e.target.value)
    }
  };

  const handleTasks = (e) =>{
    if (e && task){
      let tasksCopy = [...tasks];
      tasksCopy.push(task);
      setTasks(tasksCopy);
      setTask("");
    }
  }
  
  return (
    <div className='container'>
      <h1> Task Management</h1>
      <h4>Task({tasks.length})</h4>
      <div id='task-managent-form-container'>

        <div className="task-management-form" style={{margin: " 0 0 20px 0"}}>
          <input type="text" 
          className='input'
          placeholder='Enter your text'
          value={task}
          onChange={handleInputChange}
          />

          <button className='submit-cta' onClick={handleTasks}> Add Task </button>
          </div>

        <div id='task-list'>
          <ul>{tasks && tasks.map((d,i)=> <li key={i}>{d}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;

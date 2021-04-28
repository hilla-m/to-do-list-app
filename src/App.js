import './App.css';
import React, { useState } from 'react';
import TodoListPage from './pages/TodoListPage/TodoListPage';
import { Form, Container, Button } from 'react-bootstrap';
import Task from './models/TaskModel/TaskModel';
import uuidv4 from './utils/uuidv4';


function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    // setTasks(tasks.concat({ taskText: taskInput, taskChecked: false }));

    const taskId = uuidv4();

    setTasks(tasks.concat(new Task(taskId, taskInput, false)));
    setTaskInput("");
  }

  function handleCheckedBox(id, value) {
    // console.log("handleCheckedBox", id, value);
    const tempTasks = [...tasks];

    tempTasks.map(task => { if (task.taskId === id) { task.taskChecked = value } });

    // tempTasks[index].taskChecked = value;

    setTasks(tempTasks);
  }

  function handleDeleteTask(id) {

    const tempTasks = [...tasks];
    const taskToDelete = tempTasks.find(task => task.taskId === id);

    if (taskToDelete.taskChecked) {
      tempTasks.splice(tempTasks.indexOf(taskToDelete), 1);
      setTasks(tempTasks);
    } else {
      if (window.confirm("This task has not yet completed. Are you sure you want to delete it?")) {
        tempTasks.splice(tempTasks.indexOf(taskToDelete), 1);
        setTasks(tempTasks);
      }
    }
  }

  return (
    <div>
      <Container className="input-container">
        <h1>My To Do List</h1>
        <Form className="input-form">
          <Form.Control className="text-box" type="text" value={taskInput} placeholder="What's next?" onChange={e => setTaskInput(e.target.value)} /> {/* onKeyPress={addTask} */}
          <Button variant="primary" onClick={addTask}>Add Task</Button>
        </Form>
      </Container>
      < TodoListPage tasks={tasks} handleCheckedBox={handleCheckedBox} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;

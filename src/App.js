import './App.css';
import React, { useState } from 'react';
import TodoListPage from './pages/TodoListPage/TodoListPage';
import { Form, Container, Row, Button, FormLabel } from 'react-bootstrap';


function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    setTasks(tasks.concat({ taskText: taskInput, taskChecked: false }));
    setTaskInput("");
  }

  function handleCheckedBox(index, value) {
    console.log("handleCheckedBox", index, value);
    const tempTasks = [...tasks];
    tempTasks[index].taskChecked = value;
    setTasks(tempTasks);
  }

  return (
    <div>
      <Container className="input-container">
        <h1>Todos</h1>
        <Form>
          <Form.Control className="text-box" type="text" value={taskInput} placeholder="What's next?" onChange={e => setTaskInput(e.target.value)} /> {/* onKeyPress={addTask} */}
          <Button variant="primary" onClick={addTask}>Add Task</Button>
        </Form>
        < TodoListPage tasks={tasks} handleCheckedBox={handleCheckedBox} />
      </Container>
    </div>
  );
}

export default App;

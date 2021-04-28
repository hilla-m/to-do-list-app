import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import './TaskRow.css';

function TaskRow({task}) {
    const [tasks, setTasks] = useState([]);

    // function addTask() {
    //     setTasks(tasks.concat(task));
    // }

    const tasksRows = tasks.map((task) => <Form.Check type="checkbox" label={task} />);

    return (
        <div>
            <Container className="task-container">
                {tasksRows}
            </Container>
        </div>
    );
}

export default TaskRow;
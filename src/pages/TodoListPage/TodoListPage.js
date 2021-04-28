import React, { useState } from 'react';
import { Form, Container, Row, Button, FormLabel } from 'react-bootstrap';
import TaskRow from '../../components/TaskRow/TaskRow';
import './TodoListPage.css';
import Task from '../../models/TaskModel'

function TodoListPage({ tasks ,handleCheckedBox }) {

    const [filter, setFilter] = useState("all");

    let filteredTasks = [];

    if (filter==="all") {
        filteredTasks = [...tasks];
    }

    if (filter==="active") {
        filteredTasks = tasks.filter(task => !task.taskChecked);
    }

    if (filter==="completed") {
        filteredTasks = tasks.filter(task => task.taskChecked);
    }

    const checkBoxChange = (index, value) => {

        handleCheckedBox( index, value );
    }

    const tasksRows = filteredTasks.map((task, index) => <Form.Check type="checkbox" id={index} key={index} label={task.taskText} checked={task.taskChecked} onChange={()=>checkBoxChange(index, !task.taskChecked )} className={ task.taskChecked ? "isChecked" : ""}/>); 

    // items left counter
    let counter=0;
    tasks.filter( task => !task.taskChecked ? counter++ : counter);

    return (
        <div>
            <Container className="todos-container">
                <Row>
                    {tasksRows}
                </Row>
                {  tasksRows && tasksRows.length > 0 ? 
                <Row>
                    <FormLabel>{counter} items left </FormLabel>
                    <Button className="all" variant="primary" onClick={() => setFilter("all")}>All</Button>
                    <Button className="active" variant="primary" onClick={() => setFilter("active")}>Active</Button>
                    <Button className="completed" variant="primary" onClick={() => setFilter("completed")}>Completed</Button>
                </Row>
                : "" }
                {/* </Form> */}
            </Container>
        </div>
    );
}

export default TodoListPage;
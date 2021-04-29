import React, { useState } from 'react';
import { Container, Form, FormLabel, Row, Button } from 'react-bootstrap';
// import TaskRow from '../../components/TaskRow/TaskRow';
import './TodoListPage.css';

function TodoListPage({ tasks, handleCheckedBox, handleDeleteTask, handleRowHover }) {
    const [filter, setFilter] = useState("all");

    let filteredTasks = [];

    if (filter === "all") {
        filteredTasks = [...tasks];
    }

    if (filter === "active") {
        filteredTasks = tasks.filter(task => !task.taskChecked);
    }

    if (filter === "completed") {
        filteredTasks = tasks.filter(task => task.taskChecked);
    }

    // const checkBoxChange = (id, value) => {
    //     handleCheckedBox(id, value);
    // }

    function checkBoxChange(id, value) {
        handleCheckedBox(id, value);
    }

    function hoverRow(id, value) {
        handleRowHover(id, value);
    }

    function deleteTask(id) {
        handleDeleteTask(id);
    }

    const tasksRows = filteredTasks.map((task) =>
        <Row key={task.taskId} className="task-row" onMouseOver={() => hoverRow(task.taskId, true)} onMouseOut={() => hoverRow(task.taskId, false)}>
            <Form.Check type="checkbox" key={task.taskId} label={task.taskText} checked={task.taskChecked} onChange={() => checkBoxChange(task.taskId, !task.taskChecked)} className={task.taskChecked ? "isChecked" : ""} />
            <Button className={task.taskHovered ? "btn-delete visible" : "btn-delete hidden"} variant="primary" onClick={() => deleteTask(task.taskId)}>X</Button>
        </Row>
    );

    // items left counter
    let counter = 0;
    tasks.filter(task => !task.taskChecked ? counter++ : counter);

    return (
        <div>
            <Container className="todos-container">
                <Row className="tasks-rows">
                    {tasksRows}
                </Row>
                {tasks && tasks.length > 0 ?
                    <Row className="filter-row">
                        <FormLabel>{counter} items left </FormLabel>
                        <Button className={filter === "all" ? "filter" : ""} variant="primary" onClick={() => setFilter("all")}>All</Button>
                        <Button className={filter === "active" ? "filter" : ""} variant="primary" onClick={() => setFilter("active")}>Active</Button>
                        <Button className={filter === "completed" ? "filter" : ""} variant="primary" onClick={() => setFilter("completed")}>Completed</Button>
                    </Row>
                    : ""}
            </Container>
        </div>
    );
}

export default TodoListPage;
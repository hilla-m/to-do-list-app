import React, { useState } from 'react';
import { Form, Row ,Button } from 'react-bootstrap';
import './TaskRow.css';


function TaskRow({ task }) {
//     const [btnDelete, setBtnDelete] = useState(false);

//     const checkBoxChange = (id, value) => {
//         handleCheckedBox(id, value);
//     }

//     return (
//         <Row className="task-row" onMouseOver={() => setBtnDelete(true)} onMouseOut={() => setBtnDelete(false)}>
//             <Form.Check type="checkbox" key={task.taskId} label={task.taskText} checked={task.taskChecked} onChange={() => checkBoxChange(task.taskId, !task.taskChecked)} className={task.taskChecked ? "isChecked" : ""} />
//             <Button value={btnDelete} className={btnDelete ? "btn-delete visible" : "btn-delete hidden"} variant="primary" onClick={() => deleteTask(task.taskId)}>X</Button>
//         </Row>

//     );
}

export default TaskRow;
import './DataContainer'
import {useState} from "react";


export default function TaskItem(props) {
    const task = props.taskItem;

    const [isEditing, setEditing] = useState(false);


    return <div>
        <input
            type = "checkbox"
            checked = {props.isCompleted}
            id = {props.taskId}
            onChange={(e) =>
                props.handleChange(task.taskId, "isCompleted", e.target.checked)}
        />
        <label id = {props.taskId}> {props.taskName} </label>
    </div>
}
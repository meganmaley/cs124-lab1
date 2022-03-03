import './DataContainer'
import {useState} from "react";


export default function TaskItem(props) {
    const task = props.taskItem;

    // console.log(task.taskId, props.editedID)
    return <div>
        <input
            type = "checkbox"
            checked = {props.isCompleted}
            id = {props.taskId}
            onChange={(e) =>
                props.handleChange(task.taskId, "isCompleted", e.target.checked)}
        />

        <input className = "newItem isEditing" type = "text" value = {props.taskName} id = {props.taskId}
               onChange={(e)=> props.handleChange(task.taskId, "taskName", e.target.value)}
               onFocus = {(e)=> props.setEditedID(task.taskId)}/>

       {/*{task.taskId === props.editedID?:*/}
       {/*     <input type = "text"/>*/}
        {/*     : <div/>}*/}
    </div>
}
import TaskItem from "./TaskItem";
import {useState} from "react";

export default function TaskList(props){

    const [editedID, setEditedID] = useState(null);

    return (
        <div>
            <table>
                <tbody>
                    {props.data.map(t =>
                            <TaskItem taskItem={t}
                                      key={t.taskId}
                                      isCompleted={t.isCompleted}
                                      taskName={t.taskName}
                                      handleChange = {props.handleChange}
                                      editedID = {editedID}/>)}

                </tbody>
            </table>
        </div>)
}


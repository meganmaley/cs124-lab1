import TaskItem from "./TaskItem";

export default function TaskList(props){
    return <table>
        <tbody>
        {props.data.map(t =>
            <TaskItem taskItem={t}
                      key={t.taskId}
                      isCompleted={t.isCompleted}
                      taskName={t.taskName}
                      handleChange = {props.handleChange}
            />
        )}
        </tbody>
    </table>
}


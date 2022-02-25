import {useState} from "react";
import App from "./App";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export default function DataContainer(props) {
    // state manipulates data
    const [data, setData] = useState(props.data);

    function handleChange(taskID, field, value) {
        console.log(taskID, field, value);
        setData(data.map(taskItem => taskItem.taskId == taskID ? {...taskItem, [field]:value}:taskItem))
    }

    function handlePlusClick() {
        const newData = data.concat(
            {
                taskName: "",
                taskId: generateUniqueID(),
                isCompleted: false,
            }
        )
        setData(newData);
    }

    console.log("container is rendering")
    return (
        <div>
            <App data={data} handleChange={handleChange} handlePlusClick={handlePlusClick}/>
        </div>
    )
}

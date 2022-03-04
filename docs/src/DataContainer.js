import {useState} from "react";
import App from "./App";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export default function DataContainer(props) {
    const [data, setData] = useState(props.data);
    const [editedID, setEditedID] = useState(null);

    function handleChange(taskID, field, value) {
        console.log(taskID, field, value);
        setData(data.map(taskItem => taskItem.taskId === taskID ? {...taskItem, [field]:value}:taskItem))
    }

    function handlePlusClick() {
        const newRandomId = generateUniqueID();
        const newData = data.concat(
            {
                taskName: "New Item",
                taskId: newRandomId,
                isCompleted: false,
            }
        )
        setData(newData);
        setEditedID(newRandomId);
    }

    return (
        <div>
            <App data={data}
                 onDataChange={setData}
                 handleChange={handleChange}
                 handlePlusClick={handlePlusClick}
                 editedID={editedID}
                 setEditedID={setEditedID}
            />
        </div>
    )
}

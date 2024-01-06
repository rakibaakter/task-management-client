
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import useDeletion from "../../Hooks/useDeletion";

const Task = ({task, ind}) => {
    const deleteItem = useDeletion();

const handleDelete = (id) => {
  deleteItem(id);
};

    return (
        <tr >
                <th>
                  {ind+1}
                </th>
                <td className="text-xl">
                  {task.title}
                </td>
                <td>
                  {task.description}
                </td>
                <td>
                    {task.deadline}
                </td>
                <td>
                    {task.priority}
                </td>
                <td>
                    {task.status}
                </td>
                <th>
                    <div >
                    <button className="btn btn-ghost text-xl text-sky-500"><RiEdit2Fill /></button>
                    <button onClick={()=>handleDelete(task._id)} className="btn btn-ghost text-xl text-red-600"><RiDeleteBin5Line /></button>
                    </div>
                  
                </th>
              </tr>
    );
};

export default Task;
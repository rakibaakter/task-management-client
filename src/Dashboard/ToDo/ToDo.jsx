
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import useTask from '../../Hooks/useTask';
import useDeletion from '../../Hooks/useDeletion';


const ToDo = () => {
    const [tasks] = useTask();
    const deleteItem = useDeletion();

const handleDelete = (id) => {
  deleteItem(id);
};

    return (
        <div className="my-12">
<h2 className="text-xl text-teal-600 bg-teal-200 py-2 font-bold"> To Do List</h2>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Title</th>
        <th>Description</th>
        <th>Deadline</th>
        <th>Priority</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
        {
            tasks.map((task, ind)=> <tr key={task._id} ind={ind}>
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
              </tr>)
        }
      
    </tbody>
   
    
  </table>
</div>
            </div>

        </div>
    );
};

export default ToDo;
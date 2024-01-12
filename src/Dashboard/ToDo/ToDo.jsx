
import useTask from '../../Hooks/useTask';
import Task from '../Components/Task';


const ToDo = () => {
    const [tasks] = useTask();
    const todoTasks = tasks.filter(task => task.status === "to-do");
    // console.log(todoTasks);

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
            todoTasks.map((task, ind)=> <Task key={task._id} task={task} ind={ind}/>)
        }
      
    </tbody>
   
    
  </table>
</div>
            </div>

        </div>
    );
};

export default ToDo;

import useTask from '../../Hooks/useTask';
import useDeletion from '../../Hooks/useDeletion';
import Task from "../Components/Task";



const AllTask = () => {
    // const {user} = useAuth();
    const [tasks] = useTask();
    
    return (
        <div className="my-12">
<h2 className="text-xl text-teal-600 bg-teal-200 py-2 font-bold"> All Tasks Together</h2>
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
            tasks.map((task, ind)=> <Task key={task._id} task={task} ind={ind}/>)
        }
      
    </tbody>
   
    
  </table>
</div>
            </div>

            {/* <Link to="/dashboard/create-task">
                <PrimaryBtn title="Add New Task" />
            </Link> */}
        </div>
    );
};

export default AllTask;
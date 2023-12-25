
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../Shared/Buttons/PrimaryBtn';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";



const AllTask = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const [tasks, setTask] = useState([]);

useEffect(()=>{
    axiosPublic.get('/tasks')
    .then(res =>{
        const allData = res.data;
        // console.log(allData);
        const userData = allData.filter(data=> data.email === user.email)
        setTask(userData);
    })
    .catch(err =>{
        console.log(err.message);
    })
}, [])
// console.log(tasks);

    return (
        <div className="my-12">
<h2 className="text-xl text-teal-600 bg-teal-200 py-2 font-bold"> Add New Task To Your List</h2>
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
                    <button className="btn btn-ghost text-xl text-red-600"><RiDeleteBin5Line /></button>
                    </div>
                  
                </th>
              </tr>)
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
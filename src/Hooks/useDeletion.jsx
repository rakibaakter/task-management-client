import Swal from "sweetalert2";
import useAxiosPublic from "./useAxiosPublic";
import useTask from "./useTask";


const useDeletion = (id) => {
    const [tasks] = useTask()
    const axiosPublic = useAxiosPublic()
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your task has been deleted.",
              icon: "success",
            });
            // const deletedData = tasks.find(task=> task._id === id);
            const remainingData = tasks.filter(task=> task._id !== id);
            setTask(remainingData)
          }
        })
        .catch(err =>{
          console.log(err.message);
        })
      }
    });
};

export default useDeletion;
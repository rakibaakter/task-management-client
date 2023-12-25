import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";


const CreateTask = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic();

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        const task = {
            email : user.email,
            title : data.title,
            description : data.description,
            deadline : data.deadline,
            priority : data.priority,
            status : "to-do"
        }
        // console.log(task);

        axiosPublic.post('/tasks', task)
        .then((res) => {
            if (res.data.insertedId) {
              console.log("added to database");
              Swal.fire({
                title: "Task Added Successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
                },
              });
              reset()
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
            });
          });
        
      };
    return (
        <div>
            <h2 className="text-xl text-teal-600 bg-teal-200 py-2 font-bold"> Add New Task To Your List</h2>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  {...register("title", { required: true })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea {...register("description")}
                className="textarea textarea-bordered" placeholder="Description"></textarea>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  name="deadline"
                  className="input input-bordered"
                  {...register("deadline", { required: true })}
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Priority</span>
                </label>
                <select id="priority" name="priority" {...register("priority")}
                className="border py-3 px-3 rounded-lg"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
              </div>
            </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Add Task"
                  className="btn bg-teal-600 text-white hover:text-teal-600"
                />
              </div>
              
            </form>
            </div>
        </div>
    );
};

export default CreateTask;
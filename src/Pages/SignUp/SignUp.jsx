import { useForm } from "react-hook-form";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialSignIn from "../../Shared/SocialSignIn/SocialSignIn";

const SignUp = () => {
  const { createUser, updateUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
        updateUser(data.name, data.photoUrl)
          .then((res) => {
            const newUser = {
              name: data.name,
              email: data.email,
              photoUrl : data.photoUrl,
              password : data.password
            };
            axiosPublic
              .post("/users", newUser)
              .then((res) => {
                if (res.data.insertedId) {
                  console.log("added to database");
                  Swal.fire({
                    title: "Sign Up Successfully",
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
                  navigate("/");
                }
              })
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: error.message,
                });
              });
          })
          .catch((error) => {
            console.log(error.message);
          });
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
    <div className="pt-24">
      <div className="hero shadow-2xl w-4/5 mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-full lg:w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card w-full lg:w-1/2">
            <h1 className="text-3xl font-bold text-center">Sign Up!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600"> Name is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url (optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photoUrl"
                  {...register("photoUrl")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600"> Email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600"> Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600"> At least 6 character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    {" "}
                    Password must contain atleast one digit, one uppercase , one
                    lowercase and one special character{" "}
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn bg-teal-600 text-white hover:text-teal-600"
                />
              </div>
              <label className="  text-center my-2 text-teal-600">
                Already have an acoount?{" "}
                <Link to="/login" className="font-bold">
                  Please Log In!
                </Link>
              </label>
            </form>
            <SocialSignIn/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

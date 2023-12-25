import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.png";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialSignIn from "../../Shared/SocialSignIn/SocialSignIn";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();


  // const from = location.state?.pathname || "/";
  // console.log(from);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        Swal.fire({
          title: "user logged in ",
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
        navigate(location?.state ? location.state : "/dashboard");
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
    <div className="pt-32">
      <div className="hero shadow-2xl w-4/5 mx-auto ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2 ">
            <img src={loginImg} alt="" className="w-full" />
          </div>
          <div className="card md:w-1/2">
            <h1 className="text-4xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleLogin}
            className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
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
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Log In"
                  className="btn bg-teal-600 text-white hover:text-teal-600"
                />
              </div>
              <label className="  text-center my-2 text-teal-600">
                New Here?{" "}
                <Link to="/sign-up" className="font-bold">
                  Create a New Account
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

export default Login;

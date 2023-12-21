import { Link } from "react-router-dom";
import loginImg from "../../assets/login.png";

const Login = () => {
  return (
    <div className="pt-32">
      <div className="hero shadow-2xl w-4/5 mx-auto ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2 ">
            <img src={loginImg} alt="" className="w-full" />
          </div>
          <div className="card md:w-1/2">
            <h1 className="text-4xl font-bold text-center">Login now!</h1>
            <form className="card-body">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

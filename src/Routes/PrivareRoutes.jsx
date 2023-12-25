import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <progress className="loading loading-spinner loading-lg bg-teal-600"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

export default PrivateRoutes;
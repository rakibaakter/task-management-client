import FooterContainer from "../Shared/Footer/FooterContainer";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <FooterContainer/>
    </div>
  );
};

export default MainLayout;

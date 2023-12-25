
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiLocationMarker} from "react-icons/hi";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const FooterContainer = () => {

  return (
    <footer className="bg-black pt-10 px-2 md:px-10 lg:px-36 text-white">
      <div className="flex flex-wrap items-center justify-between ">
        <div className="">
          <Logo/>
          
          
        </div>
        <div>
        <div className="flex text-2xl gap-3 text-teal-100 ">
            <Link to="/"><BsFacebook /></Link>
            <Link to="/"><BsInstagram /></Link>
            <Link to="/"><BsLinkedin /></Link>
            <Link to="/"><BsYoutube /></Link>
            
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Contact</h3>
          <ul className="font-semibold text-teal-100">
            <li className="flex mt-1 items-center gap-3 ">
              <BiSolidPhoneCall />
              <h4>+88 0183330001</h4>
            </li>
            <li className="flex mt-1 items-center gap-3 ">
              <HiLocationMarker />
              <h4>Dhaka, Bangladesh</h4>
            </li>
          </ul>
        </div>
      </div>
      <div className=" mt-4 text-center">
        <hr className="w-2/3 mx-auto mb-6" />
        <span>Copyright © 2023 - All right reserved</span>
      </div>
    </footer>
  );
};

export default FooterContainer;
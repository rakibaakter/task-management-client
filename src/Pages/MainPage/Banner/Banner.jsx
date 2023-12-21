import { Link } from "react-router-dom";
import bannerImg from "../../../assets/banner.png";
import PrimaryBtn from "../../../Shared/Buttons/PrimaryBtn";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-teal-50 lg:pt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className="min-h-[50vh] lg:min-h-[60vh]" />
          <div className="md:px-12 lg:px-0">
            <h1 className="text-3xl md:text-5xl font-bold capitalize ">
              Boost your productivity
              <br />
              to new heights!
            </h1>
            <p className="py-6 text-xl tracking-wide">
              DoUp application will help you to organize your works by your
              priorities. It gives you the confidence that everything is
              organized and accounted for, so you can make progress on the
              things that are important to you.
            </p>
            <Link>
              <PrimaryBtn title="let's Explore" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

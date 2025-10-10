import { Link } from "react-router";
import TrendingApp from "../TrendingApp/TrendingApp";

const TrendingApps = ({ appsData }) => {
  return (
    <div className="p-4 md:p-20 bg-[#f5f5f5]">
      <div className="text-center py-4 md:py-0">
        <h3 className="text-xl md:text-4xl font-bold text-[#001931] mb-2 md:mb-4">
          Trending Apps
        </h3>
        <p className="text-[#626b82] text-xs md:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 py-5 md:py-10">
        {appsData.map((app) => (
          <TrendingApp key={app.id} app={app}></TrendingApp>
        ))}
      </div>

      <Link to="/apps" className="flex items-center justify-center">
        <button className="btn bg-[#66C23F] hover:bg-[#353BA2] text-white font-medium w-full md:w-auto">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default TrendingApps;

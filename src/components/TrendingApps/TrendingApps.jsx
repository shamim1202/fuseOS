import { Link } from "react-router";
import TrendingApp from "../TrendingApp/TrendingApp";

const TrendingApps = ({ appsData }) => {
  return (
    <div className="md:p-20 bg-[#f5f5f5]">
      <div className="text-center">
        <h3 className="text-xl md:text-4xl font-bold text-[#001931] mb-2 md:mb-4">
          Trending Apps
        </h3>
        <p className="text-[#626b82] text-xs md:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-2 md:my-10">
        {appsData.map((app) => (
          <TrendingApp key={app.id} app={app}></TrendingApp>
        ))}
      </div>

      <Link to="/apps" className="flex items-center justify-center">
        <button className="btn btn-primary">Show All</button>
      </Link>
    </div>
  );
};

export default TrendingApps;

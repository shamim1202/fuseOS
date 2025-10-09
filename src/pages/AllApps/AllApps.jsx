import { useLoaderData } from "react-router";
import TrendingApp from "../../components/TrendingApp/TrendingApp";

const AllApps = () => {
  const appsData = useLoaderData();
  return (
    <div className="md:p-20 bg-[#f5f5f5]">
      <div className="text-center md:mb-6">
        <h3 className="text-xl md:text-4xl font-bold text-[#001931] mb-2 md:mb-4">
          Our All Applications
        </h3>
        <p className="text-[#626b82] text-xs md:text-base">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex items-center justify-between md:mb-3">
        <h5 className="text-sm md:text-base font-bold text-[#001931]">
          {`(${appsData.length})`} Apps Found
        </h5>
        {/* Search Input */}
        <label className="input input-sm bg-transparent text-xs md:text-sm">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search Apps" />
        </label>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {appsData.map((app) => (
          <TrendingApp key={app.id} app={app}></TrendingApp>
        ))}
      </div>
    </div>
  );
};

export default AllApps;

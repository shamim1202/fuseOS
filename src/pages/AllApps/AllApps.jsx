import { useState } from "react";
import { BiError } from "react-icons/bi";
import { useLoaderData } from "react-router";
import Loading from "../../components/Loading/Loading";
import TrendingApp from "../../components/TrendingApp/TrendingApp";

const AllApps = () => {
  const appsData = useLoaderData();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState(appsData);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setLoading(true);

    // Filter apps by title or company name
    setTimeout(() => {
      const filtered = appsData.filter(
        (app) =>
          app.title.toLowerCase().includes(value) ||
          app.companyName.toLowerCase().includes(value)
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 300);
  };

  return (
    <div className="p-4 md:p-20 bg-[#f5f5f5]">
      <div className="text-center py-4 md:py-0 md:mb-6">
        <h3 className="text-xl md:text-4xl font-bold text-[#001931] mb-2 md:mb-4">
          Our All Applications
        </h3>
        <p className="text-[#626b82] text-xs md:text-base">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex items-center justify-between mb-2 md:mb-4">
        <h5 className="text-xs md:text-base font-semibold md:font-bold text-[#001931]">
          ({filteredApps.length}) Apps Found
        </h5>

        {/* ---------- Search Input ----------- */}
        <label className="input input-xs md:input-sm bg-transparent text-xs md:text-sm w-1/2 md:w-auto">
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
          <input
            type="search"
            placeholder="Search Apps"
            value={searchTerm}
            onChange={handleSearch}
          />
        </label>
      </div>

      {/* ---------- All Apps via mapping ---------- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {loading ? (
          <div className="col-span-full flex justify-center py-10">
            <Loading />
          </div>
        ) : filteredApps.length > 0 ? (
          filteredApps.map((app) => (
            <TrendingApp key={app.id} app={app}></TrendingApp>
          ))
        ) : (
          // highlight: show No Apps Found when search returns empty
          <div className="flex flex-col items-center gap-2 md:gap-4 col-span-full text-center py-10 bg-white text-amber-500 text-4xl md:text-6xl font-bold rounded">
            <BiError />{" "}
            <span className="text-base md:text-2xl font-medium">
              No Apps Found
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;

/**
 * 
 * {loading ? (
          // highlight: show Loading component when search is in progress
          <div className="col-span-full flex justify-center py-10">
            <Loading /> 
          </div>
        ) : filteredApps.length > 0 ? (
          filteredApps.map((app) => (
            <TrendingApp key={app.id} app={app}></TrendingApp>
          ))
        ) : (
          // highlight: show No Apps Found when search returns empty
          <div className="flex flex-col items-center gap-2 md:gap-4 col-span-full text-center py-10 bg-white text-amber-500 text-4xl md:text-6xl font-bold rounded">
            <BiError />{" "}
            <span className="text-base md:text-2xl font-medium">
              No Apps Found
            </span>
          </div>
        )}
 * 
 * 
 * {filteredApps.map((app) => (
          <TrendingApp key={app.id} app={app}></TrendingApp>
        ))}
 */

import { useEffect, useState } from "react";
import { FaCaretDown, FaSortAmountDown, FaSortAmountDownAlt } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { getStoredApps } from "../../Utilities/StoreData";

const InstalledApps = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const appsData = useLoaderData();

  useEffect(() => {
    const storedAppsData = getStoredApps();
    const dataParse = storedAppsData.map((id) => parseInt(id));
    const data = appsData.filter((app) => dataParse.includes(app.id));
    setInstalledApps(data);
  }, []);

  return (
    <div className="md:p-20 bg-[#f5f5f5]">
      <div className="text-center md:mb-6">
        <h3 className="text-xl md:text-4xl font-bold text-[#001931] mb-2 md:mb-4">
          Your Installed Apps
        </h3>
        <p className="text-[#626b82] text-xs md:text-base">
          Welcome - Here you can see all the apps you’ve downloaded or installed
          from our platform in one easy-to-manage view.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-[#001931] md:text-xl font-bold">1 Apps Found</h3>
        
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 font-medium border border-gray-300">
            Sort By Size <FaCaretDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box z-1 w-36 p-2 shadow-sm"
          >
            <li>
              <a><FaSortAmountDown /> High-Low</a>
            </li>
            <li>
              <a><FaSortAmountDownAlt /> Low-High</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;

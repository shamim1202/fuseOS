import { useEffect, useState } from "react";
import {
  FaCaretDown,
  FaSortAmountDown,
  FaSortAmountDownAlt,
} from "react-icons/fa";
import { useLoaderData } from "react-router";
import { getStoredApps } from "../../Utilities/StoreData";
import SingleApp from "../../components/SingleApp/SingleApp";

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

      <div className="flex items-center justify-between md:mb-4">
        <h3 className="text-[#001931] md:text-xl font-bold">{`${installedApps.length} Apps Found`}</h3>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 font-medium border border-gray-300"
          >
            Sort By Size <FaCaretDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box z-1 w-36 p-2 shadow-sm bg-gray-100"
          >
            <li>
              <a>
                <FaSortAmountDown /> High-Low
              </a>
            </li>
            <li>
              <a>
                <FaSortAmountDownAlt /> Low-High
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:gap-3 ">
        {installedApps.map((app) => (
          <SingleApp key={app.id} app={app}></SingleApp>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;

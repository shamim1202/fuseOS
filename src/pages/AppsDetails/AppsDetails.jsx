import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import {
  formatDownloads,
  formatFileSize,
} from "../../Utilities/ConvertDownload";
import { addAppsToStore, getStoredApps } from "../../Utilities/StoreData";
import RatingChart from "../../components/RatingChart/RatingChart";

const AppsDetails = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const { id } = useParams();
  const appId = parseInt(id);
  const appsData = useLoaderData();
  const singleApp = appsData.find((app) => app.id === appId);
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = singleApp;

  useEffect(() => {
    const installedApps = getStoredApps().map((id) => parseInt(id));
    if (installedApps.includes(appId)) setIsInstalled(true);
  }, [appId]);

  const installApps = (id) => {
    addAppsToStore(id);
    setIsInstalled(true);
  };

  return (
    <div className="p-4 md:p-20 bg-[#f5f5f5]">
      {/* ----------- Apps Details */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 border-b border-gray-300 pt-5 md:pt-0 pb-4 md:pb-8">
        <figure className="bg-white rounded p-2 md:p-4">
          <img className="rounded" src={image} alt="" />
        </figure>

        <div className="md:w-3/4">
          <div className="space-y-1 md:space-y-2 pb-2 md:pb-4 border-b-2 border-gray-200">
            <h1 className="text-xl md:text-3xl font-bold text-[#001931]">
              {title}
            </h1>
            <p className="text-[#8d8d8d] text-xs md:text-base">
              Developed By{" "}
              <span className="font-medium text-[#1972BA]">{companyName}</span>
            </p>
          </div>

          {/* ------------- Download, Reviews, Ratings --------- */}
          <div className="flex items-center gap-5 md:gap-10 py-3 md:py-4 text-center md:text-left">
            {/* ------- Downloads -------- */}
            <div className="space-y-2">
              <img
                className="h-4 md:h-6 mx-auto md:mx-0"
                src="https://i.ibb.co.com/SXDBYg09/icon-downloads.png"
                alt="Downloads"
              />
              <p className="text-[#001931] text-xs md:text-sm">Downloads</p>
              <h3 className="text-[#001931] text-xl md:text-4xl font-bold md:font-extrabold leading-4 md:leading-8">
                {formatDownloads(downloads)}
              </h3>
            </div>

            {/* -------- Ratings --------- */}
            <div className="space-y-2">
              <img
                className="h-4 md:h-6 mx-auto md:mx-0"
                src="https://i.ibb.co.com/RGnywcGC/icon-ratings.png"
                alt=""
              />
              <p className="text-[#001931] text-xs md:text-sm">
                Average Ratings
              </p>
              <h3 className="text-[#001931] text-xl md:text-4xl font-bold md:font-extrabold leading-4 md:leading-8">
                {ratingAvg}
              </h3>
            </div>
            {/* -------- Reviews --------- */}
            <div className="space-y-2">
              <img
                className="h-4 md:h-6 mx-auto md:mx-0"
                src="https://i.ibb.co.com/MxXR5LNS/icon-review.png"
                alt=""
              />
              <p className="text-[#001931] text-xs md:text-sm">Tatal Reviews</p>
              <h3 className="text-[#001931] text-xl md:text-4xl font-bold md:font-extrabold leading-4 md:leading-8">
                {formatDownloads(reviews)}
              </h3>
            </div>
          </div>

          <button
            onClick={() => installApps(id)}
            disabled={isInstalled}
            className={`btn ${
              isInstalled
                ? "btn-success opacity-50 cursor-not-allowed"
                : "bg-[#66C23F] hover:bg-[#353BA2]"
            } text-white font-medium w-full md:w-auto`}
          >
            {isInstalled
              ? "Installed"
              : `Install Now (${formatFileSize(size)})`}
          </button>
        </div>
      </div>

      {/* ----------- Recharts Graph ---------- */}
      <div className="py-4 md:py-8 border-b border-gray-300">
        <h3 className="md:text-lg font-bold mb-2 md:mb-3">Ratings</h3>
        <RatingChart ratings={ratings}></RatingChart>
      </div>

      {/* ------------ Apps Description ------------ */}
      <div className="mt-4 md:mt-8">
        <h3 className="md:text-lg font-bold mb-1 md:mb-2">Description</h3>
        <p className="text-sm md:text-base text-[#001931] leading-5 md:leading-7">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppsDetails;

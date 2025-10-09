import { useLoaderData, useParams } from "react-router";
import {
  formatDownloads,
  formatFileSize,
} from "../../Utilities/ConvertDownload";
import { addAppsToStore } from "../../Utilities/StoreData";

const AppsDetails = () => {
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
    platforms,
  } = singleApp;

  const installApps = (id) => {
    addAppsToStore(id)
  };

  return (
    <div className="md:p-20 bg-[#f5f5f5]">
      <div className="flex items-center gap-4 md:gap-10 border-b border-gray-300 md:pb-8">
        <figure className="bg-white md:p-4">
          <img src={image} alt="" />
        </figure>

        <div className="md:w-3/4">
          <div className="md:space-y-2 md:pb-4 border-b-2 border-gray-200">
            <h1 className="text-xl md:text-3xl font-bold text-[#001931]">
              {title}
            </h1>
            <p className="text-[#8d8d8d]">
              Developed By{" "}
              <span className="font-medium text-[#1972BA]">{companyName}</span>
            </p>
          </div>

          <div className="flex items-center md:gap-10  md:py-4">
            {/* ---- Downloads ---- */}
            <div className="space-y-2">
              <img
                className="h-3 md:h-6"
                src="https://i.ibb.co.com/SXDBYg09/icon-downloads.png"
                alt="Downloads"
              />
              <p className="text-[#001931] text-sm md:lg">Downloads</p>
              <h3 className="text-[#001931] text-xl md:text-4xl font-bold md:font-extrabold">
                {formatDownloads(downloads)}
              </h3>
            </div>
            {/* ---- Ratings ---- */}
            <div className="space-y-2">
              <img
                className="h-3 md:h-6"
                src="https://i.ibb.co.com/RGnywcGC/icon-ratings.png"
                alt=""
              />
              <p className="text-[#001931] text-sm md:lg">Average Ratings</p>
              <h3 className="text-[#001931] text-xl md:text-4xl font-bold md:font-extrabold">
                {ratingAvg}
              </h3>
            </div>
            {/* ---- Reviews ---- */}
            <div className="space-y-2">
              <img
                className="h-3 md:h-6"
                src="https://i.ibb.co.com/MxXR5LNS/icon-review.png"
                alt=""
              />
              <p className="text-[#001931] text-sm md:lg">Tatal Reviews</p>
              <h3 className="text-[#001931] text-xl md:text-4xl font-bold md:font-extrabold">
                {formatDownloads(reviews)}
              </h3>
            </div>
          </div>

          <button
            onClick={() => installApps(id)}
            className="btn btn-success text-white font-medium"
          >{`Install Now (${formatFileSize(size)})`}</button>
        </div>
      </div>

      {/* ----------- Graph ---------- */}
      <div className="md:py-8 border-b border-gray-300">
        <h3 className="md:text-lg font-bold md:mb-2">Ratings</h3>
      </div>

      <div className="md:mt-8">
        <h3 className="md:text-lg font-bold md:mb-2">Description</h3>
        <p className="text-sm md:text-base text-justify text-[#001931] leading-7">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppsDetails;
/**
 * https://i.ibb.co.com/SXDBYg09/icon-downloads.png
https://i.ibb.co.com/RGnywcGC/icon-ratings.png
https://i.ibb.co.com/MxXR5LNS/icon-review.png
 */

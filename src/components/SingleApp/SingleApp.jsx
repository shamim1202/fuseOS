import { FaStar } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";
import {
  formatDownloads,
  formatFileSize,
} from "../../Utilities/ConvertDownload";
import { removeAppFromStore } from "../../Utilities/StoreData";

const SingleApp = ({ app, onUninstall }) => {
  const { id, image, title, ratingAvg, size, downloads } = app;

  const handleUninstall = () => {
    removeAppFromStore(id); // remove from localStorage
    onUninstall(id); // update parent state
  };

  return (
    <div className="flex flex-row items-center justify-between bg-white shadow-sm p-2 md:p-4 rounded">
      <div className="flex flex-row items-center gap-2 md:gap-4">
        <img className="w-10 md:w-14 rounded" src={image} alt={title} />

        <div className="md:space-y-1">
          <h3 className="md:text-lg font-semibold text-[#001931]">{title}</h3>

          {/* ------ status div ------- */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex flex-row items-center justify-center gap-1 md:gap-2 text-[#00d390] text-sm md:text-base">
              <RiDownload2Line /> {formatDownloads(downloads)}
            </div>

            <div className="flex flex-row items-center justify-center gap-1 md:gap-2 text-[#ff8811] text-sm md:text-base">
              <FaStar /> {ratingAvg}
            </div>

            <p className="text-sm md:text-base">{formatFileSize(size)}</p>
          </div>
        </div>
      </div>

      {/* ---------- Uninstall button --------- */}
      <button
        onClick={handleUninstall}
        className="btn btn-error btn-xs md:btn-md text-white font-medium"
      >
        Uninstall
      </button>
    </div>
  );
};

export default SingleApp;

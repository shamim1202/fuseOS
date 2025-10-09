import { FaStar } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";
import {
  formatDownloads,
  formatFileSize,
} from "../../Utilities/ConvertDownload";

const SingleApp = ({ app }) => {
  const { image, title, ratingAvg, size, downloads } = app;
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-sm md:p-4 rounded">
      <div className="flex items-center md:gap-4">
        <img className="md:w-14 rounded" src={image} alt={title} />

        <div className="md:space-y-1">
          <h3 className="md:text-lg font-semibold text-[#001931]">{title}</h3>

          {/* ------ status div ------- */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center gap-2 text-[#00d390]">
              <RiDownload2Line /> {formatDownloads(downloads)}
            </div>

            <div className="flex items-center justify-center gap-2 text-[#ff8811]">
              <FaStar /> {ratingAvg}
            </div>

            <p>{formatFileSize(size)}</p>
          </div>
        </div>
      </div>

      <button className="btn btn-error text-white font-medium w-full md:w-auto">
        Uninstall
      </button>
    </div>
  );
};

export default SingleApp;

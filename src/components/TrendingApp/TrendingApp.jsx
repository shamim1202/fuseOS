import { FaStar } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";
import { Link } from "react-router";
import { formatDownloads } from "../../Utilities/ConvertDownload";

const TrendingApp = ({ app }) => {
  const {id, image, title, ratingAvg, downloads} = app
  return (
    <Link to={`/apps_details/${id}`}>
      <div className="bg-white md:p-4 rounded shadow-md">
      <figure>
        <img
          className="rounded md:p-5"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div>
        <h2 className="md:text-xl font-semibold text-[#001931] md:py-3">
          {title}
        </h2>
        <div className="flex items-center justify-between text-sm md:text-base font-semibold">
          <div className="flex items-center justify-center gap-2 md:py-1 px-3 md:px-4 rounded bg-[#f1f5e8] text-[#00d390]">
            <RiDownload2Line /> {formatDownloads(downloads)}
          </div>
          <div className="flex items-center justify-center gap-2 md:py-1 px-3 md:px-4 rounded bg-[#fff0e1] text-[#ff8811]">
            <FaStar /> {ratingAvg}
          </div>
        </div>
      </div>
      </div>
    </Link>
  );
};

export default TrendingApp;

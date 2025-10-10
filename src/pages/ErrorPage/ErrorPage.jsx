import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <>
      <div>
        <div className="md:h-[100vh] bg-white items-center flex justify-center px-5 lg:px-0 mt-10 md:mt-0">
          <div className="md:w-[800px] text-center flex-col items-center justify-center mx-auto gap-[100px]">
            <div className="mb-8 md:mb-[56px]">
              <div className="max-w-[312px] w-full h-[160px] relative flex justify-center items-center mx-auto">
                <img
                  src="https://i.ibb.co.com/9HBMrqvy/error-image-2.webp"
                  alt="Error Page"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl md:text-6xl font-medium md:leading-[64px] text-[#1A1C16]">
                Ooops, Page Not Found!
              </h3>
            </div>
            <div className="flex flex-col gap-6 mt-3">
              <div className="text-center">
                <p className="text-base leading-6 tracking-wider font-sans">
                  The page you are looking for is not available or temporarily
                  unavailable.
                </p>
              </div>
              <div>
                <Link to="/">
                  <button className="btn flex flex-row items-center justify-center mx-auto  bg-[#66C23F] hover:bg-[#353BA2] text-white font-medium text-sm">
                    <FaArrowLeft /> Home Page
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

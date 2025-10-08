const Status = () => {
  return (
    <div className="py-8 md:py-14 text-center bg-linear-to-r from-[#8AD63F] to-[#353BA2] text-white">
      <h3 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">
        Trusted By Millions, Built For You
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0">
        <div className="md:space-y-4">
          <p className="text-xs md:text-base">Total Downloads</p>
          <h1 className="text-3xl md:text-6xl font-extrabold">34.6M</h1>
          <p className="text-xs md:text-base">26% More Than Last Month</p>
        </div>
        <div>
          <div className="md:space-y-4">
            <p className="text-xs md:text-base">Total Reviews</p>
            <h1 className="text-3xl md:text-6xl font-extrabold">957K</h1>
            <p className="text-xs md:text-base">43% More Than Last Month</p>
          </div>
        </div>
        <div>
          <div className="md:space-y-4">
            <p className="text-xs md:text-base">Active Apps</p>
            <h1 className="text-3xl md:text-6xl font-extrabold">144+</h1>
            <p className="text-xs md:text-base">31 More Ready To Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;

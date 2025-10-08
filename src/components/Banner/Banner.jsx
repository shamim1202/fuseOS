import heroImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="bg-[#f5f5f5] pt-8 md:pt-0 px-4 md:px-0">
      <div className="md:w-3xl md:mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold opacity-85 py-4 md:py-8 md:leading-16">
          One Platform To
          <br />
          <span className="text-[#8AD63F] md:font-extrabold">Discover</span> Apps
        </h1>
        <p className="text-[#626b82] text-xs md:text-base">
          No matter your device, the right app is waiting for you. <span className="font-semibold">fuseOS</span> unites Android and iOS
          apps in a single, easy-to-navigate platform. Discover new favorites,
          track popular trends, and enjoy a smarter way to explore apps. Your
          next app adventure starts here.
        </p>
      </div>

      {/* Apps Market Button */}
      <div className="flex items-center justify-center gap-4 py-5 md:py-8">
        <button className="text-[#001931] text-xs md:text-base font-bold flex items-center justify-center gap-1 md:gap-2.5">
          <img
            className="w-5 md:w-8"
            src="https://i.ibb.co.com/0LNZ3dX/google-play.png"
            alt="Play Store"
          />{" "}
          Google Play
        </button>

        <button className="text-[#001931] text-xs md:text-base font-bold flex items-center justify-center gap-1 md:gap-2.5">
          <img
            className="w-5 md:w-8"
            src="https://i.ibb.co.com/dsX88CkH/app-store.png"
            alt="App Store"
          />{" "}
          App Store
        </button>
      </div>

      <img className="mx-auto w-xs md:w-xl" src={heroImg} alt="Banner Image" />
    </div>
  );
};

export default Banner;

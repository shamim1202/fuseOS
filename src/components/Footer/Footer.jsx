import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#353aa22c] p-4 md:p-14">
      <aside>
        <Link to="/">
          <img
            className="w-10 md:w-20"
            src="https://i.ibb.co.com/Zz3Fnjxx/fuse-OS-logo.png"
            alt=""
            srcset=""
          />
        </Link>
        <p className="font-semibold flex flex-col items-center">
          <span className="md:text-lg">Fusion Technology Ltd.</span>
          Providing reliable tech since 2019
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-6">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              className="w-4 md:w-8"
              src="https://i.ibb.co.com/Fbntn8Hw/facebook.png"
              alt=""
            />
          </a>

          <a href="https://www.linkedin.com/" target="_blank">
            <img
              className="w-4 md:w-8"
              src="https://i.ibb.co.com/nMsRrG34/linkedin.png"
              alt=""
            />
          </a>
          <a href="https://x.com/home" target="_blank">
            <img
              className="w-4 md:w-8"
              src="https://i.ibb.co.com/F4kC2tgT/twitter.png"
              alt=""
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="max-w-7xl mx-auto font-inter">
      <Navbar></Navbar>
      {navigation.state === "loading" && <Loading />}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

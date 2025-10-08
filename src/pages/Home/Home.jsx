import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Status from "../../components/Status/Status";
import TrendingApps from "../../components/TrendingApps/TrendingApps";

const Home = () => {

  const appsData = useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <Status></Status>
      <TrendingApps appsData={appsData}></TrendingApps>
    </div>
  );
};

export default Home;
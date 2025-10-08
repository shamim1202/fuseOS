import { useLoaderData } from "react-router";

const AllApps = () => {

  const appsData = useLoaderData()
  return (
    <div>
      All Apps Will Be Here : {appsData.length}
    </div>
  );
};

export default AllApps;
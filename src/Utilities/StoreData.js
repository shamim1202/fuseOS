import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const getStoredApps = () => {
  const storedApps = localStorage.getItem("installedApps");

  if (storedApps) {
    const storedAppsData = JSON.parse(storedApps);
    return storedAppsData;
  } else {
    return [];
  }
};

const addAppsToStore = (id) => {
  const storedAppsData = getStoredApps();

  if (storedAppsData.includes(id)) {
    MySwal.fire({
      title: "Error!",
      text: "This Application Already Installed",
      icon: "error",
      confirmButtonText: "Try Another",
    });
    return;
  } else {
    storedAppsData.push(id);
    const data = JSON.stringify(storedAppsData);
    localStorage.setItem("installedApps", data);
    MySwal.fire({
      title: "Success!",
      text: "Application Install Successfully",
      icon: "success",
      confirmButtonText: "OK",
    });
  }
};

export { addAppsToStore, getStoredApps };

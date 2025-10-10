import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// Get Item From Local Storage --------------------->
const getStoredApps = () => {
  const storedApps = localStorage.getItem("installedApps");

  if (storedApps) {
    const storedAppsData = JSON.parse(storedApps);
    return storedAppsData;
  } else {
    return [];
  }
};

// Add/Set Item To Local Storage --------------------->
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
      text: "Application Install Successfull",
      icon: "success",
      confirmButtonText: "OK",
    });
  }
};

// Remove Item From Local Storage --------------------->
const removeAppFromStore = (id) => {
  const stored = localStorage.getItem("installedApps");
  if (!stored) return;

  const appsId = JSON.parse(stored);
  const updated = appsId.filter((app) => app !== id);
  const converted = JSON.stringify(updated);
  localStorage.setItem("installedApps", converted);
  MySwal.fire({
    title: "Success!",
    text: "Application Uninstall Successfull",
    icon: "success",
    confirmButtonText: "OK",
  });
};

export { addAppsToStore, getStoredApps, removeAppFromStore };

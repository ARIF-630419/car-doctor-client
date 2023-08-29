import { Outlet } from "react-router-dom";
import Nabver from "../Pages/Shered/Nabver";
import Footer from "../Pages/Shered/Footer";

const Main = () => {
  return (
    <div>
      <Nabver></Nabver>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
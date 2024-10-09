import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
   return (
      <div>
         <div className="h-[88px]">
            <Nav />
         </div>
         <div className="">
            <Outlet />
         </div>
         <div className="mt-10">
            <Footer />
         </div>
      </div>
   );
};

export default Root;
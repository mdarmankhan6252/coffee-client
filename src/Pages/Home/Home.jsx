
import Banner from "./Banner";
import Follow from "./Follow";
import Products from "./Products";

const Home = () => {
   return (
      <div>
         <Banner/>
         <Products/>
         <h1 className="text-center font-semibold text-xl sm:text-3xl mb-16">Follow on Instagram</h1>
         <Follow/>
      </div>
   );
};

export default Home;
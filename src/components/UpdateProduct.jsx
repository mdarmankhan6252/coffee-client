import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const UpdateProduct = ({ product }) => {
   console.log(product);
   const handleUpdate = e => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const chef = form.chef.value;
      const price = form.price.value;
      const img_url = form.img_url.value;
      const product = { name, chef, price, img_url }
      console.log(product);

   }

   return (
      <div className="flex items-center justify-center h-screen">
         <form onSubmit={handleUpdate} className="max-w-md px-6 py-12 border shadow-[0px_0px_3px_0px] shadow-gray-500 mx-auto space-y-6">
            <Link to='/'>
               <IoIosArrowBack className=" top-5 left-5 text-3xl p-1 bg-red-500 text-white rounded-full active:bg-red-600 cursor-pointer" /></Link>
            <h2 className="font-semibold text-xl text-center">Update Your Product</h2>
            <input type="text" name="name" placeholder="Name" required className="w-full border p-2" />
            <input type="text" name="chef" placeholder="Chef" required className="w-full border p-2" />
            <input type="text" name="price" placeholder="Price" required className="w-full border p-2" />
            <input type="text" name="img_url" placeholder="Photo URL" required className="w-full border p-2" />
            <input type="submit" value="UPDATE" className="border p-2 w-full active:bg-gray-50 font-semibold" />
         </form>
      </div>
   );
};

export default UpdateProduct;
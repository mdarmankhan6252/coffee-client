import Swal from "sweetalert2";

const AddProduct = () => {
   const handleAddProduct = e =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const chef = form.chef.value;
      const price = form.price.value;
      const img_url = form.img_url.value;
      const product = {name, chef, price, img_url}
      console.log(product);

      fetch('https://coffee-server-gray.vercel.app/coffee', {
         method:'POST',
         headers:{
            'content-type' : 'application/json'
         },
         body:JSON.stringify(product)
      })
      .then(res => res.json())
      .then(data =>{
         console.log(data);
         if(data.insertedId){
            form.reset();
            Swal.fire({
               icon: "success",
               title: "Product is added successfully!",
               showConfirmButton: false,
               timer: 1500
             });
         }
      })


   }
   return (
      <div className="my-16">
         <form onSubmit={handleAddProduct} className="max-w-md px-6 py-12 border shadow-[0px_0px_3px_0px] shadow-gray-500 mx-auto space-y-6">
            <h2 className="font-semibold text-xl text-center pb-2">Add Product</h2>
            <input type="text" name="name" placeholder="Name" required className="w-full border p-2"/>
            <input type="text" name="chef" placeholder="Chef" required className="w-full border p-2"/>
            <input type="text" name="price" placeholder="Price" required className="w-full border p-2"/>
            <input type="text" name="img_url" placeholder="Photo URL" required className="w-full border p-2"/>
            <input type="submit" value="ADD" className="border p-2 w-full active:bg-gray-50 font-semibold"/>
         </form>
      </div>
   );
};

export default AddProduct;
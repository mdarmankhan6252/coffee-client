import { useEffect, useState } from "react";
import Product from "../../components/Product";


const Products = () => {
   const [products, setProducts] = useState([]);
   useEffect(() =>{
      fetch('http://localhost:5000/coffee')
      .then(res => res.json())
      .then(data => {
         setProducts(data)
      })
   },[])

   return (
      <div className="py-16 max-w-7xl mx-auto px-2">
         <div className='mb-16'>
            <h3 className="text-center font-semibold text-2xl sm:text-3xl ">Our Popular Products : {products.length}</h3>
         </div>

         <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

            {
               products.map((product, i) =><Product key={i} product={product} products={products} setProducts={setProducts}></Product>)
            }            

         </div>
         
      </div>
   );
};

export default Products;
import { IoEyeOutline } from 'react-icons/io5';
import { TiPencil } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Product = ({ product, setProducts, products }) => {

   const { _id, name, chef, price, img_url } = product;

   const handleDeleteProduct = id => {
      console.log(id);

      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`https://coffee-server-gray.vercel.app/coffee/${id}`, {
               method: 'DELETE'
            })
               .then(res => res.json())
               .then(data => {
                  if (data.deletedCount > 0) {
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                     });
                     setProducts(products.filter(product => product._id !== id))
                  }
               })

         }
      });
   }

   return (
      <div className='flex items-center justify-between bg-[#f2f2ff] p-4 border rounded-xl duration-300 hover:scale-[1.02]'>
         <div>
            <img src={img_url} alt="product_img" className='w-full' />
         </div>
         <div className='space-y-6'>
            <p><span className='font-semibold'>Name: </span>{name}</p>
            <p><span className='font-semibold'>Chef: </span>{chef}</p>
            <p><span className='font-semibold'>Price: </span>{price} Tk</p>
         </div>
         <div className='space-y-2'>
            <IoEyeOutline title='Details' className='bg-blue-500 text-white text-3xl p-1 cursor-pointer mb-2' />
            <Link product={product} to={`/updateProduct/${_id}`}>
               <TiPencil title='Update' className='bg-green-500 text-white text-3xl p-1 cursor-pointer' /></Link>
            <MdDelete onClick={() => handleDeleteProduct(_id)} title='Delete' className='bg-red-500 text-white text-3xl p-1 cursor-pointer' />
         </div>
      </div>
   );
};

export default Product;
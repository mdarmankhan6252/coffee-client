import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {

   const LoadedUsers = useLoaderData()
   const [users, setUsers] = useState(LoadedUsers)

   const handleDelete = id => {
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
            fetch(`https://coffee-server-nine-sand.vercel.app/users/${id}`, {
               method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               if(data.deletedCount > 0){
                  Swal.fire({
                     title: "Deleted!",
                     text: "Your file has been deleted.",
                     icon: "success"
                   });
                   const remaining = users.filter(user => user._id !== id)
                   setUsers(remaining)
               }
            })
         }
      });
   }
   return (
      <div className="max-w-7xl mx-auto px-2">
         <h1 className="py-12 text-center font-semibold text-2xl sm:text-4xl">All Users : {users.length}</h1>

         <div className="overflow-x-auto">
            <table className="table border">
               <thead>
                  <tr className="bg-base-200">
                     <th>SL</th>
                     <th>Email</th>
                     <th>Created Time</th>
                     <th>Last SignIn Time</th>
                     <th className="flex items-center justify-center">Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     users.map((user, i) => <tr key={i}>
                        <th>{i + 1}</th>
                        <td>{user.email}</td>
                        <td>{user.createdAt}</td>
                        <td>{user.lastSignInTime ? user.lastSignInTime : <span>- - - - - - - - - -</span>}</td>
                        <td onClick={() => handleDelete(user._id)} className="flex items-center justify-center font-semibold hover:text-red-500 cursor-pointer">X</td>
                     </tr>)
                  }
               </tbody>
            </table>
         </div>

      </div>
   );
};

export default Users;
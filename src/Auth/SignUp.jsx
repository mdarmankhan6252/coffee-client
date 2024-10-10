import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
   const { createUser, googleLogin } = useContext(AuthContext)
   const navigate = useNavigate();
   const handleSignUp = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      createUser(email, password)
         .then(result => {
            console.log(result.user);
            const createdAt = result.user.metadata.creationTime;
            const user = { email, createdAt }
            fetch('http://localhost:5000/users', {
               method:'POST',
               headers:{
                  'content-type' : 'application/json'
               },
               body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
               console.log(data)
               if(data.insertedId){
                  Swal.fire({
                     icon: "success",
                     title: "You have created account successfully!",
                     showConfirmButton: false,
                     timer: 1500
                   });
                   navigate('/')
               }
            })

         })
         .catch(err => {
            console.log(err)
         })
   }


   const handleGoogleLogin = () => {
      googleLogin()
         .then(result => {
            console.log(result.user);
         })
         .catch(err => {
            console.log(err);
         })

   }
   return (
      <div className="max-w-xl py-10 px-6 border mx-auto mt-24 mb-10">
         <form onSubmit={handleSignUp} className=" *:w-full *:p-2 *:border space-y-5">
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <input className="active:bg-gray-50 font-semibold" type="submit" value="Sign Up" />

         </form>
         <button onClick={handleGoogleLogin} className="font-semibold text-green-500 mt-8 p-2 border-2 active:bg-green-500 active:text-white">Google</button>
      </div>
   );
};

export default SignUp;
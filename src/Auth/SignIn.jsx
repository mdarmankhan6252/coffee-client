import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SignIn = () => {
   const { loginUser, googleLogin } = useContext(AuthContext)
   const handleSignIn = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      loginUser(email, password)
         .then(result => {
            console.log(result.user);
            const updateUser = {
               email,
               lastSignInTime : result.user.metadata.
               lastSignInTime
            }
            fetch('http://localhost:5000/users', {
               method:'PATCH',
               headers:{
                  'content-type' : 'application/json'
               },
               body : JSON.stringify(updateUser)
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data)
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
         <form onSubmit={handleSignIn} className=" *:w-full *:p-2 *:border space-y-5">
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <input className="active:bg-gray-50 font-semibold" type="submit" value="Sign In" />

         </form>
         <button onClick={handleGoogleLogin} className="font-semibold text-green-500 mt-8 p-2 border-2 active:bg-green-500 active:text-white">Google</button>
      </div>
   );
};

export default SignIn;
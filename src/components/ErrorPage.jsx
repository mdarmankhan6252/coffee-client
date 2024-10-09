import { Link } from 'react-router-dom';
import error_png from '../assets/error.png'
const ErrorPage = () => {
   return (
      <div className=''>
         <Link to='/' className='bg-red-500 text-white inline-block pl-6 pr-2 py-4 m-10 font-semibold click_path'>Home</Link>
         <div className='max-w-6xl mx-auto'>
            <img src={error_png} alt="error_img" className='w-full '/>
         </div>                
      </div>
   );
};

export default ErrorPage;
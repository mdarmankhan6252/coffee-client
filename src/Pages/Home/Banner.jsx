import banner from '../../assets/banner.png'
const Banner = () => {
   return (
      <div style={{backgroundImage:`url(${banner})`}} className='h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] w-full bg-cover bg-center flex items-center justify-center object-center'>
         <div className='max-w-3xl text-center mx-auto space-y-5'>
            <h1 className='text-white font-semibold font-serif text-xl sm:text-2xl md:text-4xl'>Would you like a Cup of Delicious Coffee?</h1>
            <p className='font-light text-white'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='custom_btn_1'>Buy Now</button>
         </div>                           
      </div>
   );
};

export default Banner;
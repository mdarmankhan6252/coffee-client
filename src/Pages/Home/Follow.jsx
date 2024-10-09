import img_1 from '../../assets/follow/1.png'
// import img_2 from '../../assets/follow/2.png'
import img_3 from '../../assets/follow/3.png'
import img_4 from '../../assets/follow/4.png'
import img_5 from '../../assets/follow/5.png'
import img_6 from '../../assets/follow/6.png'
import img_7 from '../../assets/follow/7.png'
import img_8 from '../../assets/follow/8.png'
const Follow = () => {
   return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-2'>
          <img src={img_1} alt="" className='w-full hover:scale-[1.02] duration-300'/>       
          <img src={img_5} alt="" className='w-full hover:scale-[1.02] duration-300'/>       
          <img src={img_3} alt="" className='w-full hover:scale-[1.02] duration-300'/>       
          <img src={img_4} alt="" className='w-full hover:scale-[1.02] duration-300'/>       
          <img src={img_5} alt="" className='w-full hover:scale-[1.02] duration-300'/>       
          <img src={img_6} alt="" className='w-full hover:scale-[1.02] duration-300'/>       
          <img src={img_7} alt="" className='w-full hover:scale-[1.02] duration-300'/>       
          <img src={img_8} alt="" className='w-full hover:scale-[1.02] duration-300'/>       
      </div>
   );
};

export default Follow;
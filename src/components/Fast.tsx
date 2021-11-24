import { FiArrowRight } from 'react-icons/fi';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';

const Fast = () => {
  return (
    <div className='pt-12 px-16 pb-10'>
      <div className='flex flex-col items-end'>
        <h2 className='text-9xl font-medium'>
          fast & <br /> beautiful.
        </h2>
      </div>
      <ul className='flex space-x-24 text-3xl pt-10 pl-10'>
        <li>
          <h4>UI/UX</h4>
        </li>
        <li>
          <h4>Development</h4>
        </li>
        <li>
          <h4>Solutions</h4>
        </li>
      </ul>
      <div className='w-full h-2 rounded-full bg-black mt-6'></div>
      <div className='py-10 flex justify-between'>
        <div className='flex space-x-6'>
          {/* img1 */}
          <div className='border-b-2 border-gray-600'>
            <img src={pic1} alt='mamaearth' />
            <div className='flex justify-between py-5'>
              <div>
                <h4 className='text-2xl font-medium'>
                  Mamaearth
                </h4>
                <span className='text-gray-400'>
                  SKIN CARE
                </span>
              </div>
              <div>
                <FiArrowRight className='w-8 h-8' />
              </div>
            </div>
          </div>
          {/* img2 */}
          <div className='border-b-2 border-gray-600'>
            <img src={pic2} alt='Flicka' />
            <div className='flex justify-between py-5'>
              <div>
                <h4 className='text-2xl font-medium'>
                  Flicka
                </h4>
                <span className='text-gray-400'>
                  COSMETICS
                </span>
              </div>
              <div>
                <FiArrowRight className='w-8 h-8' />
              </div>
            </div>
          </div>
          {/* img3 */}
          <div className='border-b-2 border-gray-600'>
            <img src={pic3} alt='modern crew' />
            <div className='flex justify-between py-5'>
              <div>
                <h4 className='text-2xl font-medium'>
                  Modern Crew
                </h4>
                <span className='text-gray-400'>
                  CLOTHING
                </span>
              </div>
              <div>
                <FiArrowRight className='w-8 h-8' />
              </div>
            </div>
          </div>
        </div>
        <div>
          <a
            href='#'
            className='text-3xl font-medium flex items-center'
          >
            View All
            <FiArrowRight className='ml-3 w-12 h-12' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fast;

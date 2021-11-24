import { FiArrowRight } from 'react-icons/fi';
import crew from '../images/crew-logo.svg';
import hera from '../images/hera-logo.svg';
import pic4 from '../images/pic4.png';
import pic5 from '../images/pic5.png';

const Driving = () => {
  return (
    <div className='bg-gren pt-12 px-16'>
      <h2 className='text-9xl'>
        driving <br />
        force
      </h2>
      <ul className='flex justify-end space-x-24 text-3xl pt-10 px-14'>
        <li>
          <h4>UI/UX</h4>
        </li>
        <li>
          <h4>Development</h4>
        </li>
        <li>
          <h4>Support</h4>
        </li>
        <li>
          <h4>Maintenance</h4>
        </li>
      </ul>
      <div className='w-full h-2 rounded-full bg-black mt-6'></div>
      <div className='py-10 flex justify-between'>
        <div>
          <a
            href='#'
            className='text-3xl font-medium flex items-center'
          >
            View All
            <FiArrowRight className='ml-3 w-12 h-12' />
          </a>
        </div>
        <div className='flex justify-end'>
          {/* first company */}
          <div className='w-1/3'>
            <img src={crew} alt='crew logo' />
            <h4 className='text-xl font-semibold'>
              The NoGood team is fast, savvy, and
              truly ahead of the curve
            </h4>
            <p className='pt-2'>
              “The growth squad model helped us
              stay agile yet laser-focused in
              achieving key metrics and growth
              objectives. NoGood is quick and
              consistent in delivering top and
              middle funnel growth.”
            </p>
            <div className='flex items-center pt-4'>
              <img src={pic4} alt='ceo1' />
              <div className='ml-5'>
                <h3 className='text-2xl font-semibold'>
                  Client Name
                </h3>
                <span className='font-medium tracking-wider'>
                  Cofounder/COO
                </span>
              </div>
            </div>
            <div className='flex pt-4'>
              <span className='text-xl tracking-wider font-medium border-b-4 pb-3 border-black'>
                See how we grew 600%
              </span>
              <FiArrowRight className='ml-8 w-8 h-8' />
            </div>
          </div>
          {/* second company */}
          <div className='w-1/3'>
            <img src={hera} alt='hera logo' />
            <h4 className='text-xl font-semibold pt-3'>
              The NoGood team is fast, savvy, and
              truly ahead of the curve
            </h4>
            <p className='pt-2'>
              “The growth squad model helped us
              stay agile yet laser-focused in
              achieving key metrics and growth
              objectives. NoGood is quick and
              consistent in delivering top and
              middle funnel growth.”
            </p>
            <div className='flex items-center pt-4'>
              <img src={pic5} alt='ceo2' />
              <div className='ml-5'>
                <h3 className='text-2xl font-semibold'>
                  Client Name
                </h3>
                <span className='font-medium tracking-wider'>
                  Cofounder/COO
                </span>
              </div>
            </div>
            <div className='flex pt-4'>
              <span className='text-xl tracking-wider font-medium border-b-4 pb-3 border-black'>
                See how we grew 600%
              </span>
              <FiArrowRight className='ml-8 w-8 h-8' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driving;

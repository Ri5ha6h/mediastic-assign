import { HiPlus } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';

const BeforeCall = () => {
  return (
    <div className='px-16 py-12 text-left divide-y-4 divide-black '>
      <h2 className='text-right text-9xl'>
        before <br /> the call.
      </h2>
      <div className='flex justify-between mt-10 text-2xl'>
        <div className='w-2/3'>
          <ul className='divide-y-2 divide-black '>
            <li>
              <a
                className='flex items-center justify-between py-4'
                href='#'
              >
                How the starting process work{' '}
                <HiPlus />
              </a>
            </li>
            <li>
              <a
                className='flex items-center justify-between py-4'
                href='#'
              >
                Lorem ipsum dolor sit amet,
                consectetur
                <HiPlus />
              </a>
            </li>
            <li>
              <a
                className='flex items-center justify-between py-4'
                href='#'
              >
                Etiam porttitor velit vitae dolor
                viverra rutrum
                <HiPlus />
              </a>
            </li>
            <li>
              <a
                className='flex items-center justify-between py-4'
                href='#'
              >
                Suspendisse lacinia, purus in
                imperdiet
                <HiPlus />
              </a>
            </li>
            <li>
              <a
                className='flex items-center justify-between py-4'
                href='#'
              >
                Nam vulputate sed odio non
                scelerisque
                <HiPlus />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a
            className='flex items-center gap-4 py-4 '
            href='#'
          >
            View All <FiArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BeforeCall;

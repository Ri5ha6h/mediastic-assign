import woo from '../images/WooCommerce.svg';
import shopify from '../images/shopify.svg';
import aws from '../images/aws.svg';

const Cover = () => {
  return (
    <div className='px-16 py-28 flex flex-col justify-center items-center'>
      <div className='w-1/3 text-7xl 2xl:text-9xl'>
        <h1 className='text-right'>design</h1>
        <h1 className='text-left font-bold'>
          develop
        </h1>
        <h1 className='text-right font-bold'>
          support
        </h1>
      </div>
      {/* logos */}
      <div className='flex space-x-8 py-24'>
        <div className='w-28 h-28 border border-gray-400 shadow-md rounded-full flex items-center justify-center'>
          <img
            className='w-24 h-24'
            src={woo}
            alt='woo commerce logo'
          />
        </div>
        <div className='w-28 h-28 border border-gray-400 shadow-md rounded-full flex items-center justify-center'>
          <img
            className='w-20 h-20'
            src={shopify}
            alt='shopify logo'
          />
        </div>
        <div className='w-28 h-28 border border-gray-400 shadow-md rounded-full flex items-center justify-center'>
          <img
            className='w-20 h-20'
            src={aws}
            alt='aws logo'
          />
        </div>
      </div>
    </div>
  );
};

export default Cover;

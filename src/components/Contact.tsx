import plane from '../images/plane.svg';
import phone from '../images/phone.svg';
const Contact = () => {
  return (
    <div className='flex justify-center py-24'>
      <div className='flex flex-col items-center justify-center p-10 space-y-4 border shadow-xl border-blu rounded-3xl'>
        <h2 className='text-9xl text-blu'>
          <b>let's</b> discuss
        </h2>
        <h3 className='text-5xl'>WHATS NEXT?</h3>

        <div className='flex gap-6'>
          <button className='flex items-center gap-4 p-2 border rounded-full border-grey-300 hover:border-black'>
            <span className='flex items-center justify-center w-12 h-12 rounded-full bg-blu'>
              <img
                className='w-6 h-6'
                src={plane}
                alt='plane logo'
              />
            </span>
            <p className='text-3xl text-blu'>
              Leave a message
            </p>
          </button>
          <button className='flex items-center gap-4 p-2 border rounded-full border-grey-300 hover:border-black'>
            <span className='flex items-center justify-center w-12 h-12 rounded-full bg-blu'>
              <img
                className='w-6 h-6'
                src={phone}
                alt='plane logo'
              />
            </span>
            <p className='text-3xl text-blu'>
              or just call now
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const Footer = () => {
  return (
    <div className='pt-16 pb-10 bg-gray-100'>
      <div className='flex justify-center gap-20 '>
        <div className='space-y-6'>
          <a href='#'>
            <h3 className='text-2xl'>Follow</h3>
          </a>
          <ul className='text-lg'>
            <li>
              <a href='#'>Instagram</a>
            </li>
            <li>
              <a href='#'>Pinterest</a>
            </li>
          </ul>
        </div>
        <div className='space-y-6'>
          <a href='#'>
            <h3 className='text-2xl'>
              Inquiries
            </h3>
          </a>
          <ul className='text-lg'>
            <li>
              <a href='#'>connect@mediastic.in</a>
            </li>
            <li>
              <a href='#'>+91 9327410281</a>
            </li>
          </ul>
        </div>
        <div className='space-y-6'>
          <a href='#'>
            <h3 className='text-2xl'>Projects</h3>
          </a>
          <ul className='text-lg'>
            <li>
              <a href='#'>Design</a>
            </li>
            <li>
              <a href='#'>Development</a>
            </li>
            <li>
              <a href='#'>Maintenances</a>
            </li>
          </ul>
        </div>
        <div className='space-y-6'>
          <a href='#'>
            <h3 className='text-2xl'>About</h3>
          </a>
          <ul className='text-lg'>
            <li>
              <a href='#'>Agency</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Products</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center pt-12'>
        <a href='#' className=''>
          © Mediastic Web Solutions 2021
        </a>
      </div>
    </div>
  );
};

export default Footer;

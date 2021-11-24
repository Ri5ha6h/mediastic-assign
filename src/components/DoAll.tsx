import { FiArrowRight } from 'react-icons/fi';

const DoAll = () => {
  return (
    <div className='bg-blu text-white px-16 pt-20'>
      <h2 className='text-9xl'>
        we do <br />
        it all.
      </h2>
      <ul className='flex justify-end space-x-24 text-3xl pt-10 px-14'>
        <li>
          <h4>Services</h4>
        </li>
        <li>
          <h4>Solutions</h4>
        </li>
        <li>
          <h4>Management</h4>
        </li>
      </ul>
      <div className='w-full h-2 rounded-full bg-white mt-6'></div>
      <div className='py-10 flex justify-between pr-14'>
        <div>
          <a
            href='#'
            className='text-3xl font-medium flex items-center'
          >
            View All
            <FiArrowRight className='ml-3 w-12 h-12' />
          </a>
        </div>
        <div className='flex space-x-24'>
          <ul className='space-y-4'>
            <li>Branding</li>
            <li>MVPs</li>
            <li>Digital Audits</li>
            <li>Product</li>
          </ul>
          <ul className='space-y-4'>
            <li>Web & Mobile</li>
            <li>Product Design</li>
            <li>Product Development</li>
            <li>UX Design</li>
            <li>UI Design</li>
            <li>Native & Web Apps</li>
            <li>SEO</li>
            <li>Marketing</li>
          </ul>
          <ul className='space-y-4'>
            <li>Content</li>
            <li>Traffic Acquisition</li>
            <li>Performance & CRO</li>
            <li>Marketing Automation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoAll;

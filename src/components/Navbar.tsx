import { MdOutlineNotificationsActive } from 'react-icons/md';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { BsChatText } from 'react-icons/bs';
import { VscCallOutgoing } from 'react-icons/vsc';
import logo from '../images/mediastic-logo.png';

const Navbar = () => {
  return (
    <div className='flex sticky justify-between items-center px-16 py-10 top-0 bg-white'>
      {/* first two icons */}
      <ul className='flex space-x-5'>
        <li>
          <a href='#'>
            <MdOutlineNotificationsActive className='h-12 w-12 text-blue-500' />
          </a>
        </li>
        <li>
          <a href='#'>
            <HiOutlineDotsCircleHorizontal className='h-12 w-12 text-gray-800' />
          </a>
        </li>
      </ul>
      {/* logo */}
      <ul>
        <li>
          <a href='#'>
            <img
              className='h-12'
              src={logo}
              alt='logo'
            />
          </a>
        </li>
      </ul>
      {/* last two icons */}
      <ul className='flex space-x-5'>
        <li>
          <a href='#'>
            <BsChatText className='h-12 w-12' />
          </a>
        </li>
        <li>
          <a href='#'>
            <VscCallOutgoing className='h-12 w-12 text-blue-500' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

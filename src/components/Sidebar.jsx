import React, { useState } from 'react';
import { logo } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faFileLines,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  // State to track the active item (quiz, exam, or user)
  const [activeItem, setActiveItem] = useState(null);

  // Function to handle item click and update the activeItem state
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='bg-white p-4 space-y-10 max-h-[800px] '>
      <img src={logo} alt='logo' />
      <div className='space-y-1'>
        {/* Quiz item with conditional background and text/icon colors */}
        <div
          className={`px-4 py-6 rounded-2xl space-x-2 flex items-center cursor-pointer ${
            activeItem === 'quiz' ? 'bg-[#7A58E6] text-white' : 'bg-transparent text-[#707070]'
          }`}
          onClick={() => handleItemClick('quiz')}
        >
          <FontAwesomeIcon
            icon={faCalendarDays}
            size='xl'
            color={activeItem === 'quiz' ? '#fff' : '#707070'}
          />
          <span className='font-semibold'>{activeItem === 'quiz' ? 'Quiz' : 'Quiz'}</span>
        </div>
        {/* Exam item with conditional background and text/icon colors */}
        <div
          className={`px-4 py-6 rounded-2xl space-x-2 flex items-center cursor-pointer ${
            activeItem === 'exam' ? 'bg-[#7A58E6] text-white' : 'bg-transparent text-[#707070]'
          }`}
          onClick={() => handleItemClick('exam')}
        >
          <FontAwesomeIcon
            icon={faFileLines}
            size='xl'
            color={activeItem === 'exam' ? '#fff' : '#707070'}
          />
          <span className='font-semibold'>{activeItem === 'exam' ? 'Exam' : 'Exam'}</span>
        </div>
        {/* User item with conditional background and text/icon colors */}
        <div
          className={`px-4 py-6 rounded-2xl space-x-2 flex items-center cursor-pointer ${
            activeItem === 'user' ? 'bg-[#7A58E6] text-white' : 'bg-transparent text-[#707070]'
          }`}
          onClick={() => handleItemClick('user')}
        >
          <FontAwesomeIcon
            icon={faUser}
            size='xl'
            color={activeItem === 'user' ? '#fff' : '#707070'}
          />
          <span className='font-semibold'>{activeItem === 'user' ? 'Assign User' : 'Assign User'}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

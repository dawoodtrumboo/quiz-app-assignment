import React from 'react';
import Navbar from './Navbar';

import QuizForm from './QuizForm';


const QuizScreen = () => {


  return (
    <div className='flex flex-col w-[55%] py-5 '>
      <Navbar />
      <QuizForm/>

     
    </div>
  );
};

export default QuizScreen;

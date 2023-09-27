import React from 'react'
import QuizCard from './QuizCard'
import {quizData} from '../constant/quizData'

const DetailBar = () => {
  return (
    <div className='flex flex-col items-center py-4  bg-white w-[20%] max-h-[800px]'>
     <div className='py-5 px-2 flex flex-col items-center bg-gradient-to-b from-[#8C6FE9] to-[#2D00BA] text-white text-3xl font-bold w-[80%] rounded-lg'>
        <p className='text-xs font-normal'>Total Quizes</p>
        <h1>{quizData.length}</h1>
      </div> 

      <h1 className='w-full text-start px-7 mt-5 font-bold '>Preview</h1>
      
      {/* {quizData.map((quiz,index)=>(
        <QuizCard
        key={index}
        question ={quiz.question}
        option={quiz.options}
        />
      ))} */}
        <div className='w-full max-h-[600px] overflow-y-scroll'>
      {quizData.map((quiz, index) => (
        <QuizCard
          key={index}
          question={quiz.question}
          options={quiz.options}
          imgUrl={quiz.image}
        />
      ))}
    
    </div>
    </div>
  )
}

export default DetailBar
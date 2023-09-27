import React from 'react'

const QuizCard = ({question,options,imgUrl}) => {
  return (
    <div className='bg-[#F5F6F7] w-[80%] mx-4 my-4 p-4 space-y-5 rounded-xl '>
      <div className='flex gap-2  '>
       {imgUrl? (<div className='min-h-[60px] min-w-[60px] max-h-[60px] max-w-[60px] rounded-lg overflow-hidden '>
        <img src={imgUrl} className='h-full w-full '/>
        </div>):''} 
    
      <p className='text-[10px] truncate text-[#707070]'>{question}</p>
      </div>
      
     
      <ul className='text-[#A9A9B1] text-[10px] truncate list-disc pl-5'>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  )
}

export default QuizCard
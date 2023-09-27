import React,{useState,useEffect} from 'react'
import QuizCard from './QuizCard'
// import {quizData} from '../constant/quizData'

const DetailBar = () => {

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    // Call the fetchQuizzes function here to load quiz data
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/get_quizzes');
      if (response.ok) {
        const data = await response.json();
        // console.log('Quiz data:', data);
        // Set the retrieved quiz data in state
        console.log('api get call')
        console.log(data)
        setQuizData(data);
      } else {
        console.error('Failed to fetch quiz data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // console.log("abe" + quizData[1].)

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
        {
        

        quizData.map((quiz, index) => {
  // Extract the options array from quiz
  // console.log(quiz.options)
console.log(quiz);
console.log('consoled consoled')
  const options = [...quiz.options]; 
console.log(options)
console.log('options end')
  return (
    <QuizCard
      key={index}
      question={quiz.question}
      options={options}
      // imgUrl={quiz.image}
    />
  );
})}
    
    </div>
    </div>
  )
}

export default DetailBar
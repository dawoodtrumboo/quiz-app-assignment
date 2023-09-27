import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'
import OptionFields from './OptionFields'
import CustomDropDown from './CustomDropDown';
import CustomDropDown2 from './CustomDropDown2';
import { dropDrownData } from '../constant/dropDownData';

const QuizForm = () => {
    const [selectedSubject, setSelectedSubject] = useState(''); // State for selected subject
    const [selectedTopic, setSelectedTopic] = useState(''); // State for selected topic
    const [selectedSubtopic, setSelectedSubtopic] = useState(''); // State for selected subtopic
     const [question, setQuestion] = useState('');
  
    // Function to handle subject selection
    const handleSubjectChange = (subject) => {
      if (subject === 'Language') {
        // Special case: "Language" selected
        setSelectedSubject('');
        setSelectedTopic('');
        setSelectedSubtopic('');
      } else if (subject === '...') {
        // Special case: "..." selected
        setSelectedSubject('');
        setSelectedTopic('');
        setSelectedSubtopic('');
      } else {
        setSelectedSubject(subject);
        setSelectedTopic(''); // Reset topic and subtopic when subject changes
        setSelectedSubtopic('');
      }
    };
  
    // Function to handle topic selection
    const handleTopicChange = (topic) => {
      setSelectedTopic(topic);
      setSelectedSubtopic(''); // Reset subtopic when topic changes
    };
  
    // Function to handle subtopic selection
    const handleSubtopicChange = (subtopic) => {
      setSelectedSubtopic(subtopic);
    };
    const [options, setOptions] = useState([{ id: 1 }]);
    const [nextId, setNextId] = useState(2);
  
    // Function to add a new option
    const addOption = () => {
      setOptions([...options, { id: nextId }]);
      setNextId(nextId + 1);
    };
  
    // Function to delete an option
    const deleteOption = (id) => {
      setOptions(options.filter((option) => option.id !== id));
    };


    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Create an object to represent the question and options
      const quizData = {
        question,
        options,
      };

      console.log(quizData);
      setQuestion('');
      setOptions([]);
    }


    // Styling for Language button and ... button
    const style1 = {
        width: 'auto',
    
    }
    const style2 = {
      backgroundColor: 'white',
  
  }

  return (

    <form onSubmit={handleSubmit}>
    <div className='w-full flex flex-col my-10 space-y-5'>
    <div className='flex w-full justify-between'>
      <CustomDropDown2
        name="Language"
        options={dropDrownData.find((item) => item.category === 'Language').options}
        style1={style1}
        style2={style2}


      />
      <CustomDropDown2
        name='...'
        options={dropDrownData.find((item) => item.category === '...').options}
        style1={style1}
        style2={style2}
      />
    </div>

    <div className='bg-white rounded-xl p-6'>
      <div className='flex flex-wrap w-full justify-between p-3 gap-4'>
      <CustomDropDown2
        name='Class'
        options={dropDrownData.find((item) => item.category === 'Class').options}
      />

        <CustomDropDown
          name="Subject"
          selected={selectedSubject}
          options={dropDrownData.find((item) => item.category === 'Subject').options.map((subject) => subject.name)}
          onSelect={(selected) => handleSubjectChange(selected)}
        />
        <CustomDropDown
          name="Topic"
          selected={selectedTopic}
          options={selectedSubject ? dropDrownData
            .find((item) => item.category === 'Subject')
            .options.find((subject) => subject.name === selectedSubject)
            .topics.map((topic) => topic.name) : []}
          onSelect={(selected) => handleTopicChange(selected)}
        />
        <CustomDropDown
          name="Sub Topic"
          selected={selectedSubtopic}
          options={selectedSubject && selectedTopic ? dropDrownData
            .find((item) => item.category === 'Subject')
            .options.find((subject) => subject.name === selectedSubject)
            .topics.find((topic) => topic.name === selectedTopic)
            .subtopics : []}
          onSelect={(selected) => handleSubtopicChange(selected)}
        />
       <CustomDropDown2
        name='Level'
        options={dropDrownData.find((item) => item.category === 'Level').options}
      />
      <CustomDropDown2
        name='Quiz Type'
        options={dropDrownData.find((item) => item.category === 'Quiz Type').options}
      />
        
      </div>
    </div>
    <div className='w-full flex flex-col my-10 space-y-5 bg-white rounded-xl p-6'>
        <div className='space-y-4'>
        <h1 className='text-lg font-bold text-[#707070]'>Questions</h1>
        <div className='flex gap-2 items-center'>
        <textarea  className='bg-[#F5F6F7] rounded-md w-full resize-none p-2 h-[40px]' placeholder="Question"     value={question}
            onChange={(e) => setQuestion(e.target.value)} />
        <FontAwesomeIcon icon={faImage} color='gray' size='lg' />
        </div>
        </div>
        <div>
        <h1 className='text-lg font-bold text-[#707070]'>Options:</h1>
        {options.map((option,index) => (
             
          <OptionFields
            key={option.id}
            index={index}
            onDelete={() => deleteOption(option.id)} // Pass delete function
            value={option}
          />
        ))
       }
        
      </div>
      <span
        className='font-bold text-[#7A58E6] w-full text-end text-xs cursor-pointer'
        onClick={addOption}
      >
        Add another option
      </span>
    
    </div>
  </div>
  <div className='w-full flex justify-center'><button type='submit' className='bg-[#7A58E6] py-4 w-[200px] text-white font-bold text-xs rounded-lg'>Post</button></div>
  </form>
  )
}

export default QuizForm
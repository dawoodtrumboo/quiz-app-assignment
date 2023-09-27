export const dropDrownData = [
    {
      category: 'Language',
      options: ['English', 'Hindi', 'Urdu','Add new'],
    },
    {
      category: 'Level',
      options: ['Beginner', 'Intermediate', 'Advanced'],
    },
    {
        category: 'SubTopic',
        options: ['Genetics', 'Ecology', 'Human anatomy', 'Add subtopic'],
      },
      {
        category: '...',
        options: ['Add a language', 'Create a subject', 'Create a Topic', 'Create a subtopic'],
      },
      {
        category: 'Subject',
        options: [
          {
            name: 'Science',
            topics: [
              {
                name: 'Biology',
                subtopics: ['Genetics', 'Ecology', 'Human anatomy', 'Add subtopic'],
              },
              {
                name: 'Chemistry',
                subtopics: ['Inorganic', 'Organic', 'Physical', 'Add subtopic'],
              },
              {
                name: 'Physics',
                subtopics: ['Mechanics', 'Electromagnetism', 'Thermodynamics', 'Add subtopic'],
              },
              // Add other topics under Science here
            ],
          },
          {
            name: 'Mathematics',
            topics: [
              {
                name: 'Algebra',
                subtopics: ['Algebra 1', 'Algebra 2', 'Add subtopic'],
              },
              {
                name: 'Geometry',
                subtopics: ['Euclidean', 'Non-Euclidean', 'Add subtopic'],
              },
              // Add other topics under Mathematics here
            ],
          },
          {
            name: 'History',
            topics: [
              {
                name: 'Indian',
                subtopics: ['Gandhi', 'Rajputs', 'Add subtopic'],
              },
              {
                name: 'European',
                subtopics: ['Alexander', 'Hitler', 'Add subtopic'],
              },
              // Add other topics under  here
            ],
          },
          // Add other subjects here
        ],
      },
      {
        category: 'Quiz Type',
        options: ['Multiple choice - Single answer', 'Multiple choice - multiple answers','Yes or No','True or False']
      },
      {
        category: 'Class',
        options: [1,2,3,4,5,6,7,8,9,'Add class']
      }

  ];
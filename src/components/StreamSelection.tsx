import React from 'react';
import { BookOpen, Briefcase, Palette } from 'lucide-react';
import { useForm } from '../contexts/FormContext';

const StreamSelection: React.FC = () => {
  const { studentData, updateStudentData } = useForm();
  
  const streams = [
    { 
      id: 'science', 
      name: 'Science', 
      icon: <BookOpen className="h-8 w-8 mb-2 text-blue-500" />,
      description: 'Physics, Chemistry, Biology, Mathematics'
    },
    { 
      id: 'commerce', 
      name: 'Commerce', 
      icon: <Briefcase className="h-8 w-8 mb-2 text-green-500" />,
      description: 'Accountancy, Business Studies, Economics'
    },
    { 
      id: 'arts', 
      name: 'Arts/Humanities', 
      icon: <Palette className="h-8 w-8 mb-2 text-purple-500" />,
      description: 'History, Political Science, Psychology, Languages'
    }
  ];
  
  const handleStreamSelect = (streamId: string) => {
    updateStudentData({ stream: streamId });
  };
  
  return (
    <div className="py-4">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Select Your Stream</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {streams.map(stream => (
          <div 
            key={stream.id}
            onClick={() => handleStreamSelect(stream.id)}
            className={`flex flex-col items-center p-6 rounded-lg cursor-pointer transition-all duration-200 ${
              studentData.stream === stream.id 
                ? 'bg-indigo-50 dark:bg-indigo-900/30 border-2 border-indigo-500 shadow-md transform scale-[1.02]' 
                : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700'
            }`}
          >
            {stream.icon}
            <h4 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">{stream.name}</h4>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">{stream.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamSelection;
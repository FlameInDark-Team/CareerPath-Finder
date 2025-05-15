import React, { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import { useForm } from '../contexts/FormContext';
import { Subject } from '../types';

const SubjectsForm: React.FC = () => {
  const { studentData, updateStudentData } = useForm();
  const [subjectName, setSubjectName] = useState('');
  const [grade, setGrade] = useState('');
  const [percentage, setPercentage] = useState('');
  const [isPassed, setIsPassed] = useState(true);
  
  const commonSubjects = {
    science: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Computer Science'],
    commerce: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English', 'Computer Applications'],
    arts: ['History', 'Political Science', 'Geography', 'Psychology', 'English', 'Sociology']
  };
  
  const handleAddSubject = () => {
    if (!subjectName.trim()) return;
    
    const newSubject: Subject = {
      name: subjectName,
      grade,
      percentage,
      isPassed
    };
    
    const updatedSubjects = [...studentData.subjects, newSubject];
    const updatedFailures = !isPassed 
      ? [...studentData.failures, subjectName] 
      : studentData.failures;
    
    updateStudentData({ 
      subjects: updatedSubjects,
      failures: updatedFailures
    });
    
    // Reset form
    setSubjectName('');
    setGrade('');
    setPercentage('');
    setIsPassed(true);
  };
  
  const handleRemoveSubject = (index: number) => {
    const removedSubject = studentData.subjects[index];
    const updatedSubjects = studentData.subjects.filter((_, i) => i !== index);
    const updatedFailures = removedSubject.isPassed 
      ? studentData.failures 
      : studentData.failures.filter(subj => subj !== removedSubject.name);
    
    updateStudentData({ 
      subjects: updatedSubjects,
      failures: updatedFailures
    });
  };
  
  const suggestedSubjects = studentData.stream ? commonSubjects[studentData.stream as keyof typeof commonSubjects] : [];
  
  return (
    <div className="py-4">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Add Your Subjects</h3>
      
      {suggestedSubjects.length > 0 && (
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Common subjects for selected stream:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedSubjects.map((subject) => (
              <button
                key={subject}
                type="button"
                onClick={() => setSubjectName(subject)}
                className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800/40 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                {subject}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Subject Name
            </label>
            <input
              type="text"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="E.g., Mathematics"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Grade (Optional)
            </label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select Grade</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Percentage
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="E.g., 85"
            />
          </div>
          
          <div className="flex items-center h-full pt-6">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isPassed}
                onChange={(e) => setIsPassed(e.target.checked)}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                {isPassed ? 'Passed' : 'Failed'}
              </span>
            </label>
          </div>
        </div>
        
        <button
          type="button"
          onClick={handleAddSubject}
          disabled={!subjectName.trim()}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Subject
        </button>
      </div>
      
      {studentData.subjects.length > 0 && (
        <div>
          <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Added Subjects</h4>
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Subject
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Grade
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Percentage
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {studentData.subjects.map((subject, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {subject.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {subject.grade || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {subject.percentage ? `${subject.percentage}%` : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        subject.isPassed 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {subject.isPassed ? 'Passed' : 'Failed'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleRemoveSubject(index)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectsForm;
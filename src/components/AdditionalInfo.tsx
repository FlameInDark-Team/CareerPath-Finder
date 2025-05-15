import React from 'react';
import { useForm } from '../contexts/FormContext';

const AdditionalInfo: React.FC = () => {
  const { studentData, updateStudentData } = useForm();
  
  const handlePercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateStudentData({ overallPercentage: value });
  };
  
  return (
    <div className="py-4">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Additional Information</h3>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Overall Percentage
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={studentData.overallPercentage}
            onChange={handlePercentageChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="E.g., 82.5"
          />
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Enter your overall percentage from your class 12 examination.
          </p>
        </div>
        
        {studentData.subjects.length > 0 && (
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
            <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">Summary</h4>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              You've added {studentData.subjects.length} subject{studentData.subjects.length !== 1 ? 's' : ''}.
              {studentData.failures.length > 0 && ` You've failed in ${studentData.failures.length} subject${studentData.failures.length !== 1 ? 's' : ''}.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalInfo;
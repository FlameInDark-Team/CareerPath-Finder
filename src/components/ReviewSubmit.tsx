import React from 'react';
import { useForm } from '../contexts/FormContext';
import { useNavigate } from 'react-router-dom';
import { getRecommendations } from '../services/recommendationService';

const ReviewSubmit: React.FC = () => {
  const { studentData, setRecommendations } = useForm();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const streamNames = {
    science: 'Science',
    commerce: 'Commerce',
    arts: 'Arts/Humanities'
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // In a real application, this would call the actual OpenAI API
      const recommendations = await getRecommendations(studentData);
      setRecommendations(recommendations);
      navigate('/results');
    } catch (error) {
      console.error('Error generating recommendations:', error);
      alert('An error occurred while generating recommendations. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="py-4">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Review Your Information</h3>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-lg mb-3 text-gray-900 dark:text-white">Academic Details</h4>
            
            <div className="mb-4">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Stream</div>
              <div className="mt-1 text-gray-900 dark:text-white">
                {studentData.stream ? streamNames[studentData.stream as keyof typeof streamNames] : 'Not specified'}
              </div>
            </div>
            
            <div className="mb-4">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Overall Percentage</div>
              <div className="mt-1 text-gray-900 dark:text-white">
                {studentData.overallPercentage ? `${studentData.overallPercentage}%` : 'Not specified'}
              </div>
            </div>
            
            {studentData.failures.length > 0 && (
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Failed Subjects</div>
                <div className="mt-1 text-gray-900 dark:text-white">
                  {studentData.failures.join(', ')}
                </div>
              </div>
            )}
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-3 text-gray-900 dark:text-white">Subject Breakdown</h4>
            
            {studentData.subjects.length > 0 ? (
              <div className="space-y-3">
                {studentData.subjects.map((subject, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                    <div className="font-medium text-gray-900 dark:text-white">{subject.name}</div>
                    <div className="flex items-center">
                      {subject.grade && (
                        <span className="mr-3 text-gray-700 dark:text-gray-300">{subject.grade}</span>
                      )}
                      <span className="text-gray-700 dark:text-gray-300">
                        {subject.percentage ? `${subject.percentage}%` : '-'}
                      </span>
                      <span className={`ml-3 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        subject.isPassed 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {subject.isPassed ? 'Pass' : 'Fail'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 italic">No subjects added</p>
            )}
          </div>
        </div>
        
        <div className="mt-8">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !studentData.stream || !studentData.overallPercentage || studentData.subjects.length === 0}
            className="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Recommendations...
              </>
            ) : (
              'Get My Career Recommendations'
            )}
          </button>
          
          {(
            !studentData.stream || 
            !studentData.overallPercentage || 
            studentData.subjects.length === 0
          ) && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              Please complete all required information before submitting.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSubmit;
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../contexts/FormContext';
import RecommendationCard from '../components/RecommendationCard';
import { ArrowLeft, Printer, Download } from 'lucide-react';

const Results: React.FC = () => {
  const { studentData, recommendations, resetForm } = useForm();
  const navigate = useNavigate();
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const handleStartOver = () => {
    resetForm();
    navigate('/form');
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  const handleDownload = () => {
    // In a real application, this would create a PDF/document of the recommendations
    // For this example, we'll simulate it with an alert
    alert('In a real application, this would download your recommendations as a PDF document.');
  };
  
  const streamNames = {
    science: 'Science',
    commerce: 'Commerce',
    arts: 'Arts/Humanities'
  };
  
  // If no recommendations, redirect to form
  React.useEffect(() => {
    if (recommendations.length === 0) {
      navigate('/form');
    }
  }, [recommendations, navigate]);
  
  if (recommendations.length === 0) {
    return null;
  }
  
  return (
    <div className="max-w-5xl mx-auto" ref={resultsRef}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Your Career Recommendations</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Based on your {studentData.stream ? streamNames[studentData.stream as keyof typeof streamNames] : ''} stream profile and academic performance
          </p>
        </div>
        
        <div className="flex space-x-2 mt-4 md:mt-0">
          <button
            onClick={handlePrint}
            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <Printer className="h-4 w-4 mr-2" />
            Print
          </button>
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </button>
        </div>
      </div>
      
      <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Profile Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Academic Stream</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {studentData.stream ? streamNames[studentData.stream as keyof typeof streamNames] : 'Not specified'}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Overall Percentage</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {studentData.overallPercentage}%
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Subjects</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {studentData.subjects.length} subjects
            </p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recommended Career Paths</h2>
      
      <div className="space-y-4 mb-8">
        {recommendations.map((recommendation, index) => (
          <RecommendationCard 
            key={recommendation.id} 
            recommendation={recommendation} 
            index={index} 
          />
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
        <button
          onClick={() => navigate('/form')}
          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Form
        </button>
        
        <button
          onClick={handleStartOver}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
        >
          Start Over
        </button>
      </div>
      
      <div className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400">
        <p>Note: These recommendations are based on your academic profile and are meant to guide your career exploration.</p>
        <p>We recommend consulting with career counselors for personalized advice.</p>
      </div>
    </div>
  );
};

export default Results;
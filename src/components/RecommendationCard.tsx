import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, GraduationCap, FileText } from 'lucide-react';
import { CareerRecommendation, ConfidenceLevel } from '../types';

interface RecommendationCardProps {
  recommendation: CareerRecommendation;
  index: number;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getConfidenceColor = (confidence: ConfidenceLevel): string => {
    switch (confidence) {
      case 'High':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Low':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
        isExpanded ? 'transform scale-[1.02]' : ''
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'both',
        animationName: 'fadeInUp',
        animationDuration: '500ms'
      }}
    >
      <div
        className="p-6 cursor-pointer"
        onClick={toggleExpand}
      >
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mr-3">
                {recommendation.career}
              </h3>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getConfidenceColor(recommendation.confidence)}`}>
                {recommendation.confidence} Match
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
              {recommendation.reasoning}
            </p>
          </div>
          <button 
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <BookOpen className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Recommended Courses</h4>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-6 space-y-1">
              {recommendation.courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <GraduationCap className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Top Colleges</h4>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-6 space-y-1">
              {recommendation.colleges.map((college, idx) => (
                <li key={idx}>{college}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <FileText className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Entrance Exams</h4>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-6 space-y-1">
              {recommendation.entranceExams.map((exam, idx) => (
                <li key={idx}>{exam}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Compass, Lightbulb } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Find Your Perfect <span className="text-indigo-600 dark:text-indigo-400">Career Path</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Confused about what to do after Class 12? We analyze your academic profile and 
            provide personalized career recommendations using advanced AI.
          </p>
          <Link 
            to="/form" 
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            <Compass className="mr-2 h-5 w-5" />
            Discover Your Path
          </Link>
        </div>
      </section>

      <section className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-4px]">
          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Input Your Details</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Share your academic stream, subjects, grades and preferences to help us understand your strengths.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-4px]">
          <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
            <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">AI Analysis</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Our AI analyzes your profile to identify the most suitable career paths based on your academic performance.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-4px]">
          <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
            <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Get Recommendations</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Receive detailed career recommendations with confidence scores, course suggestions, and entrance exam information.
          </p>
        </div>
      </section>

      <section className="py-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-8 mt-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose CareerPath Finder?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Making career decisions is difficult. We leverage advanced AI to analyze your academic profile and provide personalized recommendations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="mr-4 bg-indigo-100 dark:bg-indigo-800/40 rounded-full p-2">
              <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personalized Recommendations</h3>
              <p className="text-gray-600 dark:text-gray-300">Tailored career suggestions based on your academic strengths and interests.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 bg-indigo-100 dark:bg-indigo-800/40 rounded-full p-2">
              <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Powered by AI</h3>
              <p className="text-gray-600 dark:text-gray-300">Advanced algorithms analyze your profile to find the best career matches.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 bg-indigo-100 dark:bg-indigo-800/40 rounded-full p-2">
              <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Detailed Information</h3>
              <p className="text-gray-600 dark:text-gray-300">Get insights about courses, colleges, and entrance exams for each career path.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 bg-indigo-100 dark:bg-indigo-800/40 rounded-full p-2">
              <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Save & Print</h3>
              <p className="text-gray-600 dark:text-gray-300">Download or print your recommendations for future reference.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center mt-12 mb-8">
        <Link 
          to="/form" 
          className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 transform hover:scale-105"
        >
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
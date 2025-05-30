import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 bg-white dark:bg-gray-800 shadow-inner transition-colors duration-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} Course Recommendation System by Swarnadeep Roy. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for students worldwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

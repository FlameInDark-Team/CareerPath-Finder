import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useForm } from '../contexts/FormContext';
import { FormStep } from '../types';
import FormStepIndicator from '../components/FormStepIndicator';
import StreamSelection from '../components/StreamSelection';
import SubjectsForm from '../components/SubjectsForm';
import AdditionalInfo from '../components/AdditionalInfo';
import ReviewSubmit from '../components/ReviewSubmit';

const Form: React.FC = () => {
  const { currentStep, setCurrentStep } = useForm();
  const navigate = useNavigate();
  
  const steps: FormStep[] = [
    {
      id: 1,
      title: 'Select Stream',
      description: 'Choose your academic stream'
    },
    {
      id: 2,
      title: 'Add Subjects',
      description: 'Enter your subjects and grades'
    },
    {
      id: 3,
      title: 'Additional Info',
      description: 'Overall percentage and other details'
    },
    {
      id: 4,
      title: 'Review & Submit',
      description: 'Confirm your information'
    }
  ];
  
  const goToNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/');
    }
  };
  
  // Reset scroll position when step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Find Your Ideal Career Path</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Please provide details about your academic performance to get personalized recommendations.
        </p>
      </div>
      
      <FormStepIndicator steps={steps} currentStep={currentStep} />
      
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mt-6">
        {currentStep === 1 && <StreamSelection />}
        {currentStep === 2 && <SubjectsForm />}
        {currentStep === 3 && <AdditionalInfo />}
        {currentStep === 4 && <ReviewSubmit />}
        
        <div className="flex justify-between mt-8">
          <button
            onClick={goToPreviousStep}
            className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {currentStep === 1 ? 'Back to Home' : 'Previous Step'}
          </button>
          
          {currentStep < steps.length && (
            <button
              onClick={goToNextStep}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Next Step
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
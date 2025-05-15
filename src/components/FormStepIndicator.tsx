import React from 'react';
import { FormStep } from '../types';
import { Check } from 'lucide-react';

interface FormStepIndicatorProps {
  steps: FormStep[];
  currentStep: number;
}

const FormStepIndicator: React.FC<FormStepIndicatorProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full py-6">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step Circle */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 ${
              currentStep > step.id 
                ? 'bg-indigo-600 text-white' 
                : currentStep === step.id 
                  ? 'border-2 border-indigo-600 text-indigo-600' 
                  : 'border-2 border-gray-300 text-gray-300'
            }`}>
              {currentStep > step.id ? (
                <Check className="h-5 w-5" />
              ) : (
                <span className="text-sm font-medium">{step.id}</span>
              )}
            </div>
            
            {/* Step Title */}
            <div className={`ml-2 ${index < steps.length - 1 ? 'flex-grow' : ''}`}>
              <div className={`text-sm font-medium transition-colors duration-200 ${
                currentStep >= step.id ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {step.title}
              </div>
            </div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-grow mx-4">
                <div className={`h-0.5 transition-colors duration-200 ${
                  currentStep > step.id ? 'bg-indigo-600' : 'bg-gray-300'
                }`}></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FormStepIndicator;
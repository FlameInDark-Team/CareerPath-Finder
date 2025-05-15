import React, { createContext, useContext, useState, ReactNode } from 'react';
import { StudentData, CareerRecommendation } from '../types';

interface FormContextType {
  studentData: StudentData;
  updateStudentData: (data: Partial<StudentData>) => void;
  recommendations: CareerRecommendation[];
  setRecommendations: (recommendations: CareerRecommendation[]) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  resetForm: () => void;
}

const initialStudentData: StudentData = {
  stream: '',
  subjects: [],
  overallPercentage: '',
  failures: [],
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [studentData, setStudentData] = useState<StudentData>(initialStudentData);
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  const updateStudentData = (data: Partial<StudentData>) => {
    setStudentData(prevData => ({ ...prevData, ...data }));
  };

  const resetForm = () => {
    setStudentData(initialStudentData);
    setRecommendations([]);
    setCurrentStep(1);
  };

  return (
    <FormContext.Provider 
      value={{ 
        studentData, 
        updateStudentData, 
        recommendations, 
        setRecommendations,
        currentStep,
        setCurrentStep,
        resetForm
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export interface Subject {
  name: string;
  grade: string;
  percentage: string;
  isPassed: boolean;
}

export interface StudentData {
  stream: string;
  subjects: Subject[];
  overallPercentage: string;
  failures: string[];
}

export type ConfidenceLevel = 'Low' | 'Medium' | 'High';

export interface CareerRecommendation {
  id: string;
  career: string;
  courses: string[];
  colleges: string[];
  entranceExams: string[];
  confidence: ConfidenceLevel;
  reasoning: string;
}

export interface FormStep {
  id: number;
  title: string;
  description: string;
}
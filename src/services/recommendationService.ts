import { StudentData, CareerRecommendation, ConfidenceLevel } from '../types';
import { v4 as uuidv4 } from 'uuid';

// This is a mock service that simulates OpenAI GPT API calls
// In a real application, this would make actual API calls to OpenAI
export const getRecommendations = async (
  studentData: StudentData
): Promise<CareerRecommendation[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock recommendations based on student data
  const recommendations: CareerRecommendation[] = [];
  
  if (studentData.stream === 'science') {
    const percentage = parseInt(studentData.overallPercentage);
    
    // Determine confidence based on percentage
    const getConfidence = (threshold: number): ConfidenceLevel => {
      if (percentage >= threshold + 10) return 'High';
      if (percentage >= threshold) return 'Medium';
      return 'Low';
    };
    
    // Check for math and physics in subjects
    const hasSubject = (name: string): boolean => {
      return studentData.subjects.some(s => 
        s.name.toLowerCase().includes(name.toLowerCase()) && s.isPassed
      );
    };
    
    const hasMath = hasSubject('math');
    const hasPhysics = hasSubject('physics');
    const hasChemistry = hasSubject('chemistry');
    const hasBiology = hasSubject('biology');
    
    // Engineering recommendation
    if ((hasMath && hasPhysics) && percentage >= 70) {
      recommendations.push({
        id: uuidv4(),
        career: 'Engineering',
        courses: ['B.Tech in Computer Science', 'B.Tech in Electronics', 'B.Tech in Mechanical Engineering'],
        colleges: ['IIT', 'NIT', 'BITS Pilani', 'VIT'],
        entranceExams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE'],
        confidence: getConfidence(80),
        reasoning: `Your strong performance in Mathematics and Physics makes engineering a great fit. With an overall percentage of ${percentage}%, you have a good chance of clearing engineering entrance exams with proper preparation.`
      });
    }
    
    // Medical recommendation
    if ((hasBiology && hasChemistry) && percentage >= 75) {
      recommendations.push({
        id: uuidv4(),
        career: 'Medical Sciences',
        courses: ['MBBS', 'BDS', 'B.Pharm', 'BAMS'],
        colleges: ['AIIMS', 'CMC Vellore', 'JIPMER', 'State Medical Colleges'],
        entranceExams: ['NEET UG', 'AIIMS MBBS', 'JIPMER MBBS'],
        confidence: getConfidence(85),
        reasoning: `Your performance in Biology and Chemistry indicates an aptitude for medical sciences. The competitive nature of medical entrance exams will require dedicated preparation, but your ${percentage}% overall score suggests you have the academic foundation.`
      });
    }
    
    // Research/Pure Sciences recommendation
    if (percentage >= 75) {
      recommendations.push({
        id: uuidv4(),
        career: 'Research & Pure Sciences',
        courses: ['B.Sc in Physics', 'B.Sc in Mathematics', 'B.Sc in Chemistry', 'Integrated M.Sc programs'],
        colleges: ['IISER', 'IISc', 'DU', 'Chennai Mathematical Institute'],
        entranceExams: ['IISER Aptitude Test', 'NEST', 'KVPY'],
        confidence: getConfidence(80),
        reasoning: `Your academic profile suggests an aptitude for theoretical and applied sciences. Pure science courses can lead to research careers. Your ${percentage}% overall score indicates good potential for these programs.`
      });
    }
    
    // Computer Applications/IT recommendation
    if (hasMath && percentage >= 65) {
      recommendations.push({
        id: uuidv4(),
        career: 'Computer Applications & IT',
        courses: ['BCA', 'B.Sc IT', 'B.Sc Computer Science'],
        colleges: ['IIIT', 'NIT', 'DU', 'Symbiosis'],
        entranceExams: ['NIMCET', 'IIIT Entrance', 'University-specific exams'],
        confidence: getConfidence(70),
        reasoning: `Your performance in Mathematics and overall percentage of ${percentage}% make computer applications and IT a suitable career path. These programs offer a good balance of theory and practical skills with growing job opportunities.`
      });
    }
  }
  
  else if (studentData.stream === 'commerce') {
    const percentage = parseInt(studentData.overallPercentage);
    
    // Determine confidence based on percentage
    const getConfidence = (threshold: number): ConfidenceLevel => {
      if (percentage >= threshold + 10) return 'High';
      if (percentage >= threshold) return 'Medium';
      return 'Low';
    };
    
    // Check for specific subjects
    const hasSubject = (name: string): boolean => {
      return studentData.subjects.some(s => 
        s.name.toLowerCase().includes(name.toLowerCase()) && s.isPassed
      );
    };
    
    const hasAccountancy = hasSubject('account');
    const hasEconomics = hasSubject('econ');
    const hasBusiness = hasSubject('business');
    const hasMath = hasSubject('math');
    
    // CA/CS recommendation
    if (hasAccountancy && percentage >= 70) {
      recommendations.push({
        id: uuidv4(),
        career: 'Chartered Accountancy / Company Secretary',
        courses: ['CA', 'CS', 'CMA'],
        colleges: ['ICAI', 'ICSI', 'ICMAI'],
        entranceExams: ['CA Foundation', 'CS Foundation', 'CMA Foundation'],
        confidence: getConfidence(75),
        reasoning: `Your performance in Accountancy and overall percentage of ${percentage}% suggest you could excel in professional accounting courses. These professional designations offer excellent career growth and earning potential.`
      });
    }
    
    // Business Management recommendation
    if (percentage >= 65) {
      recommendations.push({
        id: uuidv4(),
        career: 'Business Management',
        courses: ['BBA', 'BBM', 'B.Com (Hons)'],
        colleges: ['SRCC', 'Christ University', 'Symbiosis', 'NMIMS'],
        entranceExams: ['DU JAT', 'NPAT', 'SET', 'IPMAT'],
        confidence: getConfidence(70),
        reasoning: `Your commerce background and ${percentage}% overall score make business management programs a natural fit. These programs develop managerial and entrepreneurial skills with diverse career opportunities.`
      });
    }
    
    // Economics recommendation
    if ((hasEconomics || hasMath) && percentage >= 70) {
      recommendations.push({
        id: uuidv4(),
        career: 'Economics & Finance',
        courses: ['B.A. Economics', 'B.Sc Economics', 'BFM (Bachelor of Financial Markets)'],
        colleges: ['LSR', 'St. Stephen\'s', 'SRCC', 'Symbiosis School of Economics'],
        entranceExams: ['DU Entrance', 'CUET', 'Symbiosis Entrance Test'],
        confidence: getConfidence(75),
        reasoning: `Your academic profile shows potential for economics and finance. With ${percentage}% overall, you have good prospects for top economics programs which lead to careers in policy, consulting, and financial analysis.`
      });
    }
    
    // Banking recommendation
    if (percentage >= 60) {
      recommendations.push({
        id: uuidv4(),
        career: 'Banking & Insurance',
        courses: ['BBA in Banking', 'Bachelor of Banking Management', 'B.Com in Banking & Insurance'],
        colleges: ['NIBM', 'Symbiosis School of Banking', 'Christ University'],
        entranceExams: ['IBPS', 'SBI PO (after graduation)', 'University-specific exams'],
        confidence: getConfidence(65),
        reasoning: `With your commerce background and ${percentage}% score, banking and insurance programs offer stable career paths. This sector has consistent job opportunities with good growth potential.`
      });
    }
  }
  
  else if (studentData.stream === 'arts') {
    const percentage = parseInt(studentData.overallPercentage);
    
    // Determine confidence based on percentage
    const getConfidence = (threshold: number): ConfidenceLevel => {
      if (percentage >= threshold + 10) return 'High';
      if (percentage >= threshold) return 'Medium';
      return 'Low';
    };
    
    // Check for specific subjects
    const hasSubject = (name: string): boolean => {
      return studentData.subjects.some(s => 
        s.name.toLowerCase().includes(name.toLowerCase()) && s.isPassed
      );
    };
    
    const hasPolitical = hasSubject('politi');
    const hasHistory = hasSubject('history');
    const hasPsychology = hasSubject('psych');
    const hasLanguage = studentData.subjects.some(s => 
      ['english', 'hindi', 'sanskrit', 'french', 'german', 'spanish'].some(lang => 
        s.name.toLowerCase().includes(lang)
      ) && s.isPassed
    );
    
    // Law recommendation
    if ((hasPolitical || hasHistory) && percentage >= 70) {
      recommendations.push({
        id: uuidv4(),
        career: 'Law',
        courses: ['BA LLB', 'BBA LLB', 'B.Com LLB'],
        colleges: ['NLSIU Bangalore', 'NALSAR Hyderabad', 'NLU Delhi', 'Symbiosis Law School'],
        entranceExams: ['CLAT', 'AILET', 'LSAT India', 'University-specific law entrances'],
        confidence: getConfidence(75),
        reasoning: `Your humanities background, especially with your performance in political and historical subjects, makes law a strong career option. With ${percentage}% overall score, you have good prospects for law entrance exams.`
      });
    }
    
    // Psychology recommendation
    if (hasPsychology && percentage >= 65) {
      recommendations.push({
        id: uuidv4(),
        career: 'Psychology & Counseling',
        courses: ['B.A. Psychology', 'B.Sc Psychology', 'Applied Psychology programs'],
        colleges: ['Lady Shri Ram College', 'Christ University', 'Fergusson College', 'Ambedkar University'],
        entranceExams: ['CUET', 'University-specific entrances'],
        confidence: getConfidence(70),
        reasoning: `Your interest in psychology, reflected in your subject choices and ${percentage}% overall performance, indicates potential for a career in clinical psychology, counseling, or human resources.`
      });
    }
    
    // Media & Communications recommendation
    if (hasLanguage && percentage >= 60) {
      recommendations.push({
        id: uuidv4(),
        career: 'Media & Communication',
        courses: ['BA Journalism', 'BA Mass Communication', 'BMM (Bachelor of Mass Media)'],
        colleges: ['IIMC', 'Symbiosis Institute of Media', 'Xavier Institute of Communications', 'AJK MCRC Jamia'],
        entranceExams: ['IIMC Entrance', 'XIC Entrance', 'Symbiosis SET', 'AIMCET'],
        confidence: getConfidence(65),
        reasoning: `Your strong language skills and humanities background with ${percentage}% overall score make media and communication a fitting career path. These programs lead to careers in journalism, advertising, PR, and digital media.`
      });
    }
    
    // Civil Services recommendation
    if (percentage >= 70 && (hasPolitical || hasHistory)) {
      recommendations.push({
        id: uuidv4(),
        career: 'Civil Services',
        courses: ['BA Political Science', 'BA Public Administration', 'BA History', 'BA Economics'],
        colleges: ['St. Stephen\'s', 'Hindu College', 'Lady Shri Ram', 'Loyola College'],
        entranceExams: ['UPSC Civil Services (after graduation)', 'State PSC exams'],
        confidence: getConfidence(75),
        reasoning: `Your humanities background with ${percentage}% overall score provides a good foundation for civil services preparation. This career offers public service opportunities and administrative roles in government.`
      });
    }
    
    // Social Work recommendation
    if (percentage >= 60) {
      recommendations.push({
        id: uuidv4(),
        career: 'Social Work & Development',
        courses: ['BSW (Bachelor of Social Work)', 'BA Social Sciences', 'BA Development Studies'],
        colleges: ['TISS', 'Delhi School of Social Work', 'Loyola College', 'Christ University'],
        entranceExams: ['TISS BAT', 'University-specific entrances'],
        confidence: getConfidence(65),
        reasoning: `Your humanities background combined with a ${percentage}% score indicates potential for social work and development studies. These programs lead to impactful careers in NGOs, CSR, and community development.`
      });
    }
  }
  
  // If no specific recommendations were generated, add a generic one
  if (recommendations.length === 0) {
    recommendations.push({
      id: uuidv4(),
      career: 'Interdisciplinary Studies',
      courses: ['Liberal Arts programs', 'Multidisciplinary undergraduate programs'],
      colleges: ['Ashoka University', 'FLAME University', 'Azim Premji University'],
      entranceExams: ['University-specific entrance tests', 'CUET'],
      confidence: 'Medium',
      reasoning: `Based on your academic profile, you might benefit from exploring interdisciplinary programs that allow flexibility in course selection. These programs help discover interests while building diverse skills valued across sectors.`
    });
  }
  
  return recommendations;
};
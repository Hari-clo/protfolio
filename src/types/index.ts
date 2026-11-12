export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  displayName?: string;
  category: string;
  filterCategories: ('All Projects' | 'Data Analytics' | 'Machine Learning' | 'Deep Learning' | 'Computer Vision')[];
  tagline: string;
  overview: string;
  githubUrl: string;
  liveDemoUrl?: string;
  thumbnailBadge: string;
  highlights: string[];
  technologies: string[];
  
  // Case Study Detailed Fields
  problemStatement: string;
  proposedSolution: string;
  dataset: {
    name: string;
    description: string;
    sizeOrClasses: string;
    source: string;
    preprocessingSteps: string[];
  };
  architecture: {
    description: string;
    pipeline: string[];
    details: {
      type: string;
      framework: string;
      optimizerLoss?: string;
      keyComponents: string[];
    };
  };
  trainingWorkflow?: {
    methodology: string;
    metricsTracked: string[];
  };
  edaAndInsights?: {
    keyFindings: string[];
    visualizationsSummary: string[];
  };
  evaluationResults: {
    summary: string;
    metrics: { label: string; value: string; context: string }[];
  };
  businessImpactOrRecommendations?: string[];
  limitations: string[];
  futureImprovements: string[];
  visualArtifacts: {
    title: string;
    type: 'interface' | 'confusion_matrix' | 'training_graph' | 'dashboard' | 'chart';
    caption: string;
    mockupDetails: {
      headers?: string[];
      rows?: string[][];
      stats?: { label: string; value: string }[];
      chartType?: string;
    };
  }[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    focus: string;
    highlightProject: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  toolsUsed: string[];
  keyAccomplishment: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
  description: string;
  skillsVerified: string[];
}

export interface ServiceItem {
  id: string;
  domain: 'DATA ANALYTICS' | 'AI AND MACHINE LEARNING';
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  sampleProjectSlug?: string;
}

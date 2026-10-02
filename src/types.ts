export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  photoUrl: string;
  headline: string;
  quote: string;
  result: string;
  verified: boolean;
}

export interface ComparisonCase {
  id: string;
  title: string;
  category: 'Linha Frontal' | 'Barba Milionária' | 'Camuflagem de Calvície';
  description: string;
  timeSpent: string;
  ticketPrice: string;
  beforeImg: string;
  afterImg: string;
  keyDetails: string[];
}

export interface ModuleItem {
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  lessons: string[];
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

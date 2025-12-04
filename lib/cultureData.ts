export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface Principle {
  number: number;
  title: string;
  description: string;
  image?: string;
}

export interface ProcessPhase {
  phase: string;
  icon: string;
  description: string;
}

export interface GrowthCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface Metric {
  label: string;
  value: string;
}

export const values: Value[] = [
  {
    icon: 'Zap',
    title: 'Innovation First',
    description: 'We push boundaries and embrace emerging technologies. Every challenge is an opportunity to explore new solutions and redefine what\'s possible.',
  },
  {
    icon: 'Users',
    title: 'Client Partnership',
    description: 'We don\'t just build for clients—we build with them. Deep collaboration, transparency, and shared ownership define every engagement.',
  },
  {
    icon: 'BookOpen',
    title: 'Continuous Learning',
    description: 'Growth is non-negotiable. We invest in team development, knowledge sharing, and staying ahead of industry trends.',
  },
  {
    icon: 'CheckCircle',
    title: 'Quality Excellence',
    description: 'We sweat the details. Every line of code, every design decision reflects our commitment to excellence and long-term reliability.',
  },
  {
    icon: 'MessageSquare',
    title: 'Transparent Communication',
    description: 'Clarity builds trust. We communicate early, often, and honestly—about wins, challenges, and everything in between.',
  },
  {
    icon: 'Wind',
    title: 'Agile Mindset',
    description: 'We adapt quickly to change and embrace iterative improvement. Flexibility and responsiveness are embedded in our DNA.',
  },
];

export const principles: Principle[] = [
  {
    number: 1,
    title: 'Deep Discovery',
    description: 'We start by understanding. Through research, interviews, and market analysis, we uncover hidden opportunities and define the true problem before jumping to solutions.',
    image: 'https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  },
  {
    number: 2,
    title: 'Collaborative Design',
    description: 'Design thinking guides everything. We workshop ideas with stakeholders, iterate rapidly, and validate assumptions early to ensure we\'re building the right thing.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  },
  {
    number: 3,
    title: 'Engineering Excellence',
    description: 'We build to last. Our engineering practices—code quality, testing, documentation—ensure scalability, security, and maintainability from day one.',
    image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  },
  {
    number: 4,
    title: 'Continuous Improvement',
    description: 'Launch is the beginning, not the end. We monitor, measure, and iterate. Your product evolves alongside user needs and market dynamics.',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

export const processPhases: ProcessPhase[] = [
  {
    phase: 'Discovery',
    icon: 'Search',
    description: 'Research, validate, and define the opportunity',
  },
  {
    phase: 'Design',
    icon: 'Palette',
    description: 'Prototype, test, and refine the vision',
  },
  {
    phase: 'Development',
    icon: 'Code',
    description: 'Build, integrate, and optimize the product',
  },
  {
    phase: 'Delivery',
    icon: 'Send',
    description: 'Launch, monitor, and celebrate',
  },
  {
    phase: 'Support',
    icon: 'Headphones',
    description: 'Iterate, enhance, and scale together',
  },
];

export const growthCategories: GrowthCategory[] = [
  {
    category: 'Skill Development',
    icon: 'Award',
    items: [
      'Weekly technical workshops',
      'Conference attendance & speaking opportunities',
      'Certifications and advanced training programs',
      'Mentorship from industry experts',
    ],
  },
  {
    category: 'Knowledge Sharing',
    icon: 'Share2',
    items: [
      'Engineering blogs and case studies',
      'Internal tech talks and demos',
      'Documentation best practices',
      'Open-source contributions',
    ],
  },
  {
    category: 'Innovation Time',
    icon: 'Lightbulb',
    items: [
      '20% time for side projects',
      'Hackathons and innovation challenges',
      'Experimentation budget',
      'Exploration of emerging technologies',
    ],
  },
];

export const metrics: Metric[] = [
  { label: 'Products Launched', value: '10+' },
  { label: 'Users Served', value: '100K+' },
  { label: 'System Uptime', value: '99.9%' },
  { label: 'Team Growth', value: '3x in 2 years' },
];

export const workCultureQuotes = [
  'We trust our team. No surveillance, no unnecessary meetings. Just autonomy, responsibility, and accountability.',
  'Remote-first doesn\'t mean isolated. We prioritize async communication and intentional collaboration.',
  'Work-life balance isn\'t a perk—it\'s essential. Burnout kills innovation. We build sustainable practices.',
  'Your growth is our success. We invest in your career, your ideas, and your future.',
];

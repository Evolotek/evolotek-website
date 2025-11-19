export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Image {
  src: string;
  alt: string;
  caption?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Project {
  slug: string;
  client: string;
  title: string;
  tagline: string;
  theme: 'dark' | 'light';
  coverImage: string;
  services: string[];
  sectors: string[];
  studio: string;
  overview: string;
  challenge: string;
  solution: string;
  features: Feature[];
  technologies: string[];
  results: Metric[];
  gallery: Image[];
  testimonial?: Testimonial;
}

export const projectsData: Project[] = [
  {
    slug: 'sipstr',
    client: 'Evolotek',
    title: 'Sipstr',
    tagline: '1-Hour Alcohol Delivery Platform',
    theme: 'dark',
    coverImage: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=1200',
    services: ['Product Development', 'UI/UX Design', 'Mobile Development', 'Backend Engineering'],
    sectors: ['E-commerce', 'Delivery Services', 'Logistics'],
    studio: 'Mumbai',
    overview: 'Sipstr is Evolotek\'s in-house on-demand alcohol delivery platform designed for the U.S. market. The product enables customers to order alcohol from local vendors and receive deliveries within one hour.',
    challenge: 'The alcohol delivery market was fragmented with no unified platform. Existing solutions were slow, complex, and lacked real-time tracking capabilities.',
    solution: 'We built a comprehensive mobile-first platform with real-time GPS tracking, vendor management, secure payment integration, and intelligent delivery routing.',
    features: [
      { title: 'Real-Time Tracking', description: 'Live GPS tracking for all deliveries' },
      { title: 'Vendor Integration', description: 'Seamless onboarding and management of delivery partners' },
      { title: 'Smart Routing', description: 'AI-powered delivery optimization' },
      { title: 'Secure Payments', description: 'Encrypted payment processing and age verification' },
    ],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe API', 'Google Maps API'],
    results: [
      { label: 'Delivery Speed', value: '60 mins avg' },
      { label: 'Active Users', value: '50K+' },
      { label: 'Partner Network', value: '500+' },
      { label: 'Order Volume', value: '100K+ monthly' },
    ],
    gallery: [
      { src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Sipstr App Interface' },
      { src: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Delivery Tracking' },
      { src: 'https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Vendor Dashboard' },
    ],
  },
  {
    slug: 'veraeaty',
    client: 'Evolotek',
    title: 'Veraeaty',
    tagline: 'AI-Powered Personalized Meal Planner',
    theme: 'light',
    coverImage: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    services: ['AI Development', 'Product Design', 'Mobile App', 'ML Engineering'],
    sectors: ['Health Tech', 'AI/ML', 'Consumer App'],
    studio: 'Mumbai',
    overview: 'Veraeaty is an AI-driven meal planning platform that helps users cook smarter and plan meals tailored to their dietary needs and lifestyle.',
    challenge: 'Users struggled with meal planning, nutrition tracking, and generating grocery lists. Existing solutions lacked personalization and AI guidance.',
    solution: 'We built an intelligent platform with AI-powered meal recommendations, cooking assistance, nutrition analysis, and automated grocery list generation.',
    features: [
      { title: 'Smart Recommendations', description: 'AI-powered personalized meal suggestions' },
      { title: 'Nutrition Analysis', description: 'Detailed macro and micronutrient tracking' },
      { title: 'Cooking Assistance', description: 'Step-by-step AI cooking guidance' },
      { title: 'Grocery Integration', description: 'Automated shopping list generation' },
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB', 'OpenAI API'],
    results: [
      { label: 'AI Accuracy', value: '94%' },
      { label: 'Daily Users', value: '30K+' },
      { label: 'Recipes', value: '5000+' },
      { label: 'Meal Plans', value: '1M+ generated' },
    ],
    gallery: [
      { src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Veraeaty Home Screen' },
      { src: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Meal Recommendations' },
      { src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Nutrition Dashboard' },
    ],
  },
  {
    slug: 'tiffany-co',
    client: 'Tiffany & Co.',
    title: 'Zoomaya',
    tagline: 'Celebrating Tiffany & Co.\'s engraving legacy with generative AI',
    theme: 'dark',
    coverImage: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1200',
    services: ['Client Collaborative', 'AI Integration', 'Web Development'],
    sectors: ['Luxury', 'Retail', 'AI/ML'],
    studio: 'New York',
    overview: 'A groundbreaking collaboration with Tiffany & Co. to digitize their engraving heritage using generative AI technology.',
    challenge: 'Tiffany needed to modernize their engraving services while preserving the artisanal quality and heritage of their craft.',
    solution: 'We developed an AI-powered engraving preview system that respects the brand\'s legacy while enabling digital customization.',
    features: [
      { title: 'AI Engraving Preview', description: 'Real-time AI-generated engraving previews' },
      { title: 'Heritage Archive', description: 'Digitized collection of historical engravings' },
      { title: 'Customization Engine', description: 'Intelligent design suggestions' },
      { title: 'Brand Integration', description: 'Seamless Tiffany & Co. brand experience' },
    ],
    technologies: ['Generative AI', 'React', 'TypeScript', 'Python', 'AWS', 'GraphQL'],
    results: [
      { label: 'AI Models', value: '12' },
      { label: 'Preview Accuracy', value: '98%' },
      { label: 'Processing Time', value: '<2s' },
      { label: 'Customer Satisfaction', value: '96%' },
    ],
    gallery: [
      { src: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Luxury Brand Experience' },
      { src: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'AI Preview System' },
      { src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Heritage Archive' },
    ],
  },
  {
    slug: 'zoomaya',
    client: 'Zoomaya',
    title: 'A Focused Investigation System',
    tagline: 'Streamlining investigation workflows with intelligent tools',
    theme: 'light',
    coverImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
    services: ['Client Collaborative', 'Enterprise Software', 'SaaS Development'],
    sectors: ['Legal Tech', 'SaaS', 'Enterprise'],
    studio: 'Mumbai',
    overview: 'Zoomaya is an enterprise software platform designed to streamline complex investigation workflows for legal and compliance teams.',
    challenge: 'Investigation teams were using fragmented tools, leading to inefficiencies, data silos, and compliance risks.',
    solution: 'We built a unified platform that centralizes investigation management, automates workflows, and provides intelligent analytics.',
    features: [
      { title: 'Case Management', description: 'Centralized investigation case tracking' },
      { title: 'Workflow Automation', description: 'Intelligent process automation' },
      { title: 'Analytics Dashboard', description: 'Real-time investigation metrics' },
      { title: 'Compliance Reporting', description: 'Automated compliance documentation' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Elasticsearch', 'D3.js'],
    results: [
      { label: 'Enterprise Clients', value: '50+' },
      { label: 'Cases Managed', value: '100K+' },
      { label: 'Time Saved', value: '40%' },
      { label: 'Compliance Score', value: '99.9%' },
    ],
    gallery: [
      { src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Dashboard Interface' },
      { src: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Case Management' },
      { src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Analytics System' },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projectsData.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map(project => project.slug);
}

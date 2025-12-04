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
    tagline: 'Premium Alcohol Delivery App (USA)',
    theme: 'dark',
    coverImage: '/images/sipstr-logo.png',
    services: [
      'Product Development',
      'Market Research & Discovery',
      'UI/UX Design',
      'Mobile Development',
      'Backend Engineering',
      'Real-Time Tracking',
      'Payment Integration',
      'Age Verification System',
      'Vendor Onboarding',
      'Post-Launch Support',
    ],
    sectors: ['E-commerce', 'Delivery Services', 'Logistics', 'Alcohol & Beverages'],
    overview: 'Sipstr is a premium alcohol delivery platform designed for the U.S. market, offering customers a simple and seamless way to order alcohol from local vendors and have it delivered in under one hour. Built entirely by Evolotek from ideation to launch, the platform simplifies the entire journey—from browsing products to real-time delivery tracking—while ensuring compliance with state-level regulations and age-verification requirements. Evolotek handled every stage of the product lifecycle: market research, concept design, UI/UX design, full-stack development, quality assurance, and deployment. Post-launch, Evolotek continues to provide comprehensive operational support including real-time monitoring, analytics, vendor onboarding, and continuous feature enhancements.',
    challenge: 'The alcohol delivery market required navigating complex state-level regulations, age-verification compliance, and vendor management while delivering a seamless user experience. Building a scalable platform that could handle product catalogs, real-time tracking, secure payments, and regulatory compliance from day one was critical.',
    solution: 'Evolotek architected Sipstr as a comprehensive, compliance-ready platform built on cloud-based microservices. The solution includes customer apps (mobile & web) for browsing and ordering, vendor dashboards for inventory management, delivery partner modules with optimized routing, secure authentication with 21+ age verification, integrated payment processing, and real-time order tracking. The backend infrastructure combines highly scalable databases, logistics API integrations, map-based routing, and an admin panel for system monitoring—all designed to ensure regulatory compliance while enabling rapid 1-hour deliveries.',
    features: [
      {
        title: 'Real-Time Delivery Tracking',
        description: 'Live GPS tracking with push notifications enabling customers to monitor orders from vendor pickup to doorstep delivery',
      },
      {
        title: 'Seamless Vendor Integration',
        description: 'Complete vendor onboarding system with inventory management dashboard, order processing, and performance analytics',
      },
      {
        title: 'Smart Delivery Routing',
        description: 'AI-powered route optimization algorithms that minimize delivery times and maximize success rates for 1-hour delivery windows',
      },
      {
        title: '21+ Age Verification',
        description: 'Secure ID verification system with OTP validation ensuring full compliance with U.S. alcohol delivery regulations',
      },
      {
        title: 'Integrated Payment Processing',
        description: 'Secure payment gateway integration supporting U.S. domestic payment methods with encrypted transactions',
      },
      {
        title: 'Delivery Partner Module',
        description: 'Optimized interface for delivery partners with guided routing, order details, and earnings tracking',
      },
    ],
    technologies: [
      'React Native',
      'React',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'Stripe API',
      'Google Maps API',
      'Redis',
      'Microservices Architecture',
      'Docker & Kubernetes',
    ],
    results: [
      { label: 'Average Delivery Time', value: '<60 mins' },
      { label: 'Delivery Zones', value: '50+' },
      { label: 'Vendor Partners', value: '500+' },
      { label: 'Monthly Orders', value: '100K+' },
    ],
    gallery: [
      { src: '/images/sipstr-logo.png', alt: 'Sipstr Customer App Interface' },
      { src: '/images/sipstr-logo.png', alt: 'Real-Time Delivery Tracking Map' },
      { src: '/images/sipstr-logo.png', alt: 'Vendor Dashboard & Inventory Management' },
    ],
  },
  {
    slug: 'veraeaty',
    client: 'Evolotek',
    title: 'Veraeaty',
    tagline: 'AI-Powered Personalized Meal Planner',
    theme: 'light',
    coverImage: '/images/veraeaty-logo.png',
    services: [
      'AI Development',
      'Product Strategy',
      'UI/UX Design',
      'Mobile App Development',
      'Backend Engineering',
      'AI Model Training',
      'Feature Engineering',
      'Deployment & Launch',
      'Ongoing Product Support',
    ],
    sectors: ['Health Tech', 'AI/ML', 'Consumer App', 'Nutrition & Wellness', 'FoodTech'],
    overview: 'Veraeaty is an AI-driven meal planning platform that helps users cook smarter and plan meals tailored to their dietary needs and lifestyle.\n\nEvolotek built Veraeaty from scratch — starting with user research, AI capability planning, and UI/UX design, all the way to AI model training, app development, feature engineering, and deployment.\n\nThe product includes smart meal recommendations, AI cooking assistance, nutrition tagging, and automated grocery list generation.\n\nPost-launch, Evolotek provides ongoing support through AI refinement, new feature rollouts, performance improvements, and continuous updates to enhance user engagement and personalization accuracy.',
    challenge: `Indian families face a complex daily challenge: planning meals that respect dietary preferences, cultural tastes, health goals, and time constraints—all while managing grocery lists and cooking instructions. Existing meal planning solutions were either too generic (not understanding Indian cuisine) or too manual (requiring extensive input). No platform combined AI intelligence with deep cultural understanding to make meal planning truly effortless for Indian households.`,
    solution: `Evolotek architected Veraeaty as a multi-layer AI system with an elegant user experience. We built a proprietary Meal Brain Engine that understands family size, individual profiles, taste patterns, dietary preferences (veg, vegan, Jain, low-carb, high-protein), regional cuisines, cooking time availability, and weekly goals. The system generates complete weekly meal plans—breakfast, lunch, dinner, snacks—in under 60 seconds.

We trained the AI with Indian recipes, cultural meal structures, seasonal variations, and nutritional data to ensure plans feel local, not generic. Smart grocery planning generates itemized lists with quantities split by store type. The interface features a swipe-based weekly planner, 1-tap meal swapping, cooking-mode instructions, and interactive nutrition cards—all optimized for zero cognitive load. Behind this sits a scalable cloud-native architecture with modular services, AI orchestration layers, and a recipe graph database, built for millions of households.`,
    features: [
      {
        title: 'AI Meal Brain Engine',
        description: 'Proprietary recommendation system that learns from family profiles, taste patterns, dietary preferences, regional cuisines, and cooking time to generate personalized weekly meal plans in seconds',
      },
      {
        title: 'Hyper-Local Food Intelligence',
        description: 'Trained on Indian recipes, cultural meal structures, seasonal ingredients, and nutritional compositions to deliver plans that feel authentically local, not generic',
      },
      {
        title: 'Smart Grocery Planning',
        description: 'Auto-generated itemized grocery lists with quantities per family member, split by store type, with pantry tracking and real-time adjustments based on meal changes',
      },
      {
        title: 'Swipe-Based Weekly Planner',
        description: 'Modern mobile interface with 1-tap meal swapping, cooking-mode instructions, interactive nutrition cards, and family profile management designed for effortless planning',
      },
      {
        title: 'Adaptive Learning System',
        description: 'AI dynamically tunes to household feedback, adjusting future recommendations based on skipped meals, ratings, and preference changes',
      },
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'React Native',
      'Node.js',
      'MongoDB',
      'FastAPI',
      'OpenAI API',
      'Recipe Graph Database',
      'Cloud Infrastructure (AWS/GCP)',
      'Microservices Architecture',
    ],
    results: [
      { label: 'Meal Planning Time', value: '<60 sec' },
      { label: 'AI Accuracy', value: '94%' },
      { label: 'Recipe Database', value: '5000+' },
      { label: 'User Retention', value: '85%' },
    ],
    gallery: [
      { src: '/images/veraeaty-1.jpg', alt: 'Veraeaty Family Profile Dashboard' },
      { src: '/images/veraeaty-2.jpg', alt: 'AI-Generated Weekly Meal Plan with Nutrition Insights' },
      { src: '/images/veraeaty-3.jpg', alt: 'Auto-Generated Grocery List and Pantry Tracking' },
    ],
  },
  {
    slug: 'zoomaya',
    client: 'Zoomaya',
    title: 'Zoomaya',
    tagline: 'Creating Customer Insights at Scale',
    theme: 'dark',
    coverImage: '/images/zoomaya-logo.png',
    services: [
      'Data Integration & Infrastructure',
      'Analytics & Insight Engines',
      'Real-Time Dashboard Development',
      'Sentiment Analysis & AI Models',
      'Product Strategy Alignment',
      'Cross-Functional Activation',
      'Cloud Architecture Design',
      'Ongoing Platform Support',
    ],
    sectors: ['Consumer Tech', 'Data Analytics', 'SaaS', 'Market Intelligence'],
    overview: 'Zoomaya develops advanced video engagement and analytics tools for sales teams. Evolotek played a key role in helping Zoomaya grow by enabling sales efforts for their flagship product, ZoomTrack, through product demos, outreach assistance, and customer onboarding support. Additionally, Evolotek assisted in various software development tasks, including UI updates, backend improvements, bug fixing, testing, and sprint support. This ensured Zoomaya could accelerate product improvements while maintaining a smoother development cycle and delivering better experiences to their customers.',
    challenge: `In today's hyperconnected world, data isn't just powerful — it's relentless. Consumer behaviors change overnight, cultural trends evolve, and market contexts shift faster than ever before. Yet, many businesses still struggle to truly listen to their customers in real time — to capture what people feel, need, and expect.

Our client — a fast-growing consumer-tech brand — reached a critical inflection point. They had amassed a wealth of data: transaction logs, customer support feedback, social media chatter, survey responses, and web analytics. But this data lived in silos. The marketing team saw one picture, the product team another, and leadership had to rely on slow, outsourced research.

They needed more than data: they needed a way to listen to their customers continuously, deeply, and in context. They needed a system that could turn unstructured signals into strategic decisions — a "consumer insights engine."`,
    solution: `Evolotek architected Zoomaya as a multi-layer consumer insights platform combined with elegant dashboards and real-time alert systems.

We proposed a bold vision: establish an internal, scalable "Insights Hub" that sits at the heart of the business, connecting data, design, and decision-making. We started by working with cross-functional stakeholders — marketing, product, operations, and leadership — to map out the insights journey. What business decisions needed the fastest feedback? Which customer behaviors were most critical? What data sources would be most valuable?

We architected the hub on a foundation of modular data pipelines that ingested internal sources (CRM, support, sales), mined unstructured external data (social media, forums, reviews), and combined with traditional market research. All data flowed into a central, cloud-native platform for normalization, tagging, and analysis.

Once the data was consolidated, we layered advanced analytics including trend detection to spot emerging consumer behaviors, sentiment analysis on user feedback and social conversations, AI-powered clustering to segment users by attitudes (not just demographics), and predictive models to forecast which trends could translate into product opportunities.

Insights weren't locked behind reports. We built dashboards and alert systems that delivered insight-as-a-service: weekly trend summaries for marketing, real-time alerts for social spikes or emerging customer pain points, and deep-dive reports for product teams on feature usage, sentiment, and demand.

The Insights Hub became more than a data project. It was embedded into the way the company made decisions: product teams used trend signals to prioritize the roadmap, marketing leveraged emerging insights to tailor campaigns on the fly, and leadership aligned around a shared perspective of what customers cared about.`,
    features: [
      {
        title: 'Data Integration & Normalization',
        description: 'Seamlessly ingest and normalize data from CRM, support systems, social media, surveys, and web analytics into a unified data lake',
      },
      {
        title: 'Real-Time Trend Detection',
        description: 'AI-powered algorithms that spot emerging consumer behaviors, sentiment shifts, and market trends as they happen',
      },
      {
        title: 'Sentiment & Social Intelligence',
        description: 'Advanced NLP that analyzes customer feedback, social conversations, and reviews to understand emotional drivers and brand perception',
      },
      {
        title: 'Predictive Insight Clustering',
        description: 'Machine learning models that segment customers by attitudes, behaviors, and needs — enabling personalized product and marketing strategies',
      },
      {
        title: 'Real-Time Alert System',
        description: 'Instant notifications for critical customer signals — spikes in negative sentiment, emerging pain points, or shifts in demand',
      },
    ],
    technologies: [
      'Python',
      'Apache Spark',
      'TensorFlow',
      'PostgreSQL',
      'AWS Data Lake',
      'Apache Kafka',
      'Elasticsearch',
      'D3.js / Tableau',
      'Node.js',
      'GraphQL API',
      'Microservices Architecture',
    ],
    results: [
      { label: 'Decision Speed', value: 'Hours vs Weeks' },
      { label: 'Data Sources Unified', value: '7+' },
      { label: 'Trend Detection Accuracy', value: '92%' },
      { label: 'Cross-Team Alignment', value: '100%' },
    ],
    gallery: [
      { src: '/images/zoomaya-1.jpg', alt: 'Zoomaya Consumer Insights Dashboard' },
      { src: '/images/zoomaya-2.jpg', alt: 'Real-Time Trend Detection & Sentiment Analysis' },
      { src: '/images/zoomaya-3.jpg', alt: 'Cross-Functional Team Collaboration Hub' },
    ],
  },
  {
    slug: 'veefin',
    client: 'Veefin',
    title: 'Veefin',
    tagline: 'Supply Chain Finance Platform - Technical Resourcing & Development',
    theme: 'light',
    coverImage: '/images/veefin-logo.png',
    services: [
      'Technical Resource Augmentation',
      'SCF Module Development',
      'Backend Engineering & APIs',
      'Workflow Automation',
      'UI/UX Improvements',
      'Quality Assurance & Testing',
      'Production Support',
      'Sprint Acceleration',
    ],
    sectors: ['FinTech', 'Supply Chain Finance', 'Enterprise', 'SaaS'],
    overview: 'Veefin is a global leader in Supply Chain Finance (SCF) platforms, offering end-to-end solutions for banks, NBFCs, and enterprises. Evolotek partnered with Veefin by providing skilled technical resources who integrated seamlessly with their product teams to accelerate development. Our engineers contributed to SCF module development, workflow automation enhancements, backend engineering, API integrations, UI improvements, and production support. This collaboration enabled Veefin to rapidly scale development capacity while maintaining high product quality and delivering feature updates on schedule.',
    challenge: 'Veefin faced a critical capacity challenge: scaling their engineering team rapidly to meet aggressive product roadmap timelines without compromising code quality, system stability, or architectural integrity. Building supply chain finance solutions requires deep domain expertise, and Veefin needed seasoned engineers who could hit the ground running.',
    solution: 'Evolotek deployed a team of skilled software engineers and technical experts who integrated directly into Veefin\'s product squads. Our resources contributed across the full product stack: developing and enhancing SCF modules, building robust backend services and API integrations, automating complex workflows, improving UI components and user experience, and providing comprehensive testing and production support. By combining dedicated technical talent with agile sprint support, we enabled Veefin to accelerate feature delivery while maintaining system stability and code excellence.',
    features: [
      {
        title: 'SCF Module Development',
        description: 'Designed and built advanced supply chain financing solutions including invoice factoring, purchase order financing, and dynamic discounting modules with real-time tracking and settlement.',
      },
      {
        title: 'Workflow Automation',
        description: 'Developed sophisticated automation workflows that streamlined approval processes, reduced manual interventions, and improved operational efficiency across the platform.',
      },
      {
        title: 'Backend Engineering & APIs',
        description: 'Built scalable microservices architecture with robust REST and GraphQL APIs enabling seamless integrations with banking systems, ERP platforms, and third-party services.',
      },
      {
        title: 'UI/UX Improvements',
        description: 'Enhanced user interface components, improved navigation flows, and implemented responsive design ensuring enterprise-grade usability across all platforms.',
      },
      {
        title: 'Quality Assurance & Testing',
        description: 'Conducted comprehensive testing including unit tests, integration tests, performance testing, and security audits ensuring platform reliability and compliance.',
      },
      {
        title: 'Production Support & Stability',
        description: '24/7 production monitoring, debugging, incident response, and optimization to ensure system uptime and performance excellence.',
      },
    ],
    technologies: [
      'React',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'AWS',
      'Microservices',
      'Kubernetes',
      'Docker',
      'GraphQL',
      'REST APIs',
      'Redis',
      'Elasticsearch',
    ],
    results: [
      { label: 'Enterprise Clients Served', value: '100+' },
      { label: 'Features Deployed', value: '50+' },
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Development Velocity', value: '+40%' },
    ],
    gallery: [
      { src: '/images/veefin-logo.png', alt: 'Veefin SCF Platform Dashboard' },
      { src: '/images/veefin-logo.png', alt: 'Invoice Management & Financing Interface' },
      { src: '/images/veefin-logo.png', alt: 'Analytics and Settlement Dashboard' },
    ],
  },
  {
    slug: 'briskpe',
    client: 'BriskPe',
    title: 'BriskPe',
    tagline: 'Cross-Border Payments Platform - Market Expansion & Customer Growth',
    theme: 'dark',
    coverImage: '/images/briskpe-logo.png',
    services: [
      'Market Expansion Strategy',
      'Business Network Development',
      'Sales Support & Outreach',
      'Customer Onboarding',
      'Product Demonstrations',
      'KYC/Compliance Support',
      'User Education & Training',
      'Growth Enablement',
    ],
    sectors: ['FinTech', 'Payments', 'International Trade', 'B2B', 'Cross-Border Commerce'],
    overview: 'BriskPe is a cross-border payments platform that simplifies international money transfers for businesses. Evolotek partnered with BriskPe to accelerate their expansion into two critical markets—the USA and India—by establishing market presence, building business networks, and onboarding high-value customers. Our team strategically positioned BriskPe within competitive markets, facilitated targeted outreach to SMEs and exporters, conducted hands-on customer onboarding, and provided comprehensive KYC and compliance support. Through this collaborative effort, BriskPe successfully increased brand awareness, acquired quality customers, and established a strong foothold in both markets.',
    challenge: 'BriskPe faced a critical market entry challenge: establishing credibility and acquiring quality customers in two geographically distinct markets (USA and India) with different regulatory frameworks, business cultures, and customer needs. Without local market expertise and established networks, BriskPe struggled to gain traction despite having a superior product.',
    solution: 'Evolotek deployed a multi-faceted market expansion strategy combining strategic positioning, network development, and hands-on customer enablement. We identified and connected BriskPe with relevant business networks in both markets—B2B payment providers, SME networks, and export communities in India; and cross-border commerce businesses in the USA. We conducted targeted outreach campaigns, facilitated product demonstrations, and provided comprehensive onboarding support including KYC activation, compliance education, and feature training. By combining market strategy with direct customer support, we accelerated adoption and built trust in both regions.',
    features: [
      {
        title: 'USA Market Expansion',
        description: 'Strategic introduction to relevant business networks and early adoption programs, positioning BriskPe as a reliable cross-border payment solution for U.S.-based international businesses.',
      },
      {
        title: 'India Market Penetration',
        description: 'Direct outreach and partnerships with SMEs, exporters, and service companies seeking simplified cross-border payment solutions for their international operations.',
      },
      {
        title: 'Hands-On Customer Onboarding',
        description: 'Comprehensive onboarding support including account setup, KYC verification, compliance education, and feature training for seamless platform adoption.',
      },
      {
        title: 'Product Demonstrations & Support',
        description: 'Customized product demos tailored to customer use cases, highlighting key features like real-time settlement, multi-currency support, and competitive rates.',
      },
      {
        title: 'KYC & Compliance Enablement',
        description: 'Guided navigation through regulatory requirements and KYC processes in both markets, ensuring customer confidence and regulatory adherence.',
      },
      {
        title: 'User Education & Trust Building',
        description: 'Comprehensive customer education on product capabilities, security features, and best practices to accelerate adoption and reduce support friction.',
      },
    ],
    technologies: [
      'Payment Gateway APIs',
      'KYC/AML Compliance Platforms',
      'CRM & Customer Management',
      'Banking API Integrations',
      'Regulatory Compliance Tools',
      'Real-Time Settlement Systems',
    ],
    results: [
      { label: 'New Customers Onboarded', value: '200+' },
      { label: 'Markets Successfully Entered', value: '2' },
      { label: 'Total Transaction Volume', value: '$50M+' },
      { label: 'Customer Retention Rate', value: '92%' },
    ],
    gallery: [
      { src: '/images/briskpe-logo.png', alt: 'BriskPe Cross-Border Payments Dashboard' },
      { src: '/images/briskpe-logo.png', alt: 'Multi-Currency Transaction Management Interface' },
      { src: '/images/briskpe-logo.png', alt: 'Real-Time Settlement & Analytics View' },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projectsData.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map(project => project.slug);
}

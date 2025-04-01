
export interface Project {
  id: string;
  title: string;
  category: 'ux/ui' | 'mobile' | 'web' | 'branding';
  thumbnail: string;
  description: string;
  client: string;
  year: number;
  role: string;
  challenge: string;
  solution: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'health-tracker-app',
    title: 'Health Tracker Mobile App',
    category: 'mobile',
    thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800',
    description: 'A mobile application designed to help users track their health metrics and daily habits.',
    client: 'HealthFirst',
    year: 2023,
    role: 'Lead UX/UI Designer',
    challenge: 'Create an intuitive health tracking app that simplifies complex health data while encouraging daily use.',
    solution: 'Designed a clean, user-friendly interface with personalized dashboards, visual data representation, and gamified elements to encourage habit formation.',
    images: [
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'ecommerce-redesign',
    title: 'E-commerce Website Redesign',
    category: 'web',
    thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
    description: 'Complete redesign of an e-commerce platform focusing on improving user experience and conversion rates.',
    client: 'FashionMarket',
    year: 2023,
    role: 'UX Designer & Researcher',
    challenge: 'Improve the shopping experience and increase conversion rates for a fashion e-commerce platform with a high bounce rate.',
    solution: 'Implemented a clean, intuitive navigation system, enhanced product filtering, and streamlined the checkout process based on extensive user research and testing.',
    images: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'banking-app',
    title: 'Mobile Banking Experience',
    category: 'mobile',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    description: 'Redesigned mobile banking application with focus on security and ease of use.',
    client: 'Global Finance',
    year: 2022,
    role: 'UX/UI Designer',
    challenge: 'Create a secure yet user-friendly mobile banking experience that caters to both tech-savvy users and those less comfortable with digital banking.',
    solution: 'Balanced security with usability through biometric authentication, clear transactional flows, and personalized insights, resulting in a 40% increase in mobile banking usage.',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'smart-home',
    title: 'Smart Home Dashboard',
    category: 'web',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800',
    description: 'An intuitive dashboard interface for controlling smart home devices and monitoring energy usage.',
    client: 'HomeConnect',
    year: 2022,
    role: 'UX/UI Designer',
    challenge: 'Design a centralized control system for diverse smart home devices that is accessible to users regardless of technical proficiency.',
    solution: 'Created a visual, widget-based dashboard with customization options, simplified device controls, and intelligent automation suggestions.',
    images: [
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'brand-identity',
    title: 'Tech Startup Brand Identity',
    category: 'branding',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive brand identity design for a technology startup in the AI space.',
    client: 'NexusAI',
    year: 2021,
    role: 'Brand Designer',
    challenge: 'Create a distinctive and adaptable brand identity that communicates innovation and accessibility for an AI startup entering a competitive market.',
    solution: 'Developed a modern, versatile visual language with a distinctive logo, balanced color palette, and flexible design system for cross-platform coherence.',
    images: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'educational-platform',
    title: 'Educational Learning Platform',
    category: 'web',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    description: 'User experience design for an online learning platform focused on skill development.',
    client: 'EduSkills',
    year: 2021,
    role: 'Product Designer',
    challenge: 'Design an engaging online learning environment that maintains student motivation and improves course completion rates.',
    solution: 'Created a progress-focused interface with microlearning modules, interactive assessments, and social learning components that increased completion rates by 65%.',
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

export const beyondProjects = {
  graphicDesign: [
    {
      id: 'logo-collection',
      title: 'Logo Design Collection',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      description: 'A collection of logo designs for various clients across different industries.'
    },
    {
      id: 'brand-guidelines',
      title: 'Brand Style Guides',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800',
      description: 'Comprehensive brand style guides developed for startups and established businesses.'
    },
    {
      id: 'print-design',
      title: 'Print Design Projects',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
      description: 'Various print design projects including brochures, business cards, and marketing materials.'
    }
  ],
  videoDesign: [
    {
      id: 'motion-graphics',
      title: 'Motion Graphics Reel',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
      description: 'A showcase of motion graphics work for digital advertisements and brand animations.'
    },
    {
      id: 'video-editing',
      title: 'Video Editing Projects',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      description: 'Edited video content for corporate clients and social media campaigns.'
    }
  ],
  photography: [
    {
      id: 'portrait-photography',
      title: 'Portrait Photography',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800',
      description: 'Professional portrait photography for individuals and corporate clients.'
    },
    {
      id: 'product-photography',
      title: 'Product Photography',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800',
      description: 'Product photography for e-commerce and marketing materials.'
    },
    {
      id: 'landscape-photography',
      title: 'Landscape Photography',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      description: 'Personal landscape photography from travels around the world.'
    }
  ]
};

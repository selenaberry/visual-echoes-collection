
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground mb-8">
            I'm a UX/UI designer passionate about creating intuitive and engaging digital experiences that solve real problems.
          </p>
          
          <div className="space-y-6 text-muted-foreground">
            <p>
              With over 5 years of experience in the design industry, I've had the privilege of working with startups, agencies, and established companies across various sectors including healthcare, fintech, and e-commerce.
            </p>
            
            <p>
              My approach to design is deeply user-centered, focusing on understanding the needs, goals, and pain points of the people who will use the products I design. I believe that great design should be both beautiful and functional, creating experiences that are not only visually appealing but also intuitive and accessible.
            </p>
            
            <p>
              When I'm not designing, you can find me exploring new design trends, learning new skills, or contributing to the design community. I also enjoy photography, hiking, and discovering new coffee shops in my free time.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/resume" className="flex items-center gap-2">
                <Download size={16} /> Download Résumé
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
            alt="Designer working at desk" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-secondary p-8 rounded-xl">
            <h3 className="text-xl font-medium mb-4">UX Design</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>User Research & Interviews</li>
              <li>Personas & User Journeys</li>
              <li>Information Architecture</li>
              <li>Wireframing & Prototyping</li>
              <li>Usability Testing</li>
              <li>Accessibility Principles</li>
            </ul>
          </div>
          
          <div className="bg-secondary p-8 rounded-xl">
            <h3 className="text-xl font-medium mb-4">UI Design</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Visual Design & Aesthetics</li>
              <li>Design Systems & Component Libraries</li>
              <li>Interactive Prototypes</li>
              <li>Responsive Design</li>
              <li>Micro-interactions</li>
              <li>Motion Design</li>
            </ul>
          </div>
          
          <div className="bg-secondary p-8 rounded-xl">
            <h3 className="text-xl font-medium mb-4">Tools & Technologies</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Figma & Adobe XD</li>
              <li>Sketch & InVision</li>
              <li>Adobe Creative Suite</li>
              <li>Principle & Framer</li>
              <li>HTML/CSS & Design Handoff</li>
              <li>Notion & Miro</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Experience Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        
        <div className="space-y-12">
          <div className="border-l-4 border-brand pl-6">
            <div className="flex flex-wrap justify-between mb-2">
              <h3 className="text-xl font-medium">Senior UX/UI Designer</h3>
              <span className="text-muted-foreground">2021 - Present</span>
            </div>
            <h4 className="text-lg text-brand mb-4">DigitalCraft Studio</h4>
            <p className="text-muted-foreground">
              Lead the design process for enterprise clients, collaborate with cross-functional teams, and mentor junior designers while implementing design systems and conducting user research.
            </p>
          </div>
          
          <div className="border-l-4 border-brand pl-6">
            <div className="flex flex-wrap justify-between mb-2">
              <h3 className="text-xl font-medium">UX/UI Designer</h3>
              <span className="text-muted-foreground">2019 - 2021</span>
            </div>
            <h4 className="text-lg text-brand mb-4">InnovateTech Solutions</h4>
            <p className="text-muted-foreground">
              Designed user interfaces for web and mobile applications, created wireframes and prototypes, conducted usability testing, and collaborated with developers to ensure design fidelity.
            </p>
          </div>
          
          <div className="border-l-4 border-brand pl-6">
            <div className="flex flex-wrap justify-between mb-2">
              <h3 className="text-xl font-medium">UI Designer</h3>
              <span className="text-muted-foreground">2018 - 2019</span>
            </div>
            <h4 className="text-lg text-brand mb-4">CreativeWave Agency</h4>
            <p className="text-muted-foreground">
              Created visual designs for websites and digital products, developed brand guidelines, designed marketing materials, and assisted with front-end implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

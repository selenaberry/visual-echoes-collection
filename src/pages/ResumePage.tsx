
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ResumePage = () => {
  // Function to simulate resume download (in a real app, this would link to an actual file)
  const downloadResume = () => {
    alert('In a real portfolio, this would download a PDF résumé.');
  };

  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Resume Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Jane Designer</h1>
            <p className="text-xl text-muted-foreground">UX/UI Designer</p>
          </div>
          <Button onClick={downloadResume} className="mt-4 md:mt-0 flex items-center gap-2">
            <Download size={16} /> Download PDF
          </Button>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-sm">
          <div>
            <p className="font-medium">Email</p>
            <p className="text-muted-foreground">hello@designportfolio.com</p>
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="font-medium">Location</p>
            <p className="text-muted-foreground">San Francisco, California</p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Professional Summary</h2>
          <p className="text-muted-foreground">
            Experienced UX/UI Designer with over 5 years of expertise in creating user-centered digital experiences for web and mobile applications. Passionate about solving complex problems through intuitive design solutions. Proven track record of improving user satisfaction and business metrics through thoughtful design iterations and user research.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Work Experience</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-lg font-medium">Senior UX/UI Designer</h3>
                <p className="text-muted-foreground">2021 - Present</p>
              </div>
              <p className="text-brand mb-2">DigitalCraft Studio</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Lead end-to-end design process for enterprise clients in healthcare and fintech sectors</li>
                <li>Collaborate with cross-functional teams to deliver cohesive user experiences</li>
                <li>Conduct user research and usability testing to inform design decisions</li>
                <li>Develop and maintain design systems for consistency across products</li>
                <li>Mentor junior designers and provide design direction</li>
              </ul>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-lg font-medium">UX/UI Designer</h3>
                <p className="text-muted-foreground">2019 - 2021</p>
              </div>
              <p className="text-brand mb-2">InnovateTech Solutions</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Designed user interfaces for web and mobile applications</li>
                <li>Created wireframes, prototypes, and high-fidelity mockups</li>
                <li>Conducted usability testing and implemented design iterations</li>
                <li>Collaborated with developers to ensure design fidelity</li>
                <li>Contributed to the development of the company's design system</li>
              </ul>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-lg font-medium">UI Designer</h3>
                <p className="text-muted-foreground">2018 - 2019</p>
              </div>
              <p className="text-brand mb-2">CreativeWave Agency</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Created visual designs for websites and digital products</li>
                <li>Developed brand guidelines and marketing materials</li>
                <li>Designed responsive layouts for various screen sizes</li>
                <li>Assisted with front-end implementation using HTML/CSS</li>
                <li>Collaborated with clients to refine design concepts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Education</h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h3 className="text-lg font-medium">Bachelor of Fine Arts in Graphic Design</h3>
                <p className="text-muted-foreground">2014 - 2018</p>
              </div>
              <p className="text-brand">California Institute of the Arts</p>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h3 className="text-lg font-medium">UX Design Certification</h3>
                <p className="text-muted-foreground">2019</p>
              </div>
              <p className="text-brand">Nielsen Norman Group</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Design Skills</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>User Research & Usability Testing</li>
                <li>Wireframing & Prototyping</li>
                <li>Visual Design</li>
                <li>Interaction Design</li>
                <li>Information Architecture</li>
                <li>Design Systems</li>
                <li>Responsive Design</li>
                <li>Accessibility (WCAG)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Tools & Technologies</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Sketch</li>
                <li>InVision</li>
                <li>Adobe Creative Suite</li>
                <li>HTML/CSS</li>
                <li>Principle</li>
                <li>Miro & Notion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div>
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Awards & Recognition</h2>
          
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>
              <span className="font-medium text-foreground">Awwwards Site of the Day</span> - HealthTracker App (2022)
            </li>
            <li>
              <span className="font-medium text-foreground">CSS Design Awards Winner</span> - E-commerce Redesign (2021)
            </li>
            <li>
              <span className="font-medium text-foreground">UX Design Competition Finalist</span> - Global UX Challenge (2020)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;

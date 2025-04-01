
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { beyondProjects } from '@/data/projects';

const BeyondPage = () => {
  const [activeTab, setActiveTab] = useState('graphic-design');

  return (
    <div className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Beyond UX/UI</h1>
        <p className="text-xl text-muted-foreground">
          Exploring creativity across different mediums and design disciplines.
        </p>
      </div>

      <Tabs defaultValue="graphic-design" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-12">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="graphic-design">Graphic Design</TabsTrigger>
            <TabsTrigger value="video-design">Video Design</TabsTrigger>
            <TabsTrigger value="photography">Photography</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="graphic-design" className="space-y-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Graphic Design</h2>
            <p className="text-muted-foreground">
              Branding, logo design, and visual identity projects for various clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beyondProjects.graphicDesign.map((project) => (
              <div key={project.id} className="portfolio-card group">
                <div className="overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="video-design" className="space-y-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Video Design</h2>
            <p className="text-muted-foreground">
              Motion graphics and video editing projects for digital content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beyondProjects.videoDesign.map((project) => (
              <div key={project.id} className="portfolio-card group">
                <div className="overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground italic">
              Note: For video projects, please contact me directly to view the full reels and motion work.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="photography" className="space-y-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Photography</h2>
            <p className="text-muted-foreground">
              Portrait, product, and landscape photography work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beyondProjects.photography.map((project) => (
              <div key={project.id} className="portfolio-card group">
                <div className="overflow-hidden aspect-square">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Photography Equipment Used (Only shown when Photography tab is active) */}
      {activeTab === 'photography' && (
        <div className="mt-20 bg-secondary p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Equipment I Use</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-2">Cameras</h4>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Sony Alpha a7 III</li>
                <li>Canon EOS R5</li>
                <li>Fujifilm X-T4</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Lenses</h4>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Sony FE 24-70mm f/2.8 GM</li>
                <li>Canon RF 50mm f/1.2L USM</li>
                <li>Fujifilm XF 16-55mm f/2.8 R LM WR</li>
                <li>Sony FE 85mm f/1.4 GM</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeyondPage;

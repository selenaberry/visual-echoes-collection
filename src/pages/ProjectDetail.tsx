
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="section-container text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/work">Back to Work</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-16">
      {/* Project Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" size="sm" className="mr-4">
            <Link to="/work" className="flex items-center gap-1">
              <ArrowLeft size={16} /> Back to Projects
            </Link>
          </Button>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">{project.category}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">{project.description}</p>
      </div>

      {/* Main Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <img
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-medium mb-2">Client</h3>
            <p className="text-muted-foreground">{project.client}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Year</h3>
            <p className="text-muted-foreground">{project.year}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Role</h3>
            <p className="text-muted-foreground">{project.role}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-medium mb-4">The Challenge</h3>
            <p className="text-muted-foreground">{project.challenge}</p>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-4">The Solution</h3>
            <p className="text-muted-foreground">{project.solution}</p>
          </div>
        </div>

        {/* Additional Project Images */}
        <div className="space-y-8">
          {project.images.slice(1).map((image, index) => (
            <div key={index} className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <img
                src={image} 
                alt={`${project.title} - Image ${index + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Next Project */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t pt-16">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Next Project</p>
            {/* Find the next project or loop back to the first one */}
            {(() => {
              const currentIndex = projects.findIndex(p => p.id === id);
              const nextProject = projects[(currentIndex + 1) % projects.length];
              
              return (
                <Link to={`/work/${nextProject.id}`} className="group">
                  <h3 className="text-2xl font-medium group-hover:text-brand transition-colors">{nextProject.title}</h3>
                </Link>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

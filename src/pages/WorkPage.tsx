
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';

type Category = 'all' | 'ux/ui' | 'mobile' | 'web' | 'branding';

const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Work</h1>
        <p className="text-xl text-muted-foreground">
          A showcase of my design projects spanning UX/UI, mobile, web, and brand design.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {['all', 'ux/ui', 'mobile', 'web', 'branding'].map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category as Category)}
            className="capitalize"
          >
            {category === 'all' ? 'All Projects' : category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link 
            to={`/work/${project.id}`} 
            key={project.id}
            className="portfolio-card group"
          >
            <div className="overflow-hidden aspect-video">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{project.category}</span>
              <h3 className="text-xl font-medium mt-1 mb-2">{project.title}</h3>
              <p className="text-muted-foreground line-clamp-2">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default WorkPage;

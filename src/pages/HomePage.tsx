
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

const HomePage = () => {
  // Get 3 featured projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 sm:py-28 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Designing experiences that <span className="text-brand">matter</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              UX/UI Designer crafting intuitive digital experiences that solve real problems.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button asChild size="lg">
                <Link to="/work">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Work</h2>
              <p className="text-muted-foreground">Some of my recent design projects</p>
            </div>
            <Link to="/work" className="flex items-center text-brand hover:text-brand-hover gap-1 font-medium">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">My Design Services</h2>
            <p className="text-muted-foreground">Comprehensive design solutions to elevate your digital products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-4">UX/UI Design</h3>
              <p className="text-muted-foreground mb-4">Creating intuitive, user-centered interfaces that delight users and achieve business goals.</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>User Research</li>
                <li>Wireframing & Prototyping</li>
                <li>Usability Testing</li>
                <li>Interaction Design</li>
              </ul>
            </div>
            
            <div className="bg-background p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-4">Product Design</h3>
              <p className="text-muted-foreground mb-4">End-to-end product design that transforms ideas into engaging digital experiences.</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Product Strategy</li>
                <li>User Flows</li>
                <li>Visual Design</li>
                <li>Design Systems</li>
              </ul>
            </div>
            
            <div className="bg-background p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-4">Brand Design</h3>
              <p className="text-muted-foreground mb-4">Building cohesive brand identities that communicate value and connect with audiences.</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Logo Design</li>
                <li>Visual Identity</li>
                <li>Brand Guidelines</li>
                <li>Marketing Materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's collaborate to create thoughtful, user-centered designs that elevate your digital product.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

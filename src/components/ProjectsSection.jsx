import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import project1Mockup from '../assets/Project1Mockup.jpg'
import project2Mockup from '../assets/Project2Mockup.jpg'

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Little Lemon",
      Description:
        "A restaurant app, with real-world features like table reservation, user authentication, order management, adding items, promo codes, tracking order, stripe payment and much more.",
      image: project1Mockup,
      tags: ["MERN stack", "Tailwind", "Stripe"],
      demoUrl: "https://little-lemon-live.netlify.app/",
      gitHub: "https://github.com/Saim-Warsi/FullStack-Restaurant-App",
    },
    {
      id: 2,
      title: "Little Lemon Admin panel",
      Description:
        "An Admin panel with features like managing reservations, completely managing orders and their status and generating promo codes and much more.",
      image: project2Mockup,
      tags: ["MERN stack", "Tailwind"],
      demoUrl: "https://little-lemon-admin-live.netlify.app/",
      gitHub: "https://github.com/Saim-Warsi/FullStack-Restaurant-App",
    },
    {
      id: 3,
      title: "Social Media App",
      Description:
        "Coming Soon",
      image: "#",
      tags: ["MERN stack", "Tailwind"],
      demoUrl: "#",
      gitHub: "#",
    },
  ];
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => {
            return (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap mb-4 gap-2">
                    {project.tags.map((tag, key) => {
                      return (
                        <span
                          key={key}
                          className="rounded-full border font-medium bg-secondary text-secondary-foreground px-2 py-1 text-xs"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <h3 className="text-2xl font-semibold my-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.Description}
                  </p>
                  <div className="flex gap-4 items-center mt-6">
                    {project.demoUrl !== "#" ? (
                      <a
                        href={project.demoUrl}
                        className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer z-10 relative"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <ExternalLink size={20} className="flex-shrink-0" />
                        <span>Demo</span>
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground/50 cursor-not-allowed">
                        <ExternalLink size={20} className="flex-shrink-0" />
                        <span>Demo</span>
                      </span>
                    )}
                    {project.gitHub !== "#" ? (
                      <a
                        href={project.gitHub}
                        className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer z-10 relative"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          window.open(project.gitHub, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <Github size={20} className="flex-shrink-0" />
                        <span>Code</span>
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground/50 cursor-not-allowed">
                        <Github size={20} className="flex-shrink-0" />
                        <span>Code</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/Saim-Warsi" target="_blank" rel="noopener noreferrer" className="cosmic-button w-fit flex items-center mx-auto pixelFont">
            Github<ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
import { Code2, Database, Layout, Server, GitBranch, Github } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      name: "React",
      icon: Code2,
      description: "Building dynamic and interactive user interfaces",
      level: "95",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500"
    },
    {
      name: "Node.js",
      icon: Server,
      description: "Server-side JavaScript runtime environment",
      level: "95",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      iconColor: "text-green-500"
    },
    {
      name: "Express",
      icon: Server,
      description: "Fast and minimalist backend framework",
      level: "95",
      color: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-500/10",
      iconColor: "text-gray-400"
    },
    {
      name: "MongoDB",
      icon: Database,
      description: "Flexible NoSQL database solution",
      level: "95",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-500"
    },
    {
      name: "Tailwind CSS",
      icon: Layout,
      description: "Utility-first CSS for responsive designs",
      level: "95",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      iconColor: "text-cyan-500"
    },
    {
      name: "Git",
      icon: GitBranch,
      description: "Distributed version control system",
      level: "95",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      iconColor: "text-orange-500"
    },
    {
      name: "GitHub",
      icon: Github,
      description: "Code collaboration and repository hosting",
      level: "95",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A comprehensive toolkit of modern technologies and frameworks I leverage to build scalable, efficient applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group bg-card p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`rounded-full p-3 sm:p-4 ${skill.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${skill.iconColor}`} />
                    </div>
                   
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="mt-4 sm:mt-6 h-1.5 sm:h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out`}
                      style={{ width: skill.level }} ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Continuously learning and expanding my skillset
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
import certificate01 from '../assets/certificate01.png';
import certificate02 from '../assets/certificate02.png';
import certificate03 from '../assets/certificate03.png';
import certificate04 from '../assets/certificate04.png';

const Certification = () => {
  const certifications = [
    {
      image: certificate01,
      title: "Advanced React",
      issuer: "by Meta",
      link: "https://www.coursera.org/account/accomplishments/verify/SESTTCJH4U58",
      status: "completed"
    },
    {
      image: certificate02,
      title: "Introduction to mobile development",
      issuer: "by Meta",
      link: "https://www.coursera.org/account/accomplishments/verify/EWFJNYDTF7PM",
      status: "completed"
    },
    {
      image: certificate03,
      title: "Advanced Diploma in SE",
      issuer: "by Aptech",
      status: "ongoing"
    },
    {
      image: certificate04,
      title: "BSSE",
      issuer: "by Virtual University Of Pakistan",
      status: "ongoing"
    }
  ];

  return (
    <section id='certification' className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Certifications & <span className="text-primary">Education</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Continuous learning and professional development through courses and academic programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 relative overflow-hidden flex flex-col"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image section */}
              <div className="h-48 overflow-hidden bg-secondary relative">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content section */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col relative z-10">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  {cert.issuer}
                </p>
                
                <div className="mt-auto">
                  {cert.status === "completed" ? (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:text-primary/80 text-sm font-medium transition-colors inline-flex items-center gap-1"
                    >
                      View Certificate →
                    </a>
                  ) : (
                    <span className="text-primary text-sm font-medium">
                      Ongoing
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Committed to lifelong learning and skill enhancement
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certification;
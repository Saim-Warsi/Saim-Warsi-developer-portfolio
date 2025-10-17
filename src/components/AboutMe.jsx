import { Code, Database, User } from "lucide-react"

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative ">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">MERN stack developer</h3>
                    <p className="text-muted-foreground">Full-stack developer specializing in MongoDB, Express.js, React, and Node.js. I build scalable web applications with modern architectures, from restaurant management systems to admin dashboards. Experienced in integrating payment gateways, email services, and deploying applications on cloud platforms like Railway and Netlify.</p>
                    <p className="text-muted-foreground">Passionate about creating intuitive user interfaces with React and Tailwind CSS, while ensuring robust backend functionality with RESTful APIs and database optimization. I focus on writing clean, maintainable code and solving real-world problems through technology.</p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button flex items-center justify-center py-4 pixelFont">Get in touch</a>
                       
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code  className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Modern technologies</h4>
                                <p className="text-muted-foreground">
                                    I have good commands over MERN stack for building good programs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User  className="h-6 w-6 text-primary"/>
                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg">Responsive UI</h4>
                                <p className="text-muted-foreground">
                                    I can create responsive designs with good user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Database  className="h-6 w-6 text-primary"/>
                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg">Manage Databases</h4>
                                <p className="text-muted-foreground">
                                    In the projects below, I have used my MongoDB knowledge to create interactive and scalable databases.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default AboutMe
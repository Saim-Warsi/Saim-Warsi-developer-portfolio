import { ArrowDown } from "lucide-react"

const HeroComponent = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col item-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6 ">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in ">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Saim</span>
                        <span className="text-gradient opacity-0 ml-2 animate-fade-in-delay-2"> Warsi</span>
                    </h1>
                    <p className="text-md md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3"> 
                        I am a <span className="font-bold text-blue-600">Meta</span> certified web developer with expertise in the MERN stack. I have used what I learned to create whole, working, and expandable projects, showing that I'm ready to join development team.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4 ">
                        <a href="#projects" className="cosmic-button pixelFont">
                            Review my projects
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span>There's more..</span>
            <ArrowDown className="h-5 w-5 text-primary" />
            </div>
    </section>
)
}

export default HeroComponent
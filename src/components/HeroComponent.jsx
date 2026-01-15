import { ArrowDown } from "lucide-react"
import pfp from "../assets/pfp.png"

const HeroComponent = () => {
  return (
   
     <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
    <div className="container max-w-4xl mx-auto text-center z-10 flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="space-y-6 flex-1">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1"> Saim</span>
            </h1>
            <p className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3"> 
                I am a Meta certified web developer with expertise in the MERN stack. I have used what I learned to create whole, working, and expandable projects, showing that I'm ready to join development team.
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button pixelFont">
                    Review my projects
                </a>
            </div>
        </div>
        <div className="image flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72">
            <img src={pfp} alt="" className="w-full h-auto rounded-full" />
        </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary" />
    </div>
</section>
)
}

export default HeroComponent
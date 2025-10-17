import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../pages/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const { toast } = useToast();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         access_key: "392140af-b367-40da-8ecd-8f43001db532",
          
  //       subject: "New Contact Form Submission", 
  //         ...formData
  //       }),
  //     });

  //     const result = await response.json();
  //     if (result.success) {
  //        toast({
  //     title: "Message sent successfully",
  //     description: "I will get back to you ASAP."
  //   });
  //       setFormData({ name: "", email: "", message: "" });
  //     } 
  //   } catch (error) {
  //       toast({
  //     title: "An error occurred",
  //     description: "Please check your connection and try again.",
  //     variant: "destructive",
  //   });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };


  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         access_key: "392140af-b367-40da-8ecd-8f43001db532",
  //         subject: "New Contact Form Submission",
  //         name: formData.name,
  //         email: formData.email,
  //         message: formData.message,
  //         from_name: formData.name,
  //         replyto: formData.email
  //       }),
  //     });

  //     const result = await response.json();
      
  //     if (!response.ok || !result.success) {
  //       throw new Error(result.message || "Submission failed");
  //     }

  //     toast({
  //       title: "Message sent successfully",
  //       description: "I will get back to you ASAP.",
  //     });
  //     setFormData({ name: "", email: "", message: "" });
  //   } catch (error) {
  //     toast({
  //       title: "An error occurred",
  //       description: error.message || "Please check your connection and try again.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Use FormData for better CORS compatibility
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "392140af-b367-40da-8ecd-8f43001db532");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("subject", "New Contact Form Submission");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const result = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      toast({
        title: "Message sent successfully!",
        description: "I will get back to you ASAP.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          Get <span className="text-primary">In Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have something in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="space-y-8 p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Contact Information
            </h3>
            
            <div className="space-y-6 justify-center">
              {/* <div className="flex items-start space-x-13 ">
                <div className="rounded-full p-3 bg-primary/10 ">
                  <Mail className="h-6 w-6 text-primary " />
                </div>
                <div className="text-start">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:kamransaim385@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    kamransaim385@gmail.com
                  </a>
                </div>
              </div> */}

<div className="flex items-start space-x-13 ">
                <div className="rounded-full p-3 bg-primary/10 ">
                  <Mail className="h-6 w-6 text-primary " />
                </div>
                <div className="text-start">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:kamransaim385@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    kamransaim385@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-13 ">
                <div className="rounded-full p-3 bg-primary/10 ">
                  <Phone className="h-6 w-6 text-primary " />
                </div>
                <div className="text-start">
                  <h4 className="font-medium">tel</h4>
                  <a
                    href="tel:+923492970705"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +92 349 2970705
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-13 ">
                <div className="rounded-full p-3 bg-primary/10 ">
                  <MapPin className="h-6 w-6 text-primary " />
                </div>
                <div className="text-start">
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    North Karachi, Karachi
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/saim-warsi-1b5356333/"
                >
                  <Linkedin />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/theviper_arts/"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 ">Send a message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 "
                  >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                   value={formData.name}
                  onChange={(e)=>{setFormData({...formData,name:e.target.value})}}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Here.."
                />
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 "
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                   value={formData.email}
                  onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="...@gmail.com"
                />
              </div>
              <div className="">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 "
                >
                  Message me
                </label>
                <textarea
                  id="message"
                  name="message"
                   value={formData.message}
                  onChange={(e)=>{setFormData({...formData,message:e.target.value})}}
                  required
                  className="w-full resize-none px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Hey, I wanna talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 pixelFont"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

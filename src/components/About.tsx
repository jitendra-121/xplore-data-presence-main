import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePic from '/public/lovable-uploads/5b7502da-a465-4d09-8179-f3883bbb3e61.jpg';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          
          {/* Left side with social links and profile picture */}
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-6">
              <a href="https://github.com/jitendra-121" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/jitendra-chowdary-aluri-a204b624a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:jitendraaluri10@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <Avatar className="w-48 h-48 border-4 border-primary/50 shadow-2xl">
              <AvatarImage alt="Jitendra Chowdary Aluri" src={profilePic} className="object-cover" />
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-xl">JCA</AvatarFallback>
            </Avatar>
          </div>

          {/* Right side with text content */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Jitendra Chowdary Aluri</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4 text-muted-foreground">
              AI/ML Engineer & Computer Science Student
            </h2>
            <p className="text-lg text-muted-foreground">
              I specialize in Machine Learning, Deep Learning, and AI solutions with expertise in Python, TensorFlow, and Computer Vision. Currently pursuing B.Tech in Computer Science Engineering with focus on AI and ML at Vignan's Foundation For Science, Technology & Research.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

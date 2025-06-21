
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const Publications = () => {
  const publications = [
    {
      title: "Design and Optimization of a Custom CNN for Tiny Image Classification",
      journal: "Research Publication",
      year: "2024",
      authors: ["Jitendra Chowdary Aluri"],
      abstract: "This research focuses on developing and optimizing custom Convolutional Neural Network architectures specifically designed for tiny image classification tasks, addressing computational efficiency and accuracy trade-offs.",
      link: "#",
      tags: ["CNN", "Deep Learning", "Image Classification", "Optimization"],
      status: "Published"
    },
    {
      title: "Guided Convolutional Variational Autoencoder for Learning Latent Representations in Low-Resolution Image Classification",
      journal: "Academic Journal",
      year: "2024",
      authors: ["Jitendra Chowdary Aluri"],
      abstract: "Novel approach using guided convolutional variational autoencoders to learn effective latent representations for improved classification performance on low-resolution images.",
      link: "#",
      tags: ["VAE", "Deep Learning", "Latent Representations", "Computer Vision"],
      status: "Under Review"
    },
    {
      title: "Malaria Parasite Classification using a Mixture of Experts and Kolmogorov-Arnold Networks for Improved Diagnostic Accuracy",
      journal: "Medical AI Journal",
      year: "2024",
      authors: ["Jitendra Chowdary Aluri"],
      abstract: "Advanced machine learning approach combining Mixture of Experts framework with Kolmogorov-Arnold Networks for enhanced malaria parasite detection and classification accuracy.",
      link: "#",
      tags: ["Medical AI", "MOE", "KAN", "Diagnostic Systems"],
      status: "Upcoming Publication"
    }
  ];
  
  return (
    <section id="publications" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Publications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            My contributions to research in AI, machine learning, and computer vision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:shadow-lg transition-all animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-xl flex-1">{pub.title}</CardTitle>
                  <Badge variant={pub.status === "Published" ? "default" : pub.status === "Under Review" ? "secondary" : "outline"} className="text-xs">
                    {pub.status}
                  </Badge>
                </div>
                <CardDescription>
                  <p className="font-medium text-primary">{pub.journal}, {pub.year}</p>
                  <p className="text-sm mt-1">{pub.authors.join(", ")}</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {pub.abstract}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {pub.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "ml-auto"
                  )}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  {pub.status === "Published" ? "Read Paper" : "Preview"}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Focused on advancing AI/ML research with practical applications in computer vision and medical diagnostics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;

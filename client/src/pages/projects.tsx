import PageTransition from "@/components/page-transition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

const projects = [
  {
    id: "1",
    title: "PDF Summarizer Web App",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32",
    description: "A Django-based web app for document summarization using RoBERTa & BART models",
    tech: ["Django", "RoBERTa", "BART", "Milvus", "SQLite"]
  },
  {
    id: "2",
    title: "Automate This",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a",
    description: "Open-source personal assistant app with natural language command processing",
    tech: ["Python", "NLP", "AI"]
  },
  {
    id: "3",
    title: "Neural Network from Scratch",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
    description: "Custom neural network framework using Python and NumPy with modular architecture",
    tech: ["Python", "NumPy", "Neural Networks"]
  },
  {
    id: "4",
    title: "Mother AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    description: "Advanced AI project integrating custom OS, microprocessor, and specialized hardware",
    tech: ["ARM", "CUDA", "NPUs", "LLM"]
  }
];

export default function Projects() {
  return (
    <PageTransition>
      <div className="container py-16">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
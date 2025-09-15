import Image, { StaticImageData } from "next/image"
import { CardWrapper } from "./ui/card-wrapper"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
interface ProjectProps {
  title: string
  description: string
  image: string | StaticImageData
  demoLink: string
//   githubLink: string
 }

function ProjectCard({ title, description, image, demoLink, }: ProjectProps) {
  return (
    <CardWrapper className="overflow-hidden group">
      <div className="relative h-48 mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90"
        >
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink size={16} /> veiw
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90"
        >
          {/* <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} /> Code
          </a> */}
        </Button>
      </div>
    </CardWrapper>
  )
}

export function Projects() {
  const projects = [
    {
      title: "Salomil Co",
      description: "A modern website for a HPL company that provides cleaning services.",
      image: "/SALOMIL.jpg?height=300&width=400",
      demoLink: "https://salomil.com/",
      githubLink: "#",
    },
    {
      title: "ZADEDU",
      description: "An educational platform offering online courses and resources for students.",
      image: "/ZAD.jpg?height=300&width=400",
      demoLink: "https://zadedu.co/",
      githubLink: "#",
    },
    {
      title: "Wafflo",
      description: `The Integrated Café Concept. A cozy spot offering freshly made waffles, sandwiches, and high-quality coffee.`,
      image: "/WAFFLO.jpg?height=300&width=400",
      demoLink: "#",
      githubLink: "#",
    },
    // {
    //   title: "Task Management Tool",
    //   description: "Collaborative task management app with drag-and-drop interface.",
    //   image: "/placeholder.svg?height=300&width=400",
    //   demoLink: "#",
    //   githubLink: "#",
    // },
    // {
    //   title: "Weather Dashboard",
    //   description: "Weather forecasting app with interactive maps and real-time updates.",
    //   image: "/placeholder.svg?height=300&width=400",
    //   demoLink: "#",
    //   githubLink: "#",
    // },
    // {
    //   title: "Fitness Tracking App",
    //   description: "Personal fitness tracker with workout plans and progress monitoring.",
    //   image: "/placeholder.svg?height=300&width=400",
    //   demoLink: "#",
    //   githubLink: "#",
    // },
  ]

  return (
    <section className="py-16" id="works">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my latest web development projects. Each project demonstrates my commitment to creating innovative and
          user-friendly digital solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

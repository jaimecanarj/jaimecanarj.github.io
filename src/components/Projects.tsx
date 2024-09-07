import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="pb-4 m-16 text-6xl font-semibold border-b-4 border-current">
        Proyectos
      </h1>
      <div className="container grid gap-8 p-8 lg:grid-cols-2">
        {projects.map((project) => {
          return (
            <a href={project.href} key={project.href}>
              <Card className=" sm:h-60 hover:bg-secondary">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center sm:flex-row gap-x-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={160}
                    className="m6"
                  />
                  <p>{project.description}</p>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

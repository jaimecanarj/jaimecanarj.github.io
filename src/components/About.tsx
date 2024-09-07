import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const habilidades = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
];

const About = () => {
  return (
    <section
      id="sobre-mi"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="pb-4 m-16 text-6xl font-semibold border-b-4 border-current">
        Sobre mí
      </h1>
      <div className="flex flex-col items-center m-8 gap-y-8 gap-x-16 md:flex-row">
        <Card className="p-6 lg:p-8 w-80 h-[450px] lg:w-96 bg-gradient-to-tl from-neutral-200 dark:bg-gradient-to-br dark:from-neutral-800">
          <CardHeader className="text-3xl text-center">Conóceme más</CardHeader>
          <CardContent>
            <p>
              Resido en Herrera, un pueblo de Sevilla. Me gusta crear pequeños
              proyectos que me permiten experimentar y aprender nuevas
              tecnologías web. Desde la construcción de aplicaciones simples
              hasta características más complejas, disfruto del proceso de
              investigación y desarrollo.
            </p>
          </CardContent>
        </Card>
        <Card className="p-8 w-80 h-[450px] lg:w-96 bg-gradient-to-tl from-neutral-200 dark:bg-gradient-to-br dark:from-neutral-800">
          <CardHeader className="text-3xl text-center">Habilidades</CardHeader>
          <CardContent>
            {habilidades.map((habilidad) => {
              return <Badge className="m-2 text-lg">{habilidad}</Badge>;
            })}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;

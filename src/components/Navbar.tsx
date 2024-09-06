import { Button } from "@/components/ui/button";
import MobileNavbar from "./MobileNavbar";

const links = [
  { href: "#", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  return (
    <header className="w-full border-b">
      <div className="container flex items-center px-4 mx-auto h-14 ">
        {/* Barra principal */}
        <div className="hidden gap-2 mr-4 sm:flex">
          {links.map((item) => (
            <Button key={item.href} variant="link">
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </div>
        {/* Barra dispositivos móviles */}
        <MobileNavbar links={links} />
      </div>
    </header>
  );
};

export default Navbar;

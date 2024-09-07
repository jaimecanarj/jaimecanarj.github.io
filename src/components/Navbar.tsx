import { Button } from "@/components/ui/button";
import MobileNavbar from "./MobileNavbar";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background">
      <div className="container flex items-center justify-between px-4 mx-auto h-14 ">
        {/* Barra principal */}
        <nav className="hidden gap-2 mr-4 sm:flex">
          {links.map((item) => (
            <Button key={item.href} variant="link">
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>
        {/* Barra dispositivos móviles */}
        <MobileNavbar links={links} />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;

import { Button } from "@/components/ui/button";
import MobileNavbar from "@/components/MobileNavbar";
import ThemeToggle from "@/components/ThemeToggle";
import { links } from "@/lib/data";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background">
      <div className="container flex items-center justify-between px-4 mx-auto h-14 ">
        {/* Barra principal */}
        <nav className="hidden gap-2 mr-4 sm:flex">
          {links.map((item) => (
            <a href={item.href}>
              <Button key={item.href} variant="link">
                {item.label}
              </Button>
            </a>
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

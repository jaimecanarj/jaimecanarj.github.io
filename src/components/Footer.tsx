import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full h-16 px-8 bg-muted">
      <p>© Copyright {new Date().getFullYear()}</p>
      <div>
        <a href="https://github.com/jaimecanarj" className="mr-4">
          <Button size="icon">
            <Github />
          </Button>
        </a>
        <a href="#">
          <Button size="icon">
            <Linkedin />
          </Button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

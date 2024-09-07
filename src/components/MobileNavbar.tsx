import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon } from "lucide-react";

const MobileNavbar = ({
  links,
}: {
  links: { href: string; label: string }[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col items-start">
          {links.map((item) => (
            <a href={item.href}>
              <Button
                key={item.href}
                variant="link"
                onClick={() => {
                  setOpen(false);
                }}
              >
                {item.label}
              </Button>
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;

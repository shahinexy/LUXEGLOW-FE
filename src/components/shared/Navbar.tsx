"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathName = usePathname();

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  const handleNavLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <nav className="bg-background border-b border-border px-4 md:px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger>
            <div className="p-2 hover:bg-accent rounded-lg transition-colors cursor-pointer">
              <HiMenuAlt1 className="text-2xl text-foreground" />
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <SheetHeader>
              <SheetTitle className="text-xl font-bold">
                LUXE<span className="text-primary">GLOW</span>
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-8">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`block px-4 py-2.5 rounded-lg transition-colors ${
                        pathName === link.path
                          ? "bg-primary text-primary-foreground font-medium"
                          : "text-foreground/70 hover:bg-accent hover:text-foreground"
                      }`}
                      onClick={handleNavLinkClick}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="absolute bottom-8 left-6 right-6">
              <SheetClose>
                <Button variant="outline" className="w-full">
                  Close Menu
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <span className="text-xl md:text-2xl font-bold tracking-tight">
          LUXE<span className="text-primary">GLOW</span>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathName === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:bg-accent hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
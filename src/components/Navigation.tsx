import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Solutions", href: "#solutions" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gradient">HospitalityTech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-foreground font-medium smooth-transition hover:scale-105"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold rounded-full px-6"
            >
              Contact Sales
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted smooth-transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-foreground/80 hover:text-foreground font-medium smooth-transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold rounded-full"
            >
              Contact Sales
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Solutions: ["WiFi Infrastructure", "Smart Rooms", "Security", "Energy Management"],
    Company: ["About Us", "Careers", "Press", "Contact"],
    Resources: ["Documentation", "Blog", "Case Studies", "Support"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="text-2xl font-bold text-gradient mb-4">HospitalityTech</div>
            <p className="text-sm text-muted-foreground mb-4">
              Transforming hospitality through innovative technology solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground smooth-transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground smooth-transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground smooth-transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground smooth-transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HospitalityTech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary smooth-transition">
              Privacy
            </a>
            <a href="#" className="hover:text-primary smooth-transition">
              Terms
            </a>
            <a href="#" className="hover:text-primary smooth-transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

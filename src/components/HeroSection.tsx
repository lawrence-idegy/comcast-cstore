import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury hotel interior showcasing modern hospitality technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-white/20 text-white/90 text-sm font-medium">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            Next-Generation Hospitality Solutions
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Transform Your
            <span className="block text-secondary mt-2">Guest Experience</span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology solutions designed to elevate hospitality operations,
            enhance guest satisfaction, and drive revenue growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="group bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl smooth-transition hover:scale-105"
            >
              Start Interactive Tour
              <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="group bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 font-semibold text-lg px-8 py-6 rounded-full backdrop-blur-sm smooth-transition"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-1">
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Hotels Connected</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold text-white">99.9%</div>
              <div className="text-sm text-white/80">Uptime</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

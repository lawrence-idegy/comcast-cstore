import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Transform Your
              <span className="block text-secondary mt-2">Guest Experience?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join hundreds of leading hospitality brands leveraging our technology to deliver
              exceptional experiences.
            </p>
          </div>

          {/* Email Form */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 p-2 glass-effect rounded-full border border-white/20">
              <div className="flex-1 flex items-center gap-2 px-4">
                <Mail className="h-5 w-5 text-white/60" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-0 bg-transparent text-white placeholder:text-white/60 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full px-8 shadow-lg hover:shadow-xl smooth-transition group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-3">
              No credit card required. Start your free trial today.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              ISO 27001 Certified
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              GDPR Compliant
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              SOC 2 Type II
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

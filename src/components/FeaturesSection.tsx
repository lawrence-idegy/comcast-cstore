import { CheckCircle2 } from "lucide-react";

const features = [
  "Seamless integration with existing systems",
  "24/7 technical support and monitoring",
  "Scalable solutions that grow with your business",
  "Industry-leading security protocols",
  "Cost-effective implementation",
  "Customizable to your unique needs",
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Why Choose Us
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Built for Modern
                <span className="text-gradient block mt-2">Hospitality</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform combines cutting-edge technology with hospitality expertise to deliver
                solutions that truly make a difference for your guests and your bottom line.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5 group-hover:scale-110 smooth-transition" />
                  <span className="text-lg text-foreground group-hover:text-primary smooth-transition">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl smooth-transition hover:scale-105">
                Schedule a Demo
              </button>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl smooth-transition hover:-translate-y-1">
                <div className="text-5xl font-bold text-primary mb-2">50M+</div>
                <div className="text-sm text-muted-foreground">Guests Served</div>
              </div>
              <div className="glass-effect rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl smooth-transition hover:-translate-y-1">
                <div className="text-5xl font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="glass-effect rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl smooth-transition hover:-translate-y-1">
                <div className="text-5xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="glass-effect rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl smooth-transition hover:-translate-y-1">
                <div className="text-5xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import { Card } from "@/components/ui/card";
import { Wifi, Smartphone, Shield, Zap, Users, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: Wifi,
    title: "High-Speed Connectivity",
    description: "Enterprise-grade WiFi infrastructure delivering seamless connectivity throughout your property.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Smartphone,
    title: "Smart Room Control",
    description: "IoT-enabled room automation for lighting, climate, and entertainment systems.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Comprehensive security systems with 24/7 monitoring and threat detection.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Zap,
    title: "Energy Management",
    description: "Smart energy solutions that reduce costs while maintaining guest comfort.",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Users,
    title: "Guest Experience",
    description: "Digital concierge services and personalized guest interaction platforms.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Real-time data analytics to optimize operations and maximize revenue.",
    color: "from-cyan-500 to-cyan-600",
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Comprehensive Technology
            <span className="text-gradient block mt-2">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to modernize your hospitality operations and exceed guest expectations.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={solution.title}
              className="group relative p-8 hover:shadow-xl smooth-transition hover:-translate-y-2 border-border/50 overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 smooth-transition from-primary to-accent" />
              
              <div className="relative space-y-4">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${solution.color} text-white shadow-lg`}>
                  <solution.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary smooth-transition">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-2">
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 gap-1 smooth-transition cursor-pointer">
                    Learn more
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

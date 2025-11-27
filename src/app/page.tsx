import Link from "next/link";
import { ArrowRight, Award, Filter, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-light/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light/50 rounded-full text-primary-dark text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Test Project for PuttingGreen.com
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Installer Directory
            <span className="block text-primary mt-2">Component Showcase</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A production-ready Next.js component featuring advanced filtering, sorting,
            and beautiful animations built with TypeScript and Tailwind CSS.
          </p>

          {/* CTA Button */}
          <Link
            href="/installers-test"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View Installer Directory
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <FeatureCard
            icon={<Filter className="w-6 h-6" />}
            title="Advanced Filtering"
            description="Search, filter by city and skill level with real-time results"
          />
          <FeatureCard
            icon={<Award className="w-6 h-6" />}
            title="15 Mock Installers"
            description="Realistic profiles across multiple cities and skill levels"
          />
          <FeatureCard
            icon={<Sparkles className="w-6 h-6" />}
            title="Smooth Animations"
            description="Framer Motion powered transitions and stagger effects"
          />
        </div>

        {/* Tech Stack */}
        <div className="mt-16 p-6 bg-white rounded-xl border border-border shadow-sm">
          <p className="text-sm font-semibold text-muted-foreground mb-4 text-center">
            TECH STACK
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <TechBadge>Next.js 16</TechBadge>
            <TechBadge>TypeScript</TechBadge>
            <TechBadge>Tailwind CSS 4</TechBadge>
            <TechBadge>Radix UI</TechBadge>
            <TechBadge>Framer Motion</TechBadge>
            <TechBadge>Lucide Icons</TechBadge>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>Built by Fluxium (Mukela & Rahul)</p>
          <p className="mt-2">
            <a
              href="https://github.com/Mukela12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub: Mukela12
            </a>
            {" • "}
            <a
              href="https://github.com/Rahulkumarhavit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Rahulkumarhavit
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
      {children}
    </span>
  );
}

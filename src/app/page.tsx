/**
 * Landing Page
 * PuttingGreen.com Installer Directory - Premium glass morphism design
 * Following Fluxium's elite design standards
 */

"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Filter, Sparkles, Users, Star } from "lucide-react";
import { getHeroImage } from "@/lib/localImageHelper";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-100 relative overflow-hidden">
      {/* Premium Grid Background Pattern */}
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-sage-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="wellness-grid-pattern"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
            <circle cx="100" cy="100" r="50" fill="none" strokeWidth="0.5" opacity="0.3" />
            <circle cx="50" cy="50" r="25" fill="none" strokeWidth="0.3" opacity="0.2" />
            <circle cx="150" cy="150" r="25" fill="none" strokeWidth="0.3" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#wellness-grid-pattern)" />
      </svg>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circle - Top Right */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sage-200/30 to-sage-300/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Medium Circle - Bottom Left */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-sage-300/20 to-sage-200/30 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small Circle - Center */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-40 h-40 bg-gradient-to-bl from-sage-400/20 to-sage-300/10 rounded-full blur-2xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-sage-600" />
            <span className="text-sm font-semibold text-sage-900">
              Test Project for PuttingGreen.com
            </span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gray-900">Installer Directory</span>
            <span className="block gradient-text mt-3">Component Showcase</span>
          </motion.h1>

          {/* Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A production-ready Next.js component featuring advanced filtering, sorting,
            and beautiful animations built with TypeScript and Tailwind CSS.
          </motion.p>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-[400px] max-w-5xl mx-auto mb-10 rounded-3xl overflow-hidden glass-card"
          >
            <Image
              src={getHeroImage(0)}
              alt="Beautiful putting green"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Floating Stats on Image */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="glass-card px-6 py-3"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-sage-600" />
                  <span className="text-gray-900 font-bold text-lg">15</span>
                  <span className="text-gray-700 text-sm">Installers</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="glass-card px-6 py-3"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span className="text-gray-900 font-bold text-lg">4.8</span>
                  <span className="text-gray-700 text-sm">Avg Rating</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/installers-test" className="btn-primary inline-flex items-center gap-3">
              View Installer Directory
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <FeatureCard
            icon={<Filter className="w-6 h-6" />}
            title="Advanced Filtering"
            description="Search, filter by city and skill level with real-time results and active filter chips"
            delay={0.7}
          />
          <FeatureCard
            icon={<Award className="w-6 h-6" />}
            title="15 Mock Installers"
            description="Realistic profiles across multiple cities and skill levels with high-quality images"
            delay={0.8}
          />
          <FeatureCard
            icon={<Sparkles className="w-6 h-6" />}
            title="Smooth Animations"
            description="Framer Motion powered transitions with glass morphism and premium hover effects"
            delay={0.9}
          />
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-20 glass-card p-8"
        >
          <p className="text-sm font-bold text-gray-500 mb-6 text-center tracking-wider">
            TECH STACK
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <TechBadge>Next.js 16</TechBadge>
            <TechBadge>TypeScript</TechBadge>
            <TechBadge>Tailwind CSS 4</TechBadge>
            <TechBadge>Framer Motion</TechBadge>
            <TechBadge>Lucide Icons</TechBadge>
            <TechBadge>Unsplash API</TechBadge>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-16 text-center text-sm text-gray-600"
        >
          <p className="font-semibold text-gray-900 mb-2">Built by Fluxium (Mukela & Rahul)</p>
          <p className="flex items-center justify-center gap-2">
            <a
              href="https://github.com/Mukela12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-600 hover:text-sage-700 font-medium hover:underline transition-colors"
            >
              GitHub: Mukela12
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://github.com/Rahulkumarhavit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-600 hover:text-sage-700 font-medium hover:underline transition-colors"
            >
              Rahulkumarhavit
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-8 card-hover group"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-sage-400 to-sage-500 rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-4 py-2 bg-gradient-to-r from-sage-50 to-sage-100 text-sage-900 rounded-xl text-sm font-semibold border border-sage-200 hover:from-sage-100 hover:to-sage-200 transition-all duration-300 hover:shadow-sm">
      {children}
    </span>
  );
}

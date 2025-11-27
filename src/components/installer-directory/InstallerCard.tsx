/**
 * InstallerCard Component
 * Premium glass morphism design with real images
 * Following wellness-frontend-1 design standards
 */

"use client";

import * as React from "react";
import Link from "next/link";
import { MapPin, Calendar, Star, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Installer } from "./types";
import { getInstallerImage } from "@/lib/localImageHelper";

interface InstallerCardProps {
  installer: Installer;
  onViewDetails: (installer: Installer) => void;
}

export function InstallerCard({ installer, onViewDetails }: InstallerCardProps) {
  const getSkillBadgeStyle = (skillLevel: string) => {
    switch (skillLevel) {
      case "Master":
        return "bg-amber-100 text-amber-900 border-amber-200";
      case "Intermediate":
        return "bg-blue-100 text-blue-900 border-blue-200";
      case "Novice":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  // Generate consistent image URL for this installer
  const imageUrl = installer.imageUrl || getInstallerImage(installer.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative h-full"
    >
      {/* Glass Card with Premium Styling */}
      <div className="relative h-full bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden card-hover">
        <div style={{ boxShadow: "var(--shadow-medium)" }}>
          {/* Hero Image */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sage-100 to-sage-200">
            <Image
              src={imageUrl}
              alt={installer.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Skill Badge on Image */}
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getSkillBadgeStyle(installer.skillLevel)} backdrop-blur-sm`}>
                {installer.skillLevel}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Name and Location */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 mb-2 tracking-tight">
                {installer.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{installer.city}</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 py-3 border-y border-gray-100">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-lg font-bold text-gray-900">
                  <Calendar className="w-4 h-4 text-sage-500" />
                  {installer.yearsExperience}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">Years</div>
              </div>

              {installer.projectsCompleted && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-lg font-bold text-gray-900">
                    <Briefcase className="w-4 h-4 text-sage-500" />
                    {installer.projectsCompleted}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">Projects</div>
                </div>
              )}

              {installer.rating && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-lg font-bold text-gray-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    {installer.rating.toFixed(1)}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">Rating</div>
                </div>
              )}
            </div>

            {/* About */}
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
              {installer.about}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => onViewDetails(installer)}
                className="flex-1 py-3 px-4 bg-white border-2 border-sage-500 text-sage-700 font-semibold rounded-xl transition-all duration-300 hover:bg-sage-50 hover:border-sage-600 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-sage-300/40"
              >
                Quick View
              </button>
              <Link
                href={`/installers-test/${installer.id}`}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-sage-300/40 text-center"
              >
                Full Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sage-200/50 to-sage-300/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

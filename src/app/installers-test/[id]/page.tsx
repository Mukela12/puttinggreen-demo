/**
 * Installer Profile Page
 * Dedicated page for full installer details with hero, about, and contact sections
 * Following Fluxium's elite design standards
 */

"use client";

import * as React from "react";
import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Award,
  Phone,
  Mail,
  Globe,
  Star,
  CheckCircle2,
  ArrowLeft,
  ChevronRight,
  Briefcase,
} from "lucide-react";
import { mockInstallers } from "@/lib/mockData";
import { getInstallerImage } from "@/lib/localImageHelper";
import { notFound } from "next/navigation";
import { ProfileGallery } from "@/components/ui/ProfileGallery";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function InstallerProfilePage({ params }: PageProps) {
  const { id } = use(params);
  const installer = mockInstallers.find((i) => i.id === id);

  if (!installer) {
    notFound();
  }

  const imageUrl = installer.imageUrl || getInstallerImage(installer.id);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-100 relative overflow-hidden">
      {/* Premium Grid Background Pattern */}
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-sage-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="profile-grid-pattern"
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
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#profile-grid-pattern)" />
      </svg>

      <div className="relative">
        {/* Breadcrumb Navigation */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-gray-600 hover:text-sage-700 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link
              href="/installers-test"
              className="text-gray-600 hover:text-sage-700 transition-colors"
            >
              Installers
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{installer.name}</span>
          </nav>

          {/* Back Button */}
          <Link
            href="/installers-test"
            className="inline-flex items-center gap-2 mt-4 text-sm text-sage-600 hover:text-sage-700 font-medium transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Directory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card overflow-hidden"
          >
            {/* Hero Image */}
            <div className="relative h-[400px] w-full bg-gradient-to-br from-sage-100 to-sage-200">
              <Image
                src={imageUrl}
                alt={installer.name}
                fill
                className="object-cover"
                priority
                sizes="1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Skill Badge on Image */}
              <div className="absolute top-6 right-6">
                <span
                  className={`px-4 py-2 text-sm font-bold rounded-full border backdrop-blur-md ${getSkillBadgeStyle(
                    installer.skillLevel
                  )}`}
                >
                  {installer.skillLevel}
                </span>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
                  {installer.name}
                </h1>
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg font-medium">{installer.city}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-8 bg-gradient-to-br from-sage-50 to-white border-t border-sage-200">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-3xl font-bold text-gray-900 mb-1">
                  <Calendar className="w-6 h-6 text-sage-600" />
                  {installer.yearsExperience}
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>

              {installer.projectsCompleted && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-3xl font-bold text-gray-900 mb-1">
                    <Briefcase className="w-6 h-6 text-sage-600" />
                    {installer.projectsCompleted}
                  </div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              )}

              {installer.rating && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-3xl font-bold text-gray-900 mb-1">
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                    {installer.rating.toFixed(1)}
                  </div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              )}

              {installer.serviceRadius && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-3xl font-bold text-gray-900 mb-1">
                    <MapPin className="w-6 h-6 text-sage-600" />
                    {installer.serviceRadius}
                  </div>
                  <div className="text-sm text-gray-600">Mile Radius</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Award className="w-6 h-6 text-sage-600" />
                  About
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  {installer.about}
                </p>
              </motion.div>

              {/* Specialties */}
              {installer.specialties && installer.specialties.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass-card p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-5">
                    Specialties
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {installer.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-sage-100 to-sage-50 text-sage-900 border border-sage-200 hover:from-sage-200 hover:to-sage-100 transition-all duration-300"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Certifications */}
              {installer.certifications && installer.certifications.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="glass-card p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-5">
                    Certifications
                  </h2>
                  <div className="space-y-3">
                    {installer.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gradient-to-r from-sage-50 to-white rounded-xl border border-sage-100"
                      >
                        <CheckCircle2 className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800 font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Portfolio Gallery */}
              {installer.portfolioImages && installer.portfolioImages.length > 0 && (
                <ProfileGallery
                  images={installer.portfolioImages}
                  installerName={installer.name}
                />
              )}
            </div>

            {/* Right Column - Contact & Service Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-8 sticky top-8"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4 mb-6">
                  {installer.phone && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-sage-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Phone</div>
                        <a
                          href={`tel:${installer.phone}`}
                          className="text-sage-600 hover:text-sage-700 font-semibold hover:underline transition-colors"
                        >
                          {installer.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {installer.email && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-sage-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Email</div>
                        <a
                          href={`mailto:${installer.email}`}
                          className="text-sage-600 hover:text-sage-700 font-semibold hover:underline transition-colors break-all"
                        >
                          {installer.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {installer.website && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5 text-sage-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Website</div>
                        <a
                          href={`https://${installer.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sage-600 hover:text-sage-700 font-semibold hover:underline transition-colors break-all"
                        >
                          {installer.website}
                        </a>
                      </div>
                    </div>
                  )}

                  {installer.serviceRadius && (
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-sage-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Service Area</div>
                        <p className="text-gray-800 font-medium">
                          Within {installer.serviceRadius} miles of {installer.city}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button className="w-full btn-primary">
                  Request Quote
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

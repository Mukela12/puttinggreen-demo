/**
 * InstallerDetailSheet Component
 * Side drawer with full installer details - Premium glass morphism design
 * Following Fluxium's elite design standards
 */

"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Award,
  Phone,
  Mail,
  Globe,
  MapPinIcon,
  Star,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Installer } from "./types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { getInstallerImage } from "@/lib/localImageHelper";
import { QuoteRequestDialog } from "./QuoteRequestDialog";

interface InstallerDetailSheetProps {
  installer: Installer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InstallerDetailSheet({
  installer,
  open,
  onOpenChange,
}: InstallerDetailSheetProps) {
  const [quoteDialogOpen, setQuoteDialogOpen] = React.useState(false);

  if (!installer) return null;

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

  const imageUrl = installer.imageUrl || getInstallerImage(installer.id);

  const handleRequestQuote = () => {
    setQuoteDialogOpen(true);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[92vw] sm:max-w-[520px] overflow-y-auto p-0">
        {/* Hero Image */}
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-sage-100 to-sage-200">
          <Image
            src={imageUrl}
            alt={installer.name}
            fill
            className="object-cover"
            sizes="520px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Skill Badge on Image */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1.5 text-xs font-semibold rounded-full border backdrop-blur-sm ${getSkillBadgeStyle(installer.skillLevel)}`}>
              {installer.skillLevel}
            </span>
          </div>
        </div>

        {/* Header */}
        <SheetHeader className="pb-6 border-b border-gray-200 px-6 pt-6">
          <SheetTitle className="text-2xl text-gray-900">{installer.name}</SheetTitle>
          <SheetDescription className="flex items-center gap-2 text-base text-gray-600">
            <MapPin className="w-4 h-4" />
            {installer.city}
          </SheetDescription>
        </SheetHeader>

        {/* Content */}
        <div className="space-y-6 py-6 px-6 pb-24">
          {/* Quick Stats */}
          {(installer.yearsExperience ||
            installer.projectsCompleted ||
            installer.rating) && (
            <div className="grid grid-cols-3 gap-4">
              {installer.yearsExperience && (
                <div className="text-center p-4 bg-gradient-to-br from-sage-50 to-sage-100 rounded-xl border border-sage-200">
                  <div className="text-2xl font-bold text-gray-900">
                    {installer.yearsExperience}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Years Experience
                  </div>
                </div>
              )}

              {installer.projectsCompleted && (
                <div className="text-center p-4 bg-gradient-to-br from-sage-50 to-sage-100 rounded-xl border border-sage-200">
                  <div className="text-2xl font-bold text-gray-900">
                    {installer.projectsCompleted}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Projects Done
                  </div>
                </div>
              )}

              {installer.rating && (
                <div className="text-center p-4 bg-gradient-to-br from-sage-50 to-sage-100 rounded-xl border border-sage-200">
                  <div className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-1">
                    {installer.rating.toFixed(1)}
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Rating</div>
                </div>
              )}
            </div>
          )}

          {/* About */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sage-600" />
              About
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {installer.about}
            </p>
          </div>

          {/* Specialties */}
          {installer.specialties && installer.specialties.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">
                Specialties
              </h3>
              <div className="flex flex-wrap gap-2">
                {installer.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-sage-100 text-sage-900 border border-sage-200"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {installer.certifications && installer.certifications.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">
                Certifications
              </h3>
              <div className="space-y-2">
                {installer.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Service Area */}
          {installer.serviceRadius && (
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-sage-600" />
                Service Area
              </h3>
              <p className="text-sm text-gray-600">
                Within {installer.serviceRadius} miles of {installer.city}
              </p>
            </div>
          )}

          {/* Contact Information */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4">
              Contact Information
            </h3>
            <div className="space-y-3">
              {installer.phone && (
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <a
                    href={`tel:${installer.phone}`}
                    className="text-sage-600 hover:text-sage-700 font-medium hover:underline transition-colors"
                  >
                    {installer.phone}
                  </a>
                </div>
              )}

              {installer.email && (
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <a
                    href={`mailto:${installer.email}`}
                    className="text-sage-600 hover:text-sage-700 font-medium hover:underline transition-colors"
                  >
                    {installer.email}
                  </a>
                </div>
              )}

              {installer.website && (
                <div className="flex items-center gap-3 text-sm">
                  <Globe className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <a
                    href={`https://${installer.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage-600 hover:text-sage-700 font-medium hover:underline transition-colors"
                  >
                    {installer.website}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white backdrop-blur-md shadow-[0_-4px_12px_rgba(0,0,0,0.08)] z-10 space-y-3">
          <Link
            href={`/installers-test/${installer.id}`}
            className="w-full btn-primary inline-flex items-center justify-center gap-2"
          >
            View Full Profile
            <ExternalLink className="w-4 h-4" />
          </Link>
          <button
            onClick={handleRequestQuote}
            className="w-full py-3 px-4 bg-white border-2 border-sage-500 text-sage-700 font-semibold rounded-xl transition-all duration-300 hover:bg-sage-50 hover:border-sage-600 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-sage-300/40"
          >
            Request Quote
          </button>
        </div>
      </SheetContent>

      {/* Quote Request Dialog */}
      <QuoteRequestDialog
        installer={installer}
        open={quoteDialogOpen}
        onOpenChange={setQuoteDialogOpen}
      />
    </Sheet>
  );
}

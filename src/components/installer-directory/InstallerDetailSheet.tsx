/**
 * InstallerDetailSheet Component
 * Side drawer with full installer details
 * Following Fluxium's inline-first design principle
 */

"use client";

import * as React from "react";
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
} from "lucide-react";
import { Installer } from "./types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
  if (!installer) return null;

  const getSkillBadgeVariant = (skillLevel: string) => {
    switch (skillLevel) {
      case "Master":
        return "master" as const;
      case "Intermediate":
        return "intermediate" as const;
      case "Novice":
        return "novice" as const;
      default:
        return "default" as const;
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[92vw] sm:max-w-[520px] overflow-y-auto">
        {/* Header */}
        <SheetHeader className="pb-6 border-b border-border">
          {/* Logo */}
          <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg mb-4">
            <Award className="w-12 h-12 text-white" />
          </div>

          <SheetTitle className="text-2xl">{installer.name}</SheetTitle>
          <SheetDescription className="flex items-center gap-2 text-base">
            <MapPin className="w-4 h-4" />
            {installer.city}
          </SheetDescription>

          <div className="flex gap-2 pt-2">
            <Badge variant={getSkillBadgeVariant(installer.skillLevel)}>
              {installer.skillLevel}
            </Badge>
          </div>
        </SheetHeader>

        {/* Content */}
        <div className="space-y-6 py-6">
          {/* Quick Stats */}
          {(installer.yearsExperience ||
            installer.projectsCompleted ||
            installer.rating) && (
            <div className="grid grid-cols-3 gap-4">
              {installer.yearsExperience && (
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-foreground">
                    {installer.yearsExperience}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              )}

              {installer.projectsCompleted && (
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-foreground">
                    {installer.projectsCompleted}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Projects Done
                  </div>
                </div>
              )}

              {installer.rating && (
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-foreground flex items-center justify-center gap-1">
                    {installer.rating.toFixed(1)}
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              )}
            </div>
          )}

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              About
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {installer.about}
            </p>
          </div>

          {/* Specialties */}
          {installer.specialties && installer.specialties.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Specialties
              </h3>
              <div className="flex flex-wrap gap-2">
                {installer.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {installer.certifications && installer.certifications.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Certifications
              </h3>
              <div className="space-y-2">
                {installer.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Service Area */}
          {installer.serviceRadius && (
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <MapPinIcon className="w-4 h-4" />
                Service Area
              </h3>
              <p className="text-sm text-muted-foreground">
                Within {installer.serviceRadius} miles of {installer.city}
              </p>
            </div>
          )}

          {/* Contact Information */}
          <div className="border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Contact Information
            </h3>
            <div className="space-y-3">
              {installer.phone && (
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <a
                    href={`tel:${installer.phone}`}
                    className="text-primary hover:underline"
                  >
                    {installer.phone}
                  </a>
                </div>
              )}

              {installer.email && (
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <a
                    href={`mailto:${installer.email}`}
                    className="text-primary hover:underline"
                  >
                    {installer.email}
                  </a>
                </div>
              )}

              {installer.website && (
                <div className="flex items-center gap-3 text-sm">
                  <Globe className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <a
                    href={`https://${installer.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {installer.website}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 left-0 right-0 p-4 border-t border-border bg-white -mx-6 -mb-6">
          <Button className="w-full bg-primary hover:bg-primary-dark text-white shadow-sm">
            Request Quote
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

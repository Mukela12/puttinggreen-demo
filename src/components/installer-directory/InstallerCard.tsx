/**
 * InstallerCard Component
 * Balanced design with medium images and organized information
 * Following Fluxium's design standards
 */

"use client";

import * as React from "react";
import { MapPin, Award, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Installer } from "./types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";

interface InstallerCardProps {
  installer: Installer;
  onViewDetails: (installer: Installer) => void;
}

export function InstallerCard({ installer, onViewDetails }: InstallerCardProps) {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative"
    >
      {/* Decorative background gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-light to-accent/10 opacity-0 group-hover:opacity-100 rounded-full -mr-16 -mt-16 blur-2xl transition-opacity duration-500" />

      <div className={cn(
        "relative rounded-xl border border-border bg-card p-6 shadow-sm",
        "hover:shadow-lg hover:scale-[1.02] transition-all duration-300",
        "flex flex-col gap-4"
      )}>
        {/* Header Section */}
        <div className="flex items-start gap-4">
          {/* Installer Logo/Image Placeholder */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md">
              <Award className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Name and Badge */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-foreground line-clamp-2 mb-2">
              {installer.name}
            </h3>
            <Badge variant={getSkillBadgeVariant(installer.skillLevel)}>
              {installer.skillLevel}
            </Badge>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-2 text-sm">
          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="line-clamp-1">{installer.city}</span>
          </div>

          {/* Experience */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span>
              {installer.yearsExperience} {installer.yearsExperience === 1 ? "year" : "years"} of experience
            </span>
          </div>
        </div>

        {/* About Section */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {installer.about}
        </p>

        {/* Stats Row (if available) */}
        {(installer.projectsCompleted || installer.rating) && (
          <div className="flex items-center gap-4 pt-2 border-t border-border/50">
            {installer.projectsCompleted && (
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Projects</span>
                <span className="text-sm font-semibold text-foreground">
                  {installer.projectsCompleted}
                </span>
              </div>
            )}
            {installer.rating && (
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Rating</span>
                <span className="text-sm font-semibold text-foreground">
                  {installer.rating.toFixed(1)} ★
                </span>
              </div>
            )}
          </div>
        )}

        {/* Action Button */}
        <Button
          onClick={() => onViewDetails(installer)}
          variant="outline"
          className="w-full mt-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
}

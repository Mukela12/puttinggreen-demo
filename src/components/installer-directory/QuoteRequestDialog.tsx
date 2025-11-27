/**
 * QuoteRequestDialog Component
 * Modal form for requesting quotes from installers
 * Following Fluxium's elite design standards
 */

"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  MapPin,
  Award,
  Calendar,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { QuoteRequestDialogProps, QuoteRequest } from "./types";

type FormState = "idle" | "loading" | "success";

export function QuoteRequestDialog({
  installer,
  open,
  onOpenChange,
}: QuoteRequestDialogProps) {
  const [formState, setFormState] = React.useState<FormState>("idle");
  const [quoteNumber, setQuoteNumber] = React.useState<string>("");
  const [errors, setErrors] = React.useState<Partial<Record<keyof QuoteRequest, string>>>({});

  // Form data
  const [formData, setFormData] = React.useState<Omit<QuoteRequest, "installerId" | "installerName">>({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    projectType: "Residential",
    projectDetails: "",
    preferredContact: "email",
  });

  // Reset form when dialog closes
  React.useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setFormState("idle");
        setFormData({
          customerName: "",
          customerEmail: "",
          customerPhone: "",
          projectType: "Residential",
          projectDetails: "",
          preferredContact: "email",
        });
        setErrors({});
      }, 300); // Wait for dialog close animation
    }
  }, [open]);

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteRequest, string>> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Name is required";
    }

    if (!formData.customerEmail.trim()) {
      newErrors.customerEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
      newErrors.customerEmail = "Invalid email address";
    }

    if (!formData.customerPhone.trim()) {
      newErrors.customerPhone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.customerPhone.replace(/\D/g, ""))) {
      newErrors.customerPhone = "Invalid phone number (minimum 10 digits)";
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Project details are required";
    } else if (formData.projectDetails.trim().length < 20) {
      newErrors.projectDetails = "Please provide more details (minimum 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !installer) return;

    setFormState("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate mock quote number
    const mockQuoteNumber = `QT-${Date.now().toString().slice(-6)}`;
    setQuoteNumber(mockQuoteNumber);
    setFormState("success");
  };

  // Handle input changes
  const handleChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field as keyof QuoteRequest]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field as keyof QuoteRequest];
        return newErrors;
      });
    }
  };

  if (!installer) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <AnimatePresence mode="wait">
          {formState === "success" ? (
            // Success State
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="py-8"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-sage-400 to-sage-500 rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </motion.div>

                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Quote Request Sent!
                  </h3>
                  <p className="text-gray-600 max-w-md">
                    Your quote request has been successfully sent to{" "}
                    <span className="font-semibold text-sage-700">
                      {installer.name}
                    </span>
                    . They will contact you shortly via your preferred method.
                  </p>
                </div>

                <div className="glass-card p-4 w-full max-w-sm">
                  <p className="text-sm text-gray-600 mb-1">Quote Reference Number</p>
                  <p className="text-2xl font-bold text-sage-700">{quoteNumber}</p>
                </div>

                <button
                  onClick={() => onOpenChange(false)}
                  className="btn-primary px-8"
                >
                  Done
                </button>
              </div>
            </motion.div>
          ) : (
            // Form State
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader>
                <DialogTitle>Request a Quote</DialogTitle>
                <DialogDescription>
                  Fill out the form below to request a quote from {installer.name}
                </DialogDescription>
              </DialogHeader>

              {/* Installer Info Banner */}
              <div className="mt-4 mb-6 glass-card p-4 bg-gradient-to-br from-sage-50 to-white border border-sage-200">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">{installer.name}</h4>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-sage-600" />
                        {installer.city}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-sage-600" />
                        {installer.skillLevel}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-sage-600" />
                        {installer.yearsExperience} years exp.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="customerName">
                    Your Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="customerName"
                    placeholder="John Doe"
                    value={formData.customerName}
                    onChange={(e) => handleChange("customerName", e.target.value)}
                    disabled={formState === "loading"}
                    className={errors.customerName ? "border-red-500" : ""}
                  />
                  {errors.customerName && (
                    <p className="text-sm text-red-600">{errors.customerName}</p>
                  )}
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="customerEmail">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="customerEmail"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.customerEmail}
                      onChange={(e) => handleChange("customerEmail", e.target.value)}
                      disabled={formState === "loading"}
                      className={errors.customerEmail ? "border-red-500" : ""}
                    />
                    {errors.customerEmail && (
                      <p className="text-sm text-red-600">{errors.customerEmail}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="customerPhone">
                      Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="customerPhone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.customerPhone}
                      onChange={(e) => handleChange("customerPhone", e.target.value)}
                      disabled={formState === "loading"}
                      className={errors.customerPhone ? "border-red-500" : ""}
                    />
                    {errors.customerPhone && (
                      <p className="text-sm text-red-600">{errors.customerPhone}</p>
                    )}
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) =>
                      handleChange("projectType", e.target.value as QuoteRequest["projectType"])
                    }
                    disabled={formState === "loading"}
                    className="select-primary"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <Label htmlFor="projectDetails">
                    Project Details <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="projectDetails"
                    placeholder="Please describe your putting green project, including dimensions, location, and any special requirements..."
                    value={formData.projectDetails}
                    onChange={(e) => handleChange("projectDetails", e.target.value)}
                    disabled={formState === "loading"}
                    className={errors.projectDetails ? "border-red-500" : ""}
                    rows={4}
                  />
                  <div className="flex justify-between items-center">
                    {errors.projectDetails ? (
                      <p className="text-sm text-red-600">{errors.projectDetails}</p>
                    ) : (
                      <p className="text-sm text-gray-500">Minimum 20 characters</p>
                    )}
                    <p className="text-sm text-gray-400">
                      {formData.projectDetails.length} characters
                    </p>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div className="space-y-2">
                  <Label>Preferred Contact Method</Label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={(e) => handleChange("preferredContact", e.target.value as "email" | "phone")}
                        disabled={formState === "loading"}
                        className="w-4 h-4 text-sage-600 focus:ring-sage-500"
                      />
                      <span className="text-sm font-medium text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === "phone"}
                        onChange={(e) => handleChange("preferredContact", e.target.value as "email" | "phone")}
                        disabled={formState === "loading"}
                        className="w-4 h-4 text-sage-600 focus:ring-sage-500"
                      />
                      <span className="text-sm font-medium text-gray-700">Phone</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full btn-primary relative"
                  >
                    {formState === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Request...
                      </span>
                    ) : (
                      "Send Quote Request"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

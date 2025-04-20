
import React from "react";
import { OnboardingForm } from "@/components/onboarding/OnboardingForm";
import { Leaf } from "lucide-react";

export default function Onboarding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 px-4">
      <div className="flex items-center justify-center mb-8">
        <Leaf className="w-10 h-10 text-agrigreen-500 mr-2" />
        <span className="text-3xl font-bold text-agrigreen-600">AgriConnect</span>
      </div>
      <OnboardingForm />
    </div>
  );
}

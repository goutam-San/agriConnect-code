
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UserTypeSelector } from "@/components/ui/UserTypeSelector";
import { LanguageSelector } from "@/components/layout/LanguageSelector";
import { Phone, Mail, Mic } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type UserType = "farmer" | "expert" | "researcher";

export function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType>("farmer");
  const [language, setLanguage] = useState("en");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Welcome to AgriConnect</CardTitle>
              <CardDescription className="text-center">
                Choose your preferred language
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <div className="w-full max-w-xs">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <LanguageSelector 
                      currentLanguage={language} 
                      onChange={setLanguage} 
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={nextStep} className="w-full max-w-xs">
                Continue
              </Button>
            </CardFooter>
          </>
        );
      case 2:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Create Your Account</CardTitle>
              <CardDescription className="text-center">
                How would you like to sign up?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="rounded-r-none"
                  />
                  <Button variant="outline" size="icon" className="rounded-l-none border-l-0">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="px-2 bg-white text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="flex">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="rounded-r-none"
                  />
                  <Button variant="outline" size="icon" className="rounded-l-none border-l-0">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Button
                variant="outline"
                onClick={prevStep}
                className="w-full"
              >
                Back
              </Button>
              <Button onClick={nextStep} className="w-full">
                Continue
              </Button>
            </CardFooter>
          </>
        );
      case 3:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Tell Us About Yourself</CardTitle>
              <CardDescription className="text-center">
                Select your role in the agricultural community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UserTypeSelector value={userType} onChange={setUserType} />
            </CardContent>
            <CardFooter className="flex justify-between flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Button
                variant="outline"
                onClick={prevStep}
                className="w-full"
              >
                Back
              </Button>
              <Button onClick={nextStep} className="w-full">
                Continue
              </Button>
            </CardFooter>
          </>
        );
      case 4:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Complete Your Profile</CardTitle>
              <CardDescription className="text-center">
                {userType === "farmer"
                  ? "Tell us about your farm"
                  : userType === "expert"
                  ? "Share your expertise"
                  : "Tell us about your research"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              
              {userType === "farmer" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="region">Region/Location</Label>
                    <Input id="region" placeholder="Enter your region" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="crops">Crops Grown</Label>
                    <Textarea id="crops" placeholder="What crops do you grow?" />
                  </div>
                </>
              )}
              
              {userType === "expert" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="expertise">Area of Expertise</Label>
                    <Input id="expertise" placeholder="Your field of expertise" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution/Organization</Label>
                    <Input id="institution" placeholder="Where do you work?" />
                  </div>
                </>
              )}
              
              {userType === "researcher" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="focus">Research Focus</Label>
                    <Input id="focus" placeholder="Your research area" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="publications">Publications</Label>
                    <Textarea id="publications" placeholder="List any relevant publications" />
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter className="flex justify-between flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Button
                variant="outline"
                onClick={prevStep}
                className="w-full"
              >
                Back
              </Button>
              <Button className="w-full">
                Create Profile
              </Button>
            </CardFooter>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      {renderStep()}
    </Card>
  );
}

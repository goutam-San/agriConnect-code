import React from "react";
import { Link } from "react-router-dom";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Leaf, MessageSquare, Book, Calendar, Languages } from "lucide-react";
import { LanguageSelector } from "@/components/layout/LanguageSelector";

export default function Index() {
  const [language, setLanguage] = React.useState("en");

  return (
    <PageContainer>
      <div className="py-10 md:py-16">
        {/* Hero section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-agrigreen-600">Connect</span>, <span className="text-earthbrown-500">Learn</span>, and <span className="text-harvest-500">Grow</span>
            </h1>
            <p className="text-xl mb-6 text-muted-foreground">
              Join AgriConnect to share knowledge, solve farming challenges, and improve your agricultural practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-agrigreen-500 hover:bg-agrigreen-600">
                <Link to="/onboarding">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/forum">Explore Forum</Link>
              </Button>
            </div>
            <div className="mt-6 flex justify-center md:justify-start">
              <LanguageSelector currentLanguage={language} onChange={setLanguage} />
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
              alt="Farming landscape" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Features section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">How AgriConnect Helps You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-agrigreen-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-agrigreen-600" />
                </div>
                <CardTitle>Community Forum</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  Ask questions, share experiences, and get advice from farmers and agricultural experts.
                </p>
              </CardContent>
              <CardFooter className="justify-center pt-0">
                <Button variant="ghost" className="text-agrigreen-600">
                  <Link to="/forum">Visit Forum</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-earthbrown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="h-6 w-6 text-earthbrown-600" />
                </div>
                <CardTitle>Knowledge Hub</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  Access guides, videos, and infographics on various farming techniques and best practices.
                </p>
              </CardContent>
              <CardFooter className="justify-center pt-0">
                <Button variant="ghost" className="text-earthbrown-600">
                  <Link to="/knowledge">Explore Resources</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-harvest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-harvest-600" />
                </div>
                <CardTitle>Expert Consultations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  Join webinars, Q&A sessions, and schedule one-on-one consultations with farming experts.
                </p>
              </CardContent>
              <CardFooter className="justify-center pt-0">
                <Button variant="ghost" className="text-harvest-600">
                  <Link to="/events">View Events</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to connect with the farming community?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of farmers, experts, and researchers on AgriConnect and start improving your agricultural practices today.
          </p>
          <Button size="lg" className="bg-agrigreen-500 hover:bg-agrigreen-600">
            <Link to="/onboarding">Create Your Account</Link>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}


import React from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, FileText, Settings, MessageSquare, Book } from "lucide-react";
import { LanguageSelector } from "@/components/layout/LanguageSelector";

const userData = {
  name: "John Doe", // Changed from "Rajesh Kumar" to "John Doe"
  type: "farmer",
  avatar: "https://i.pravatar.cc/150?img=11",
  location: "Andhra Pradesh, India",
  joinDate: "January 2025",
  bio: "Small-scale farmer with 5 acres of land. Growing rice, vegetables, and pulses. Looking to learn sustainable farming methods to improve yields.",
  crops: ["Rice", "Tomatoes", "Okra", "Black Gram"],
  stats: {
    questions: 8,
    answers: 3,
    events: 5,
    resources: 12,
  },
};

// Sample user activity
const userQuestions = [
  {
    id: "1",
    title: "What's causing these yellow spots on my rice plants?",
    date: "2 days ago",
    answers: 3,
    verified: true,
  },
  {
    id: "2",
    title: "Best fertilizer for tomatoes in sandy soil?",
    date: "1 week ago",
    answers: 5,
    verified: true,
  },
];

const upcomingEvents = [
  {
    id: "1",
    title: "Modern Rice Cultivation Techniques",
    date: "April 22, 2025",
    time: "10:00 AM",
  },
  {
    id: "2",
    title: "Pest Management Q&A Session",
    date: "April 23, 2025",
    time: "2:00 PM",
  },
];

export default function Profile() {
  const [language, setLanguage] = React.useState("en");

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Your Profile</h1>
        <div className="flex items-center gap-2">
          <LanguageSelector currentLanguage={language} onChange={setLanguage} />
          <Button variant="outline" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile card */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-2">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback className="text-lg bg-agrigreen-100 text-agrigreen-600">
                  {userData.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{userData.name}</CardTitle>
              <Badge
                className="mt-1"
                variant="outline"
                style={{ 
                  backgroundColor: "hsl(var(--agrigreen-50))", 
                  color: "hsl(var(--agrigreen-600))", 
                  borderColor: "hsl(var(--agrigreen-200))" 
                }}
              >
                {userData.type.charAt(0).toUpperCase() + userData.type.slice(1)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p>{userData.location}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Member Since</p>
                <p>{userData.joinDate}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-2">Bio</p>
                <p className="text-sm">{userData.bio}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Crops</p>
                <div className="flex flex-wrap gap-2">
                  {userData.crops.map((crop) => (
                    <Badge key={crop} variant="secondary">
                      {crop}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity */}
        <div className="md:col-span-2 space-y-6">
          {/* Stats */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="text-center p-4 bg-muted rounded-md">
                  <p className="text-2xl font-bold">{userData.stats.questions}</p>
                  <p className="text-sm text-muted-foreground">Questions</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-md">
                  <p className="text-2xl font-bold">{userData.stats.answers}</p>
                  <p className="text-sm text-muted-foreground">Answers</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-md">
                  <p className="text-2xl font-bold">{userData.stats.events}</p>
                  <p className="text-sm text-muted-foreground">Events</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-md">
                  <p className="text-2xl font-bold">{userData.stats.resources}</p>
                  <p className="text-sm text-muted-foreground">Resources</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs for different activity types */}
          <Tabs defaultValue="questions">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="questions">Your Questions</TabsTrigger>
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
              <TabsTrigger value="saved">Saved Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="questions" className="mt-4">
              <Card>
                <CardContent className="p-4 space-y-4">
                  {userQuestions.map((question) => (
                    <div key={question.id} className="p-3 rounded-md border hover:bg-muted/50 transition-colors">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{question.title}</h4>
                        {question.verified && (
                          <Badge className="bg-agrigreen-500">Verified Answer</Badge>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-2">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="mr-4">{question.date}</span>
                        <MessageSquare className="w-4 h-4 mr-1" />
                        <span>{question.answers} answers</span>
                      </div>
                      <Button variant="ghost" size="sm" className="mt-2">
                        View Question
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-2">
                    View All Questions
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="events" className="mt-4">
              <Card>
                <CardContent className="p-4 space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-3 rounded-md border hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium">{event.title}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mt-2 gap-2">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center sm:ml-4">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <Button className="mt-2 bg-agrigreen-500 hover:bg-agrigreen-600">
                        Join Event
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-2">
                    View All Events
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="saved" className="mt-4">
              <Card>
                <CardContent className="p-4 space-y-4">
                  <div className="p-3 rounded-md border hover:bg-muted/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <FileText className="w-8 h-8 text-blue-500 shrink-0" />
                      <div>
                        <h4 className="font-medium">Sustainable Rice Farming Guide</h4>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive methods for eco-friendly rice cultivation
                        </p>
                        <Button variant="ghost" size="sm" className="mt-1 gap-1">
                          <Book className="w-4 h-4" />
                          Read
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-md border hover:bg-muted/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <FileText className="w-8 h-8 text-red-500 shrink-0" />
                      <div>
                        <h4 className="font-medium">Organic Pest Management</h4>
                        <p className="text-sm text-muted-foreground">
                          Natural pest control methods for chemical-free farming
                        </p>
                        <Button variant="ghost" size="sm" className="mt-1 gap-1">
                          <Book className="w-4 h-4" />
                          Read
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    View All Saved Resources
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageContainer>
  );
}


import React from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { CalendarView } from "@/components/events/CalendarView";
import { EventCard } from "@/components/events/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LanguageSelector } from "@/components/layout/LanguageSelector";

type EventType = "webinar" | "qa" | "consultation";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  expert: {
    name: string;
    expertise: string;
    avatar?: string;
  };
  isLive: boolean;
  isUpcoming: boolean;
  isFull: boolean;
  tags: string[];
  type: EventType;
}

// Sample events data
const events: Event[] = [
  {
    id: "1",
    title: "Modern Rice Cultivation Techniques",
    description:
      "Join agricultural experts to learn about the latest techniques in rice cultivation, improving yields, and reducing water usage.",
    date: "April 22, 2025",
    time: "10:00 AM",
    duration: "1.5 hours",
    expert: {
      name: "Dr. Rajesh Sharma",
      expertise: "Rice Cultivation",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    isLive: false,
    isUpcoming: true,
    isFull: false,
    tags: ["rice", "cultivation", "water-management"],
    type: "webinar",
  },
  {
    id: "2",
    title: "Pest Management Q&A Session",
    description:
      "Got pest problems? Bring your questions to this interactive Q&A session with pest control specialists.",
    date: "April 23, 2025",
    time: "2:00 PM",
    duration: "1 hour",
    expert: {
      name: "Dr. Anita Desai",
      expertise: "Pest Management",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    isLive: true,
    isUpcoming: false,
    isFull: false,
    tags: ["pests", "control", "organic"],
    type: "qa",
  },
  {
    id: "3",
    title: "1-on-1 Consultation: Crop Planning",
    description:
      "Book a personal consultation to discuss your farm's specific crop planning needs with an agricultural expert.",
    date: "April 25, 2025",
    time: "9:00 AM - 5:00 PM",
    duration: "30 min slots",
    expert: {
      name: "Vikram Patel",
      expertise: "Crop Planning",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    isLive: false,
    isUpcoming: true,
    isFull: false,
    tags: ["planning", "personalized", "crops"],
    type: "consultation",
  },
  {
    id: "4",
    title: "Organic Farming Methods",
    description:
      "Learn the principles and practices of organic farming to grow healthier crops and protect the environment.",
    date: "April 28, 2025",
    time: "11:00 AM",
    duration: "2 hours",
    expert: {
      name: "Dr. Maria Fernandez",
      expertise: "Organic Farming",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    isLive: false,
    isUpcoming: true,
    isFull: false,
    tags: ["organic", "sustainable", "certification"],
    type: "webinar",
  },
  {
    id: "5",
    title: "Climate-Resilient Agriculture",
    description:
      "Discover strategies to adapt your farming practices to changing climate conditions and extreme weather events.",
    date: "May 5, 2025",
    time: "3:00 PM",
    duration: "1.5 hours",
    expert: {
      name: "Dr. Sunil Mehta",
      expertise: "Climate Change Adaptation",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    isLive: false,
    isUpcoming: true,
    isFull: true,
    tags: ["climate", "resilience", "adaptation"],
    type: "webinar",
  },
];

export default function Events() {
  const [language, setLanguage] = React.useState("en");

  const handleRegister = (eventId: string) => {
    console.log(`Registered for event: ${eventId}`);
    // In a real app, this would handle registration logic
  };

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Expert Consultations & Events</h1>
        <LanguageSelector currentLanguage={language} onChange={setLanguage} />
      </div>

      <div className="mb-8">
        <CalendarView />
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="webinars">Webinars</TabsTrigger>
          <TabsTrigger value="qa">Q&A Sessions</TabsTrigger>
          <TabsTrigger value="consultations">Consultations</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} onRegister={handleRegister} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="webinars" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events
              .filter((event) => event.type === "webinar")
              .map((event) => (
                <EventCard key={event.id} event={event} onRegister={handleRegister} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="qa" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events
              .filter((event) => event.type === "qa")
              .map((event) => (
                <EventCard key={event.id} event={event} onRegister={handleRegister} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="consultations" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events
              .filter((event) => event.type === "consultation")
              .map((event) => (
                <EventCard key={event.id} event={event} onRegister={handleRegister} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}

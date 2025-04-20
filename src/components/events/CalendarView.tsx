
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Event {
  id: string;
  title: string;
  date: Date;
  type: "webinar" | "qa" | "consultation";
}

// Sample events data
const sampleEvents: Event[] = [
  {
    id: "1",
    title: "Rice Cultivation Techniques",
    date: new Date(2025, 3, 22), // April 22, 2025
    type: "webinar",
  },
  {
    id: "2",
    title: "Pest Management Q&A",
    date: new Date(2025, 3, 23), // April 23, 2025
    type: "qa",
  },
  {
    id: "3",
    title: "1-on-1 Expert Advice",
    date: new Date(2025, 3, 25), // April 25, 2025
    type: "consultation",
  },
  {
    id: "4",
    title: "Organic Farming Methods",
    date: new Date(2025, 3, 25), // April 25, 2025
    type: "webinar",
  },
];

export function CalendarView() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setSelectedDate(selectedDate || null);
  };
  
  // Filter events for the selected date
  const eventsOnSelectedDate = selectedDate
    ? sampleEvents.filter(
        (event) =>
          event.date.getDate() === selectedDate.getDate() &&
          event.date.getMonth() === selectedDate.getMonth() &&
          event.date.getFullYear() === selectedDate.getFullYear()
      )
    : [];
  
  // Function to get event badge color
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "webinar":
        return "bg-blue-500 hover:bg-blue-600";
      case "qa":
        return "bg-harvest-500 hover:bg-harvest-600";
      case "consultation":
        return "bg-earthbrown-500 hover:bg-earthbrown-600";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Event Calendar</CardTitle>
          <CardDescription>
            Upcoming webinars, Q&A sessions, and consultations
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            className="rounded-md border"
          />
        </CardContent>
      </Card>
      
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>
            {selectedDate
              ? `Events on ${selectedDate.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}`
              : "Select a date to see events"}
          </CardTitle>
          <CardDescription>
            {eventsOnSelectedDate.length > 0
              ? `${eventsOnSelectedDate.length} event${eventsOnSelectedDate.length > 1 ? "s" : ""} scheduled`
              : selectedDate ? "No events scheduled for this date" : "Click on a date in the calendar"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {eventsOnSelectedDate.length > 0 ? (
              eventsOnSelectedDate.map((event) => (
                <div
                  key={event.id}
                  className="p-3 rounded-md border bg-card hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium">{event.title}</h4>
                    <Badge className={getEventTypeColor(event.type)}>
                      {event.type === "webinar"
                        ? "Webinar"
                        : event.type === "qa"
                        ? "Q&A"
                        : "Consultation"}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {event.date.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </div>
                  <Button className="w-full mt-2 bg-agrigreen-500 hover:bg-agrigreen-600">
                    View Details
                  </Button>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-muted-foreground">
                {selectedDate
                  ? "No events scheduled for this date."
                  : "Select a date to view scheduled events."}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

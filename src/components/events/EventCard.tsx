
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: {
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
    type: "webinar" | "qa" | "consultation";
  };
  onRegister: (eventId: string) => void;
}

export function EventCard({ event, onRegister }: EventCardProps) {
  const getStatusBadge = () => {
    if (event.isLive) {
      return (
        <Badge className="bg-red-500 hover:bg-red-600">Live Now</Badge>
      );
    }
    if (event.isFull) {
      return (
        <Badge variant="outline" className="border-gray-500 text-gray-700 bg-gray-50">
          Fully Booked
        </Badge>
      );
    }
    if (event.isUpcoming) {
      return (
        <Badge className="bg-agrigreen-500 hover:bg-agrigreen-600">Upcoming</Badge>
      );
    }
    return null;
  };

  const getEventTypeColor = () => {
    switch (event.type) {
      case "webinar":
        return "border-blue-500 text-blue-700 bg-blue-50";
      case "qa":
        return "border-harvest-500 text-harvest-700 bg-harvest-50";
      case "consultation":
        return "border-earthbrown-500 text-earthbrown-700 bg-earthbrown-50";
      default:
        return "";
    }
  };

  const getEventTypeLabel = () => {
    switch (event.type) {
      case "webinar":
        return "Webinar";
      case "qa":
        return "Q&A Session";
      case "consultation":
        return "1-on-1 Consultation";
      default:
        return "Event";
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
      <CardContent className="p-0">
        <div className="relative p-4 pb-2">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium leading-tight flex-1 pr-2">{event.title}</h3>
            {getStatusBadge()}
          </div>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {event.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge 
              variant="outline" 
              className={cn("text-xs font-normal", getEventTypeColor())}
            >
              {getEventTypeLabel()}
            </Badge>
            {event.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
              <span>{event.time} ({event.duration})</span>
            </div>
            <div className="flex items-center text-sm">
              <User className="w-4 h-4 mr-2 text-muted-foreground" />
              <span>
                <span className="font-medium">{event.expert.name}</span>
                <span className="text-muted-foreground"> · {event.expert.expertise}</span>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button 
          className="w-full bg-agrigreen-500 hover:bg-agrigreen-600"
          disabled={event.isFull || !event.isUpcoming}
          onClick={() => onRegister(event.id)}
        >
          {event.isLive ? "Join Now" : event.isFull ? "Fully Booked" : "Register"}
        </Button>
      </CardFooter>
    </Card>
  );
}

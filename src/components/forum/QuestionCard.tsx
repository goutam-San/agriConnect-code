
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: {
    id: string;
    title: string;
    content: string;
    imageUrl?: string;
    author: {
      name: string;
      avatar?: string;
      type: "farmer" | "expert" | "researcher";
    };
    tags: string[];
    answersCount: number;
    likesCount: number;
    hasVerifiedAnswer: boolean;
    createdAt: string;
  };
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2 space-y-0">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src={question.author.avatar} alt={question.author.name} />
              <AvatarFallback className="bg-agrigreen-100 text-agrigreen-700">
                {question.author.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium leading-tight">{question.author.name}</div>
              <div className="text-xs text-muted-foreground">{question.createdAt}</div>
            </div>
          </div>
          <Badge
            variant="outline"
            className={cn(
              "ml-2",
              question.author.type === "farmer"
                ? "border-agrigreen-500 text-agrigreen-700 bg-agrigreen-50"
                : question.author.type === "expert"
                ? "border-earthbrown-500 text-earthbrown-700 bg-earthbrown-50"
                : "border-harvest-500 text-harvest-700 bg-harvest-50"
            )}
          >
            {question.author.type}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pb-2">
        <h3 className="text-lg font-medium leading-tight">{question.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{question.content}</p>
        {question.imageUrl && (
          <div className="mt-3 overflow-hidden rounded-md">
            <img
              src={question.imageUrl}
              alt="Question image"
              className="object-cover w-full h-48"
            />
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-4">
          {question.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-2 pb-3 border-t">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground h-8">
            <MessageSquare className="w-4 h-4" />
            <span>{question.answersCount}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground h-8">
            <ThumbsUp className="w-4 h-4" />
            <span>{question.likesCount}</span>
          </Button>
        </div>
        {question.hasVerifiedAnswer && (
          <Badge className="bg-agrigreen-500 hover:bg-agrigreen-600">
            <Check className="w-3 h-3 mr-1" />
            Verified Answer
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}

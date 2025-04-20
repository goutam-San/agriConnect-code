
import React from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { QuestionCard } from "@/components/forum/QuestionCard";
import { NewQuestionButton } from "@/components/forum/NewQuestionButton";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/layout/LanguageSelector";

type UserType = "farmer" | "expert" | "researcher";

interface Question {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  author: {
    name: string;
    avatar?: string;
    type: UserType;
  };
  tags: string[];
  answersCount: number;
  likesCount: number;
  hasVerifiedAnswer: boolean;
  createdAt: string;
}

// Sample questions data
const questions: Question[] = [
  {
    id: "1",
    title: "What's causing these yellow spots on my rice plants?",
    content: "I've noticed yellow spots developing on my rice plants over the past week. The plants are 30 days old. Is this a nutrient deficiency or a disease?",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    author: {
      name: "Rajesh Kumar",
      type: "farmer",
    },
    tags: ["rice", "disease", "yellow-spots"],
    answersCount: 3,
    likesCount: 5,
    hasVerifiedAnswer: true,
    createdAt: "2 days ago",
  },
  {
    id: "2",
    title: "Best irrigation method for wheat in dry climate?",
    content: "I'm growing wheat in a region with limited rainfall. What irrigation method would be most water-efficient while ensuring good yields?",
    author: {
      name: "Amina Patel",
      type: "farmer",
    },
    tags: ["wheat", "irrigation", "water-efficiency"],
    answersCount: 7,
    likesCount: 12,
    hasVerifiedAnswer: true,
    createdAt: "4 days ago",
  },
  {
    id: "3",
    title: "Organic pest control for tomato plants",
    content: "My tomato plants are being attacked by some kind of insect that's eating the leaves. I don't want to use chemical pesticides. Are there any effective organic solutions?",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    author: {
      name: "Dr. Sarah Johnson",
      type: "expert",
    },
    tags: ["tomato", "organic", "pest-control"],
    answersCount: 5,
    likesCount: 8,
    hasVerifiedAnswer: false,
    createdAt: "1 week ago",
  },
  {
    id: "4",
    title: "When is the best time to harvest corn?",
    content: "I'm growing sweet corn for the first time. How do I know when it's ready to harvest? Are there specific signs I should look for?",
    author: {
      name: "Miguel Fernandez",
      type: "researcher",
    },
    tags: ["corn", "harvest", "timing"],
    answersCount: 4,
    likesCount: 6,
    hasVerifiedAnswer: true,
    createdAt: "2 weeks ago",
  },
];

// Popular tags
const popularTags = ["rice", "wheat", "irrigation", "organic", "pest-control", "harvest", "fertilizer", "corn", "soil"];

export default function Forum() {
  const [language, setLanguage] = React.useState("en");

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Community Forum</h1>
        <LanguageSelector currentLanguage={language} onChange={setLanguage} />
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        {/* Main forum area */}
        <div className="flex-grow space-y-6">
          {/* Search and filter */}
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search questions..." className="pl-9" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>

          {/* Questions list */}
          <div className="space-y-4">
            {questions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        </div>

        {/* Sidebar for popular tags */}
        <div className="w-full md:w-64 space-y-4">
          <div className="p-4 border rounded-lg bg-card">
            <h2 className="font-medium mb-3">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <Badge key={tag} variant="secondary" className="cursor-pointer">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating button to ask a new question */}
      <NewQuestionButton />
    </PageContainer>
  );
}

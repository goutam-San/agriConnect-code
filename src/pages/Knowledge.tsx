
import React from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { ResourceCard } from "@/components/knowledge/ResourceCard";
import { ResourceFilters } from "@/components/knowledge/ResourceFilters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LanguageSelector } from "@/components/layout/LanguageSelector";

// Sample resources data
const resources = [
  {
    id: "1",
    title: "Sustainable Rice Farming Techniques",
    description: "A comprehensive guide to sustainable and eco-friendly rice cultivation methods for improved yields.",
    type: "pdf" as const,
    thumbnail: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    tags: ["rice", "sustainable", "eco-friendly"],
    language: "English",
    region: "South India",
    fileSize: "2.3 MB",
    downloadUrl: "#",
  },
  {
    id: "2",
    title: "Organic Pest Management",
    description: "Learn how to control pests using natural methods without harmful chemicals that can damage your crops.",
    type: "video" as const,
    thumbnail: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    tags: ["organic", "pest-control", "natural"],
    language: "Hindi",
    region: "North India",
    fileSize: "45 MB",
    downloadUrl: "#",
  },
  {
    id: "3",
    title: "Drip Irrigation Systems",
    description: "An illustrated guide to setting up water-efficient drip irrigation systems for different crops.",
    type: "infographic" as const,
    thumbnail: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    tags: ["irrigation", "water-saving", "technology"],
    language: "Telugu",
    region: "All Regions",
    fileSize: "1.5 MB",
    downloadUrl: "#",
  },
  {
    id: "4",
    title: "Soil Health Management",
    description: "Practical methods to test, maintain and improve soil health for better yields and sustainable farming.",
    type: "pdf" as const,
    tags: ["soil", "health", "maintenance"],
    language: "English",
    region: "All Regions",
    fileSize: "3.7 MB",
    downloadUrl: "#",
  },
  {
    id: "5",
    title: "Weather-Based Farming Decisions",
    description: "How to interpret weather patterns and make informed farming decisions to reduce crop losses.",
    type: "video" as const,
    tags: ["weather", "decision-making", "planning"],
    language: "Hindi",
    region: "North India",
    fileSize: "65 MB",
    downloadUrl: "#",
  },
  {
    id: "6",
    title: "Crop Rotation Benefits",
    description: "Visual explanation of crop rotation benefits and scheduling for soil health and pest management.",
    type: "infographic" as const,
    tags: ["crop-rotation", "planning", "soil-health"],
    language: "English",
    region: "All Regions",
    fileSize: "950 KB",
    downloadUrl: "#",
  },
];

export default function Knowledge() {
  const [language, setLanguage] = React.useState("en");

  return (
    <PageContainer>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Knowledge Hub</h1>
        <LanguageSelector currentLanguage={language} onChange={setLanguage} />
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="infographics">Infographics</TabsTrigger>
          </TabsList>
        </div>

        <ResourceFilters />

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="guides" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter((resource) => resource.type === "pdf")
              .map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter((resource) => resource.type === "video")
              .map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="infographics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter((resource) => resource.type === "infographic")
              .map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}

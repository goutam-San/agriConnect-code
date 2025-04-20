
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Book, File, Video, Download } from "lucide-react";

type ResourceType = "pdf" | "video" | "infographic";

interface ResourceCardProps {
  resource: {
    id: string;
    title: string;
    description: string;
    type: ResourceType;
    thumbnail?: string;
    tags: string[];
    language: string;
    region?: string;
    fileSize?: string;
    downloadUrl: string;
  };
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const getIcon = () => {
    switch (resource.type) {
      case "pdf":
        return <File className="w-6 h-6 text-earthbrown-500" />;
      case "video":
        return <Video className="w-6 h-6 text-earthbrown-500" />;
      case "infographic":
        return <Book className="w-6 h-6 text-earthbrown-500" />;
      default:
        return <File className="w-6 h-6 text-earthbrown-500" />;
    }
  };

  const getTypeLabel = () => {
    switch (resource.type) {
      case "pdf":
        return "PDF Guide";
      case "video":
        return "Video";
      case "infographic":
        return "Infographic";
      default:
        return "Resource";
    }
  };

  const getTypeColor = () => {
    switch (resource.type) {
      case "pdf":
        return "border-blue-500 text-blue-700 bg-blue-50";
      case "video":
        return "border-red-500 text-red-700 bg-red-50";
      case "infographic":
        return "border-harvest-500 text-harvest-700 bg-harvest-50";
      default:
        return "border-gray-500 text-gray-700 bg-gray-50";
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
      <div className="relative">
        {resource.thumbnail ? (
          <img
            src={resource.thumbnail}
            alt={resource.title}
            className="object-cover w-full h-40"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-40 bg-muted">
            {getIcon()}
          </div>
        )}
        <Badge
          variant="outline"
          className={cn("absolute top-2 right-2", getTypeColor())}
        >
          {getTypeLabel()}
        </Badge>
      </div>
      <CardContent className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-medium leading-tight">{resource.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {resource.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge variant="outline" className="text-xs font-normal">
            {resource.language}
          </Badge>
          {resource.region && (
            <Badge variant="outline" className="text-xs font-normal">
              {resource.region}
            </Badge>
          )}
          {resource.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto pt-4">
          {resource.fileSize && (
            <span className="text-xs text-muted-foreground">{resource.fileSize}</span>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-auto hover:bg-transparent hover:text-agrigreen-600"
            asChild
          >
            <a href={resource.downloadUrl} download>
              <Download className="w-4 h-4 mr-1" />
              <span>Download</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

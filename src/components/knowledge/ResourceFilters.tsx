
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

// Sample filter options
const crops = [
  "Rice", "Wheat", "Corn", "Soybean", "Cotton", "Vegetables", "Fruits", "Pulses"
];

const languages = [
  "English", "Hindi", "Telugu", "Tamil", "Bengali", "Marathi"
];

const regions = [
  "North India", "South India", "East India", "West India", "Central India", "Northeast India"
];

const resourceTypes = [
  "PDF Guide", "Video", "Infographic"
];

export function ResourceFilters() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-grow">
          <Search className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            className="pl-9"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filter Resources</SheetTitle>
              <SheetDescription>
                Narrow down resources by selecting filters
              </SheetDescription>
            </SheetHeader>
            
            <div className="py-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="crops">
                  <AccordionTrigger className="py-2">Crops</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 gap-2">
                      {crops.map((crop) => (
                        <div key={crop} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`crop-${crop}`} 
                            onCheckedChange={(checked) => {
                              if (checked) addFilter(crop);
                              else removeFilter(crop);
                            }}
                          />
                          <Label 
                            htmlFor={`crop-${crop}`}
                            className="text-sm font-normal"
                          >
                            {crop}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="languages">
                  <AccordionTrigger className="py-2">Languages</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 gap-2">
                      {languages.map((language) => (
                        <div key={language} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`lang-${language}`}
                            onCheckedChange={(checked) => {
                              if (checked) addFilter(language);
                              else removeFilter(language);
                            }}
                          />
                          <Label 
                            htmlFor={`lang-${language}`}
                            className="text-sm font-normal"
                          >
                            {language}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="regions">
                  <AccordionTrigger className="py-2">Regions</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 gap-2">
                      {regions.map((region) => (
                        <div key={region} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`region-${region}`}
                            onCheckedChange={(checked) => {
                              if (checked) addFilter(region);
                              else removeFilter(region);
                            }}
                          />
                          <Label 
                            htmlFor={`region-${region}`}
                            className="text-sm font-normal"
                          >
                            {region}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="types">
                  <AccordionTrigger className="py-2">Resource Types</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 gap-2">
                      {resourceTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`type-${type}`}
                            onCheckedChange={(checked) => {
                              if (checked) addFilter(type);
                              else removeFilter(type);
                            }}
                          />
                          <Label 
                            htmlFor={`type-${type}`}
                            className="text-sm font-normal"
                          >
                            {type}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Apply Filters</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {activeFilters.map((filter) => (
            <Badge key={filter} variant="secondary" className="gap-1">
              {filter}
              <button 
                className="ml-1 rounded-full text-muted-foreground hover:text-foreground" 
                onClick={() => removeFilter(filter)}
              >
                ×
              </button>
            </Badge>
          ))}
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 px-2 text-xs" 
            onClick={() => setActiveFilters([])}
          >
            Clear all
          </Button>
        </div>
      )}
      
      <Separator />
    </div>
  );
}

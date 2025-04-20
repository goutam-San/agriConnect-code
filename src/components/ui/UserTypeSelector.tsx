
import React from "react";
import { Check, User, Users, Book } from "lucide-react";
import { cn } from "@/lib/utils";

type UserType = "farmer" | "expert" | "researcher";

type UserTypeSelectorProps = {
  value: UserType;
  onChange: (type: UserType) => void;
};

export function UserTypeSelector({ value, onChange }: UserTypeSelectorProps) {
  const options = [
    {
      id: "farmer",
      name: "Farmer",
      description: "I grow crops or raise livestock",
      icon: User,
    },
    {
      id: "expert",
      name: "Expert",
      description: "I provide agricultural advice",
      icon: Users,
    },
    {
      id: "researcher",
      name: "Researcher",
      description: "I study agricultural science",
      icon: Book,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {options.map((option) => {
        const isSelected = value === option.id;
        return (
          <button
            key={option.id}
            type="button"
            className={cn(
              "flex flex-col items-center justify-center p-4 rounded-lg border border-border text-center transition-all relative",
              isSelected
                ? "border-agrigreen-500 bg-agrigreen-50 shadow-sm"
                : "bg-white hover:border-earthbrown-200"
            )}
            onClick={() => onChange(option.id as UserType)}
          >
            {isSelected && (
              <div className="absolute top-2 right-2">
                <Check className="w-5 h-5 text-agrigreen-500" />
              </div>
            )}
            <option.icon
              className={cn(
                "w-12 h-12 mb-3",
                isSelected ? "text-agrigreen-500" : "text-earthbrown-300"
              )}
            />
            <h3 className="text-lg font-medium">{option.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{option.description}</p>
          </button>
        );
      })}
    </div>
  );
}

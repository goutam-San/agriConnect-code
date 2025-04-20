
import React from "react";
import { Check, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी (Hindi)" },
  { code: "te", name: "తెలుగు (Telugu)" },
];

type LanguageSelectorProps = {
  currentLanguage: string;
  onChange: (languageCode: string) => void;
};

export function LanguageSelector({ currentLanguage, onChange }: LanguageSelectorProps) {
  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 h-9">
          <Globe className="w-4 h-4" />
          <span>{currentLang.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className="flex items-center justify-between"
            onClick={() => onChange(language.code)}
          >
            <span>{language.name}</span>
            {language.code === currentLanguage && <Check className="w-4 h-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

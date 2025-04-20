
import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Forum", path: "/forum" },
  { name: "Knowledge", path: "/knowledge" },
  { name: "Events", path: "/events" },
  { name: "Profile", path: "/profile" },
];

export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="w-8 h-8 text-agrigreen-500" />
          <span className="text-xl font-bold text-agrigreen-600">AgriConnect</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="px-2 py-3 text-lg font-medium rounded-md hover:bg-muted"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-base font-medium transition-colors hover:text-agrigreen-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

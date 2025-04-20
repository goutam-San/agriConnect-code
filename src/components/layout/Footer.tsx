
import React from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-6 mt-auto bg-muted">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <Leaf className="w-6 h-6 text-agrigreen-500" />
            <span className="text-sm font-medium">AgriConnect</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </nav>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AgriConnect. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

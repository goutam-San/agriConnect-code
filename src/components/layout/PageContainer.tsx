
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type PageContainerProps = {
  children: React.ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-6 mx-auto md:px-6 md:py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

// src/layouts/MainLayout.tsx
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background  transition-colors duration-300 bg-gradient-to-br from-[#fefce8] via-[#f0fdf4] to-[#ecfdf5] dark:from-[#1f2937] dark:via-[#111827] dark:to-[#0f172a] text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t bg-background/80 backdrop-blur-lg">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;

import { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Home,
  Map,
  Camera,
  Truck,
  Trophy,
  User,
  Menu,
  X,
} from "lucide-react";

import { Dashboard } from "./components/Dashboard";
import { MapView } from "./components/Mapview";
import { AIScanner } from "./components/AIScanner";
import { Worker } from "./components/Worker";
import { Leaderboard } from "./components/Leaderboard";
import { Profile } from "./components/Profile";

type View =
  | "dashboard"
  | "map"
  | "scanner"
  | "worker"
  | "leaderboard"
  | "profile";

export default function App() {
  const [activeView, setActiveView] = useState<View>("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "map", label: "Map View", icon: Map },
    { id: "scanner", label: "AI Scanner", icon: Camera },
    { id: "worker", label: "Workers", icon: Truck },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy },
    { id: "profile", label: "Profile", icon: User },
  ];

  const renderActiveView = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "map":
        return <MapView />;
      case "scanner":
        return <AIScanner />;
      case "worker":
        return <Worker />;
      case "leaderboard":
        return <Leaderboard />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 py-3 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">LiveWaste</h1>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeView === item.id ? "default" : "ghost"}
                onClick={() => setActiveView(item.id as View)}
              >
                <Icon className="w-4 h-4 mr-1" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </header>

      {/* MOBILE NAV */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  setActiveView(item.id as View);
                  setIsMobileMenuOpen(false);
                }}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="p-4">{renderActiveView()}</main>
    </div>
  );
}
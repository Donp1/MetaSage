// src/components/Header.tsx
import { ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import WalletConnectButton from "@/components/WalletConnectButton";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: Dispatch<
    SetStateAction<"overview" | "tokenomics" | "roadmap" | "whitepaper">
  >;
}

export default function Header({
  activeSection,
  setActiveSection,
}: HeaderProps) {
  type Section = "overview" | "tokenomics" | "roadmap" | "whitepaper";

  const sections: Section[] = [
    "overview",
    "tokenomics",
    "roadmap",
    "whitepaper",
  ];
  return (
    <header className="bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://pbs.twimg.com/profile_images/1925995723666939905/XPiuRVeK.jpg"
              alt="MetaSage AI Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h1 className="text-xl font-bold">MetaSage AI</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`py-2 px-1 font-medium capitalize ${
                  activeSection === section
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-gray-100"
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          <WalletConnectButton />
        </div>
      </div>
    </header>
  );
}

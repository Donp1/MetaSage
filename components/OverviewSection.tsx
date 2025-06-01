"use client";
// src/components/sections/OverviewSection.tsx
import { useState } from "react";
import {
  Calendar,
  Home,
  Mail,
  Play,
  Shield,
  Star,
  Twitter,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InfoBox from "./InfoBox";
import WaitlistModal from "./WaitList";

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "SageChain",
    description: "Decentralized blockchain for AI operations",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "AI Agents",
    description: "Autonomous agents that collaborate securely",
  },
  {
    icon: <Play className="w-6 h-6" />,
    title: "MetaStudio",
    description: "Development environment for AI models",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "AI Wallet",
    description: "Secure management of AI assets",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Decentralized Learning",
    description: "Privacy-preserving ML framework",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Token Utility",
    description: "Native token for governance",
  },
];

export default function OverviewSection() {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [email, setEmail] = useState("");
  const [xUsername, setXUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setXUsername("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  const [open, setOpen] = useState(false);
  const [waitOpen, setWaitOpen] = useState(false);

  return (
    <>
      <InfoBox open={open} setOpen={setOpen} />
      <WaitlistModal open={waitOpen} setOpen={setWaitOpen} />
      <div className="space-y-16">
        {/* Hero section */}
        <div className="text-center py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Decentralized AI Infrastructure
          </h1>
          <section className="container mx-auto px-4 py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-500 mb-4">
              MetaSage AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              The decentralized AI platform of the future
            </p>
            <div className="flex justify-center gap-4">
              <Button
                className="cursor-pointer"
                size="lg"
                onClick={() => setOpen(true)}
              >
                Learn More
              </Button>
              <Button
                onClick={() => setWaitOpen(true)}
                variant="outline"
                size="lg"
              >
                Join Waitlist
              </Button>
            </div>
          </section>
        </div>

        {/* Features section */}
        <div className="">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-blue-400/50 transition-colors"
              >
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-2 rounded-full bg-blue-50 text-blue-600">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

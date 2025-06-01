"use client";
// src/components/sections/RoadmapSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Check, Clock, Flag } from "lucide-react";

const milestones = [
  {
    quarter: "Q2 2025",
    icon: <Flag className="w-5 h-5 text-blue-500" />,
    items: [
      "SageChain testnet launch",
      "Core AI agent framework development",
      "Initial MetaStudio alpha release",
    ],
    status: "completed",
  },
  {
    quarter: "Q3 2025",
    icon: <Clock className="w-5 h-5 text-yellow-500" />,
    items: [
      "Mainnet launch with staking",
      "AI Agent marketplace beta",
      "Decentralized learning protocol v1",
    ],
    status: "current",
  },
  {
    quarter: "Q1 2026",
    icon: <Calendar className="w-5 h-5 text-gray-500" />,
    items: [
      "Full ecosystem integration",
      "Cross-chain interoperability",
      "Enterprise adoption program",
    ],
    status: "upcoming",
  },
];

export default function RoadmapSection() {
  return (
    <div className="py-12 md:py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Development Roadmap
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-700 -translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center md:items-start gap-6"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10 ${
                    milestone.status === "completed"
                      ? "bg-green-500"
                      : milestone.status === "current"
                      ? "bg-blue-500 animate-pulse"
                      : "bg-gray-500"
                  }`}
                ></div>

                {/* Date/Quarter */}
                <div
                  className={`w-32 flex-shrink-0 text-center md:text-right ${
                    index % 2 === 0 ? "md:order-1" : "md:order-3"
                  }`}
                >
                  <div className="inline-flex items-center gap-2">
                    {milestone.icon}
                    <span className="font-bold text-white">
                      {milestone.quarter}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:order-3" : "md:order-1"
                  }`}
                >
                  <Card
                    className={`bg-gray-800 border-gray-700 transition-all hover:border-${
                      milestone.status === "completed"
                        ? "green"
                        : milestone.status === "current"
                        ? "blue"
                        : "gray"
                    }-500`}
                  >
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        {milestone.status === "completed" && (
                          <Check className="w-5 h-5 text-green-500" />
                        )}
                        {milestone.quarter} Milestones
                        {milestone.status === "current" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-100">
                            In Progress
                          </span>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {milestone.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span
                              className={`flex-shrink-0 mt-1 mr-2 ${
                                milestone.status === "completed"
                                  ? "text-green-500"
                                  : milestone.status === "current"
                                  ? "text-blue-500"
                                  : "text-gray-500"
                              }`}
                            >
                              {milestone.status === "completed" ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <span className="block w-2 h-2 rounded-full bg-current"></span>
                              )}
                            </span>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div
                  className={`hidden md:block flex-1 ${
                    index % 2 === 0 ? "md:order-2" : "md:order-2"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-300">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-gray-300">In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <span className="text-gray-300">Upcoming</span>
          </div>
        </div>
      </div>
    </div>
  );
}

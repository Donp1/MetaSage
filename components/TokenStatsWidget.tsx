"use client";
// src/components/TokenStatsWidget.tsx
import { ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface TokenStatsWidgetProps {
  stats: {
    price: string;
    marketCap: string;
    holders: string;
    volume: string;
    change: string;
  };
}

export default function TokenStatsWidget({ stats }: TokenStatsWidgetProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="bg-gray-800 border-gray-700 w-72">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold">$SAGE</CardTitle>
            <span
              className={`text-sm px-2 py-1 rounded-full ${
                stats.change.startsWith("+")
                  ? "bg-green-900/50 text-green-400"
                  : "bg-red-900/50 text-red-400"
              }`}
            >
              {stats.change}
            </span>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-sm text-gray-400">Price</p>
              <p className="font-medium">{stats.price}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Market Cap</p>
              <p className="font-medium">{stats.marketCap}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Holders</p>
              <p className="font-medium">{stats.holders}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">24h Volume</p>
              <p className="font-medium">{stats.volume}</p>
            </div>
          </div>
          <Button
            variant="link"
            size="sm"
            className="mt-2 p-0 h-auto text-blue-400 hover:text-blue-300"
          >
            View on Explorer <ArrowUpRight className="ml-1 h-3 w-3" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

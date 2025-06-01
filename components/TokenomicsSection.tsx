"use client";
// src/components/sections/TokenomicsSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
  "#FFC658",
];

const tokenomicsData = [
  { name: "Community Incentives", value: 25 },
  { name: "Team & Founders", value: 15 },
  { name: "Investors", value: 15 },
  { name: "Ecosystem Development", value: 20 },
  { name: "Treasury", value: 10 },
  { name: "Partnerships", value: 5 },
  { name: "Liquidity", value: 10 },
];

const vestingData = [
  {
    category: "Community Incentives",
    vesting: "Linear release over 48 months",
  },
  {
    category: "Team & Founders",
    vesting: "12-month cliff, then 24-month vesting",
  },
  {
    category: "Investors (Seed/Private)",
    vesting: "6-month cliff, then linear over 18 months",
  },
  {
    category: "Ecosystem Development",
    vesting: "Strategic release over 36 months",
  },
  { category: "Treasury", vesting: "DAO-governed, unlocked" },
  {
    category: "Partnerships & Advisors",
    vesting: "3-month cliff, 12-month vesting",
  },
  {
    category: "Liquidity & Exchanges",
    vesting: "30% at TGE, rest unlocked over 12 months",
  },
];

export default function TokenomicsSection() {
  return (
    <div className="py-12 md:py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Tokenomics Overview
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Token Allocation Pie Chart */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Token Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tokenomicsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {tokenomicsData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number) => [`${value}%`, "Allocation"]}
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        borderColor: "#374151",
                        borderRadius: "0.5rem",
                        color: "#FFFFFF",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Vesting Schedule */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Vesting Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="px-4 py-3 text-left font-medium text-white">
                        Category
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-white">
                        Vesting Period
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {vestingData.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-700 hover:bg-gray-700/50"
                      >
                        <td className="px-4 py-3 text-white">
                          {item.category}
                        </td>
                        <td className="px-4 py-3 text-gray-400">
                          {item.vesting}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Token Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Total Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-white">
                1,000,000,000 $SAGE
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">
                Initial Circulating Supply
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-white">~12-15% at TGE</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Token Type</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-white">ERC-20 / SPL</p>
              <p className="text-gray-400 mt-1">Multi-chain compatible</p>
            </CardContent>
          </Card>
        </div>

        {/* Token Utility */}
        <Card className="bg-gray-800 border-gray-700 mt-8">
          <CardHeader>
            <CardTitle className="text-white">Token Utility</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-700/50 rounded-lg">
                <h3 className="font-semibold text-blue-400">Governance</h3>
                <p className="text-gray-400 mt-1">
                  Vote on protocol upgrades and parameter changes
                </p>
              </div>
              <div className="p-4 bg-gray-700/50 rounded-lg">
                <h3 className="font-semibold text-blue-400">Staking</h3>
                <p className="text-gray-400 mt-1">
                  Earn rewards by securing the network
                </p>
              </div>
              <div className="p-4 bg-gray-700/50 rounded-lg">
                <h3 className="font-semibold text-blue-400">Payments</h3>
                <p className="text-gray-400 mt-1">
                  Pay for AI services and computational resources
                </p>
              </div>
              <div className="p-4 bg-gray-700/50 rounded-lg">
                <h3 className="font-semibold text-blue-400">Access</h3>
                <p className="text-gray-400 mt-1">
                  Required to deploy and run AI agents
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

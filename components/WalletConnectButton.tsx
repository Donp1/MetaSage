"use client";
// src/components/WalletConnectButton.tsx
import { useState } from "react";
import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";

declare global {
  interface Window {
    phantom?: {
      solana?: {
        isPhantom: boolean;
        connect: (options?: {
          onlyIfTrusted: boolean;
        }) => Promise<{ publicKey: string }>;
        disconnect: () => Promise<void>;
        publicKey?: { toString: () => string };
      };
    };
  }
}

export default function WalletConnectButton() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [showWalletOptions, setShowWalletOptions] = useState(false);

  const connectPhantom = async () => {
    if (window.phantom?.solana?.isPhantom) {
      try {
        const response = await window.phantom.solana.connect();
        setWalletAddress(response.publicKey.toString());
        setShowWalletOptions(false);
      } catch (error) {
        console.error("Failed to connect Phantom wallet:", error);
      }
    } else {
      window.open("https://phantom.app/", "_blank");
    }
  };

  const connectWalletConnect = () => {
    // Simulate WalletConnect connection
    setWalletAddress("0x742d35Cc6634C0532925a3b844Bc454e4438f44e");
    setShowWalletOptions(false);
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  if (walletAddress) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
          {formatWalletAddress(walletAddress)}
        </span>
        <Button
          variant="outline"
          size="sm"
          className="bg-gray-700 hover:bg-gray-600"
          onClick={disconnectWallet}
        >
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        className="bg-gray-700 hover:bg-gray-600 flex items-center"
        onClick={() => setShowWalletOptions(!showWalletOptions)}
      >
        Connect Wallet
        <ChevronDown
          className={`ml-2 h-4 w-4 transition-transform ${
            showWalletOptions ? "rotate-180" : ""
          }`}
        />
      </Button>

      {showWalletOptions && (
        <div className="absolute right-0 mt-1 w-56 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10">
          <div className="py-1">
            <button
              onClick={connectPhantom}
              className="flex items-center w-full px-4 py-2 text-left text-sm hover:bg-gray-700"
            >
              <img
                src="https://phantom.app/favicon.ico"
                alt="Phantom"
                className="w-5 h-5 mr-2"
              />
              Phantom Wallet
            </button>
            <button
              onClick={connectWalletConnect}
              className="flex items-center w-full px-4 py-2 text-left text-sm hover:bg-gray-700"
            >
              <img
                src="https://walletconnect.com/walletconnect-logo.png"
                alt="WalletConnect"
                className="w-5 h-5 mr-2"
              />
              WalletConnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

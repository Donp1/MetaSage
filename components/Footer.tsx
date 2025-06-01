// src/components/Footer.tsx
import { Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8 border-t border-gray-700 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img
              src="https://pbs.twimg.com/profile_images/1925995723666939905/XPiuRVeK.jpg"
              alt="MetaSage AI Logo"
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-gray-400">
              © 2024 MetaSage AI. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/metasageai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

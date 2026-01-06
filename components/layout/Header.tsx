import React, { FC } from "react";
import { Search, User, LogIn } from "lucide-react";
import { WiFire } from "react-icons/wi";

// Define the type for the accommodation categories
interface AccommodationType {
  name: string;
  slug: string;
}

// Define the array of accommodation types
const accommodationTypes: AccommodationType[] = [
  { name: "Rooms", slug: "rooms" },
  { name: "Mansion", slug: "mansion" },
  { name: "Countryside", slug: "countryside" },
  { name: "Apartments", slug: "apartments" },
  { name: "Bungalows", slug: "bungalows" },
];

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="bg-blue-800 text-white shadow-lg sticky top-0 z-50">
      {/* Top Section: Logo, Search Bar, Auth Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center space-x-6">
          {/* 1. Logo Section */}
          <div className="flex items-center space-x-2 text-2xl font-bold tracking-tight cursor-pointer">
            <WiFire className="w-10 h-10" />
            BookNext
          </div>

          {/* 2. Search Bar Section (Flex-grow to occupy space) */}
          <div className="flex flex-1 max-w-xl">
            <input
              type="text"
              placeholder="Search destinations, properties..."
              className="w-full p-3 text-gray-800 rounded-l-lg border-2 border-r-0 border-blue-600 focus:outline-none focus:border-blue-500 transition duration-150"
            />
            <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-r-lg transition duration-150">
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>

          {/* 3. Sign In / Sign Up Section */}
          <div className="flex items-center space-x-3">
            <button className="flex items-center px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-800 transition duration-150 text-sm font-medium">
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 rounded-lg border border-blue-600 hover:bg-blue-500 transition duration-150 text-sm font-medium">
              <User className="w-4 h-4 mr-2" />
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* --- Divider --- */}
      <div className="border-t border-blue-700/50"></div>

      {/* Bottom Section: Accommodation Types Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex space-x-8 py-3 overflow-x-auto whitespace-nowrap">
          {accommodationTypes.map((type) => (
            <li key={type.slug}>
              <a
                href={`/accommodations/${type.slug}`}
                className="block text-sm font-semibold p-2 rounded-full hover:bg-blue-700 transition duration-150"
              >
                {type.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

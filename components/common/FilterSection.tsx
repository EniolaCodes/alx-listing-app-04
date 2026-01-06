import React, { FC, useState } from "react";
import { Filter, Star, CheckSquare, Key, MapPin } from "lucide-react";
import Pill from "./Pill"; // Import the new Pill component

// Define the structure for a filter
interface FilterOption {
  id: string;
  name: string;
  icon: React.ElementType; // Type for the icon component
}

// Predefined set of filters
const predefinedFilters: FilterOption[] = [
  { id: "top_villa", name: "Top Villa", icon: Star },
  { id: "self_checkin", name: "Self Check-in", icon: Key },
  { id: "pool", name: "Has Pool", icon: CheckSquare },
  { id: "beachfront", name: "Beachfront", icon: MapPin },
  { id: "free_cancellation", name: "Free Cancellation", icon: Filter },
];

const FilterSection: FC = () => {
  // State to hold the currently active filters (array of ids)
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  /**
   * Handles toggling a filter's active state
   * @param filterId The unique ID of the filter being toggled
   */
  const handleFilterToggle = (filterId: string) => {
    setActiveFilters((prevFilters) => {
      // Check if the filter is already active
      if (prevFilters.includes(filterId)) {
        // If active, remove it (deactivate)
        return prevFilters.filter((id) => id !== filterId);
      } else {
        // If not active, add it (activate)
        return [...prevFilters, filterId];
      }
    });
  };

  return (
    <section className="bg-white border-b border-gray-200 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <span className="text-gray-600 font-medium mr-4 flex-shrink-0">
            <Filter className="w-5 h-5 inline-block mr-1" />
            Quick Filters:
          </span>

          {/* Map over the predefined filters and render a Pill for each */}
          {predefinedFilters.map((filter) => (
            <Pill
              key={filter.id}
              label={filter.name}
              icon={filter.icon}
              isActive={activeFilters.includes(filter.id)}
              onClick={() => handleFilterToggle(filter.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterSection;

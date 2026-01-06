import React, { FC } from "react";

// Define the props for the Pill component
interface PillProps {
  label: string;
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void; // Function to call when the pill is clicked
}

const Pill: FC<PillProps> = ({
  label,
  icon: IconComponent,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center px-4 py-2 rounded-full text-sm font-medium 
        transition duration-200 ease-in-out whitespace-nowrap flex-shrink-0
        ${
          isActive
            ? "bg-blue-600 text-white shadow-md" // Active state styles
            : "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300" // Inactive state styles
        }
      `}
    >
      <IconComponent className="w-4 h-4 mr-2" />
      {label}
    </button>
  );
};

export default Pill;

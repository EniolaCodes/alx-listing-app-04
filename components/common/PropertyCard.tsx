import React, { FC } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Button from "./Button";

// Define a type for the component's props
interface PropertyCardProps {
  property: (typeof PROPERTYLISTINGSAMPLE)[number];
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer border border-gray-100">
      {/* Property Image */}
      <div className="relative h-48 w-full">{property.image}</div>

      {/* Property Details */}
      <div className="p-4 space-y-2">
        {/* Name and Rating */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight pr-2">
            {property.name}
          </h3>
          <div className="flex items-center text-sm font-medium text-yellow-600 flex-shrink-0">
            <Star className="w-4 h-4 mr-1 fill-yellow-500 stroke-yellow-500" />
            {property.rating.toFixed(1)}
          </div>
        </div>

        {/* Price */}
        <p className="text-xl font-bold text-blue-600">
          {property.price}
          <span className="text-sm font-normal text-gray-500 ml-1">
            {" "}
            / night
          </span>
        </p>

        {/* Action Button */}
        <Button
          variant="secondary"
          size="md"
          label="View Details"
          className="w-full mt-2"
        />
      </div>
    </div>
  );
};

export default PropertyCard;

// components/ListingSection.tsx

import React, { FC } from "react";
import PropertyCard from "./PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const ListingSection: FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Featured Listings
        </h2>

        {/* Property Grid: 4 columns on large screens, 2 on medium, 1 on small */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mapping over the sample data */}
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Fallback for no data */}
        {PROPERTYLISTINGSAMPLE.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No properties found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
};

export default ListingSection;

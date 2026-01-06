// components/property/PropertyDetail.tsx
import React from "react";

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
}

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-lg">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <p className="text-gray-600 mb-2">📍 {property.location}</p>{" "}
      <p className="text-gray-700 mb-6">{property.description}</p>
      <p className="text-2xl font-semibold text-green-600">
        ${property.price.toLocaleString()}
      </p>
    </div>
  );
};

export default PropertyDetail;

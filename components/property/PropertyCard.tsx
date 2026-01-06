import React from "react";

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-gray-700 mb-4">{property.description}</p>
      <p className="text-lg font-bold text-green-600">
        ${property.price.toLocaleString()}
      </p>
    </div>
  );
};

export default PropertyCard;

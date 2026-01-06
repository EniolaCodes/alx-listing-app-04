import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const properties = [
    {
      id: "1",
      title: "Modern Apartment",
      description: "A beautiful apartment in the city center.",
      price: 250000,
      imageUrl: "https://via.placeholder.com/400x250",
      location: "Lagos, Nigeria",
    },
    {
      id: "2",
      title: "Cozy Bungalow",
      description: "Perfect for a small family.",
      price: 180000,
      imageUrl: "https://via.placeholder.com/400x250",
      location: "Abuja, Nigeria",
    },
    {
      id: "3",
      title: "Modern Apartment",
      description: "A beautiful apartment in the city center.",
      price: 350000,
      imageUrl: "https://via.placeholder.com/400x250",
      location: "Kano, Nigeria",
    },
    {
      id: "4",
      title: "Cozy Bungalow",
      description: "Perfect for a small family.",
      price: 150000,
      imageUrl: "https://via.placeholder.com/400x250",
      location: "Ogun, Nigeria",
    },
  ];

  res.status(200).json(properties);
}

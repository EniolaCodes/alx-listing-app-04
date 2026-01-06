import type { NextApiRequest, NextApiResponse } from "next";

const reviewsData: Record<string, any[]> = {
  "1": [
    {
      id: "r1",
      author: "Jane Doe",
      rating: 5,
      comment: "Amazing apartment, very clean!",
    },
    {
      id: "r2",
      author: "John Smith",
      rating: 4,
      comment: "Great location, but a bit noisy.",
    },
  ],
  "2": [
    {
      id: "r3",
      author: "Mary Johnson",
      rating: 5,
      comment: "Perfect bungalow for my family.",
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const reviews = reviewsData[id as string] || [];

  res.status(200).json(reviews);
}

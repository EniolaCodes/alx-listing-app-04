export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  loading?: boolean;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    street: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
}

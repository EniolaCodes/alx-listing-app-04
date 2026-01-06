import { CardProps } from "@/interfaces";

const Card = ({
  title,
  description,
  image,
  onClick,
  className,
  children,
}: CardProps) => {
  return (
    <div
      className={[
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        onClick && "cursor-pointer hover:shadow-md transition-shadow",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
    >
      {image && (
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default Card;

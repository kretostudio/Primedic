type IconName =
  | "briefcase"
  | "home"
  | "cart"
  | "basketball"
  | "book"
  | "pin"
  | "plane"
  | "music";

const iconSources: Record<IconName, string> = {
  briefcase: "/images/use-cases/briefcase.svg",
  home: "/images/use-cases/home.svg",
  cart: "/images/use-cases/cart.svg",
  basketball: "/images/use-cases/basketball.svg",
  book: "/images/use-cases/book.svg",
  pin: "/images/use-cases/pin.svg",
  music: "/images/use-cases/music.svg",
  plane: "/images/use-cases/pin.svg",
};

export function UseCaseIcon({
  name,
  className = "h-[45px] w-[45px]",
}: {
  name: IconName | string;
  className?: string;
}) {
  const src = iconSources[name as IconName] ?? iconSources.briefcase;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" aria-hidden className={className} />
  );
}

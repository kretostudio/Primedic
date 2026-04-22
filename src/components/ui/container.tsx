import { cn } from "@/lib/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: "default" | "wide";
};

export function Container({
  width = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-8",
        width === "wide" ? "max-w-[1520px]" : "max-w-[1200px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

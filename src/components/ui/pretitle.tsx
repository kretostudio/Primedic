import { cn } from "@/lib/cn";

export function Pretitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-[36px] items-center justify-center rounded-[38px] border border-[#9f2322] bg-white px-5 text-[17px] font-semibold leading-none text-black md:text-[19px]",
        className,
      )}
    >
      {children}
    </span>
  );
}

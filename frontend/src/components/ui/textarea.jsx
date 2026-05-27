import { cn } from "./utils";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500",
        className
      )}
      {...props}
    />
  );
}

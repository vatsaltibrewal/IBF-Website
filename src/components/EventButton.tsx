import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

export default function EventButton() {
  return (
    <Link
      href="/events"
      className="z-10 flex items-center justify-center"
    >
      <div
        className={cn(
          "group relative flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium",
          "shadow-[inset_0_-8px_10px_#007cf01f]",
          "transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#007cf03f]"
        )}
      >
        <span
          className={cn(
            "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#007CF0]/50 via-[#00DFD8]/50 to-[#007CF0]/50 bg-[length:300%_100%] p-[1px]"
          )}
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "subtract",
          }}
        />

        🎉
        <hr className="mx-2 h-4 w-px shrink-0 bg-white/20" />
        <AnimatedGradientText colorFrom="#007CF0" colorTo="#00DFD8">
          View Events Happening
        </AnimatedGradientText>
        <ChevronRight className="ml-1 h-4 w-4 stroke-gray-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
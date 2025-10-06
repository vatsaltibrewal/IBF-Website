import InteractiveGlobe from "@/components/InteractiveGlobe";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import EventButton from "@/components/EventButton";

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="container mx-auto grid h-full items-center px-4 md:grid-cols-2">
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Indian{" "}
            <LineShadowText
              shadowColor="#ffffff"
              className="text-white"
            >
              Blockchain
            </LineShadowText>{" "}
            Fraternity
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-gray-400 md:mx-0 md:text-xl">
            Fostering the future of Web3 through collaboration, innovation, and
            education.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <EventButton />
          </div>

        </div>
        <div className="absolute top-0 left-0 h-full w-full opacity-30 md:relative md:opacity-100">
          <InteractiveGlobe />
        </div>
      </div>
    </main>
  );
}
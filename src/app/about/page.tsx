import { Highlighter } from "@/components/magicui/highlighter";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full px-4 pt-28 pb-16 md:px-8">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="mb-16 text-center text-5xl font-bold text-white md:text-6xl">
          <Highlighter
            action="underline"
            color="#007CF0"
            strokeWidth={4}
            animationDuration={1000}
          >
            What is IBF?
          </Highlighter>
        </h1>
        <Terminal className="max-w-5xl bg-black/50 backdrop-blur-sm">
          <div className="flex gap-2">
            <span className="text-green-400">$</span>
            <TypingAnimation className="text-gray-300">
              ibf --info
            </TypingAnimation>
          </div>

          <AnimatedSpan className="text-cyan-400">
            Fetching information for Indian Blockchain Fraternity...
          </AnimatedSpan>
          <AnimatedSpan className="text-white">
            <span className="text-purple-400">Mission:</span> To foster the
            future of Web3 through collaboration, innovation, and education.
          </AnimatedSpan>
          <AnimatedSpan className="text-white">
            <span className="text-purple-400">Vision:</span> To be a leading
            student-run organization that empowers the next generation of
            blockchain developers and entrepreneurs.
          </AnimatedSpan>
          <AnimatedSpan className="text-white">
            <span className="text-purple-400">Activities:</span>
            <br />
            - 🤝 Workshops on cutting-edge blockchain technologies.
            <br />
            - 💻 Hackathons to build and showcase innovative projects.
            <br />
            - 🎤 Seminars with industry experts and pioneers.
            <br />
            - 🚀 A collaborative community for learning and growth.
          </AnimatedSpan>
          <AnimatedSpan className="text-green-400">
            ✅ Done.
          </AnimatedSpan>
        </Terminal>
      </div>
    </div>
  );
}
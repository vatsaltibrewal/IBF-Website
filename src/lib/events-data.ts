export interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  imageUrl: string;
  registerLink?: string;
  status: "upcoming" | "past";
}

export const events: Event[] = [
  {
    id: 1,
    title: "Intro to Solidity Workshop",
    description: "Join us for a hands-on workshop covering the fundamentals of Solidity, the programming language for Ethereum smart contracts.",
    date: new Date("2025-10-15T14:00:00Z"),
    imageUrl: "/events/solidity.jpg",
    registerLink: "https://forms.gle/your-link",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Web3 Hackathon Kick-off",
    description: "The annual IBF Web3 Hackathon begins! Form your teams and start building the future of the decentralized web.",
    date: new Date("2025-10-25T10:00:00Z"),
    imageUrl: "/events/hackathon.jpg",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Guest Speaker: DeFi Trends",
    description: "A talk by industry expert Jane Doe on the latest trends and innovations in the world of Decentralized Finance.",
    date: new Date("2025-09-20T16:00:00Z"),
    imageUrl: "/events/defi.jpg",
    status: "past",
  },
];
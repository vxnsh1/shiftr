import { Hero } from "./hero";
import { Navbar } from "./navbar";

export default function Page() {
  return (
    <div className="relative w-full h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[url(/bg-1.jpg)] bg-center bg-cover opacity-50" />
      <div className="relative z-10 max-w-4xl h-full mx-auto space-y-20">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

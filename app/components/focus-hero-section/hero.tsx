import { LiquidGlass } from "@/components/LiquidGlass";
import { LiquidGlassFilter } from "@/components/LiquidGlassFilter";

export const Hero = () => {
  return (
    <div className="w-full h-1/2 flex items-center justify-center flex-col text-center gap-10">
      <LiquidGlassFilter id="liquid-glass" />
      <div className="space-y-3 flex items-center flex-col">
        <h1 className="text-5xl font-semibold">Focus Above the Noise</h1>
        <p className="text-neutral-200 w-86">
          A quiet space for deep work, clear thinking, and intentional progress.
        </p>
      </div>
      <div className="w-[390px]">
        <LiquidGlass
          filterId="liquid-glass"
          className="relative w-full flex items-center px-2 py-1"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full bg-transparent outline-none border-0 text-white placeholder-white/70 
              py-2 pl-2 pr-36 rounded-full text-base
            "
          />
          <button
            className="
              absolute right-2 top-1/2 -translate-y-1/2 
              bg-white/30 text-white/80 font-semibold
              px-5 py-1 rounded-full h-8 
              backdrop-blur-md transition hover:bg-white/40 
              text-sm cursor-pointer select-none
              shadow-none border-0
            "
          >
            Join Waitlist
          </button>
        </LiquidGlass>
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <div className="flex -space-x-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User 1"
            className="w-7 h-7 rounded-full border-2 border-neutral-300 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User 2"
            className="w-7 h-7 rounded-full border-2 border-neutral-300 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User 3"
            className="w-7 h-7 rounded-full border-2 border-neutral-300 object-cover"
          />
        </div>
        <span className="text-neutral-200 text-sm">
          1,000+ people already subscribed
        </span>
      </div>
    </div>
  );
};

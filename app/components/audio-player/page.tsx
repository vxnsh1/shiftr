"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/util";

export default function Home() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = String(s % 60).padStart(2, "0");
    return `${m}:${sec}`;
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <div className="w-120 h-120 bg-[#D1CFD2] rounded-[5rem] border border-[#CCCACC] overflow-hidden relative z-0 flex items-center justify-center">
        <div className="w-full h-full rounded-full absolute shadow-[0_25px_45px_5px_rgba(0,0,0,0.25)] -top-64" />

        <motion.div
          animate={{ rotate: 360 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            rotate: { duration: 5, ease: "linear", repeat: Infinity },
            scale: { duration: 0.3, ease: "easeOut" },
          }}
          className="w-full h-full absolute flex items-center justify-center -top-64 cursor-pointer"
        >
          <div className="w-full h-full rounded-full bg-[url('https://static.qobuz.com/images/covers/ga/qh/rdlgxy158qhga_600.jpg')] bg-cover bg-center border-2 border-gray-600" />
          <div className="w-1/4 h-1/4 bg-[#878B96] border-2 border-gray-100 rounded-full absolute shadow-[0px_10px_15px_2px_rgba(0,0,0,0.25)]" />
          <div className="w-21 h-21 rounded-full bg-[#BCB9BE] absolute" />
          <div className="w-16 h-16 bg-[#D9D7D9] border-4 border-[#DEDBE0] rounded-full absolute shadow-[inset_0_0px_5px_2px_rgba(0,0,0,0.25)]" />
        </motion.div>

        {/* INFO / PROGRESS */}
        <div className="absolute top-68 flex flex-col items-center justify-center gap-3 text-center">
          <AudioWave className="text-neutral-600" />
          <div>
            <p className="text-[#979595] font-semibold">Aditya Rikhari</p>
            <h1 className="text-3xl text-[#2A2A2C] font-bold">Teri Yaad</h1>
          </div>
          <Progress value={time} className="w-1/2" />
          <motion.div className="text-xl font-semibold text-neutral-700 tracking-wider flex items-center gap-1">
            <TimeTicker time={formatTime(time)} />
            <span>/</span>
            <span className="text-neutral-400">3:50</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Audio wave visualization
// ---------------------------------------------------------------------------

const AudioWave = ({ className }: { className?: string }) => {
  const bar = (delay = 0, duration = 0.9) => ({
    initial: { scaleY: 0.4 },
    animate: { scaleY: [0.4, 1, 0.6] },
    transition: {
      duration,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "mirror" as const,
      delay,
    },
    style: { transformOrigin: "bottom" as const },
  });

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-audio-lines", className)}
    >
      <motion.path d="M2 10v3" {...bar(0.0, 0.7)} />
      <motion.path d="M6 6v11" {...bar(0.1, 0.9)} />
      <motion.path d="M10 3v18" {...bar(0.2, 1.1)} />
      <motion.path d="M14 8v7" {...bar(0.15, 0.85)} />
      <motion.path d="M18 5v13" {...bar(0.25, 1.0)} />
      <motion.path d="M22 10v3" {...bar(0.05, 0.75)} />
    </motion.svg>
  );
};

// ---------------------------------------------------------------------------
// Timer digit animation
// ---------------------------------------------------------------------------

const Digit = ({ value }: { value: string }) => {
  if (value === ":") {
    return <span className="px-px">:</span>;
  }

  return (
    <span className="relative w-[1ch] h-7 overflow-hidden inline-flex justify-center">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute tabular-nums"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const TimeTicker = ({ time }: { time: string }) => {
  return (
    <div className="flex items-center">
      {time.split("").map((char, i) => (
        <Digit key={i} value={char} />
      ))}
    </div>
  );
};

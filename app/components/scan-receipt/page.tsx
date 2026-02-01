"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader, Loader2, Sparkle, SparkleIcon, Sparkles } from "lucide-react";

type Phase = "scanning" | "extracting" | "done";

const ScanReceipt = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("scanning");

  useEffect(() => {
    if (!isOpen) return;

    setPhase("scanning");

    const scanningTimer = setTimeout(() => {
      setPhase("extracting");
    }, 3000);

    const extractingTimer = setTimeout(() => {
      setPhase("done");
    }, 6000); // after extracting is done

    return () => {
      clearTimeout(scanningTimer);
      clearTimeout(extractingTimer);
    };
  }, [isOpen]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-neutral-50 relative">
      <motion.div
        layout
        layoutId="scan-receipt"
        transition={{ layout: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } }}
        className={`
          bg-white border-2 border-[#E7E7E7] shadow-xl cursor-pointer
          flex items-center justify-center overflow-hidden
          ${isOpen ? "w-[420px] h-[420px] rounded-2xl" : "w-48 h-16 rounded-xl"}
        `}
        onClick={() => !isOpen && setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isOpen && (
          <motion.div layout className="flex items-center gap-3">
            <ScanIcon isHovered={isHovered} />
            <span className="font-bold">Scan Receipt</span>
          </motion.div>
        )}

        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="w-full h-full p-3 flex flex-col gap-10 items-center justify-center relative"
          >
            <div className="w-[60%] h-[70%] border p-2 flex items-center justify-center border-[#F6F6F6] rounded-2xl bg-[#FAFAFA] relative overflow-hidden">
              <div className="bg-white w-[75%] h-[80%] border border-neutral-100 rounded-xl shadow-sm px-4 py-6 flex flex-col items-center justify-center relative">
                <div className="flex flex-col items-center gap-2 mb-6 w-full">
                  <div className="w-28 h-4 rounded-full bg-[#EAEBF4]" />
                  <div className="w-20 h-3 rounded-full bg-[#F2F2F4]" />
                </div>

                <div className="border-b border-[#ebebeb] w-full mb-6" />

                <div className="w-full flex flex-col gap-4">
                  <div className="flex justify-between">
                    <div className="w-1/4 h-3 rounded-full bg-[#F5F5F5]" />
                    <div className="w-1/3 h-3 rounded-full bg-[#E4E4E4]" />
                  </div>
                  <div className="flex justify-between">
                    <div className="w-1/3 h-3 rounded-full bg-[#F5F5F5]" />
                    <div className="w-1/5 h-3 rounded-full bg-[#E4E4E4]" />
                  </div>
                  <div className="flex justify-between">
                    <div className="w-1/5 h-3 rounded-full bg-[#F5F5F5]" />
                    <div className="w-1/4 h-3 rounded-full bg-[#E4E4E4]" />
                  </div>
                </div>
                {phase === "extracting" && (
                  <motion.div className="w-full h-full absolute">
                    <motion.div
                      animate={{ opacity: [0, 1] }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                      className="absolute top-13 border border-neutral-600 left-4 w-2 h-2 bg-[#6564F6] rounded-full"
                    />
                    <motion.div
                      animate={{ opacity: [0, 1] }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.1,
                      }}
                      className="absolute top-22 border-2 border-neutral-400 right-10 w-4 h-4 bg-[#6564F6] rounded-full"
                    />
                    <motion.div
                      animate={{ opacity: [0, 1] }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.4,
                      }}
                      className="absolute top-40 border-2 border-neutral-100 left-28 w-3 h-3 bg-[#6564F6] rounded-full"
                    />
                  </motion.div>
                )}
              </div>
              {phase === "scanning" && (
                <motion.div
                  className="absolute w-full h-[5px]"
                  animate={{ y: [-135, 135] }}
                  transition={{
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <div className="absolute inset-0 bg-[#6566EF]" />
                  <div className="absolute inset-0 bg-[#6566EF] blur-md opacity-60" />
                </motion.div>
              )}
            </div>
            {phase === "scanning" && (
              <div className="flex gap-3 text-neutral-400">
                <Loader2 className="animate-spin" size={18} />
                <p className="uppercase text-sm font-semibold">
                  Scanning document...
                </p>
              </div>
            )}

            {phase === "extracting" && (
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="flex gap-2 items-center text-[#6566EF]">
                    <Sparkles size={18} />
                    <p className="uppercase text-sm font-semibold">
                      Extracting Data...
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
        {phase === "done" && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.8 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="w-full h-full flex items-center justify-center absolute bg-white"
          >
            <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-[#F1F1F1] px-7 py-6 flex flex-col gap-4 relative">
              <div className="flex items-center justify-between mb-1">
                <div className="flex flex-col ">
                  <div className="flex items-center gap-4 text-neutral-700 font-semibold ">
                    <span className="bg-[#f6f7fe] rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect
                          x="4"
                          y="2.5"
                          width="14"
                          height="14"
                          rx="2"
                          ry="2"
                          strokeWidth="1.5"
                        />
                        <path d="M7 6h6M7 9.5h6" strokeWidth="1.2" />
                      </svg>
                    </span>
                    <p className="flex flex-col">
                      Receipt #007
                      <span className="text-xs text-neutral-400">
                        Processed just now
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <span className="bg-[#D5F9E5] text-[#208A69] font-bold text-xs px-3 py-1 rounded-xl">
                    CONFIDENCE 69%
                  </span>
                </div>
              </div>
              <div className=" border-b-2 border-neutral-100" />
              <div className="mt-2 mb-3">
                <div className="text-xs tracking-widest text-neutral-400 font-bold mb-1">
                  TOTAL AMOUNT
                </div>
                <div className="text-4xl font-bold text-neutral-900">$4.15</div>
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex justify-between items-center bg-[#FAFBFD] rounded-lg px-4 py-2">
                  <span className="text-neutral-400 text-sm font-medium">
                    Merchant
                  </span>
                  <span className="font-semibold text-neutral-700">
                    Raju Tea Stall
                  </span>
                </div>
                <div className="flex justify-between items-center bg-[#FAFBFD] rounded-lg px-4 py-2">
                  <span className="text-neutral-400 text-sm font-medium">
                    Date
                  </span>
                  <span className="font-semibold text-neutral-700">
                    Feb 02, 2026
                  </span>
                </div>
                <div className="flex justify-between items-center bg-[#FAFBFD] rounded-lg px-4 py-2">
                  <span className="text-neutral-400 text-sm font-medium">
                    Category
                  </span>
                  <span className="font-semibold text-neutral-700">
                    Food &amp; Drink
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mt-7">
                <button
                  className="cursor-pointer flex-1 border border-neutral-200 py-2 rounded-lg text-neutral-400 font-semibold transition hover:bg-neutral-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                    setPhase("scanning");
                  }}
                >
                  Retake
                </button>
                <button
                  className="cursor-pointer flex-1 bg-black hover:bg-neutral-900 transition text-white py-2 font-semibold rounded-lg flex items-center justify-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                    setPhase("scanning");
                  }}
                >
                  Approve Expense
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M5 12l5-5-5-5" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ScanReceipt;

const ScanIcon = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-scan-text-icon lucide-scan-text"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <motion.path
        key={`line1-${isHovered ? "hovered" : "idle"}`}
        initial={{ pathLength: isHovered ? 0 : 1 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: isHovered ? 0.2 : 0,
        }}
        d="M7 8h8"
      />
      <motion.path
        key={`line2-${isHovered ? "hovered" : "idle"}`}
        initial={{ pathLength: isHovered ? 0 : 1 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: isHovered ? 0 : 0,
        }}
        d="M7 12h10"
      />
      <motion.path
        key={`line3-${isHovered ? "hovered" : "idle"}`}
        initial={{ pathLength: isHovered ? 0 : 1 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: isHovered ? 0.1 : 0,
        }}
        d="M7 16h6"
      />
    </svg>
  );
};

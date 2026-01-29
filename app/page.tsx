"use client";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-120 h-120 bg-[#D1CFD2] rounded-[5rem] border border-[#CCCACC] overflow-hidden relative z-0 flex items-center justify-center">
        <motion.div initial={{rotate: 0}} animate={{rotate: 360}} transition={{duration: 20, ease: "easeInOut"}} className="w-full h-full absolute flex items-center justify-center -top-64">
          <div className="w-full h-full rounded-full absolute bg-[url('https://static.qobuz.com/images/covers/ga/qh/rdlgxy158qhga_600.jpg')] bg-cover bg-center border-2 border-gray-600 shadow-[0_35px_45px_5px_rgba(0,0,0,0.25)]" />
          <div className="w-1/4 h-1/4 bg-[#878B96] border-2 border-gray-100 rounded-full absolute shadow-[0px_10px_15px_2px_rgba(0,0,0,0.25)]" />
          <div className="w-21 h-21 rounded-full bg-[#BCB9BE] absolute" />
          <div className="w-16 h-16 bg-[#D9D7D9] border-4 border-[#DEDBE0] rounded-full absolute shadow-[inset_0_0px_5px_2px_rgba(0,0,0,0.25)]" />
        </motion.div>
      </div>
    </div>
  );
}

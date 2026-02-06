"use client";

import { Dribbble, Instagram, Twitter } from "lucide-react";
import { motion } from "motion/react";

const Page = () => {
  const links = [
    <Instagram size={20} />,
    <Dribbble size={20} />,
    <Twitter size={20} />,
  ];
  return (
    <div className="h-screen max-w-2xl mx-auto flex items-center justify-center">
      <div className="w-2/3 bg-white rounded-2xl border border-neutral-300 shadow-xl px-8 py-4 flex flex-col justify-between">
        <div className="w-full h-1/6 flex items-center flex-col gap-5">
          <p className="text-2xl font-bold">
            Let's talk! <span className="text-3xl">👋🏻</span>
          </p>
          <div className="w-full h-full rounded-xl bg-[#F8F8F8] flex justify-between text-sm px-5 py-2">
            <div className="w-1/2 h-full flex flex-col justify-center font-semibold ">
              <span>Mail us at</span>
              <span className="text-blue-600 cursor-pointer bg-red-500 overflow-hidden flex items-center">
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: -20 }}
                  transition={{duration: 0.5, ease: "easeInOut"}}
                  className="block"
                  style={{ display: 'inline-block' }}
                >
                  hello@example.com
                </motion.span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              {links.map((item, idx) => (
                <span
                  key={idx}
                  className="p-1 bg-neutral-600 rounded-md text-white cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <span className="flex justify-between items-center gap-4 text-[12px] text-neutral-400 mt-4">
          <span className="border border-neutral-200 w-full"></span>
          OR
          <span className="border border-neutral-200 w-full"></span>
        </span>
        <div className="w-full flex flex-col mt-5 h-full">
          <p className="text-sm font-semibold">Leave us a brief message</p>
          <form action="submit" className="mt-2">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Your name"
                className="w-1/2 outline-0 text-sm p-2 border border-neutral-300 rounded-md placeholder:text-neutral-300"
              />
              <input
                type="text"
                placeholder="Email"
                className="outline-0 w-1/2 text-sm p-2 border border-neutral-300 rounded-md placeholder:text-neutral-300"
              />
            </div>
            <div className="flex-1 min-h-[120px] max-h-[220px] flex flex-col mt-2">
              <textarea
                name=""
                id=""
                placeholder="Briefly describe your project idea.."
                className="outline-0 text-sm p-2 border border-neutral-300 rounded-md placeholder:text-neutral-300 w-full h-full resize-none flex-1 min-h-[120px] max-h-[220px]"
              ></textarea>
            </div>
            <button className="w-full text-sm bg-neutral-900 text-white py-3 rounded-md mt-5">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;

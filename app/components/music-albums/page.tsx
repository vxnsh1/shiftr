"use client"

import React, { useState } from "react";

type albumCoverProps = {
  imageUrl: string;
  authors: string;
  albumName: string;
};

const Page = () => {
  const albumCovers: albumCoverProps[] = [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/2/26/Daft_Punk_-_Random_Access_Memories.png",
      authors: "Daft punk",
      albumName: "Random Access Memories",
    },
    {
      imageUrl:
        "https://t2.genius.com/unsafe/838x0/https%3A%2F%2Fimages.genius.com%2F51c610c04eb205a938fa31464e02afb6.1000x1000x1.png",
      authors: "BoyWithUke",
      albumName: "Serotonin Dreams",
    },
    {
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b27358ecb3e5ec3bbef70ee09e43",
      authors: "The Local Train",
      albumName: "Aalas ka Pedh",
    },
  ];

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <div className="w-3xl text-white h-screen bg-[#111] mx-auto flex flex-col gap-10 items-center justify-center">
      {selectedIdx === null ? (
        <p className="font-xl font-medium transition-all duration-200 animate-fadeOut ease-out">
          Select any album
        </p>
      ) : (
        <div
          key={selectedIdx}
          className="transition-opacity duration-300 ease-in-out opacity-100 animate-fadeIn"
        >
          <p className="text-xl font-medium transition-all duration-200">{albumCovers[selectedIdx].albumName}</p>
          <p className="text-neutral-500 transition-all duration-200">
            {albumCovers[selectedIdx].authors}
          </p>
        </div>
      )}
      <div className="w-full h-16 flex items-center justify-center gap-4">
        {albumCovers.map((item, idx) => {
          const isDimmed = selectedIdx !== null && selectedIdx !== idx;
          return (
            <div
              key={idx}
              className={`size-18 transition-all duration-200 flex items-center justify-center`}
            >
              <img
                src={item.imageUrl}
                alt="Album Cover"
                className={`
                  rounded-full border border-neutral-500
                  cursor-pointer
                  transition-all duration-200
                  ${isDimmed ? "opacity-50 scale-95" : "opacity-100 scale-100"}
                  hover:scale-110 hover:opacity-100
                `}
                onClick={() => setSelectedIdx(idx)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;

import React from "react";

type Props = {
  id: string;
  scale?: number;
};

export const LiquidGlassFilter: React.FC<Props> = ({
  id,
  scale = 30,
}) => {
  return (
    <svg
      width="0"
      height="0"
      className="absolute"
      aria-hidden
      colorInterpolationFilters="sRGB"
    >
      <filter id={id}>
        <feDisplacementMap
          in="SourceGraphic"
          in2="map"
          scale={scale}
          xChannelSelector="R"
          yChannelSelector="G"
        />
        {/* subtle highlight */}
        <feGaussianBlur stdDeviation="0.6" result="blur" />
        <feBlend in="SourceGraphic" in2="blur" mode="screen" />
      </filter>
    </svg>
  );
};

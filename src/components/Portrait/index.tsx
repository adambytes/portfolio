import { useEffect, useRef } from "react";
import portrait from "./portrait.png";

type PortraitProps = {
  imageUrl?: string;
};

const Portrait = ({ imageUrl = portrait.src }: PortraitProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {}, [imageUrl]);

  return (
    <div>
      <canvas ref={canvasRef} style={{}} />
    </div>
  );
};

export default Portrait;

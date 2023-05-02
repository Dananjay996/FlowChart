import { useEffect, useRef, useState } from "react";

const Box = () => {
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [boxPosition, setBoxPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const boxWidth = 100;
    const boxHeight = 100;

    const drawBox = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "red";
      ctx.fillRect(boxPosition.x, boxPosition.y, boxWidth, boxHeight);
      ctx.strokeStyle = "#000";
      ctx.stroke();
    };

    drawBox();
  }, [boxPosition]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - mousePosition.x;
      const deltaY = e.clientY - mousePosition.y;
      setBoxPosition({
        x: boxPosition.x + deltaX,
        y: boxPosition.y + deltaY,
      });
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={1000}
      height={500}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="border-2 border-black "
    />
  );
};

export default Box;

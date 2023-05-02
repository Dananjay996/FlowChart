import { useEffect, useRef, useState } from "react";

const Box = () => {
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [boxPosition, setBoxPosition] = useState({ x: 50, y: 50 });
  const boxWidth = 100;
  const boxHeight = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawBox = () => {
      // loop boxPosition array
      // for (let i = 0; i < boxPosition.length; i++) {
      //   ctx.clearRect(0, 0, canvas.width, canvas.height);
      //   ctx.fillStyle = "red";
      //   ctx.fillRect(boxPosition[i].x, boxPosition[i].y, boxWidth, boxHeight);
      //   ctx.strokeStyle = "#000";
      //   ctx.stroke();
      // }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "red";
      ctx.fillRect(boxPosition.x, boxPosition.y, boxWidth, boxHeight);
      // draw a circle in bottom middle
      ctx.beginPath();
      ctx.arc(
        boxPosition.x + boxWidth / 2,
        boxPosition.y + boxHeight,
        5,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = "blue";
      ctx.fill();

      ctx.strokeStyle = "#000";
      ctx.stroke();
    };

    drawBox();
  }, [boxPosition]);

  // code to move box and circle constantly

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (
      isDragging &&
      e.clientX > boxPosition.x &&
      e.clientY > boxPosition.y &&
      e.clientX < boxPosition.x + boxWidth &&
      e.clientY < boxPosition.y + boxHeight
    ) {
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

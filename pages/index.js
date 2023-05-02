import { useState, useRef, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rectPosition, setRectPosition] = useState({ x: 10, y: 10 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the rectangle
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(rectPosition.x, rectPosition.y, 50, 50);
    ctx.fillRect(rectPosition.x, rectPosition.y, 50, 50);
  }, [rectPosition]);

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    // Calculate the initial position of the rectangle
    const initialX = e.clientX - rect.left;
    const initialY = e.clientY - rect.top;

    // Set the isDragging state to true
    setIsDragging(true);

    // Add a "mousemove" event listener to the canvas
    // canvas.addEventListener("mousemove", handleMouseMove);

    //change coordinates of rectangle on mouse move without adding listener
    console.log("down", isDragging);
    canvas.onmousemove = (e) => {
      // Calculate the new position of the rectangle
      const newX = e.clientX - rect.left - initialX + rectPosition.x;
      const newY = e.clientY - rect.top - initialY + rectPosition.y;

      setRectPosition({ x: newX, y: newY });
    };
  };

  const handleMouseUp = () => {
    // Set the isDragging state to false
    setIsDragging(false);
    console.log("up", isDragging);

    // Remove the "mousemove" event listener from the canvas
    const canvas = canvasRef.current;
    // canvas.removeEventListener("mousemove", handleMouseMove);
  };

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      style={{ border: "1px solid black" }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
};

export default Canvas;

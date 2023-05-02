import { useState, useRef, useEffect } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);
  const [boxes, setBoxes] = useState([
    { x: 100, y: 100, width: 100, height: 50 },
    { x: 300, y: 300, width: 100, height: 50 },
    { x: 350, y: 350, width: 100, height: 50 },
  ]);
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const mousePos = getMousePos(canvas, e);
    for (let i = boxes.length - 1; i >= 0; i--) {
      const box = boxes[i];
      if (
        mousePos.x >= box.x &&
        mousePos.x <= box.x + box.width &&
        mousePos.y >= box.y &&
        mousePos.y <= box.y + box.height
      ) {
        setSelectedBoxIndex(i);
        setMouseOffset({
          x: mousePos.x - box.x,
          y: mousePos.y - box.y,
        });
        break;
      }
    }
  };

  const handleMouseUp = () => {
    setSelectedBoxIndex(null);
  };

  const handleMouseMove = (e) => {
    if (selectedBoxIndex !== null) {
      const canvas = canvasRef.current;
      const mousePos = getMousePos(canvas, e);
      const newBoxes = [...boxes];
      const box = newBoxes[selectedBoxIndex];
      box.x = mousePos.x - mouseOffset.x;
      box.y = mousePos.y - mouseOffset.y;
      setBoxes(newBoxes);
    }
  };

  const getMousePos = (canvas, e) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // draw circle at bottom middle of rectangle
    // for (let i = 0; i < boxes.length; i++) {
    //   const box = boxes[i];
    // }

    ctx.fillStyle = "#000";
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      ctx.fillStyle = "#000";
      ctx.fillRect(box.x, box.y, box.width, box.height);
      ctx.fillStyle = "#f00";
      ctx.beginPath();
      ctx.arc(
        box.x + box.width / 2,
        box.y + box.height,
        5,
        0,
        Math.PI * 2,
        true
      );
      ctx.arc(box.x + box.width / 2, box.y, 5, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }
  }, [boxes]);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      style={{ border: "1px solid #000" }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  );
}

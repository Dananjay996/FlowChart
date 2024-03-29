import { useCallback, useState } from "react";

export function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
      console.log(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}

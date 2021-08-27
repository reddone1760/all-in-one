import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState([]);
  useEffect(() => {
    const handleResize = (e) => {
      setPosition([e.clientX, e.clientY]);
    };
    window.addEventListener("mousemove", (e) => handleResize(e));
    return () => {
      window.removeEventListener("mousemove", (e) => handleResize(e));
    };
  }, []);
  return position;
};

export default useMousePosition;

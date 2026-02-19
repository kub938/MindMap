// hooks/useMapTransform.ts
import { useEffect, useRef, useState } from "react";

const STEP = 0.2;
const MAX_SCALE = 3;
const MIN_SCALE = 0.1;

export function useMapTransform() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    scale: 1,
    offsetX: 0,
    offsetY: 0,
  });

  const isPanning = useRef(false);
  const isSpaceDown = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // 휠 줌
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      setTransform((prev) => {
        const newScale =
          e.deltaY < 0
            ? Math.min(prev.scale + STEP, MAX_SCALE)
            : Math.max(prev.scale - STEP, MIN_SCALE);

        const scaleRatio = newScale / prev.scale;
        return {
          scale: newScale,
          offsetX: mouseX - scaleRatio * (mouseX - prev.offsetX),
          offsetY: mouseY - scaleRatio * (mouseY - prev.offsetY),
        };
      });
    };

    // 스페이스바
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" && !isSpaceDown.current) {
        e.preventDefault();
        isSpaceDown.current = true;
        el.style.cursor = "grab";
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        isSpaceDown.current = false;
        isPanning.current = false;
        el.style.cursor = "default";
      }
    };

    // 마우스 드래그 패닝
    const handleMouseDown = (e: MouseEvent) => {
      if (!isSpaceDown.current) return;
      isPanning.current = true;
      lastPos.current = { x: e.clientX, y: e.clientY };
      el.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isPanning.current) return;

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      lastPos.current = { x: e.clientX, y: e.clientY };

      setTransform((prev) => ({
        ...prev,
        offsetX: prev.offsetX + dx,
        offsetY: prev.offsetY + dy,
      }));
    };

    const handleMouseUp = () => {
      if (!isPanning.current) return;
      isPanning.current = false;
      el.style.cursor = isSpaceDown.current ? "grab" : "default";
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mouseleave", handleMouseUp);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mouseleave", handleMouseUp);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return { containerRef, transform };
}

// MindmapEditor.tsx
"use client";
import { useMapTransform } from "../hooks/useMapTransform";

export default function MindmapEditor() {
  const { containerRef, transform } = useMapTransform();

  return (
    <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
      <div
        style={{
          transform: `translate(${transform.offsetX}px, ${transform.offsetY}px) scale(${transform.scale})`,
          transformOrigin: "0 0",
        }}
        className="bg-gray-800 rounded-xl flex items-center justify-center w-96 h-96"
      >
        <span className="text-white">
          마인드맵 (scale: {transform.scale.toFixed(1)})
        </span>
      </div>
    </div>
  );
}

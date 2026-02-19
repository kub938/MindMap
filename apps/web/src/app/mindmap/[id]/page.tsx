import MindmapEditor from "@/app/mindmap/components/MindmapEditor";

interface MindmapProps {
  id: string;
}

export default function Mindmap({ params }: { params: MindmapProps }) {
  return <MindmapEditor></MindmapEditor>;
}

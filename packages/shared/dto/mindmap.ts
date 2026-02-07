//basic interface
interface Mindmap {
  mindmap_id: number;
  title: string;
  created_at: Date;
  updated_at: Date;
}

interface Node {
  root_node_id: number;
  node_id: number;
  parent_id: number;
  content: string;
  direction: "left" | "right" | "root";
}

//Request
export interface MindmapCreateRequest {
  title: string;
}

export interface MindmapGetRequest {
  mindmapId: number;
}

//Response
export interface MindmapCreateResponse {
  title: string;
}

export interface MindmapGetListResponse {
  mindmaps: Mindmap[];
}

export interface MindmapGetResponse {
  nodes: Node[];
}

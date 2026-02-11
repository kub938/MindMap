//basic interface
interface Mindmap {
  mindmap_id: number;
  title: string;
  created_at: Date;
  updated_at: Date;
}

export interface Node {
  id: number;
  mindmapId: number;
  parentId: number | null;
  clientId: string;
  content: string;
  direction: "left" | "right" | "root";
  order: number | null;
}

export interface MoveInfo {
  parentId: number | null;
  order: number;
}

//Request
export interface MindmapCreateRequest {
  title: string;
}

export interface MindmapGetRequest {
  mindmapId: string;
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

//Node Events
export interface NodeId {
  id: number;
}

export interface AddNode {
  parentId: number;
  clientId: string;
  mindmapId: number;
  content: string;
  direction: "left" | "right" | "root";
  order: number;
}

export interface AddEvent {
  type: "ADD";
  node: AddNode;
}

export interface DeleteEvent {
  type: "DELETE";
  mindmapId: number;
  nodes: NodeId[];
}

export interface MoveEvent {
  type: "MOVE";
  id: number;
  mindmapId: number;
  to: MoveInfo;
}

export interface UpdateEvent {
  type: "UPDATE";
  id: number;
  mindmapId: number;
  after: {
    parentId?: number;
    content?: string;
    direction?: "left" | "right" | "root";
    order?: number;
  };
}

export type NodeEvent = AddEvent | DeleteEvent | MoveEvent | UpdateEvent;

export interface MindmapNodeEventProcessRequest {
  nodeEvents: NodeEvent[]; // 여러 개의 명령을 배열로 받음
}

export interface MindmapNodeEventProcessResponse {
  id: number;
  clientId: number;
  parentId: number | null;
}

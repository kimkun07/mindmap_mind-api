export interface MindResponse {
  status: string;
  rawNodeData: RawNodeData;
}
export interface RawNodeData {
  topic: string;
  children: RawNodeData[];
  style?: NodeStyle;
}
export interface NodeStyle {
  color?: string;
  background?: string;
  fontSize?: string;
  fontWeight?: string;
  border?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
}

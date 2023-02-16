// Check mind-elixir-core/src/index.ts

export interface MindResponse {
  status: string;
  rawNodeData: NodeObj;
}
export interface NodeObj {
  topic: string;
  parent?: NodeObj;
  style?: StyleObj;
  id?: string; // Note: not nullable in original mind-elixir-core
  children?: NodeObj[];
  tags?: string[];
  icons?: string[]; // -> <span>${encodeHTML(icon)}</span>
  hyperLink?: string;
  expanded?: boolean;
  direction?: number;
  root?: boolean;
}
export interface StyleObj {
  color?: string; // default: 'inherit'
  background?: string; // default: '#F6F6F6'
  fontSize?: string; // default: '15'
  fontWeight?: string; // default: 'normal'
  border?: string; // default: 'none'
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
}

import config from "./config";

export type LOCALE = "en" | "ja";

export type NODE_VALID_RESULT = {
  isValid: true;
  viewType: "single-node" | "two-nodes";
  msg: string;
  ctxType: string;
  nodes: readonly SceneNode[];
};

export type NODE_ERROR_RESULT = {
  isValid: false;
  msg: string;
  viewType:
    | "no-nodes"
    | "too-many-nodes"
    | "contains-invalid-nodes"
    | "contains-no-fill-nodes"
    | "invisible-fill-color"
    | "no-solid-fill"
    | "unknown-error";
  ctxType: string;
};

export type NODE_RESULT = NODE_VALID_RESULT | NODE_ERROR_RESULT;

export type FORMATTED_COLOR_INFO = {
  hex: string;
  rgb: [number, number, number];
  figmaRgb: [number, number, number];
};

export type RGB_COLOR = [number, number, number];

export type GET_COLOR = {
  scaleRatio: number;
  index: number;
  baseColor: RGB_COLOR;
  endColor: RGB_COLOR;
};

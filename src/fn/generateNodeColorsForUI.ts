import { FORMATTED_COLOR_INFO } from "../types";
import rgbToHex from "./rgbToHex";

type NODE = Array<RectangleNode | EllipseNode>;

export default function generateNodeColorsForUI(
  nodes: NODE
): FORMATTED_COLOR_INFO[] {
  const rtnArr: FORMATTED_COLOR_INFO[] = [];
  nodes.forEach((node) => {
    if (!isMixed(node.fills)) {
      const fills = node.fills as readonly Paint[];
      if (fills.length > 0) {
        const fill = fills[0];
        if (fill.type === "SOLID") {
          const r = Math.round(fill.color.r * 255);
          const g = Math.round(fill.color.g * 255);
          const b = Math.round(fill.color.b * 255);
          rtnArr.push({
            hex: rgbToHex([r, g, b]),
            rgb: [r, g, b],
            figmaRgb: [fill.color.r, fill.color.g, fill.color.b],
          });
        }
      }
    }
  });
  return rtnArr;
}

// Utility function to check if the fills are mixed
function isMixed(fills: any): fills is typeof figma.mixed {
  return fills === figma.mixed;
}

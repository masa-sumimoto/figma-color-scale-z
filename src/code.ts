import config from "./config";

import getSelectedNodesInfo from "./fn/getSelectedNodesInfo";
import generateNodeColorsForUI from "./fn/generateNodeColorsForUI";
import { hasAllAvailableNodes } from "./fn/hasAllAvailableNodes";

import getToWhiteColor from "./fn/getToWhiteColor";
import getToBlackColor from "./fn/getToBlackColor";
import getToSomeColor from "./fn/getToSomeColor";
import getRandomNum from "./fn/getRandomNum";

import { FORMATTED_COLOR_INFO, NODE_RESULT } from "./types";

figma.showUI(__html__, {
  themeColors: true,
  width: 500,
  height: 400,
  title: "Color Scale Z",
});

let selectNodes: SceneNode[];
let selectNodesInfo: NODE_RESULT;
let nodeColorInfo: FORMATTED_COLOR_INFO[];

function init(newSelection: SceneNode[]) {
  selectNodes = newSelection;
  selectNodesInfo = getSelectedNodesInfo(selectNodes);
}

function updateUi() {
  if (selectNodesInfo.isValid) {
    const nodes = selectNodesInfo.nodes.filter(
      (node): node is RectangleNode | EllipseNode => {
        return node.type === "RECTANGLE" || node.type === "ELLIPSE";
      }
    );
    nodeColorInfo = generateNodeColorsForUI(nodes);

    figma.ui.postMessage({
      type: "create-ui-view",
      viewType: selectNodesInfo.viewType,
      ctxType: selectNodesInfo.ctxType,
      msg: selectNodesInfo.msg,
      nodeColors: nodeColorInfo,
    });
  } else {
    figma.ui.postMessage({
      type: "create-ui-view",
      viewType: selectNodesInfo.viewType,
      ctxType: selectNodesInfo.ctxType,
      msg: selectNodesInfo.msg,
    });
  }
}

// 1. 選択ノード情報をUIに送信
//
init([...figma.currentPage.selection]);
updateUi();

// 2. スケール生成依頼を受信
//
figma.ui.onmessage = (msg) => {
  const nodeDistance = config.swattchSpace;
  const nodeSize = config.swatchSize;

  if (msg.type === "create-color-scale") {
    const scaleLen = msg.scaleLen;
    const scaleRatio = msg.isIncludeEndColor ? scaleLen - 1 : scaleLen;
    const nodes: SceneNode[] = [];

    let getColor: any;
    let endColorR = 0;
    let endColorG = 0;
    let endColorB = 0;

    switch (msg.scaleMode) {
      case "toBlack":
        getColor = getToBlackColor;
        break;
      case "complementary":
        const max = Math.max(
          nodeColorInfo[0].rgb[0],
          Math.max(nodeColorInfo[0].rgb[1], nodeColorInfo[0].rgb[2])
        );
        const min = Math.min(
          nodeColorInfo[0].rgb[0],
          Math.min(nodeColorInfo[0].rgb[1], nodeColorInfo[0].rgb[2])
        );
        const sum = max + min;
        endColorR = sum - nodeColorInfo[0].rgb[0];
        endColorG = sum - nodeColorInfo[0].rgb[1];
        endColorB = sum - nodeColorInfo[0].rgb[2];
        getColor = getToSomeColor;
        break;
      case "random":
        endColorR = getRandomNum(config.colorMin, config.colorMax);
        endColorG = getRandomNum(config.colorMin, config.colorMax);
        endColorB = getRandomNum(config.colorMin, config.colorMax);
        getColor = getToSomeColor;
        break;
      case "twoColors":
        endColorR = nodeColorInfo[1].rgb[0];
        endColorG = nodeColorInfo[1].rgb[1];
        endColorB = nodeColorInfo[1].rgb[2];
        getColor = getToSomeColor;
        break;
      case "toWhite":
      default:
        getColor = getToWhiteColor;
        break;
    }

    for (let i = 0; i < scaleLen; i++) {
      const rect = figma.createRectangle();
      rect.x = nodeSize * i + nodeDistance * i;
      rect.resize(nodeSize, nodeSize);
      const color = getColor({
        scaleRatio: scaleRatio,
        index: i,
        baseColor: nodeColorInfo[0].rgb,
        endColor: [endColorR, endColorG, endColorB],
      });
      rect.fills = [
        {
          type: "SOLID",
          color: { r: color[0] / 255, g: color[1] / 255, b: color[2] / 255 },
        },
      ];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  figma.closePlugin();
};

// Event
//

figma.on("selectionchange", () => {
  const newSelection = [...figma.currentPage.selection];
  if (hasAllAvailableNodes(newSelection) && newSelection !== selectNodes) {
    init(newSelection);
    updateUi();
  }
});

import config from "../config";
import t from "../locales";

import { NODE_RESULT, LOCALE } from "../types";

export default function getSelectedNodesInfo(
  nodes: readonly SceneNode[]
): NODE_RESULT {
  const locale: LOCALE = config["locale"];

  // [todo]
  // 別途バリデート処理をちゃんと作る

  // アプリ実行が成立しない場合: nodeの数が規定と異なる場合
  //

  if (nodes.length === 0) {
    return {
      isValid: false,
      viewType: "no-nodes",
      ctxType: "error",
      msg: t(locale, "noNodesMsg"),
    };
  }

  if (nodes.length >= 3) {
    return {
      isValid: false,
      viewType: "too-many-nodes",
      ctxType: "error",
      msg: t(locale, "tooManyNodesMsg"),
    };
  }

  // アプリ実行が成立しない場合: nodeの数が規定通りの場合
  //

  let enableNodes: Array<RectangleNode | EllipseNode> = [];

  for (const node of nodes) {
    if (node.type !== "RECTANGLE" && node.type !== "ELLIPSE") {
      // 不正なノードを含む
      return {
        isValid: false,
        viewType: "contains-invalid-nodes",
        ctxType: "error",
        msg: t(locale, "containsInvalidNodesMsg"),
      };
    } else if ((node.fills as readonly Paint[]).length === 0) {
      // 不正ではないがfillが存在しない
      return {
        isValid: false,
        viewType: "contains-no-fill-nodes",
        ctxType: "error",
        msg: t(locale, "containsNoFillNodesMsg"),
      };
    } else if ((node.fills as readonly Paint[])[0].visible === false) {
      // fillはあるが色が非表示になっている
      return {
        isValid: false,
        viewType: "invisible-fill-color",
        ctxType: "error",
        msg: t(locale, "invisibleFillColorMsg"),
      };
    } else if ((node.fills as readonly Paint[])[0].type !== "SOLID") {
      return {
        isValid: false,
        viewType: "no-solid-fill",
        ctxType: "error",
        msg: t(locale, "noSolidFillMsg"),
      };
    } else {
      enableNodes.push(node);
    }
  }

  // アプリ実行が成立する場合:
  //

  // アプリ実行が成立する場合:
  //
  if (enableNodes.length === 1) {
    return {
      isValid: true,
      viewType: "single-node",
      ctxType: "single-node",
      nodes: enableNodes,
      msg: t(locale, "singleColorMsg"),
    };
  }

  if (enableNodes.length === 2) {
    return {
      isValid: true,
      viewType: "two-nodes",
      ctxType: "two-nodes",
      nodes: enableNodes,
      msg: t(locale, "twoColorsMsg"),
    };
  }

  // [todo]
  return {
    isValid: false,
    viewType: "unknown-error",
    ctxType: "error",
    msg: "まだ検証されていない未知のエラー",
  };
}

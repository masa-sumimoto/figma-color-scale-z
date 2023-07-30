import { LOCALE } from "./types";

type TEXT_SET = {
  [key: string]: string;
};

type LOCALE_TEXTS = {
  [key in LOCALE]: TEXT_SET;
};

function t(locale: LOCALE, wordKey: string): string {
  const localTexts: LOCALE_TEXTS = {
    en: {
      noNodesMsg: "Please launch the plugin with one or two nodes selected.",
      tooManyNodesMsg:
        "Please launch the plugin with one or two nodes selected.",
      containsInvalidNodesMsg:
        "You can only select nodes that are either Rectangles or Ellipses.",
      containsNoFillNodesMsg:
        "Some of the selected nodes do not have any fills.",
      invisibleFillColorMsg:
        "Some of the fills in the selected nodes are set to be invisible.",
      noSolidFillMsg:
        "Nodes can have multiple fills, but the first fill must always be of type 'Solid'.",
      singleColorMsg: "You have selected one color.",
      twoColorsMsg: "You have selected two colors.",
      selectErrorMsg: "Please select one or two Rect or Ellipse elements.",
      selectedNoedsLengthErrorTitle: "Select Error",
      selectedNoedsLengthErrorDesxription: "Be sure to select one or two nodes",
      showRootNodeContextErrorTitle: "Context Error",
      showRootNodeContextErrorDesxription:
        "Be sure to select nodes in artboards",
      showWorngScaleLengthErrorTitle: "Input Error",
      showWorngScaleLengthErrorDescription:
        "An incorrect scale number may have been specified. Be sure to specify numbers within the range as single-byte numbers.",
    },
    ja: {
      noNodesMsg:
        "ノードは1つないし2つ選択した状態でプラグインを立ち上げてください",
      tooManyNodesMsg:
        "ノードは1つないし2つ選択した状態でプラグインを立ち上げてください",
      containsInvalidNodesMsg: "ReectもしくはEllipseのノードのみ選択できます",
      containsNoFillNodesMsg:
        "選択ノードの中にfillを持っていないノードが存在します",
      invisibleFillColorMsg: "選択ノードの中にfillが非表示のものが存在します",
      noSolidFillMsg:
        "ノードは複数のfillを保持できますが、一つ目のfillは必ずタイプを塗りつぶしにしてください",
      singleColorMsg: "あなたは一色のカラーを選択しています。",
      twoColorsMsg: "あなたは二色のカラーを選択しています。",

      selectErrorMsg: "矩形もしくは円形要素を1つないし2つ選択してください",
      selectedNoedsLengthErrorTitle: "選択エラー",
      selectedNoedsLengthErrorDesxription:
        "矩形要素を1つまたは2つ選択してください",
      showRootNodeContextErrorTitle: "コンテキストエラー",
      showRootNodeContextErrorDesxription:
        "アートボード内のノードを選択してください",
      showWorngScaleLengthErrorTitle: "入力エラー",
      showWorngScaleLengthErrorDescription:
        "不正なスケール値が指定されました。半角数字の範囲内で指定してください。",
    },
  };

  return localTexts[locale][wordKey];
}

export default t;

import { RGB_COLOR, GET_COLOR } from "../types";

export default function getToBlackColor(opts: GET_COLOR): RGB_COLOR {
  const r =
    opts.baseColor[0] - (opts.baseColor[0] / opts.scaleRatio) * opts.index;
  const g =
    opts.baseColor[1] - (opts.baseColor[1] / opts.scaleRatio) * opts.index;
  const b =
    opts.baseColor[2] - (opts.baseColor[2] / opts.scaleRatio) * opts.index;

  return [r, g, b];
}

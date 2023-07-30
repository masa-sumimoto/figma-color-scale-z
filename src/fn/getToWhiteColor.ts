import config from "../config";

import { RGB_COLOR, GET_COLOR } from "../types";

export default function getToWhiteColor(opts: GET_COLOR): RGB_COLOR {
  const max = config.colorMax;
  const r =
    opts.baseColor[0] +
    ((max - opts.baseColor[0]) / opts.scaleRatio) * opts.index;
  const g =
    opts.baseColor[1] +
    ((max - opts.baseColor[1]) / opts.scaleRatio) * opts.index;
  const b =
    opts.baseColor[2] +
    ((max - opts.baseColor[2]) / opts.scaleRatio) * opts.index;
  return [r, g, b];
}

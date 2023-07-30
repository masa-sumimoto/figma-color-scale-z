import { LOCALE } from "./types";

export type CONFIG = {
  defaultLocale: LOCALE;
  locale: LOCALE;
  swatchSize: number;
  swattchSpace: number;
  colorMax: number;
  colorMin: number;
};

const config: CONFIG = {
  defaultLocale: "en",
  locale: "en",
  swatchSize: 40,
  swattchSpace: 8,
  colorMax: 255,
  colorMin: 0,
};

export default config;

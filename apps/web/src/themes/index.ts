import { RadicalTheme } from "./types.d";
import gumLeaf from "./color/gum-leaf-final.json";
import { layout } from "./layout";
import { typography } from "./typography";

const colorTheme = gumLeaf;

export const theme: RadicalTheme = {
  ...layout,
  ...colorTheme,
  ...typography({
    fontFamilies: {
      body: "Figtree",
      heading: "Figtree",
      monospace: "PT Mono",
    },
  }),
};

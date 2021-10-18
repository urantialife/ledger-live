import { keyframes, css, DefaultTheme } from "styled-components";
import palettes, { Palette } from "./palettes";

/* space indexes:
  0, 1, 2, 3, 4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
 */
export const space = [
  0, 2, 4, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76,
];

export const fontSizes = [8, 9, 10, 12, 13, 16, 18, 22, 32];
export const radii = [0, 4];
export const shadows = ["0 4px 8px 0 rgba(0, 0, 0, 0.03)"];
export const zIndexes = [-1, 0, 1, 9, 10, 90, 100, 900, 1000];

// Those fonts are now defined in global.css, this is just a mapping for styled-system
export const fontFamilies = {
  Inter: {
    ExtraLight: {
      weight: 100,
      style: "normal",
    },
    Light: {
      weight: 300,
      style: "normal",
    },
    Regular: {
      weight: 400,
      style: "normal",
    },
    Medium: {
      weight: 500,
      style: "normal",
    },
    SemiBold: {
      weight: 600,
      style: "normal",
    },
    Bold: {
      weight: 700,
      style: "normal",
    },
    ExtraBold: {
      weight: 800,
      style: "normal",
    },
  },
  Alpha: {
    Medium: {
      weight: 500,
      style: "normal",
    },
  },
};

const animationLength = "0.33s";
const easings = {
  outQuadratic: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
};

const transition = (property = "all"): any => css`
  transition: ${property} ${animationLength} ${easings.outQuadratic};
`;

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;
const fadeOut = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `;
const fadeInGrowX = keyframes`
    0% {
      opacity: 0;
      transform: scaleX(0);
    }
    100% {
      opacity: 1;
      transform: scaleX(1);
    }
`;
const fadeInUp = keyframes`
    0% {
      opacity: 0;
      transform: translateY(66%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  `;
const animations = {
  fadeIn: () =>
    css`
      ${fadeIn} ${animationLength} ${easings.outQuadratic} forwards
    `,
  fadeOut: () =>
    css`
      ${fadeOut} ${animationLength} ${easings.outQuadratic} forwards
    `,
  fadeInGrowX: () =>
    css`
      ${fadeInGrowX} 0.6s ${easings.outQuadratic} forwards
    `,
  fadeInUp: () =>
    css`
      ${fadeInUp} ${animationLength} ${easings.outQuadratic} forwards
    `,
};
const overflow = {
  x: css`
    overflow-y: hidden;
    overflow-x: scroll;
    will-change: transform;
    &:hover {
      --track-color: ${(p) => p.theme.colors.palette.neutral.c30};
    }
  `,
  y: css`
    overflow-x: hidden;
    overflow-y: scroll;
    will-change: transform;
    &:hover {
      --track-color: ${(p) => p.theme.colors.palette.neutral.c30};
    }
  `,
  yAuto: css`
    overflow-x: hidden;
    overflow-y: auto;
    will-change: transform;
    &:hover {
      --track-color: ${(p) => p.theme.colors.palette.neutral.c30};
    }
  `,
  xy: css`
    overflow: scroll;
    will-change: transform;
    &:hover {
      --track-color: ${(p) => p.theme.colors.palette.neutral.c30};
    }
  `,
  trackSize: 12,
};
interface Font {
  weight: number;
  style: string;
}
export interface Theme extends DefaultTheme {
  sizes: {
    topBarHeight: number;
    sideBarWidth: number;
    drawer: {
      side: {
        big: {
          width: number;
        };
        small: {
          width: number;
        };
      };
      popin: {
        min: {
          height: number;
          width: number;
        };
        max: {
          height: number;
          width: number;
        };
      };
    };
  };
  radii: number[];
  fontFamilies: Record<string, Record<string, Font>>;
  fontSizes: number[];
  space: number[];
  shadows: string[];
  colors: {
    palette: Palette;
  };
  animations: Record<string, (props: never) => any>;
  transition: (property?: string) => any;
  overflow: Record<string, any>;
  zIndexes: number[];
}
const theme: Theme = {
  sizes: {
    drawer: {
      side: {
        big: {
          width: 580,
        },
        small: {
          width: 420,
        },
      },
      popin: {
        min: {
          height: 158,
          width: 462,
        },
        max: {
          height: 522,
          width: 622,
        },
      },
    },
    topBarHeight: 58,
    sideBarWidth: 230,
  },
  radii,
  fontFamilies,
  fontSizes,
  space,
  shadows,
  colors: {
    palette: palettes.light,
  },
  animations,
  overflow,
  transition,
  zIndexes,
};
export default theme;
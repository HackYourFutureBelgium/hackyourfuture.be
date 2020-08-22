export const BREAKPOINT = {
  XL: "1280px",
  L: "1024px",
  M: "768px",
  S: "498px",
}

export const MEDIA_QUERY = {
  DESKTOP: `only screen and (min-width: ${BREAKPOINT.XL})`,
  SMALL_DESKTOP: `only screen and (min-width: ${BREAKPOINT.L}) and (max-width: ${BREAKPOINT.XL})`,
  TABLET: `only screen and (min-width: ${BREAKPOINT.S}) and (max-width: ${BREAKPOINT.M})`,
  TABLET_AND_DOWN: `only screen and (max-width: ${BREAKPOINT.M})`,
  MOBILE: `only screen and (max-width: ${BREAKPOINT.S})`,
}

/**
 * Color are name whit the following tools:
 * http://chir.ag/projects/name-that-color/
 */
export const COLOR = {
  CONCRETE: "#F2F2F2",
  DOLPHIN_GRAY: "#656686",
  WHITE: "#FFFFFF",
  JACKSON_PURPLE: "#1C2294",
  BLUE_VIOLET: "#4A50BB",
  MERCURY: "#E5E5E5",
  GRAY: "#7F7F7F",
  BLACK: "#000000",
  WHITE_LILAC: "#F8F9FC",
}

export const SPACER = {
  L: "50px",
  M: "20px",
  S: "10px",
}

export const FONT_SIZE_TITLE = {
  XL: "64px",
  L: "36px",
  M: "24px",
  S: "20px",
  XS: "18px",
}

export const FONT_SIZE_TEXT = {
  L: "24px",
  M: "16px",
  S: "12px",
}

export const SHADOW = {
  BOX: "0px 0px 53px rgba(0, 0, 0, 0.08)",
}

export const FONT_FAMILY = {
  SPACE: "'Space Mono', monospace",
  WORK: "'Work Sans', sans-serif",
}

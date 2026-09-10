import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#0B1020",
    surface1: "#141A33",
    surface2: "#1C2347",
    surface3: "#252D5A",
    surfaceInverse: "#F4F6FF",
    textPrimary: "#F2F4FA",
    textMuted: "#9BA3C7",
    textInverse: "#0B1020",
    textOnAccentPrimary: "#04101A",
    textLink: "#66E0FF",
    focusRing: "#7CE8FF",
    line: "#2A3266",
    lineStrong: "#3D4677",
    accentPrimary: "#2BD9FF",
    accentSecondary: "#FF4DA6",
    accentBright: "#FFE14D",
    statusConfirmed: "#3DDC97",
    statusCaution: "#FFB347",
    statusUnknown: "#7C86AE",
  },
  typography: {
    headingFamily:
      "Rajdhani, Inter, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif",
    bodyFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "8px",
    borderWidth: "1px",
    shadow: "0 4px 16px rgba(4, 8, 24, 0.45)",
    hoverLift: "-2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0, position: "center top" },
  variants: {
    home: "media-hero",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "panelled",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;
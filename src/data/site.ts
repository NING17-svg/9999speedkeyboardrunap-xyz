import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "+9999 Speed Keyboard Run! AP! Guide",
  brandMark: "+9K",
  gameName: "+9999 Speed Keyboard Run! AP!",
  domain: "9999speedkeyboardrunap.xyz",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://9999speedkeyboardrunap.xyz").replace(/\/$/, ""),
  description:
    "Independent fan guide for the Roblox keyboard-reaction speed-running universe +9999 Speed Keyboard Run! AP! by MegumiGames! — covering identity, codes, controls, speed mechanics, upgrades, maps, and beginner walkthrough.",
  tagline: "Codes, controls, speed mechanics, upgrades, and maps for +9999 Speed Keyboard Run! AP!.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "+9999 Speed Keyboard Run! AP! Fan Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Roblox game page",
      href: "https://www.roblox.com/games/10759447618",
      description: "Official Roblox universe page for +9999 Speed Keyboard Run! AP! (Universe 10759447618, Creator Group MegumiGames!).",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide. All facts are sourced from Roblox universe pages, community guides, and dated third-party codes aggregators; nothing here is an official statement by Roblox or MegumiGames!.",
};

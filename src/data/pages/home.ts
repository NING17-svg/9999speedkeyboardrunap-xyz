import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "+9999 Speed Keyboard Run AP Hub: Codes, Controls & Speed Tips",
  seoTitle: "+9999 Speed Keyboard Run AP - Roblox Codes, Controls & Tips",
  metaDescription:
    "Confirm +9999 Speed Keyboard Run AP is the MegumiGames! Roblox keyboard-reaction runner. Find identity, codes, controls, speed, upgrades, maps, and beginner tips.",
  summary:
    "+9999 Speed Keyboard Run! AP! is the keyboard-reaction speed-running Roblox experience under Universe 10759447618 by Creator Group MegumiGames! — use this hub to confirm the game, find codes, learn controls, and start the walkthrough.",
  hero: {
    eyebrow: "MegumiGames! speed-running hub",
    subtitle:
      "+9999 Speed Keyboard Run! AP! is the keyboard-reaction speed-running Roblox experience under Universe 10759447618 by Creator Group MegumiGames!. Confirm the universe id, find codes, learn the controls, and start the walkthrough below.",
    ctas: [
      { label: "Identity Overview", href: "/about/" },
      { label: "Codes", href: "/codes/" },
      { label: "Beginner Walkthrough", href: "/walkthrough/" },
    ],
  },
  quickAnswer:
    "+9999 Speed Keyboard Run! AP! is the keyboard-reaction speed-running experience on Roblox under Universe 10759447618 by Creator Group MegumiGames!. The Root Place was created on 2026-08-24T17:03:19Z and the experience has been publicly playable since 2026-08-24, making it 16 days old as of 2026-09-09. This hub confirms the game, lists codes, explains controls, speed, upgrades, and maps, and links out to the beginner walkthrough.",
  keyFacts: [
    { label: "Universe id", value: "10759447618" },
    { label: "Creator group", value: "MegumiGames!" },
    { label: "Released", value: "2026-08-24 (publicly playable)" },
    { label: "Theme", value: "Keyboard-reaction speed-running on Roblox" },
    { label: "AP modifier", value: "In-game speed and reaction modifier" },
    { label: "Source rule", value: "Official Roblox + dated community snapshots only" },
  ],
  modules: [
    {
      id: "home-quick-answer",
      type: "prose",
      heading: "What is +9999 Speed Keyboard Run AP",
      body:
        "+9999 Speed Keyboard Run AP is the keyboard-reaction speed-running experience on Roblox published as +9999 Speed Keyboard Run! AP! by Creator Group MegumiGames! under Universe 10759447618. The Root Place was created on 2026-08-24T17:03:19Z and the experience has been publicly playable since 2026-08-24. Players race by hitting timed keyboard prompts while the AP modifier layers extra speed on top of the base reaction loop. Use this hub to confirm the game, find the latest codes, learn the controls, and start the walkthrough.",
    },
    {
      id: "home-identity",
      type: "prose",
      heading: "What +9999 Speed Keyboard Run AP Is on Roblox",
      body:
        "+9999 Speed Keyboard Run! AP! sits inside the Speed Keyboard Run family of Roblox experiences but is a distinct, branded release rather than a clone. The Roblox universe page lists it as Universe 10759447618, owned by Creator Group MegumiGames!, with the Root Place created on 2026-08-24T17:03:19Z and last updated on 2026-08-24T17:59:06Z. As of 2026-09-09, the experience was 16 days old and showing player_count 951, visits 13,356, favorited 16, ccu_change_1h_ratio 23.4, and ccu_change_6h_ratio 17.6 on the game-check brief; treat those as dated snapshots, never as live state.",
      links: [
        { label: "Identity Overview", href: "/about/", description: "Universe 10759447618 identity card." },
        { label: "Codes", href: "/codes/", description: "Active codes roster and redemption steps." },
      ],
    },
    {
      id: "home-start",
      type: "prose",
      heading: "How to Start Playing +9999 Speed Keyboard Run! AP!",
      body:
        "Open the game through the Roblox universe page, accept the standard Roblox session, and the title screen drops you straight into the first reaction prompt. There is no separate launcher, no key to press to enter the runner, and no login flow beyond your Roblox account. For the first hour, work through the onboarding checklist inside the [beginner walkthrough](/walkthrough/) before chasing upgrades.",
      links: [
        { label: "Beginner Walkthrough", href: "/walkthrough/", description: "First-hour onboarding checklist." },
        { label: "Controls", href: "/controls/", description: "Key map and reaction prompts." },
        { label: "Speed Mechanics", href: "/speed/", description: "AP modifier scoring rules." },
        { label: "Upgrades", href: "/upgrades/", description: "Speed tier and AP tier priority." },
        { label: "Maps", href: "/maps/", description: "Stage ladder and AP modifier status." },
      ],
    },
    {
      id: "home-codes",
      type: "prose",
      heading: "Current +9999 Speed Keyboard Run! AP! Codes",
      body:
        "The Codes button lives in the standard Roblox Codes menu reachable through the [identity overview](/about/) or directly inside the in-game menu, and the universe page links the same community channel where MegumiGames! posts fresh codes. As of 2026-09-09, no third-party Roblox codes site had listed an active code for Universe 10759447618. The [codes](/codes/) guide tracks the active roster, the redemption path, and the dated status statement every time the page is refreshed.",
    },
    {
      id: "home-controls-speed",
      type: "prose",
      heading: "Controls, Speed, and AP Modifier",
      body:
        "The control set is keyboard-first: directional keys move the runner, additional keys cover sprint, jump, and crouch reactions, and the AP modifier adds a second-tier timing window on top of the base reaction prompts. The [controls](/controls/) reference lists the full key map, and the [speed mechanics](/speed/) page explains why a clean run scores higher than a fast-but-messy run.",
    },
    {
      id: "home-upgrades-maps",
      type: "prose",
      heading: "Upgrades, Maps, and Progression",
      body:
        "Upgrades unlock in tiers, and the fastest progression path depends on whether you are chasing speed score or stage completion. The [upgrades](/upgrades/) guide ranks the upgrade order by goal so you can pick the path that matches how you actually play. The [maps](/maps/) reference lists the stages in unlock order and flags which stages gate the higher AP modifier tiers.",
    },
    {
      id: "home-page-map",
      type: "entity-grid",
      heading: "Pages on this site",
      items: [
        { title: "Identity Overview", summary: "Universe 10759447618 identity card, Creator Group, dated status.", href: "/about/" },
        { title: "Codes", summary: "Active +9999 Speed Keyboard Run codes roster and redemption.", href: "/codes/" },
        { title: "Controls", summary: "Key map and reaction prompt timing for the runner.", href: "/controls/" },
        { title: "Speed Mechanics", summary: "Reaction scoring and AP modifier window explanation.", href: "/speed/" },
        { title: "Upgrades", summary: "Speed tier, AP modifier, and equipment priority order.", href: "/upgrades/" },
        { title: "Maps", summary: "Stage ladder, unlock order, and AP modifier status per stage.", href: "/maps/" },
        { title: "Walkthrough", summary: "First-hour onboarding checklist linking every guide page.", href: "/walkthrough/" },
      ],
    },
  ],
  faqIds: [
    "is-9999-ap-free",
    "are-9999-ap-codes-active",
    "what-does-ap-do",
    "where-do-i-start",
  ],
  relatedPageIds: ["about", "guides", "wiki", "speed-mechanics", "upgrades-progression", "maps-stages", "beginner-walkthrough"],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-09",
};
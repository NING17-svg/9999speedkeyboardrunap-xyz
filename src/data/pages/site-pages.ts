import type { PageContent } from "@/types/content";

export const contactPage: PageContent = {
  id: "contact",
  translationKey: "contact",
  locale: "en-US",
  routeKind: "fixed",
  slug: "contact",
  url: "/contact",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Contact +9999 Speed Keyboard Run! AP! Guide",
  seoTitle: "Contact | +9999 Speed Keyboard Run! AP! Guide",
  metaDescription:
    "Contact page for the +9999 Speed Keyboard Run! AP! guide: corrections, official source updates, and feedback.",
  summary:
    "A trust page for corrections, source updates, and feedback about the +9999 Speed Keyboard Run! AP! guide.",
  hero: {
    eyebrow: "Contact",
    subtitle:
      "Reach out for corrections, official source updates, and feedback about the +9999 Speed Keyboard Run! AP! guide.",
    ctas: [{ label: "Read About", href: "/about/" }],
  },
  quickAnswer:
    "Use the support mailbox linked on this site to send corrections, official source updates, and feedback about the +9999 Speed Keyboard Run! AP! guide. Do not include private account credentials.",
  keyFacts: [
    { label: "Primary use", value: "Corrections and feedback" },
    { label: "Channel", value: "support@9999speedkeyboardrunap.xyz" },
    { label: "Scope", value: "Guide content only — not Roblox or MegumiGames! support" },
  ],
  modules: [
    {
      id: "contact-method",
      type: "prose",
      heading: "Contact method",
      body:
        "Send corrections, official source updates, and feedback to support@9999speedkeyboardrunap.xyz. The mailbox is configured through the Cloudflare Email Routing integration on this domain and forwards to the verified owner account.",
    },
    {
      id: "corrections",
      type: "prose",
      heading: "Corrections",
      body:
        "Invite readers to send official source links when facts change. Do not ask for private account information or game account credentials. Updates to the dated status statements on each guide page are recorded with the source URL and the date the page was refreshed.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["about", "privacy-policy", "terms"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-09",
};

export const privacyPolicyPage: PageContent = {
  id: "privacy-policy",
  translationKey: "privacy-policy",
  locale: "en-US",
  routeKind: "fixed",
  slug: "privacy-policy",
  url: "/privacy-policy",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Privacy Policy",
  seoTitle: "Privacy Policy | +9999 Speed Keyboard Run! AP! Guide",
  metaDescription:
    "Privacy policy for the +9999 Speed Keyboard Run! AP! guide: analytics, contact messages, and policy updates.",
  summary:
    "Starter privacy policy for the +9999 Speed Keyboard Run! AP! guide: aggregate GA4 analytics, contact messages, and policy update notes.",
  hero: {
    eyebrow: "Privacy",
    subtitle:
      "Explain what data the +9999 Speed Keyboard Run! AP! guide collects, why it is used, and how visitors can contact the maintainers.",
    ctas: [{ label: "Terms", href: "/terms/" }],
  },
  quickAnswer:
    "The +9999 Speed Keyboard Run! AP! guide collects aggregate analytics when GA4 is configured, stores contact messages sent to support@9999speedkeyboardrunap.xyz, and updates this policy when the deployed setup changes.",
  keyFacts: [
    { label: "Analytics", value: "GA4 only when configured" },
    { label: "Accounts", value: "No user accounts" },
    { label: "Contact mailbox", value: "support@9999speedkeyboardrunap.xyz" },
    { label: "Ads", value: "Adsterra only when enabled post-launch" },
  ],
  modules: [
    {
      id: "privacy-data",
      type: "prose",
      heading: "Information we collect",
      body:
        "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled after launch, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
    },
    {
      id: "privacy-contact",
      type: "prose",
      heading: "Contact messages",
      body:
        "Messages sent to support@9999speedkeyboardrunap.xyz may include the information visitors choose to send. Do not include sensitive personal information. Messages are used only to address the request and to update the relevant guide page.",
    },
    {
      id: "privacy-updates",
      type: "prose",
      heading: "Policy updates",
      body:
        "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["about", "contact", "terms"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-09",
};

export const termsPage: PageContent = {
  id: "terms",
  translationKey: "terms",
  locale: "en-US",
  routeKind: "fixed",
  slug: "terms",
  url: "/terms",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Terms of Use",
  seoTitle: "Terms of Use | +9999 Speed Keyboard Run! AP! Guide",
  metaDescription:
    "Terms of use for the +9999 Speed Keyboard Run! AP! guide: scope, disclaimers, and acceptable use.",
  summary:
    "Starter terms page for the unofficial +9999 Speed Keyboard Run! AP! guide: scope, disclaimers, and acceptable use.",
  hero: {
    eyebrow: "Terms",
    subtitle:
      "Set clear expectations for unofficial status, informational use, and site changes.",
    ctas: [{ label: "Privacy Policy", href: "/privacy-policy/" }],
  },
  quickAnswer:
    "The +9999 Speed Keyboard Run! AP! guide is an unofficial informational site. It is not affiliated with Roblox, MegumiGames!, or any trademark owner named on the guide pages.",
  keyFacts: [
    { label: "Use", value: "Informational guide content" },
    { label: "Official status", value: "Unofficial fan site" },
    { label: "Universe reference", value: "Roblox Universe 10759447618" },
  ],
  modules: [
    {
      id: "terms-unofficial",
      type: "prose",
      heading: "Unofficial site",
      body:
        "This site is not affiliated with Roblox Corporation, Creator Group MegumiGames!, or any trademark owner named on the guide pages. All references to the +9999 Speed Keyboard Run! AP! universe are made for descriptive and informational purposes only.",
    },
    {
      id: "terms-accuracy",
      type: "prose",
      heading: "Information accuracy",
      body:
        "Guide information may change as official details are released or refreshed on the Roblox universe page and the Roblox Games API for Universe 10759447618. Use official sources for final purchase, gameplay, and account decisions.",
    },
    {
      id: "terms-acceptable-use",
      type: "prose",
      heading: "Acceptable use",
      body:
        "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through the contact mailbox or any future feedback channel.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["about", "contact", "privacy-policy"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-09",
};

export const faqPage: PageContent = {
  id: "faq",
  translationKey: "faq",
  locale: "en-US",
  routeKind: "fixed",
  slug: "faq",
  url: "/faq",
  pageType: "faq",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "+9999 Speed Keyboard Run! AP! Frequently Asked Questions",
  seoTitle: "+9999 Speed Keyboard Run! AP! FAQ | Roblox Codes, Controls, Speed",
  metaDescription:
    "Frequently asked questions about +9999 Speed Keyboard Run! AP!: codes, controls, speed mechanics, AP modifier, upgrades, and the beginner walkthrough.",
  summary:
    "FAQ hub for the +9999 Speed Keyboard Run! AP! guide: codes, controls, speed mechanics, upgrades, maps, walkthrough, and the universe identity.",
  hero: {
    eyebrow: "FAQ",
    subtitle:
      "Browse the most common questions about +9999 Speed Keyboard Run! AP!: universe identity, codes, controls, speed mechanics, AP modifier, upgrades, and the beginner walkthrough.",
    ctas: [
      { label: "Identity Overview", href: "/about/" },
      { label: "Codes", href: "/codes/" },
      { label: "Walkthrough", href: "/walkthrough/" },
    ],
  },
  quickAnswer:
    "Frequently asked questions about +9999 Speed Keyboard Run! AP! are grouped by topic — identity and creator, codes and redemption, controls and key map, speed mechanics and AP modifier, upgrades and progression, maps and stages, walkthrough, and where to find live community coverage.",
  keyFacts: [
    { label: "Topic groups", value: "Identity, Codes, Controls, Speed, Upgrades, Maps, Walkthrough" },
    { label: "Last reviewed", value: "2026-09-09" },
    { label: "Universe id", value: "10759447618" },
  ],
  modules: [
    {
      id: "faq-faq-list",
      type: "entity-grid",
      heading: "Browse the FAQ",
      items: [
        { title: "Identity & Universe", summary: "Universe 10759447618, Creator Group MegumiGames!, dated status, franchise disambiguation.", href: "/about/" },
        { title: "Codes & Redemption", summary: "Active roster, in-game Codes button, and the dated status when no codes are active.", href: "/codes/" },
        { title: "Controls & Key Map", summary: "Generic movement verbs, reaction-prompt tiers, accessibility notes.", href: "/controls/" },
        { title: "Speed Mechanics", summary: "Reaction scoring, AP modifier effect, score-to-reward mapping.", href: "/speed/" },
        { title: "Upgrades & Progression", summary: "Speed tier, AP modifier, equipment, unlock-condition priority order.", href: "/upgrades/" },
        { title: "Maps & Stages", summary: "Speed-tier ladder, AP modifier status per stage, map-progression tips.", href: "/maps/" },
        { title: "Beginner Walkthrough", summary: "First-hour onboarding sequence and reading order.", href: "/walkthrough/" },
      ],
    },
    {
      id: "faq-freshness",
      type: "callout",
      tone: "tip",
      title: "FAQ freshness",
      body:
        "FAQ items are dated to the 2026-09-09 research snapshot. Specific reward amounts, exact per-key bindings, exact score formulas, exact upgrade thresholds, and per-map hidden mechanics are written as 'Not confirmed in Roblox community or creator videos as of 2026-09-09' wherever community coverage has not yet stabilized them. Refresh the relevant guide page whenever the community hub linked from the Roblox universe page publishes new information.",
    },
  ],
  faqIds: [
    "is-9999-ap-free",
    "are-9999-ap-codes-active",
    "what-does-ap-do",
    "where-do-i-start",
    "what-universe-is-9999-ap",
    "who-develops-9999-ap",
    "when-was-9999-ap-released",
    "how-is-9999-ap-different",
    "is-9999-ap-on-console",
    "where-enter-9999-ap-codes",
    "how-often-new-9999-ap-codes",
    "do-expired-9999-ap-codes-return",
    "which-keys-move-9999-ap",
    "9999-ap-arrow-or-wasd",
    "9999-ap-timing-window",
    "can-9999-ap-keys-rebind",
    "does-ap-change-controls",
    "how-is-9999-ap-score-calculated",
    "higher-tier-higher-score",
    "is-9999-ap-always-active",
    "where-does-9999-ap-score-go",
    "what-upgrade-first-9999-ap",
    "how-unlock-new-tier-9999-ap",
    "does-ap-cost-currency-9999-ap",
    "do-equipment-affect-scoring-9999-ap",
    "can-upgrades-change-9999-ap",
    "are-9999-ap-maps-named-after-tiers",
    "how-many-9999-ap-maps",
    "do-all-9999-ap-maps-have-ap",
    "can-i-replay-9999-ap-maps",
    "how-long-is-9999-ap-walkthrough",
    "do-i-enter-code-first-9999-ap",
    "controls-or-speed-first-9999-ap",
    "which-upgrade-first-9999-ap",
    "where-find-live-9999-ap-maps",
  ],
  relatedPageIds: ["about", "guides", "wiki", "speed-mechanics", "upgrades-progression", "maps-stages", "beginner-walkthrough"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-09",
};

export const sitePages: PageContent[] = [
  faqPage,
  contactPage,
  privacyPolicyPage,
  termsPage,
];
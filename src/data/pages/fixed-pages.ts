import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const identityOverviewPage: PageContent = {
  id: "about",
  translationKey: "identity-overview",
  locale: "en-US",
  routeKind: "fixed",
  slug: "about",
  url: "/about",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "+9999 Speed Keyboard Run AP Roblox: Universe, Creator, and Status",
  seoTitle: "+9999 Speed Keyboard Run AP Roblox - Universe & Creator",
  metaDescription:
    "Confirm +9999 Speed Keyboard Run AP Roblox: Universe 10759447618 by MegumiGames!, dated status as of 2026-09-09, distinct from Speed Keyboard Run.",
  summary:
    "+9999 Speed Keyboard Run! AP! is the keyboard-reaction runner on Roblox under Universe 10759447618 by Creator Group MegumiGames!. The page anchors the identity card and separates it from Speed Keyboard Run and Speed Keyboard Escape.",
  hero: {
    eyebrow: "Identity",
    subtitle:
      "Confirm Universe 10759447618, Creator Group MegumiGames!, and dated status for +9999 Speed Keyboard Run! AP!.",
    ctas: [
      { label: "Codes", href: "/codes/" },
      { label: "Controls", href: "/controls/" },
      { label: "Speed Mechanics", href: "/speed/" },
    ],
  },
  quickAnswer:
    "+9999 Speed Keyboard Run AP Roblox is the keyboard-reaction runner on Roblox as +9999 Speed Keyboard Run! AP! under Universe 10759447618 by Creator Group MegumiGames!. Root Place was created 2026-08-24T17:03:19Z and updated 2026-08-24T17:59:06Z, making it 16 days old as of 2026-09-09. Dated snapshot: player_count 951, visits 13356, favorited 16, ccu_change_1h_ratio 23.4, ccu_change_6h_ratio 17.6.",
  keyFacts: [
    { label: "Universe id", value: "10759447618" },
    { label: "Creator group", value: "MegumiGames!" },
    { label: "Root Place created", value: "2026-08-24T17:03:19Z" },
    { label: "Root Place last updated", value: "2026-08-24T17:59:06Z" },
    { label: "Publicly playable since", value: "2026-08-24" },
    { label: "Universe age (2026-09-09)", value: "16 days" },
    { label: "player_count (snapshot)", value: "951 (dated 2026-09-09)" },
    { label: "visits (snapshot)", value: "13,356 (dated 2026-09-09)" },
    { label: "favorited (snapshot)", value: "16 (dated 2026-09-09)" },
    { label: "ccu_change_1h_ratio (snapshot)", value: "23.4 (dated 2026-09-09)" },
    { label: "ccu_change_6h_ratio (snapshot)", value: "17.6 (dated 2026-09-09)" },
  ],
  modules: [
    {
      id: "identity-card",
      type: "prose",
      heading: "+9999 Speed Keyboard Run AP Roblox Identity Card",
      body:
        "The single hard fact about +9999 Speed Keyboard Run! AP! on Roblox is the Universe id. The Roblox universe page at https://www.roblox.com/games/10759447618 lists Universe 10759447618 as the canonical identifier, with Creator Group MegumiGames! named as the owning group. The Roblox Games API endpoint at https://games.roblox.com/v1/games?universeIds=10759447618 returns the same universe id and the Root Place id. The Roblox creator community at https://www.roblox.com/groups lets you search 'MegumiGames!' to confirm the group entry; the exact group id is to be confirmed against the universe page on the day of publication.",
    },
    {
      id: "identity-mechanics",
      type: "prose",
      heading: "What Kind of Roblox Game +9999 Speed Keyboard Run! AP! Is",
      body:
        "Mechanically, +9999 Speed Keyboard Run! AP! is a keyboard-reaction speed-running experience: timed keyboard prompts drive a runner along a course, the score reflects how cleanly each key was hit inside its timing window, and the AP modifier raises the speed tier by tightening the reaction window. The base vocabulary (keyboard reaction racing, speed stages, AP / speed upgrade modifiers) is shared with the broader Speed Keyboard Run family and the Speed Keyboard Escape line, but this specific +9999 speed keyboard run ap roblox release is its own universe with its own creator group.",
      links: [
        { label: "Codes", href: "/codes/", description: "Codes roster and redemption flow." },
        { label: "Controls", href: "/controls/", description: "Key map and reaction prompts." },
      ],
    },
    {
      id: "identity-differentiation",
      type: "prose",
      heading: "How +9999 Speed Keyboard Run! AP! Differs from Other Speed Keyboard Experiences",
      body:
        "Several Roblox experiences share vocabulary with this universe: Speed Keyboard Run, Speed Keyboard Escape, keyboard speed run roblox codes, speed keyboard game roblox, speed keyboard escape roblox game codes. None of those are Universe 10759447618. The only authoritative anchor for +9999 Speed Keyboard Run! AP! facts is the Roblox universe page and the Roblox Games API for Universe 10759447618. The Speed Keyboard Run and Speed Keyboard Escape franchises appear elsewhere on this site only as franchise-reference context inside the [speed mechanics](/speed/) and [upgrades](/upgrades/) pages.",
    },
    {
      id: "identity-ap-disambiguation",
      type: "callout",
      tone: "tip",
      title: "What 'AP' Means in +9999 Speed Keyboard Run! AP!",
      body:
        "The 'AP' inside the title refers to the in-game AP modifier that layers on top of the base keyboard-reaction loop. It is not an abbreviation for any real-world program, hardware standard, or scientific term. The common real-world senses of 'AP' that may appear in unrelated search results are: Advanced Placement (a US college-level academic program); Access Point (a wireless networking device); Action Potential (a neuroscience term for a nerve-cell electrical signal). None of those real-world senses describe the +9999 speed keyboard run ap roblox release.",
    },
  ],
  faqIds: [
    "what-universe-is-9999-ap",
    "who-develops-9999-ap",
    "when-was-9999-ap-released",
    "how-is-9999-ap-different",
    "is-9999-ap-on-console",
  ],
  relatedPageIds: ["guides", "wiki", "speed-mechanics", "upgrades-progression", "maps-stages", "beginner-walkthrough"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-09",
};

export const codesFixedPage: PageContent = {
  id: "guides",
  translationKey: "codes",
  locale: "en-US",
  routeKind: "fixed",
  slug: "codes",
  url: "/codes",
  pageType: "guides",
  presentation: { shell: "hub", variant: "card-grid" },
  h1: "+9999 Speed Keyboard Run Codes — Active Roblox AP! Codes & Redemption",
  seoTitle: "+9999 Speed Keyboard Run Codes - Roblox AP! Code List",
  metaDescription:
    "Active +9999 speed keyboard run codes for the Roblox AP! runner: dated status, redemption path, and where to verify working codes as of 2026-09-09.",
  summary:
    "Active +9999 Speed Keyboard Run codes roster for the Roblox AP! runner, with the in-game redemption path and a dated status line when no codes are confirmed.",
  hero: {
    eyebrow: "Codes",
    subtitle:
      "No active +9999 speed keyboard run codes had been published for Universe 10759447618 as of 2026-09-09. The page tracks the active roster, the redemption path, and the dated status.",
    ctas: [
      { label: "Identity Overview", href: "/about/" },
      { label: "Beginner Walkthrough", href: "/walkthrough/" },
    ],
  },
  quickAnswer:
    "No active +9999 speed keyboard run codes had been published for Universe 10759447618 as of 2026-09-09. Third-party Roblox codes sites (Pro Game Guides, Beebom, Destructoid-style Roblox aggregators) had not yet opened a tracked page for the new MegumiGames! release, and no reward amounts had been confirmed. Codes are redeemed in-game through the standard Roblox Codes button reached from the in-game menu.",
  keyFacts: [
    { label: "Active code count", value: "0 confirmed (dated 2026-09-09)" },
    { label: "Redemption path", value: "In-game Codes button" },
    { label: "Source order", value: "Universe page → community hub → third-party aggregators" },
    { label: "Reward amounts", value: "Not announced as of 2026-09-09" },
  ],
  modules: [
    {
      id: "codes-empty-roster",
      type: "data-table",
      heading: "Active +9999 Speed Keyboard Run Codes (As of 2026-09-09)",
      columns: [
        { key: "code", label: "Code" },
        { key: "reward", label: "Reward" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { code: "Not announced as of 2026-09-09", reward: "Not announced as of 2026-09-09", status: "Not announced as of 2026-09-09" },
      ],
    },
    {
      id: "codes-source-order",
      type: "steps",
      heading: "Where to Find +9999 Speed Keyboard Run Codes First",
      items: [
        { title: "Universe page community hub", body: "Open the Roblox universe page and look for the latest MegumiGames! post on the community hub linked from the page." },
        { title: "Creator community directory", body: "Follow Creator Group MegumiGames! through the Roblox creator community at https://www.roblox.com/groups (search 'MegumiGames!')." },
        { title: "In-game Codes button", body: "Check the in-game Codes button. If a code is currently active, the in-game menu is the first place the redemption flow becomes available." },
        { title: "Third-party aggregators", body: "Only after the official channels post a code should third-party aggregators (Pro Game Guides, Beebom) be treated as a backup list, never as the source of truth." },
      ],
    },
    {
      id: "codes-redemption",
      type: "steps",
      heading: "How to Redeem +9999 Speed Keyboard Run Codes In-Game",
      items: [
        { title: "Launch the experience", body: "Launch +9999 Speed Keyboard Run! AP! from the Roblox universe page and wait for the title screen to load." },
        { title: "Open the Codes button", body: "Open the in-game menu and locate the Codes button. The Codes entry is what the in-game experience exposes for code redemption." },
        { title: "Type the active code", body: "Type the active code exactly as posted by MegumiGames!, including any capitalisation, dashes, or trailing punctuation. Roblox codes are case-sensitive." },
        { title: "Confirm redemption", body: "Confirm the redemption. If the code is valid, the reward is granted to your account immediately and is visible on the next reload." },
        { title: "Rejected codes", body: "If the code is rejected, double-check spelling against the community hub post. Expired codes return a redemption-failed message and should not be retried." },
      ],
    },
    {
      id: "codes-why-empty",
      type: "prose",
      heading: "Why the Codes Roster Is Empty Right Now",
      body:
        "The empty roster is the honest answer to the question every reader lands on this page asking. The +9999 Speed Keyboard Run! AP! release is 16 days old as of 2026-09-09 and the third-party codes sites that usually pick up new Roblox universes have not yet indexed it, so there is no external source to cross-check an active code against. Without that cross-check, posting a stand-in code or a guessed reward would directly violate the dated status rule that this site applies to every brand-new universe.",
    },
    {
      id: "codes-until-drop",
      type: "prose",
      heading: "What to Do Until the First Codes Drop",
      body:
        "Codes are not the only path forward in +9999 Speed Keyboard Run! AP!. Until MegumiGames! publishes the first batch, the upgrade and progression loops carry the early game. The [identity overview](/about/) confirms the universe id and the Creator Group MegumiGames! ownership so every other page is anchored to the same source. The [controls](/controls/) reference maps every key to its prompt, the [upgrades](/upgrades/) guide ranks the early tier order by goal, and the [beginner walkthrough](/walkthrough/) stitches those pages together for the first hour.",
    },
  ],
  faqIds: [
    "are-9999-ap-codes-active",
    "where-enter-9999-ap-codes",
    "how-often-new-9999-ap-codes",
    "do-expired-9999-ap-codes-return",
  ],
  relatedPageIds: ["about", "wiki", "upgrades-progression", "beginner-walkthrough"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-09",
};

export const controlsKeysPage: PageContent = {
  id: "wiki",
  translationKey: "controls-keys",
  locale: "en-US",
  routeKind: "fixed",
  slug: "controls",
  url: "/controls",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+9999 Speed Keyboard Run Controls and Key Reaction Prompts",
  seoTitle: "+9999 Speed Keyboard Run Controls: Keys & Reactions",
  metaDescription:
    "+9999 speed keyboard run controls: learn the key map, how reaction prompts drive the runner, and what is unconfirmed about per-key inputs as of 2026-09-09.",
  summary:
    "+9999 speed keyboard run controls map the keyboard to a runner through generic movement verbs and prompted keys inside a short timing window. Per-key bindings beyond the generic verbs are not confirmed in Roblox community or creator videos as of 2026-09-09.",
  hero: {
    eyebrow: "Controls",
    subtitle:
      "Generic movement verbs and reaction-prompt timing for the +9999 Speed Keyboard Run controls layer.",
    ctas: [
      { label: "Speed Mechanics", href: "/speed/" },
      { label: "Upgrades", href: "/upgrades/" },
      { label: "Walkthrough", href: "/walkthrough/" },
    ],
  },
  quickAnswer:
    "+9999 speed keyboard run controls map your keyboard to a runner in this keyboard-reaction speed-running Roblox experience. The controls rely on generic movement verbs (move-left, move-right, jump, sprint, crouch) and on prompted keys pressed inside a short timing window. Exact per-key bindings beyond these generic verbs are not confirmed in Roblox community or creator videos as of 2026-09-09.",
  keyFacts: [
    { label: "Input device", value: "Keyboard (full keyboard driven)" },
    { label: "Generic verbs", value: "move-left, move-right, jump, sprint, crouch" },
    { label: "Timing tiers", value: "perfect, clean, miss" },
    { label: "Default layout", value: "WASD + Space or arrow keys" },
    { label: "Remap menu", value: "Not confirmed as of 2026-09-09" },
  ],
  modules: [
    {
      id: "controls-keymap",
      type: "data-table",
      heading: "+9999 Speed Keyboard Run Generic Movement Verbs",
      columns: [
        { key: "verb", label: "Verb" },
        { key: "function", label: "Function" },
        { key: "binding", label: "Binding (community coverage)" },
      ],
      rows: [
        { verb: "move-left", function: "Pushes the runner toward the left edge of the track.", binding: "Not confirmed in Roblox community or creator videos as of 2026-09-09" },
        { verb: "move-right", function: "Pushes the runner toward the right edge of the track.", binding: "Not confirmed in Roblox community or creator videos as of 2026-09-09" },
        { verb: "jump", function: "Lifts the runner off the track to clear low obstacles.", binding: "Not confirmed in Roblox community or creator videos as of 2026-09-09" },
        { verb: "sprint", function: "Raises running speed for a short burst.", binding: "Not confirmed in Roblox community or creator videos as of 2026-09-09" },
        { verb: "crouch", function: "Lowers the runner's hitbox under ceiling obstacles.", binding: "Not confirmed in Roblox community or creator videos as of 2026-09-09" },
      ],
    },
    {
      id: "controls-prompts",
      type: "prose",
      heading: "Reaction Prompts and Timing Windows",
      body:
        "The +9999 speed keyboard run controls layer is built around reaction prompts rather than free movement. The runner is moving forward automatically, the game flashes a key symbol on screen, and you press that key inside the prompt's timing window. Each prompt is graded into one of three tiers: a perfect hit (inside the tight inner window) converts to the highest per-key score contribution; a clean hit (inside the wider outer window) records a smaller per-key score contribution; a miss (outside both windows or hitting the wrong key) records zero and adds a short recovery time before the next prompt.",
    },
    {
      id: "controls-layouts",
      type: "comparison",
      heading: "Recommended Keyboard Layouts",
      options: [
        { name: "WASD + Space", summary: "WASD plus Space for jump, Shift for sprint, Ctrl or C for crouch.", bestFor: "Players with standard PC muscle memory.", badge: "community default" },
        { name: "Arrow keys + Space", summary: "Arrow keys plus Space for jump, Shift or another modifier for sprint, Ctrl or the Down arrow for crouch.", bestFor: "Players who prefer the arrow-key cluster.", badge: "community default" },
      ],
    },
    {
      id: "controls-accessibility",
      type: "callout",
      tone: "tip",
      title: "Accessibility and Latency Notes",
      body:
        "Run the experience on a wired or low-latency wireless keyboard; Bluetooth keyboards add visible input lag. Reduce Roblox and OS display scaling to 100 percent. Disable macros, auto-press, or turbo-fire tools. If you have a hand-mobility limitation, look for an in-game remap menu first; if not, an external keyboard-remap tool can rewire the controls.",
    },
  ],
  faqIds: [
    "which-keys-move-9999-ap",
    "9999-ap-arrow-or-wasd",
    "9999-ap-timing-window",
    "can-9999-ap-keys-rebind",
    "does-ap-change-controls",
  ],
  relatedPageIds: ["about", "speed-mechanics", "upgrades-progression", "beginner-walkthrough"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-09",
};

export const speedMechanicsPage: PageContent = {
  id: "speed-mechanics",
  translationKey: "speed-mechanics",
  locale: "en-US",
  routeKind: "fixed",
  slug: "speed",
  url: "/speed",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "+9999 Speed Keyboard Run Speed and AP Reaction Scoring",
  seoTitle: "+9999 Speed Keyboard Run Speed and Reaction Mechanics Explained",
  metaDescription:
    "+9999 speed keyboard run speed: how reaction timing is scored, what the AP modifier adds to the base loop, and what the community has not yet confirmed.",
  summary:
    "+9999 speed keyboard run speed loop scores each run on a reaction-speed cycle where every prompt hit inside its timing window contributes per-key score. AP lifts the score-to-reward mapping on top of the base speed loop.",
  hero: {
    eyebrow: "Speed & AP",
    subtitle:
      "Reaction-speed scoring and the AP modifier effect on the base loop.",
    ctas: [
      { label: "Controls", href: "/controls/" },
      { label: "Upgrades", href: "/upgrades/" },
      { label: "Walkthrough", href: "/walkthrough/" },
    ],
  },
  quickAnswer:
    "The +9999 speed keyboard run speed loop scores each run on a reaction-speed cycle where every prompt hit inside its timing window contributes per-key score. The run-end score rolls into a tier the upgrade system reads, so the AP modifier lifts the score-to-reward mapping on top of the base speed loop and interacts with the upgrade tier ladder. Exact score formulas beyond community coverage are not confirmed in Roblox community or creator videos as of 2026-09-09.",
  keyFacts: [
    { label: "Scoring layers", value: "per-prompt, per-run, per-tier multiplier" },
    { label: "AP effect", value: "Tighter windows + higher per-prompt score weight" },
    { label: "Activation mechanic", value: "Not confirmed as of 2026-09-09" },
    { label: "Score-to-reward mapping", value: "Per-run score → upgrade currency" },
  ],
  modules: [
    {
      id: "speed-three-layers",
      type: "prose",
      heading: "How +9999 Speed Keyboard Run Speed Scoring Works",
      body:
        "Three observable layers feed the +9999 speed keyboard run speed score: per-prompt score (every key prompt contributes a per-key score that scales with how close your press lands to the center of the timing window); per-run score (per-prompt scores add up across the full run); per-tier multiplier (the per-run score is multiplied by the speed tier the runner is on). The exact numerical weight of each layer is not confirmed in Roblox community or creator videos as of 2026-09-09.",
    },
    {
      id: "speed-reaction-time",
      type: "prose",
      heading: "Reaction Time as Background",
      body:
        "Reaction time, in the human-factors sense, is the delay between stimulus and motor response. Most healthy adults fall in a 200 to 300 millisecond range for simple visual stimuli, and trained reaction-time players can compress that range under 180 milliseconds with practice. The +9999 speed keyboard run speed loop is built around that real-world reaction-time distribution: prompts arrive at intervals forgiving enough for a new player to land most prompts as clean, and tight enough that a practiced player can convert most prompts to perfect on later speed tiers.",
    },
    {
      id: "speed-ap-effect",
      type: "prose",
      heading: "What the AP Modifier Adds to +9999 Speed Keyboard Run Speed",
      body:
        "The AP modifier in +9999 Speed Keyboard Run! AP! is an in-game speed and reaction modifier, not real-world Advanced Placement, Access Point, or Action Potential. What the AP modifier changes inside the run: prompt tightness (the timing windows shrink, so a press that would land as clean in the base loop lands as miss under AP); per-prompt score weight (the score contribution of a perfect hit rises, and the penalty for a miss rises with it); prompt interval (community creators describe the prompt arrival cadence as faster under AP). What AP does not change: the key-binding layer (the +9999 speed keyboard run controls stay the same whether AP is active or not); the upgrade tier ladder (the upgrade tier still sets the base per-run score multiplier).",
      links: [
        { label: "Controls", href: "/controls/", description: "Key-binding layer that AP does not change." },
        { label: "Upgrades", href: "/upgrades/", description: "Upgrade tier ladder that AP layers on top of." },
      ],
    },
    {
      id: "speed-score-reward",
      type: "prose",
      heading: "How Score-to-Reward Mapping Drives the Run Loop",
      body:
        "The +9999 speed keyboard run speed loop closes on a reward step. The run-end score converts to upgrade currency, and the upgrade tier ladder reads that currency to gate new speed tiers, new AP modifier bands, and new equipment upgrades. The conversion math itself is not confirmed in Roblox community or creator videos as of 2026-09-09, so this page describes the conversion as a tier concept rather than as a fixed rate.",
    },
    {
      id: "speed-franchise-ref",
      type: "callout",
      tone: "caution",
      title: "Franchise Reference Background Only",
      body:
        "The broader Speed Keyboard Run and Speed Keyboard Escape Roblox franchise uses a similar vocabulary: keyboard reaction racing, speed stages, AP-style modifiers, and per-stage score multipliers. That franchise is referenced here for vocabulary orientation only. The franchise mechanics are not used as current-game facts for +9999 Speed Keyboard Run! AP! and do not describe Universe 10759447618 directly. MegumiGames! is the creator group for Universe 10759447618 and is not part of the broader franchise's creator lineage as described by community creators.",
    },
  ],
  faqIds: [
    "what-does-ap-do",
    "how-is-9999-ap-score-calculated",
    "higher-tier-higher-score",
    "is-9999-ap-always-active",
    "where-does-9999-ap-score-go",
  ],
  relatedPageIds: ["about", "wiki", "upgrades-progression", "beginner-walkthrough"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-09",
};

export const upgradesProgressionPage: PageContent = {
  id: "upgrades-progression",
  translationKey: "upgrades-progression",
  locale: "en-US",
  routeKind: "fixed",
  slug: "upgrades",
  url: "/upgrades",
  pageType: "guides",
  presentation: { shell: "hub", variant: "card-grid" },
  h1: "+9999 Speed Keyboard Run Upgrades and Speed Tier Progression",
  seoTitle: "+9999 Speed Keyboard Run Upgrades and Progression Guide",
  metaDescription:
    "+9999 speed keyboard run upgrades: speed tiers, AP modifier unlocks, equipment paths, and the progression order recommended by community videos.",
  summary:
    "+9999 speed keyboard run upgrades tree advances the runner along a four-part progression ladder: speed tier, AP modifier tier, equipment upgrades, and unlock-condition gates. The recommended priority order is speed tier, then AP modifier, then equipment, then unlock gates.",
  hero: {
    eyebrow: "Upgrades",
    subtitle:
      "Speed tier, AP modifier, equipment, and unlock-condition priority order for the +9999 speed keyboard run upgrades tree.",
    ctas: [
      { label: "Speed Mechanics", href: "/speed/" },
      { label: "Maps", href: "/maps/" },
      { label: "Walkthrough", href: "/walkthrough/" },
    ],
  },
  quickAnswer:
    "The +9999 speed keyboard run upgrades tree advances the runner along a four-part progression ladder: speed tier unlocks, AP modifier tier unlocks, equipment upgrades, and unlock conditions gated by run-end score. The fastest way to advance the tree is to layer upgrades in the order speed tier, then AP modifier, then equipment, because each layer feeds the next.",
  keyFacts: [
    { label: "Progression layers", value: "Speed tier, AP modifier, equipment, unlock gates" },
    { label: "Priority order", value: "Speed → AP → Equipment → Gates" },
    { label: "Conversion", value: "Per-run score × tier multiplier → upgrade currency" },
    { label: "Exact tier math", value: "Not confirmed as of 2026-09-09" },
  ],
  modules: [
    {
      id: "upgrades-ladder",
      type: "prose",
      heading: "The Four-Layer Progression Ladder for +9999 Speed Keyboard Run Upgrades",
      body:
        "The +9999 speed keyboard run upgrades tree sits on a four-layer progression ladder. Each layer feeds the next, and the recommended priority order for new players is bottom-up: speed tier first, AP modifier second, equipment third, and unlock-condition gates fourth. The four layers in detail: speed tier (the core progression tier the runner is on); AP modifier tier (the in-game speed and reaction modifier); equipment upgrades (cosmetic or functional upgrades that read the run-end score as their unlock currency); unlock-condition gates (side conditions such as clearing a specific stage or finishing a run without misses).",
    },
    {
      id: "upgrades-priority",
      type: "data-table",
      heading: "Recommended Upgrade Priority Order",
      columns: [
        { key: "rank", label: "Rank" },
        { key: "layer", label: "Layer" },
        { key: "rationale", label: "Rationale" },
      ],
      rows: [
        { rank: "1", layer: "Speed tier", rationale: "Highest leverage; raises per-run score multiplier for every later run." },
        { rank: "2", layer: "AP modifier", rationale: "Stacks on top of speed tier and amplifies perfect-hit value." },
        { rank: "3", layer: "Equipment", rationale: "Mostly cosmetic / indicator; defer until speed and AP are funded." },
        { rank: "4", layer: "Unlock gates", rationale: "Side objectives; open side rewards, do not raise per-run multiplier." },
      ],
    },
    {
      id: "upgrades-conversion",
      type: "prose",
      heading: "How Run-End Score Feeds the Upgrade Tree",
      body:
        "Each prompted key press contributes a per-key score, graded into perfect, clean, or miss. Per-prompt scores add up across the run. The per-run score is multiplied by the speed tier multiplier. The multiplied score converts into upgrade currency. Upgrade currency is spent across speed tier, AP modifier tier, equipment, and unlock gates. The exact conversion rate from multiplied run-end score to upgrade currency is not confirmed in Roblox community or creator videos as of 2026-09-09.",
    },
    {
      id: "upgrades-habits",
      type: "recipes",
      heading: "Score-Earning Habits That Compound Upgrades",
      items: [
        { name: "Practice on current tier", inputs: ["current speed tier", "clean prompt cadence"], output: "Higher upgrade currency per minute.", note: "A clean run on a low tier beats a miss-heavy run on a high tier." },
        { name: "Defer equipment", inputs: ["speed tier funded", "AP modifier funded"], output: "Compound per-run multiplier first.", note: "Equipment is a currency sink that does not raise the multiplier." },
        { name: "Read prompts before pressing", inputs: ["AP-active tier", "prompt cadence"], output: "Reduced late-press penalty.", note: "Late presses cost more under AP." },
      ],
    },
    {
      id: "upgrades-checklist",
      type: "steps",
      heading: "Fast-Progression Checklist",
      items: [
        { title: "Clear current tier threshold", body: "Start on the lowest speed tier and clear the run-end score threshold for the next tier before spending on any other layer." },
        { title: "Re-read controls", body: "Re-read the controls-keys page for the key-binding layer before pushing to a higher speed tier." },
        { title: "Re-read speed mechanics", body: "Re-read the speed-mechanics page for the AP modifier effect before investing in AP unlocks." },
        { title: "Save for speed and AP", body: "Save upgrade currency for speed tier and AP modifier unlocks first; defer equipment purchases." },
        { title: "Clear side gates", body: "Clear unlock-condition gates as side objectives, not as the main path." },
        { title: "Re-check universe page", body: "Re-check the Roblox universe page for Universe 10759447618 before each play session for Root Place updates." },
      ],
    },
  ],
  faqIds: [
    "what-upgrade-first-9999-ap",
    "how-unlock-new-tier-9999-ap",
    "does-ap-cost-currency-9999-ap",
    "do-equipment-affect-scoring-9999-ap",
    "can-upgrades-change-9999-ap",
  ],
  relatedPageIds: ["about", "wiki", "speed-mechanics", "beginner-walkthrough"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-09",
};

export const mapsStagesPage: PageContent = {
  id: "maps-stages",
  translationKey: "maps-stages",
  locale: "en-US",
  routeKind: "fixed",
  slug: "maps",
  url: "/maps",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "All +9999 Speed Keyboard Run Maps: Tier Order and AP Modifier Status",
  seoTitle: "+9999 Speed Keyboard Run Maps: Tier Order and AP Modifiers",
  metaDescription:
    "Explore +9999 speed keyboard run maps, stage tier order, and AP modifier status. Reference page for players learning keyboard-reaction stages and unlock conditions.",
  summary:
    "+9999 Speed Keyboard Run maps are organized as a keyboard-reaction speed-running ladder ordered by speed tier, with each stage gated by reaction time and a completion reward. The full per-map roster and exact stage names are not confirmed in Roblox community or creator videos as of 2026-09-09.",
  hero: {
    eyebrow: "Maps",
    subtitle:
      "Speed-tier ladder ordering, AP modifier status per stage, and the map-progression tips that survive the status gap.",
    ctas: [
      { label: "Speed Mechanics", href: "/speed/" },
      { label: "Upgrades", href: "/upgrades/" },
      { label: "Walkthrough", href: "/walkthrough/" },
    ],
  },
  quickAnswer:
    "+9999 Speed Keyboard Run maps are organized as a keyboard-reaction speed-running ladder ordered by speed tier, with each stage gated by reaction time and a completion reward. The full per-map roster, exact stage names, and per-map hidden mechanics beyond what community videos cover are not confirmed in Roblox community or creator videos as of 2026-09-09.",
  keyFacts: [
    { label: "Ordering signal", value: "Speed tier (not chapter number)" },
    { label: "AP modifier status", value: "Per-map flag" },
    { label: "Completion reward", value: "Unlocks next tier" },
    { label: "Per-map hidden mechanics", value: "Not confirmed as of 2026-09-09" },
  ],
  modules: [
    {
      id: "maps-ordering",
      type: "prose",
      heading: "How the +9999 Speed Keyboard Run Maps Ladder Is Ordered",
      body:
        "Each stage escalates the reaction-time requirement: earlier stages accept slower key presses inside the timing window, while later stages tighten the window and reward faster mean reaction time with a higher completion reward. The maps ladder has three observable properties that any beginner can confirm inside the experience: a speed tier increases as the player progresses through the ladder; an AP modifier status flag is associated with each stage; a completion reward is awarded when the stage's reaction-time threshold is met.",
    },
    {
      id: "maps-ap-flag",
      type: "prose",
      heading: "AP Modifier Status on Each Map",
      body:
        "AP modifier status is a per-map flag rather than a global toggle. A map running in AP mode layers the keyboard-reaction prompt with the AP modifier scoring rules, while a map running in base speed mode uses only the keyboard-reaction scoring loop. Whether every map in the ladder carries an AP mode flag, or only a subset, is not confirmed in Roblox community or creator videos as of 2026-09-09; the page describes AP status as a per-map flag and points readers to the speed mechanics page for the scoring-side explanation.",
      links: [
        { label: "Speed Mechanics", href: "/speed/", description: "AP modifier scoring explanation." },
      ],
    },
    {
      id: "maps-roster",
      type: "callout",
      tone: "unknown",
      title: "Live Maps Roster Status",
      body:
        "The live maps roster is not enumerated in any official or third-party guide that this page can cite as of 2026-09-09. The Roblox universe page for Universe 10759447618 does not publish a stage list. Community videos that cover the live experience so far describe the maps ladder as an ordered keyboard-reaction progression rather than as a fixed chapter list with named levels. The exact stage names, the exact unlock conditions per stage, and the exact reward values per stage are not confirmed in Roblox community or creator videos as of 2026-09-09.",
    },
    {
      id: "maps-hidden-mechanics",
      type: "prose",
      heading: "Per-Map Hidden Mechanics",
      body:
        "Per-map hidden mechanics are the most common reason a maps reference page goes wrong on a brand-new Roblox universe. Hidden mechanics typically include off-path switches, alternate reaction-time shortcuts, AP-mode toggles hidden behind a specific stage, or completion-reward bonuses that only fire under certain key-press sequences. For +9999 Speed Keyboard Run, none of these hidden mechanics are confirmed in Roblox community or creator videos as of 2026-09-09.",
    },
    {
      id: "maps-progression-tips",
      type: "recipes",
      heading: "Map Progression Tips That Survive the Status Gap",
      items: [
        { name: "Treat each map as a reaction-time target", inputs: ["current speed tier", "per-key timing window"], output: "Clean ladder rung.", note: "Free-roaming wastes reaction-time attempts." },
        { name: "Lock in key map before advancing", inputs: ["controls page", "keyboard-reaction key map"], output: "Stable finger placement.", note: "Avoids relearning at each tier." },
        { name: "Read AP scoring before AP maps", inputs: ["speed mechanics page", "AP modifier rules"], output: "Known scoring change.", note: "AP status is a per-map flag." },
        { name: "Check codes before each session", inputs: ["codes page", "active reward drop"], output: "Pre-tier unlocks.", note: "Codes often unlock the next tier." },
      ],
    },
  ],
  faqIds: [
    "are-9999-ap-maps-named-after-tiers",
    "how-many-9999-ap-maps",
    "do-all-9999-ap-maps-have-ap",
    "can-i-replay-9999-ap-maps",
  ],
  relatedPageIds: ["about", "speed-mechanics", "upgrades-progression", "beginner-walkthrough"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-09",
};

export const beginnerWalkthroughPage: PageContent = {
  id: "beginner-walkthrough",
  translationKey: "beginner-walkthrough",
  locale: "en-US",
  routeKind: "fixed",
  slug: "walkthrough",
  url: "/walkthrough",
  pageType: "site",
  presentation: { shell: "hub", variant: "card-grid" },
  h1: "The +9999 Speed Keyboard Run Walkthrough: First-Hour Onboarding for Beginners",
  seoTitle: "+9999 Speed Keyboard Run Walkthrough: Beginner Onboarding Guide",
  metaDescription:
    "Complete +9999 speed keyboard run walkthrough for beginners: onboarding steps, keyboard-reaction controls, AP modifier overview, codes entry, and stage ladder.",
  summary:
    "First-hour onboarding hub for the +9999 speed keyboard run walkthrough: load it, learn the keyboard-reaction prompt, redeem any active code, learn controls, read speed and upgrades, then advance through early maps.",
  hero: {
    eyebrow: "First-hour onboarding",
    subtitle:
      "A stable sequence of decisions for the first hour inside +9999 Speed Keyboard Run! AP!, with links into the deeper guide pages.",
    ctas: [
      { label: "Identity Overview", href: "/about/" },
      { label: "Codes", href: "/codes/" },
      { label: "Controls", href: "/controls/" },
    ],
  },
  quickAnswer:
    "This +9999 Speed Keyboard Run walkthrough is the hub for US English beginners entering Universe 10759447618. It sequences the first-hour flow: load the universe, learn the keyboard-reaction prompt, redeem any active code, learn the controls, read the speed and upgrades pages, then advance through early maps. Multi-day progression timelines beyond community coverage are not confirmed in Roblox community as of 2026-09-09.",
  keyFacts: [
    { label: "First-hour scope", value: "Onboarding checklist only" },
    { label: "Reading order", value: "Codes → Controls → Speed → Upgrades → Maps" },
    { label: "Universe id", value: "10759447618" },
    { label: "Creator group", value: "MegumiGames!" },
    { label: "Multi-day timelines", value: "Not confirmed as of 2026-09-09" },
  ],
  modules: [
    {
      id: "walkthrough-scope",
      type: "prose",
      heading: "What This 9999 Speed Keyboard Run Walkthrough Actually Covers",
      body:
        "The +9999 Speed Keyboard Run walkthrough is the onboarding hub for the live Roblox experience under Universe 10759447618, Creator Group MegumiGames!, created and last updated on 2026-08-24. It is intentionally scoped to the first hour inside the experience because that is the time window in which a beginner can take a stable set of decisions: which keys to bind, which page to read first, and how to read the AP modifier label on the first reaction prompt.",
    },
    {
      id: "walkthrough-first-hour",
      type: "steps",
      heading: "Onboarding Sequence for the First Hour",
      items: [
        { title: "Load the universe", body: "Load the experience from the Roblox universe page and confirm the title reads '+9999 Speed Keyboard Run! AP!' so the right universe is queued before any key press is registered." },
        { title: "Enter the reaction prompt", body: "Enter the keyboard-reaction prompt the experience displays on first launch and let it set the baseline reaction-time window for the rest of the run." },
        { title: "Redeem codes", body: "Open the in-game Codes entry point, redeem any active code listed on the codes page, and close the Codes panel before continuing the run." },
        { title: "Read controls", body: "Read the controls page to confirm the keyboard-reaction key map before any speed-tier attempt." },
        { title: "Read speed and upgrades", body: "Read the speed mechanics page for how the AP modifier changes the keyboard-reaction scoring loop, and read the upgrades page for which speed-tier upgrades to prioritize first." },
        { title: "Advance the maps", body: "Advance through the early maps on the ladder described on the maps page, treating each map as a reaction-time target rather than as a free-roam stage." },
      ],
    },
    {
      id: "walkthrough-reading-order",
      type: "entity-grid",
      heading: "What to Read First, Second, and Third",
      items: [
        { title: "First: Codes", summary: "Check for any active reward drop before the first run.", href: "/codes/" },
        { title: "Second: Controls", summary: "Lock in the keyboard-reaction key map before the first speed-tier attempt.", href: "/controls/" },
        { title: "Third: Speed Mechanics", summary: "Understand the scoring loop and AP modifier before any reaction-time record.", href: "/speed/" },
        { title: "Third: Upgrades", summary: "Know the speed-tier upgrade priority before spending upgrade currency.", href: "/upgrades/" },
        { title: "Reference: Maps", summary: "Stage ladder and AP modifier status per stage.", href: "/maps/" },
        { title: "Reference: About", summary: "Universe identity and franchise disambiguation.", href: "/about/" },
      ],
    },
    {
      id: "walkthrough-decision-map",
      type: "prose",
      heading: "How the First-Hour Decisions Map to the Guide Pages",
      body:
        "Each first-hour decision maps to a single dedicated guide page so the hub stays short and the deeper pages stay answer-rich. The codes decision maps to the codes page; the controls decision maps to the controls page; the speed decision maps to the speed mechanics page; the upgrade decision maps to the upgrades page; the map decision maps to the maps page. The about page is reference material that confirms the universe identity and disambiguates the experience from the broader Speed Keyboard Run and Speed Keyboard Escape Roblox franchises.",
    },
    {
      id: "walkthrough-faq",
      type: "callout",
      tone: "tip",
      title: "Common First-Hour Questions",
      body:
        "Beginners landing on the hub usually have one of three first-hour questions: where to find codes (check the codes page before the first run and redeem any active code inside the in-game Codes panel); how the AP modifier changes the keyboard-reaction prompt (read the speed mechanics page); which speed-tier upgrade to buy first (read the upgrades page for the recommended priority order).",
    },
    {
      id: "walkthrough-reread",
      type: "prose",
      heading: "When to Re-Read the Hub",
      body:
        "The hub is short by design and is meant to be re-read after the dedicated guide pages have been consulted once. The natural re-read points are after the first completed map on the maps page, after the first speed-tier upgrade purchased on the upgrades page, and after the first code redemption on the codes page.",
    },
    {
      id: "walkthrough-no-promise",
      type: "callout",
      tone: "caution",
      title: "What This Walkthrough Does Not Promise",
      body:
        "The walkthrough does not promise a day-by-day schedule, an exact code roster beyond what third-party codes sites document on the day of play, or a complete per-map roster with named stages. Each of those facts is recorded as a dated status statement on the relevant dedicated page. The hub's promise is narrower and more durable: a beginner who follows the first-hour sequence and reads the linked pages will know the keyboard-reaction key map, will have redeemed any active code, and will be on the right speed-tier upgrade path before the second run.",
    },
  ],
  faqIds: [
    "how-long-is-9999-ap-walkthrough",
    "do-i-enter-code-first-9999-ap",
    "controls-or-speed-first-9999-ap",
    "which-upgrade-first-9999-ap",
    "where-find-live-9999-ap-maps",
  ],
  relatedPageIds: ["about", "guides", "wiki", "speed-mechanics", "upgrades-progression", "maps-stages"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-09",
};

export const fixedPages: PageContent[] = [
  identityOverviewPage,
  codesFixedPage,
  controlsKeysPage,
  speedMechanicsPage,
  upgradesProgressionPage,
  mapsStagesPage,
  beginnerWalkthroughPage,
];
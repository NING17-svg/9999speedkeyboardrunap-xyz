import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Homepage
  {
    id: "is-9999-ap-free",
    question: "Is +9999 Speed Keyboard Run! AP! free to play on Roblox?",
    answer:
      "Yes. The Roblox universe page lists the experience as a publicly playable Roblox Experience under Universe 10759447618, owned by Creator Group MegumiGames!. You only need a Roblox account and the standard Roblox client.",
    pageIds: ["home", "about", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "are-9999-ap-codes-active",
    question: "Does +9999 Speed Keyboard Run! AP! have working codes right now?",
    answer:
      "As of 2026-09-09, no third-party codes site had listed an active code for Universe 10759447618. The codes page is the page to refresh whenever MegumiGames! drops a new batch.",
    pageIds: ["home", "guides", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-does-ap-do",
    question: "What does the AP modifier actually change?",
    answer:
      "AP tightens the key-reaction timing window and adds a higher-speed tier on top of the base reaction loop. The speed mechanics page walks through how scoring shifts once AP is active versus the base run.",
    pageIds: ["home", "speed-mechanics", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-do-i-start",
    question: "Where do I start as a beginner?",
    answer:
      "Start with the beginner walkthrough for the first-hour checklist, then read the controls and speed mechanics pages before spending upgrades.",
    pageIds: ["home", "beginner-walkthrough", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Identity overview
  {
    id: "what-universe-is-9999-ap",
    question: "What Roblox universe is +9999 Speed Keyboard Run! AP!?",
    answer:
      "Universe 10759447618, listed on the Roblox universe page and confirmable through the Roblox Games API.",
    pageIds: ["about", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "who-develops-9999-ap",
    question: "Who develops +9999 Speed Keyboard Run! AP!?",
    answer:
      "Creator Group MegumiGames! is named as the owning group on the universe page; the exact group id is to be confirmed against the universe page on the day of publication.",
    pageIds: ["about", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "when-was-9999-ap-released",
    question: "When was +9999 Speed Keyboard Run! AP! released?",
    answer:
      "Universe Root Place created 2026-08-24T17:03:19Z, last updated 2026-08-24T17:59:06Z. The experience has been publicly playable on Roblox since 2026-08-24, making it 16 days old as of 2026-09-09.",
    pageIds: ["about", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-is-9999-ap-different",
    question: "How is +9999 Speed Keyboard Run! AP! different from other Speed Keyboard Run games?",
    answer:
      "It is a distinct Roblox universe with its own creator group, its own AP modifier layer, and its own update cadence. Other Speed Keyboard Run and Speed Keyboard Escape experiences share vocabulary but are not Universe 10759447618.",
    pageIds: ["about", "faq"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-9999-ap-on-console",
    question: "Is +9999 Speed Keyboard Run! AP! on console or mobile?",
    answer:
      "Console ports and other-platform releases are not announced as of 2026-09-09. The Roblox client remains the supported way to play.",
    pageIds: ["about", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Codes
  {
    id: "where-enter-9999-ap-codes",
    question: "Where do I enter codes in +9999 Speed Keyboard Run! AP!?",
    answer:
      "Codes are redeemed through the in-game Codes button reachable from the standard Roblox menu. The community hub video or post linked from the universe page is the same channel that powers the in-game menu.",
    pageIds: ["guides", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-often-new-9999-ap-codes",
    question: "How often does MegumiGames! post new codes?",
    answer:
      "The release is 16 days old as of 2026-09-09, and no public cadence has been published. The community hub linked from the universe page is the first place a new batch would appear.",
    pageIds: ["guides", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "do-expired-9999-ap-codes-return",
    question: "Do expired +9999 speed keyboard run codes ever come back?",
    answer:
      "No. Expired codes return a redemption-failed message in the in-game Codes button and cannot be retried on the same account. They are kept on the page only as historical context once they are confirmed expired.",
    pageIds: ["guides", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Controls
  {
    id: "which-keys-move-9999-ap",
    question: "Which keys move the runner in +9999 Speed Keyboard Run! AP!?",
    answer:
      "Community coverage names the generic movement verbs (move-left, move-right, jump, sprint, crouch), but the exact per-key bindings are not confirmed in Roblox community or creator videos as of 2026-09-09.",
    pageIds: ["wiki", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "9999-ap-arrow-or-wasd",
    question: "Does the game use the arrow keys or WASD by default?",
    answer:
      "Community coverage on the broader keyboard-reaction speed-running Roblox genre names both layouts, but the specific default for +9999 Speed Keyboard Run! AP! is not confirmed in Roblox community or creator videos as of 2026-09-09.",
    pageIds: ["wiki", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "9999-ap-timing-window",
    question: "What is the reaction-prompt timing window?",
    answer:
      "The runner advances when you press the prompted key inside a short timing window. The exact millisecond length of the inner and outer windows is not confirmed in Roblox community or creator videos as of 2026-09-09.",
    pageIds: ["wiki", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "can-9999-ap-keys-rebind",
    question: "Can I rebind the keys in +9999 Speed Keyboard Run! AP!?",
    answer:
      "Whether the experience exposes a player-remappable key menu is not confirmed in Roblox community or creator videos as of 2026-09-09. If not, an external keyboard-remap tool can rewire the controls.",
    pageIds: ["wiki", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "does-ap-change-controls",
    question: "Does the AP modifier change the controls?",
    answer:
      "The AP modifier is layered on top of the base reaction-speed loop, not on top of the key-binding layer. The +9999 speed keyboard run controls stay the same whether AP is active or not.",
    pageIds: ["wiki", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Speed mechanics
  {
    id: "how-is-9999-ap-score-calculated",
    question: "How is the +9999 Speed Keyboard Run! AP! score calculated?",
    answer:
      "Each prompted key press is graded into perfect, clean, or miss, and the per-prompt scores add up across the run. The exact score formulas are not confirmed in Roblox community or creator videos as of 2026-09-09.",
    pageIds: ["speed-mechanics", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "higher-tier-higher-score",
    question: "Does higher speed tier mean a higher score?",
    answer:
      "Higher speed tiers apply a tier multiplier to the per-run score, but the per-prompt score weight still depends on how many prompts you land as perfect or clean. A clean run on a lower tier can outscore a sloppy run on a higher tier.",
    pageIds: ["speed-mechanics", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-9999-ap-always-active",
    question: "Is the AP modifier always active?",
    answer:
      "Whether AP is a player toggle, a stage-gated modifier that unlocks with progression, or a per-run roll is not confirmed in Roblox community or creator videos as of 2026-09-09. Community creators describe AP as a tier-banded feature.",
    pageIds: ["speed-mechanics", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-does-9999-ap-score-go",
    question: "Where does the +9999 Speed Keyboard Run! AP! run-end score go?",
    answer:
      "The run-end score converts to upgrade currency, which the upgrade tier ladder reads to gate new speed tiers, AP modifier bands, and equipment upgrades. The exact conversion rate is not confirmed in Roblox community or creator videos as of 2026-09-09.",
    pageIds: ["speed-mechanics", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Upgrades
  {
    id: "what-upgrade-first-9999-ap",
    question: "What should I upgrade first in +9999 Speed Keyboard Run! AP!?",
    answer:
      "Community creators recommend speed tier first, then AP modifier, then equipment, then unlock-condition gates. The exact tier numbers are not confirmed in Roblox community or creator videos as of 2026-09-09.",
    pageIds: ["upgrades-progression", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-unlock-new-tier-9999-ap",
    question: "How do I unlock a new speed tier?",
    answer:
      "Reach the run-end score threshold for the current speed tier. The exact threshold numbers are not confirmed in Roblox community or creator videos as of 2026-09-09.",
    pageIds: ["upgrades-progression", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "does-ap-cost-currency-9999-ap",
    question: "Does the AP modifier cost upgrade currency?",
    answer:
      "Community creators describe AP modifier tiers as a separate unlock layer that costs upgrade currency once the runner has reached certain speed tier bands. The exact tier-band thresholds are not confirmed in Roblox community or creator videos as of 2026-09-09.",
    pageIds: ["upgrades-progression", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "do-equipment-affect-scoring-9999-ap",
    question: "Do equipment upgrades affect scoring in +9999 Speed Keyboard Run! AP!?",
    answer:
      "Community creators describe equipment upgrades as visual skins, trail effects, and helper indicators that do not raise the underlying prompt timing math or the per-run score multiplier. The exact equipment list is not confirmed in Roblox community or creator videos as of 2026-09-09.",
    pageIds: ["upgrades-progression", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "can-upgrades-change-9999-ap",
    question: "Can the upgrade tree change between Root Place updates?",
    answer:
      "Yes. The Root Place was created 2026-08-24T17:03:19Z and last updated 2026-08-24T17:59:06Z, so any subsequent Root Place update by MegumiGames! could add, remove, or rebalance upgrade layers.",
    pageIds: ["upgrades-progression", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Maps
  {
    id: "are-9999-ap-maps-named-after-tiers",
    question: "Are the +9999 Speed Keyboard Run maps named after speed tiers?",
    answer:
      "The maps are ordered by speed tier rather than by a fixed chapter list. Whether each tier carries a distinct display name is not confirmed in Roblox community or creator videos as of 2026-09-09.",
    pageIds: ["maps-stages", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-many-9999-ap-maps",
    question: "How many maps are in the +9999 Speed Keyboard Run ladder?",
    answer:
      "The exact map count is not confirmed in Roblox community or creator videos as of 2026-09-09. The ladder is observed as an ordered keyboard-reaction progression whose tier count grows with the player's reaction-time record.",
    pageIds: ["maps-stages", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "do-all-9999-ap-maps-have-ap",
    question: "Do all +9999 Speed Keyboard Run maps have the AP modifier enabled?",
    answer:
      "AP modifier status is a per-map flag. Whether every map carries AP mode or only a subset does is not confirmed in Roblox community or creator videos as of 2026-09-09.",
    pageIds: ["maps-stages", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "can-i-replay-9999-ap-maps",
    question: "Can I replay a completed +9999 Speed Keyboard Run map to farm rewards?",
    answer:
      "Replay behavior is not confirmed in Roblox community or creator videos as of 2026-09-09. Treat each completion as a one-shot ladder rung until community videos document a replay loop.",
    pageIds: ["maps-stages", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Walkthrough
  {
    id: "how-long-is-9999-ap-walkthrough",
    question: "How long is the +9999 Speed Keyboard Run walkthrough for a true beginner?",
    answer:
      "The first-hour onboarding sequence on the walkthrough hub is the only segment with a stable length. Multi-day progression timelines beyond community coverage are not confirmed in Roblox community as of 2026-09-09.",
    pageIds: ["beginner-walkthrough", "faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "do-i-enter-code-first-9999-ap",
    question: "Do I need to enter a code before my first run in +9999 Speed Keyboard Run! AP!?",
    answer:
      "Yes. Check the codes page before the first run and redeem any active code inside the in-game Codes panel so the reward lands before the first speed-tier attempt.",
    pageIds: ["beginner-walkthrough", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "controls-or-speed-first-9999-ap",
    question: "What should I learn first, controls or speed mechanics in +9999 Speed Keyboard Run! AP!?",
    answer:
      "Learn the keyboard-reaction key map on the controls page first, then read the speed mechanics page so the scoring loop and the AP modifier behavior are understood before any reaction-time record is set.",
    pageIds: ["beginner-walkthrough", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "which-upgrade-first-9999-ap",
    question: "Which +9999 Speed Keyboard Run upgrade should I buy first?",
    answer:
      "The upgrades page ranks the speed-tier upgrades that matter first for a beginner ladder run and explains the rationale for each priority slot.",
    pageIds: ["beginner-walkthrough", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-find-live-9999-ap-maps",
    question: "Where do I find the live +9999 Speed Keyboard Run maps roster once community videos document it?",
    answer:
      "The maps page describes the keyboard-reaction maps ladder and links out to community sources for the live map roster, which community videos are still in the process of documenting as of 2026-09-09.",
    pageIds: ["beginner-walkthrough", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
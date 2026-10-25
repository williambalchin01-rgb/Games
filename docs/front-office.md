# Front Office — design

An American football management game set in Britain and Europe. You run a
club from an amateur side on a council pitch to the best team in Europe. You
never call plays; you set the plan, hire the people, pick the squad and live
with the results.

Status: **designed, not started.** First on the roadmap. Build only on the
owner's go-ahead.

Name: *Front Office* (confirmed for now).

**You are the owner.** You run the football side as well — game plan,
squad, staff — but nobody can sack you. The club is yours.

---

## 1. Pillars

1. **Numbers you control, results you watch.** Every decision is a number
   you can see and change (run 30%, blitz 25%), and every match plays out
   live so you see what those numbers did.
2. **A real climb.** Amateur football feels amateur: players miss games,
   money is subs and a raffle, the pitch is shared with rugby. Each tier up
   changes what you worry about.
3. **Your staff matter.** Coordinators are hired, rated and paid, and their
   quality shows on the field and in the advice they give (Retro Bowl).
4. **Honest simulation.** Opponent tendencies, stats and highlights all
   come from plays the engine actually ran. Nothing is faked for show.
5. **Phone first, relaxed.** A week takes a few minutes; a match takes
   about six. No fail state that ends the save.

Clubs, players and leagues are fictional — no licensing, nothing to get
wrong about the real world.

---

## 2. The pyramid

Start in England. Europe opens up at the top.

| Tier | Name (working) | Clubs | Feel |
|---|---|---|---|
| 5 | Regional League (North / Midlands / South) | 8 per region | Amateur. Unpaid players, attendance risk, council pitch. |
| 4 | National League Two | 10 | Amateur with ambition. Expenses paid, first sponsors. |
| 3 | National League One | 10 | Semi-pro. Part-time contracts, small paying crowds. |
| 2 | Premier Division | 12 | Professional. Full contracts, imports, real media. |
| 1 | European Elite League | 16 (Britain, Germany, France, Netherlands, Italy, Spain, Scandinavia, Austria) | The top. Big budgets, the European Cup. |

- **Season:** regular season of 10–14 weeks depending on tier, then
  play-offs (top 4).
- **Promotion / relegation:** champions and play-off winner go up; bottom
  one (two in bigger tiers) go down. Tier 5 → 4 is by regional
  champion plus a play-off between regions.
- **Cups:** a national cup open to tiers 2–5 (giant-killing runs are a
  money and fan boost); the **European Cup** for top Elite clubs.
- **You choose your starting region and town**, and found the club
  there. The town sets the starting conditions: local player pool, rival
  clubs nearby, pitch options, sponsor prospects.
- **Promotion is the only way up.** There is no shortcut; the climb from
  tier 5 to the Elite League takes at least four promotions, so four
  seasons at the very best and usually many more.

---

## 3. The week

Each week is one screen with a short list of decisions, then the match.

1. **Schedule** (amateur tiers): choose training nights and, where the
   fixture allows, the kick-off slot (Saturday afternoon vs Sunday). Choice
   affects attendance — a Saturday clashes with players' work shifts, a
   Sunday with family.
2. **Training focus:** one of conditioning, offence install, defence
   install, special teams, recovery. Feeds development, injury risk and
   how well this week's game plan is executed.
3. **Availability:** who has said they are coming. At amateur level this is
   uncertain until match day (see §5).
4. **Match-day squad and depth chart:** pick who is dressed for the game
   from those available, then starters and backups by position. Auto-fill
   available. Only dressed players can play (NFL-style, see §9).
5. **Game plan** (§7), with scouting report and coordinator advice (§8).
6. **Admin:** finances, sponsor offers, facility upgrades, signings,
   inbox, social feed.
7. **Match day:** the live match (§9).
8. **After:** report, box score, player grades, injuries, league table,
   social reaction.

---

## 4. Players

**Positions:** QB, RB, WR, TE, OL (C/G/T), DL (DE/DT), LB, CB, S, K, P.
Squad sizes: ~30 at amateur, rising to 50+ at the top.

**Ratings (1–99), by position group:**

- Common: speed, strength, agility, stamina, awareness, injury proneness.
- QB: arm strength, short / deep accuracy, decision-making, pocket presence.
- Ball carriers / receivers: hands, route running, elusiveness, ball security, catching in traffic.
- Blockers: pass block, run block.
- Defenders: tackling, pass rush, block shedding, man coverage, zone coverage, pursuit.
- Kickers: power, accuracy.

**Overall** is a position-weighted blend, shown as a single number.

**Hidden / soft traits:**

- **Commitment** (amateur and semi-pro): chance of turning up.
- **Morale:** playing time, results, contract, relationship with staff.
- **Potential:** ceiling; scouts estimate it, never shown exactly.
- **Age curve:** improve to ~26, plateau, decline after ~30 (position-dependent; QBs and kickers last longer).
- **Background:** home-grown, European, or US import. Matters for import caps (§11).
- **Day job** (amateur): affects which days they can make.

---

## 5. Turning up

At tiers 5–4 nobody is paid, so attendance is a real mechanic.

- Each player has a turn-up chance per session and per match, built from
  commitment, morale, day-job clash with the chosen day, distance, and
  recent results.
- You see a **likely / doubtful / unlikely** indicator before the match,
  and the real squad is revealed on match day.
- Short a lineman? Someone plays out of position, or a backup plays hurt.
  Short a QB? The emergency option is whoever played QB at school.
- Levers: pick better days, raise morale, pay expenses (costs money),
  recruit committed players over talented flaky ones.
- From tier 3 contracts make attendance near-certain; the mechanic
  becomes injuries, suspensions and illness instead.

---

## 6. Staff

Hired, rated 1–99 in a few areas, paid a salary, can be poached by bigger
clubs, can be sacked.

| Role | What it does |
|---|---|
| **Offensive coordinator** | Executes your offensive plan (better = fewer busted plays), develops offensive players, quality of offensive advice. Style: run-first / balanced / air raid — adds a small bonus when your plan matches it. |
| **Defensive coordinator** | Same for defence. Style: aggressive (blitz) / bend-don't-break / coverage. |
| **Special teams coach** | Kicking, returns, coverage units (unlocked tier 3). |
| **Head of scouting** | Accuracy of opponent tendencies and of player potential estimates. |
| **Physio / S&C** | Injury rate and recovery time (unlocked tier 4). |

Amateur clubs start with volunteer coordinators (low ratings, free).
Better staff cost more and only join clubs at a tier they rate.

---

## 7. The game plan — numbers

Set before each match. Changeable at half time. Every value is a
percentage or a setting the engine reads directly.

**Offence**

- Run / pass split overall (e.g. 30% run).
- Optional overrides by situation: 1st down, 2nd & short, 2nd & long,
  3rd & short, 3rd & long, red zone, two-minute.
- Pass depth mix: short / intermediate / deep.
- Play-action share of passes.
- Tempo: huddle / normal / no-huddle (no-huddle tires both sides, more plays).
- 4th-down aggression: punt-everything → go-for-it chart.
- Two-point attempts: never / by chart / always.

**Defence**

- Base front vs the run: light box / normal / stacked.
- Blitz rate overall and on 3rd down.
- Coverage: man % vs zone %.
- Shell: single-high vs two-high (deep help vs run support).
- Prevent defence late when leading: on / off.

**How it reaches the engine:** at each snap the engine picks the play
family (run / pass, then concept) by weighted random draw from these
numbers adjusted by situation; coordinator rating sets how cleanly the
chosen play is executed. The AI clubs use the same system with their own
numbers — which is what makes their tendencies real (§8).

---

## 8. Scouting and coordinator advice

**Every play by every team is recorded:** down, distance, field position,
score situation, formation, run/pass, concept, result. Tendencies are
read off that log.

**Scouting report for the next opponent:**

- Run / pass split by down and distance.
- Favourite formations and what they run from each.
- Deep pass rate, play-action rate.
- Blitz rate by down, man vs zone, stacked box rate.
- Key players: top ratings and recent form.
- Recent results.

The **head of scouting's rating** sets the noise: a poor scout gives
ranges ("runs 55–80% on 2nd & short"); a good one gives sharp numbers.

**Coordinator recommendations** (one card each from OC and DC):

- Read the report, propose specific numbers. Example from the DC: "They
  run 72% on 2nd and short. Stack the box on 2nd and short: 70%." From
  the OC: "They blitz 48% on 3rd down. Shift 3rd-down passes to short and
  quick: 60% short."
- Rating sets accuracy: a weak coordinator sometimes reads the wrong
  tendency or overreacts. Their track record is shown ("advice followed:
  6 times, won 4").
- **Apply** puts the recommended numbers into the plan; you can still edit.

---

## 9. The live match

**Pacing:** about **6 minutes** per match at 1×. Speed control: 1× / 2× /
jump to end, like the Towers fast forward.

**Feed:**

- Every **drive** gets a line as it ends: "Coventry: 9 plays, 62 yds,
  4:12 — field goal. 10–7."
- Clock, score and possession always visible.
- Momentum / win-probability line along the top (optional).

**Highlights — shown, not described.** When a significant play happens the
feed pauses and the play is shown animated on the pitch, all 22 players,
using the Gridiron engine and renderer. Then the feed carries on.

Triggers (each scored; the top-scoring plays are shown so the match stays
near six minutes):

- Touchdowns, and two-point attempts.
- Turnovers: interceptions, fumbles lost, turnover on downs.
- Gains of 20+ yards.
- Sacks on 3rd or 4th down.
- 4th-down attempts.
- Field goals of 40+ yards or to tie / win late.
- Everything in the final two minutes of a one-score game.

Typical match: 8–15 highlights. Each can be replayed afterwards.

**Substitutions (NFL rules):** substitution is unlimited between plays,
but only players dressed for the match can come on. So the squad is
fixed at kick-off; who plays from it is not. The engine rotates backups
automatically by fatigue and injury using your depth chart.

**Half time:** score, key stats, coordinator notes on how the opponent's
tendencies are holding up so far, the game-plan sliders, and the depth
chart — you can promote a backup or bench a struggling starter from
among the dressed players.

**After the match:** report, box score (passing / rushing / receiving /
defence / kicking), player grades, injuries, and the highlight reel to
rewatch.

---

## 10. Match engine

- **Your matches:** every play runs through the Gridiron play engine
  (fixed-step physics, real blocking, real routes), driven by player
  ratings and the game plan. Highlights are the stored frames of those
  plays.
- **Other matches in the league:** too many to run through physics. A fast
  statistical play-by-play sim, **calibrated against the physics engine**
  (same yards per play distributions, completion rates, sack rates for a
  given rating gap), produces results and the play log for tendencies.
- **Key technical risk:** Gridiron's engine is tuned for user-called
  plays. It needs a ratings layer (speed, blocking, coverage numbers
  feeding the physics) and a headless mode. Build and calibrate this
  first, before any management screens.

---

## 11. Club, money and recruitment

**Money by tier:**

| Tier | Income | Costs |
|---|---|---|
| 5 | Player subs, raffles, one local sponsor, tiny gate | Pitch hire, kit, insurance, travel |
| 4 | Small gate, a few sponsors, merchandise table | Expenses for players, better pitch |
| 3 | Paying crowds, regional sponsors | Part-time wages, staff |
| 2 | Gate, TV share, shirt sponsor, merchandise | Full wages, imports, facilities |
| 1 | All of the above, European prize money | Elite wages and staff |

**Facilities:** pitch (shared council field → own ground → stadium with
stands), training ground, gym, medical room. Each raises a specific
number (attendance, development, injuries, fan growth).

**Fans:** a following that grows with results, entertainment and promotion,
and drives gate and sponsor offers.

**Recruitment:**

- Amateur: open trials each pre-season, word-of-mouth, poaching from rival amateur clubs.
- Semi-pro up: university players, released pros, free agents.
- **Import cap:** a limit on US imports per squad and on the field at once — the core recruitment trade-off.
- Pro tiers: contracts (length, wage, bonuses), negotiation, a European draft of university and academy players, and a youth academy.

**Off-season:** development and ageing, retirements, contract renewals,
free agency, draft, staff changes, facility upgrades, new season fixtures.

---

## 12. Social media

A feed of short posts reacting to what actually happened.

- **Accounts:** fans (optimist / doom-merchant / stats nerd), local
  press, rival fans, your players, the league, later national media and
  European pundits.
- **Triggers:** results, big plays (linked to the highlight), signings,
  injuries, no-shows ("only 31 turned up again"), promotions, coordinator
  hires and sackings, money troubles.
- **Scale:** a handful of local accounts at tier 5; follower counts and
  volume grow with the club.
- **Effects:** fan mood nudges attendance and player morale. Read-only
  — no replying.

---

## 13. Progress and goals

- **Board / committee expectations** each season, set by tier and budget
  (e.g. "avoid relegation", "reach the play-offs").
- **Milestones** like other Arcade games: first win, first promotion,
  first paid player, own ground, first import, Premier Division, European
  Cup, champions of Europe.
- **No game over.** You own the club and cannot be sacked. Missing
  expectations costs fan mood, sponsor interest and player morale, never
  the save.

---

## 14. Screens (phone)

Home (this week) · Squad · Player · Depth chart · Game plan · Scouting
report · Staff · Live match · Post-match · League table and fixtures ·
Club (money, facilities, fans) · Recruitment · Social feed · Milestones.

Single HTML file like the other games, saved to `localStorage`, menu card
in `index.html`, cache entry in `sw.js`. Likely needs one or two shared
data files (name lists) alongside the page.

---

## 15. Build phases

Each phase is playable on its own.

1. **Engine:** ratings layer on the Gridiron engine, headless mode,
   statistical sim calibrated against it. Measured, not eyeballed.
2. **Amateur season:** one tier-5 league, squad, depth chart, game plan
   numbers, attendance, live match with highlights, results and table.
3. **Staff and scouting:** coordinators, scouting reports from the play
   log, recommendations with rating-based accuracy.
4. **The climb:** promotion and relegation through all tiers, money,
   facilities, fans, social feed, off-season.
5. **Pro football:** contracts, imports and cap, draft, academy,
   national cup and European Cup.

## 16. Decisions made

- Name: *Front Office*.
- You are the owner; you cannot be sacked.
- You choose your starting region and town.
- Substitutions follow NFL practice: match-day squad fixed at kick-off,
  unlimited changes between plays from it, depth chart editable at half time.
- The only way up is promotion.

## 17. Still to decide

- Match-day squad size per tier (NFL dresses roughly 47–48 of 53; amateur
  clubs here will have far fewer available).

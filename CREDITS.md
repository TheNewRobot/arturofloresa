# Image credits

Every robot image in `img/robots/` was background-removed and trimmed to the
robot's own bounding box, so that the platform chart can scale each one by its
true height. Sources and licences below.

**Please review this list.** Manufacturer press images are not automatically
free to republish. Anything you are not comfortable with should be swapped for
your own photograph — which will also look better than a stock render.

| File | Robot | Source | Licence / status |
|---|---|---|---|
| `artemis.png` | ARTEMIS | `artemis.romela.org/static/images/robocup_standing.jpg` | RoMeLa project page. Your own lab — check with the group. |
| `cosmo.png` | Kid COSMO | Figure 1 of arXiv [2508.11884](https://arxiv.org/abs/2508.11884) | Your own paper (you are a co-author). |
| `miniq.png` | MiNI-Q | `~/Downloads/q8bot.png` | Your own photograph. |
| `g1.png` | Unitree G1 | Wikimedia Commons, [`Unitree G1.jpg`](https://commons.wikimedia.org/wiki/File:Unitree_G1.jpg) | **CC0** — public domain, no attribution required. |
| `t1.png` | Booster T1 | `booster.tech/_astro/specification-t1…webp` | Booster Robotics press/product image. **Review.** |
| `h12.png` | Unitree H1-2 | `unitree.com/images/f951770e…_800x800.png` | Unitree product render. **Review — and confirm this is H1-2 rather than H1;** the two renders on their site are near-identical and not labelled. Your own IHMC photo would be better on both counts. |

## Headshot

`img/headshot.jpg` — your photo, `IMG_2370.JPG` (640×640). It is displayed at
260 px and must not be shown larger, as there is no more resolution in it.

## Heights used by the chart

The chart is only worth drawing if the numbers are right. These are the values
in `js/lineup.js`:

| Robot | Height | Verified against |
|---|---|---|
| MiNI-Q | 0.11 m (270 g) | 270 g from your own paper; **height is estimated from the photograph — please confirm** |
| Booster T1 | 1.18 m | booster.tech specifications |
| Unitree G1 | 1.32 m | unitree.com (130 cm on their spec card) |
| ARTEMIS | 1.42 m | artemis.romela.org / UCLA newsroom |
| Kid COSMO | 1.45 m | arXiv 2508.11884 |
| Unitree H1-2 | 1.78 m | unitree.com |

## Not yet in the chart

- **DARwIn-OP** (RoMeLa, 0.45 m) — held back. No standing photograph could be
  sourced, and the only freely-licensed images show it seated or crouched, which
  would put a wrong height into a true-scale chart. Needs a standing photo plus
  one line on what you built on it; it is not in your CV.
- **High-torque humanoid** (RoMeLa) — needs its real name, its height, and
  confirmation that it can be shown publicly before it goes on a public page.

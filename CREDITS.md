# Image credits

Every robot image in `img/robots/` was background-removed and trimmed to the
robot's own bounding box, so the platform chart can scale each one by its true
height. Sources and licences below.

| File | Robot | Source | Status |
|---|---|---|---|
| `miniq.png` | MiNI-Q | your photo (`q8bot.png`) | Yours. |
| `cosmo.png` | Kid COSMO | your photo (`cosmo.jpg`) | Yours. |
| `hightorque.png` | High-Torque Humanoid | your photo (`high_torque.png`) | Yours. |
| `artemis.png` | ARTEMIS | `artemis.romela.org/static/images/robocup_standing.jpg` | Your own lab — worth a nod to whoever took it. |
| `g1.png` | Unitree G1 | Wikimedia Commons, [`Unitree G1.jpg`](https://commons.wikimedia.org/wiki/File:Unitree_G1.jpg) | **CC0** — public domain, no permission needed. |
| `t1.png` | Booster T1 | `booster.tech` product image | Manufacturer press image. **Review**, or replace with your own RoboCup photo. |
| `h12.png` | Unitree H1-2 | `unitree.com` product render | Manufacturer render. **Confirm this is H1-2 and not H1** — the two renders on their site are unlabelled and near-identical. Your own IHMC photo fixes both this and the licence question. |

Four of the seven are now your own photographs.

## Headshot

`img/headshot.jpg` — your photo, `IMG_2370.JPG` (640×640), displayed at 260 px.
Do not show it larger; there is no more resolution in it.

## Heights used by the chart

The chart is only worth drawing if these are right.

| Robot | Height | Source |
|---|---|---|
| MiNI-Q | 0.11 m (270 g) | confirmed by you; mass from your paper |
| Booster T1 | 1.18 m | booster.tech specifications |
| High-Torque Humanoid | **~1.20 m — provisional** | **my estimate; no published spec.** Shown on the page as `~1.20 m (height provisional)` until you give me the real number |
| Unitree G1 | 1.32 m | unitree.com (130 cm on their spec card) |
| ARTEMIS | 1.42 m | artemis.romela.org / UCLA newsroom |
| Kid COSMO | 1.45 m | arXiv 2508.11884 |
| Unitree H1-2 | 1.78 m | unitree.com |

To change a height, edit the one `height:` value in `js/lineup.js`; the drawing
follows automatically.

## Still missing

- **DARwIn-OP** (RoMeLa, 0.45 m) — not in the chart. Every freely available
  image shows it seated or crouched, which would put a wrong height into a
  true-scale chart. Needs a standing photo and one line on what you built on it;
  it does not appear in your CV.

## CV

`pdfs/Flores_Arturo_CV.pdf` is `CV_Arturo_Flores_Official (1).pdf` from your
Downloads, dated 21 Sep 2026 — the newest version. The site's content was
checked against it.

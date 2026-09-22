/* ==========================================================================
   Platform lineup — robots drawn to true relative height on a shared baseline.
   No dependencies. Progressive enhancement: with JS off the <noscript> list
   in index.html carries the same information.

   Heights are real, sourced from manufacturer spec sheets / papers — see
   CREDITS.md. Changing a number here changes the drawing.
   ========================================================================== */
(function () {
  'use strict';

  var MAX_M = 1.78;    /* tallest robot; maps to the full plot height */

  /* ordered by height so the chart reads as a scale; each label carries its year */
  var ROBOTS = [
    {
      id: 'miniq',
      name: 'MiNI-Q',
      img: 'img/robots/miniq.png',
      height: 0.11,
      heightLabel: '11 cm',
      lab: 'RoMeLa, UCLA',
      year: '2026',
      sim: true, hardware: true,
      award: null,
      text: 'Unified learned locomotion on a 270 g quadruped with eight continuous-rotation legs. ' +
            'A ~26k-parameter policy trained with a system-identified actuator model runs entirely onboard ' +
            'a dual-ESP32 system at 50 Hz — no off-board compute and no wireless link in the control loop. ' +
            'Submitted to ICRA 2027.'
    },
    {
      id: 'darwin',
      name: 'DARwIn-OP',
      img: 'img/robots/darwin.png',
      height: 0.46,
      heightLabel: '46 cm',
      lab: 'RoMeLa, UCLA',
      year: '\u2014',
      sim: true, hardware: true,
      award: null,
      text: 'RoMeLa\u2019s open-platform humanoid, and the ancestor of the lab\u2019s later machines. ' +
            'Work here spanned both simulation and the physical robot.'
    },
    {
      id: 'hightorque',
      name: 'High-Torque Humanoid',
      img: 'img/robots/hightorque.png',
      height: 0.90,
      heightLabel: '90 cm',
      lab: 'RoMeLa, UCLA',
      year: '2025\u201326',
      sim: true, hardware: true,
      award: null,
      text: 'Full-stack humanoid control on an in-development platform. Building a C++ ROS2 stack ' +
            'covering hardware integration, multi-threaded state estimation, RL-based locomotion ' +
            'control and template-model-based adaptation for robust real-time walking through ' +
            'hardware development cycles, with cross-compiled embedded software for motor ' +
            'controllers and real-time control loops in modern C++ on Linux targets.'
    },
    {
      id: 't1',
      name: 'Booster T1',
      img: 'img/robots/t1.png',
      height: 1.18,
      heightLabel: '1.18 m',
      lab: 'RoMeLa, UCLA',
      year: '2026',
      sim: true, hardware: true,
      award: null,
      text: 'Reinforcement learning and software lead for RoboCup 2026. Architecting the migration from ' +
            'ARTEMIS’s model-based ROS2 Foxy stack to a learning-based ROS2 Humble stack, with an end-to-end ' +
            'RL locomotion pipeline in Isaac Gym, sim-to-real transfer via per-joint sysID and ' +
            'optimization-based dynamics calibration in MuJoCo, and sim2sim validation in mjlab.'
    },
    {
      id: 'g1',
      name: 'Unitree G1',
      img: 'img/robots/g1.png',
      height: 1.32,
      heightLabel: '1.32 m',
      lab: 'Amazon Robotics',
      year: '2026',
      sim: true, hardware: true,
      award: null,
      text: 'Whole-body control for forceful, industrially relevant loco-manipulation — combining model ' +
            'predictive control, control-barrier-function safety layers and learning-based methods. ' +
            'Built an automated batch-evaluation suite in mjlab for benchmarking whole-body controllers. ' +
            'Two papers submitted to ICRA 2027 (HULK, LIMBO).'
    },
    {
      id: 'artemis',
      name: 'ARTEMIS',
      img: 'img/robots/artemis.png',
      height: 1.42,
      heightLabel: '1.42 m',
      lab: 'RoMeLa, UCLA',
      year: '2023–24',
      sim: true, hardware: true,
      award: 'RoboCup 2024 winner',
      text: 'Real-time computer vision for soccer: a customized YOLOv5/YOLOv8 network for detection and ' +
            'depth sensing of field landmarks, and a ball-tracking system on the humanoid’s neck mechanism ' +
            'built with ROS2, PyTorch, TensorRT and PyBEAR. Winner of the Adult Size league at RoboCup 2024, ' +
            'and first place in the Humanoid Free Walk at IEEE Humanoids 2023.'
    },
    {
      id: 'cosmo',
      name: 'Kid COSMO',
      img: 'img/robots/cosmo.png',
      height: 1.45,
      heightLabel: '1.45 m',
      lab: 'RoMeLa, UCLA',
      year: '2024–25',
      sim: true, hardware: true,
      award: 'Mike Stilman Award',
      text: 'A torque-controlled humanoid built for entertainment robotics. Developed a C++17/Python stack ' +
            'for upper-body control with a finite state machine for lifelike motion and safe interaction, ' +
            'and a C++ ONNX sim-to-real pipeline deploying imitation-learning policies for balancing and ' +
            'walking. Deployed at Comic Con New York, London and Lucca.'
    },
    {
      id: 'h12',
      name: 'Unitree H1-2',
      img: 'img/robots/h12.png',
      height: 1.78,
      heightLabel: '1.78 m',
      lab: 'IHMC',
      year: '2025',
      sim: true, hardware: true,
      award: null,
      text: 'Led hardware bring-up of the whole-body control stack — real-time debugging and torque-control ' +
            'parameter optimization to improve stability and locomotion. Developed a Whole-Body Model ' +
            'Predictive Control robustness testing framework with progressive disturbance evaluation and ' +
            'optimized footstep generation, across the Nadia and H1-2 humanoids.'
    }
  ];

  var lineup   = document.getElementById('lineup');
  var detail   = document.getElementById('platform-detail');
  var fallback = document.getElementById('platform-list');

  /* If anything is missing, leave the static list in place rather than
     replacing working content with nothing. */
  if (!lineup || !detail) { return; }

  var buttons = [];
  var labels  = [];
  var current = -1;

  /* Height as a percentage of the plot, not pixels: the chart then rescales
     with the --plot-h custom property alone, so the mobile breakpoint can
     shrink it without JS and without distorting the true-scale comparison. */
  function heightPct(metres) {
    return ((metres / MAX_M) * 100).toFixed(3) + '%';
  }

  /* ---------- build the chart ---------- */
  var labelRow = document.createElement('div');
  labelRow.className = 'robot-labels';

  ROBOTS.forEach(function (r, i) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'robot';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', 'false');
    btn.setAttribute('aria-controls', 'platform-detail');
    btn.id = 'tab-' + r.id;
    btn.title = r.name + ' — ' + r.heightLabel;

    var img = document.createElement('img');
    img.src = r.img;
    img.alt = r.name + ', ' + r.heightLabel;
    img.style.height = heightPct(r.height);
    img.loading = 'lazy';
    btn.appendChild(img);

    btn.addEventListener('click', function () { select(i); });
    lineup.appendChild(btn);
    buttons.push(btn);

    var lab = document.createElement('div');
    lab.className = 'robot-label';
    lab.innerHTML = '<b></b><span class="lh"></span><span class="ly"></span>';
    lab.querySelector('b').textContent = r.name;
    lab.querySelector('.lh').textContent = (r.estimated ? '~' : '') + r.heightLabel;
    lab.querySelector('.ly').textContent = r.year;
    lab.addEventListener('click', function () { select(i); buttons[i].focus(); });
    labelRow.appendChild(lab);
    labels.push(lab);
  });

  /* labels sit below the baseline rule */
  var baseline = document.querySelector('.lineup-baseline');
  if (baseline && baseline.parentNode) {
    baseline.parentNode.insertBefore(labelRow, baseline.nextSibling);
  }

  /* ---------- selection ---------- */
  function select(i) {
    if (i === current) { return; }
    current = i;
    var r = ROBOTS[i];

    buttons.forEach(function (b, j) {
      b.setAttribute('aria-selected', j === i ? 'true' : 'false');
      b.tabIndex = j === i ? 0 : -1;
    });
    labels.forEach(function (l, j) {
      l.setAttribute('data-selected', j === i ? 'true' : 'false');
    });

    var badges = '';
    if (r.sim)      { badges += '<span class="badge">Simulation</span>'; }
    if (r.hardware) { badges += '<span class="badge">Hardware</span>'; }
    if (r.award)    { badges += '<span class="badge award">' + r.award + '</span>'; }

    var h = (r.estimated ? '~' : '') + r.heightLabel +
            (r.estimated ? ' <span class="prov">(height provisional)</span>' : '');

    detail.innerHTML =
      '<img class="detail-photo" src="' + r.img + '" alt="' + r.name + '">' +
      '<div class="detail-body">' +
        '<h4>' + r.name + '</h4>' +
        '<p class="meta">' + r.lab + ' · ' + r.year + ' · ' + h + '</p>' +
        '<div class="badges">' + badges + '</div>' +
        '<p>' + r.text + '</p>' +
      '</div>';
  }

  /* ---------- keyboard ---------- */
  lineup.addEventListener('keydown', function (e) {
    var delta = 0;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { delta = 1; }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { delta = -1; }
    else if (e.key === 'Home') { select(0); buttons[0].focus(); e.preventDefault(); return; }
    else if (e.key === 'End') { select(buttons.length - 1); buttons[buttons.length - 1].focus(); e.preventDefault(); return; }
    else { return; }

    e.preventDefault();
    var next = (current + delta + buttons.length) % buttons.length;
    select(next);
    buttons[next].focus();
  });

  /* The static list has served its purpose; the chart now carries the same
     information interactively. */
  if (fallback) { fallback.hidden = true; }

  /* open on ARTEMIS: the RoboCup win is the strongest opening note */
  select(ROBOTS.findIndex(function (r) { return r.id === 'artemis'; }));

  /* ---------- news: show more ---------- */
  var moreBtn = document.getElementById('news-more');
  if (moreBtn) {
    var list = document.querySelector('.news');
    moreBtn.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      moreBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      moreBtn.textContent = open ? 'Show less' : 'Show more';
    });
  }

  /* ---------- bio: more about me ---------- */
  var bioBtn = document.getElementById('bio-more-btn');
  var bioMore = document.getElementById('bio-more');
  if (bioBtn && bioMore) {
    bioBtn.addEventListener('click', function () {
      var open = bioMore.hidden;
      bioMore.hidden = !open;
      bioBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      bioBtn.textContent = open ? 'Less' : 'More about me';
    });
  }
})();

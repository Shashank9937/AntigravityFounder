/* ============================================================
   FOUNDER OS – CORE APP JS v2.0
   Router, State, Utilities, Charts
   Performance-hardened, zero console warnings
   ============================================================ */

'use strict';

// ── State ────────────────────────────────────────────────────
const STATE_KEY = 'founderOS_v2';
const defaultState = {
  onboarded: false,
  founderStage: 'Operator',
  executionScore: 74,
  learningScore: 61,
  currentPage: 'dashboard',
  decisions: [],
  weeklyPriority: '',
  highLeverageTasks: ['', '', ''],
  energyLevel: 7,
  contacts: [],
  financials: {
    mrr: 42000, arr: 504000, burnRate: 18000,
    runway: 14, cac: 320, ltv: 3200,
    churn: 2.4, grossMargin: 71, growthRate: 18
  },
  skills: {
    'Market Analysis': 68,
    'Product Thinking': 72,
    'Finance': 55,
    'Sales': 63,
    'Marketing': 58,
    'Operations': 70,
    'AI/Tech': 80,
    'Leadership': 65,
    'Legal/Risk': 40
  },
  learningItems: [],
  quarterlyGoals: [],
  riskLog: [],
  executionHistory: [55, 60, 58, 65, 70, 68, 74],
  decisionAccuracy: [60, 65, 70, 68, 72, 75, 74],
  mrrHistory: [28000, 31000, 34000, 36000, 38000, 40000, 42000],
};

function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Deep merge financials and skills
      return {
        ...defaultState,
        ...parsed,
        financials: { ...defaultState.financials, ...(parsed.financials || {}) },
        skills: { ...defaultState.skills, ...(parsed.skills || {}) }
      };
    }
    return { ...defaultState };
  } catch (e) { return { ...defaultState }; }
}

function saveState() {
  try { localStorage.setItem(STATE_KEY, JSON.stringify(window.FOS)); } catch (e) { /* quota exceeded */ }
}

window.FOS = loadState();

// ── Debounce utility ─────────────────────────────────────────
function debounce(fn, ms) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), ms);
  };
}

// ── Router ───────────────────────────────────────────────────
function navigate(pageId) {
  const pages = document.querySelectorAll('.page');
  const navItems = document.querySelectorAll('.nav-item');

  pages.forEach(p => p.classList.remove('active'));
  navItems.forEach(n => n.classList.remove('active'));

  const page = document.getElementById('page-' + pageId);
  if (page) page.classList.add('active');

  document.querySelectorAll(`[data-page="${pageId}"]`).forEach(el => el.classList.add('active'));

  window.FOS.currentPage = pageId;
  saveState();

  const titles = {
    dashboard: 'CEO Strategic Dashboard', calendar: 'Daily CEO Calendar',
    domains: '9 Domains of Mastery', decisions: 'Decision Journal',
    finance: 'Finance Control Center', learning: 'Learning System',
    library: 'Learning Library', advice: 'Advice Filter',
    network: 'Network & Mentorship', onboarding: 'Founder Onboarding'
  };
  const titleEl = document.getElementById('topbar-title');
  if (titleEl) titleEl.textContent = titles[pageId] || 'Founder OS';

  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Defer render to next frame for smooth transition
  requestAnimationFrame(() => renderActivePage(pageId));
}

function renderActivePage(id) {
  switch (id) {
    case 'dashboard': renderDashboard(); break;
    case 'finance': renderFinance(); break;
    case 'calendar': renderCalendar(); break;
    case 'decisions': renderDecisions(); break;
    case 'learning': renderLearning(); break;
    case 'network': renderNetwork(); break;
    case 'library': renderLibrary(); break;
  }
}

// ── Mobile Menu ──────────────────────────────────────────────
function openMobileMenu() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Tabs ─────────────────────────────────────────────────────
function switchTab(groupId, tabId) {
  document.querySelectorAll(`[data-tabgroup="${groupId}"]`).forEach(el => el.classList.remove('active'));
  document.querySelectorAll(`[data-tab="${groupId}-${tabId}"]`).forEach(el => el.classList.add('active'));
  // Also activate the tab button
  document.querySelectorAll(`.tab-btn[data-tabgroup="${groupId}"][data-tabid="${tabId}"]`).forEach(el => el.classList.add('active'));
}

// ── SVG Line Chart ───────────────────────────────────────────
function buildLineChart(containerId, data, color = '#2563eb') {
  const el = document.getElementById(containerId);
  if (!el || !data || data.length < 2) return;

  const w = el.clientWidth || 300, h = 80;
  const min = Math.min(...data), max = Math.max(...data);
  const range = max - min || 1;
  const pad = 10;
  const xs = data.map((_, i) => pad + (i / (data.length - 1)) * (w - pad * 2));
  const ys = data.map(v => h - pad - ((v - min) / range) * (h - pad * 2));
  const pts = xs.map((x, i) => `${x},${ys[i]}`).join(' ');
  const areaClose = `${xs[xs.length - 1]},${h} ${xs[0]},${h}`;

  el.innerHTML = `
    <svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:${h}px;" role="img" aria-label="Trend chart">
      <defs>
        <linearGradient id="g_${containerId}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <polygon points="${pts} ${areaClose}" fill="url(#g_${containerId})"/>
      <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        style="stroke-dasharray:1000;stroke-dashoffset:1000;animation:drawLine 1s ease forwards"/>
      ${xs.map((x, i) => `<circle cx="${x}" cy="${ys[i]}" r="3" fill="${color}" opacity="0.7"/>`).join('')}
    </svg>`;
}

// ── SVG Radar Chart ──────────────────────────────────────────
function buildRadarChart(containerId, skills) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const entries = Object.entries(skills);
  const n = entries.length;
  if (n < 3) return;

  const cx = 140, cy = 140, r = 110;
  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];

  function pt(i, ratio) {
    const a = (Math.PI * 2 * i / n) - Math.PI / 2;
    return { x: cx + Math.cos(a) * r * ratio, y: cy + Math.sin(a) * r * ratio };
  }

  const grid = levels.map(lv => {
    const pts = entries.map((_, i) => { const p = pt(i, lv); return `${p.x},${p.y}`; }).join(' ');
    return `<polygon points="${pts}" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>`;
  }).join('');

  const axes = entries.map((_, i) => {
    const p = pt(i, 1);
    return `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`;
  }).join('');

  const datapts = entries.map(([, v], i) => { const p = pt(i, v / 100); return `${p.x},${p.y}`; }).join(' ');

  const labels = entries.map(([k], i) => {
    const p = pt(i, 1.22);
    return `<text x="${p.x}" y="${p.y}" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,255,255,0.45)" font-size="9" font-family="Inter,sans-serif">${k}</text>`;
  }).join('');

  el.innerHTML = `
    <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;" role="img" aria-label="Skill radar chart">
      ${grid}${axes}
      <polygon points="${datapts}" fill="rgba(37,99,235,0.15)" stroke="#3b82f6" stroke-width="2"/>
      ${entries.map(([, v], i) => { const p = pt(i, v / 100); return `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#3b82f6"/>`; }).join('')}
      ${labels}
    </svg>`;
}

// ── Bar Chart ────────────────────────────────────────────────
function buildBarChart(containerId, labels, values, color = '#2563eb') {
  const el = document.getElementById(containerId);
  if (!el) return;
  const max = Math.max(...values) || 1;
  el.innerHTML = `<div style="display:flex;align-items:flex-end;gap:6px;height:100px;padding:0 4px">
    ${values.map((v, i) => `
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px">
        <span style="font-size:9px;color:rgba(255,255,255,0.35)">${Math.round(v / 1000)}k</span>
        <div style="width:100%;height:${Math.round((v / max) * 80)}px;background:${color};border-radius:4px 4px 0 0;opacity:0.7;transition:opacity .2s,transform .2s" title="${labels[i]}: $${v.toLocaleString()}"></div>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);white-space:nowrap">${labels[i]}</span>
      </div>`).join('')}
  </div>`;
}

// ── Topbar Date ──────────────────────────────────────────────
function updateTopbarDate() {
  const el = document.getElementById('topbar-date');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

// ── Onboarding check ─────────────────────────────────────────
function checkOnboarding() {
  if (!window.FOS.onboarded) {
    navigate('onboarding');
  } else {
    navigate(window.FOS.currentPage || 'dashboard');
  }
}

// ── Dashboard Render ─────────────────────────────────────────
function renderDashboard() {
  const f = window.FOS.financials;
  setInner('dash-mrr', '$' + (f.mrr / 1000).toFixed(0) + 'K');
  setInner('dash-arr', '$' + (f.arr / 1000).toFixed(0) + 'K');
  setInner('dash-runway', f.runway + ' mo');
  setInner('dash-exec', window.FOS.executionScore + '%');
  setInner('dash-learn', window.FOS.learningScore + '%');
  setInner('dash-stage', window.FOS.founderStage);

  // Skill progress bars
  const wrap = document.getElementById('skill-bars');
  if (wrap) {
    wrap.innerHTML = Object.entries(window.FOS.skills).map(([k, v]) => `
      <div>
        <div class="flex justify-between mb-sm" style="font-size:.8rem">
          <span style="color:var(--text-secondary)">${k}</span>
          <span style="color:var(--text-primary);font-weight:600">${v}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${v}%"></div></div>
      </div>`).join('');
  }

  // Charts — deferred for paint
  requestAnimationFrame(() => {
    buildRadarChart('radar-chart', window.FOS.skills);
    buildLineChart('exec-trend-chart', window.FOS.executionHistory, '#3b82f6');
    buildLineChart('decision-trend', window.FOS.decisionAccuracy, '#10b981');
    buildLineChart('mrr-trend-chart', window.FOS.mrrHistory, '#06b6d4');
  });

  // Risk log summary
  const riskEl = document.getElementById('risk-summary');
  if (riskEl) {
    const risks = window.FOS.riskLog;
    riskEl.innerHTML = risks.length === 0
      ? '<p class="text-muted" style="font-size:.85rem">No risks logged. Add from Risk Log section.</p>'
      : risks.slice(0, 3).map(r => `
          <div class="alert alert-${r.severity === 'High' ? 'red' : r.severity === 'Medium' ? 'amber' : 'green'} mb-sm">
            <span style="font-size:.85rem"><strong>${r.title}</strong> — ${r.description}</span>
          </div>`).join('');
  }

  // Priorities
  const pEl = document.getElementById('dash-priority');
  if (pEl) pEl.textContent = window.FOS.weeklyPriority || 'No priority set for this week.';

  renderQGoals();
}

function setInner(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ── Finance Render ───────────────────────────────────────────
function renderFinance() {
  const f = window.FOS.financials;
  const metrics = {
    'fin-mrr': '$' + f.mrr.toLocaleString(),
    'fin-arr': '$' + f.arr.toLocaleString(),
    'fin-burn': '$' + f.burnRate.toLocaleString(),
    'fin-runway': f.runway + ' mo',
    'fin-cac': '$' + f.cac,
    'fin-ltv': '$' + f.ltv.toLocaleString(),
    'fin-ltvca': (f.ltv / (f.cac || 1)).toFixed(1) + 'x',
    'fin-churn': f.churn + '%',
    'fin-margin': f.grossMargin + '%',
    'fin-growth': '+' + f.growthRate + '%'
  };
  Object.entries(metrics).forEach(([id, val]) => setInner(id, val));

  requestAnimationFrame(() => {
    buildLineChart('mrr-chart', window.FOS.mrrHistory, '#06b6d4');
    buildBarChart('burn-chart', ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      [15000, 16000, 15500, 17000, 18000, 17500, 18000], '#ef4444');
  });

  // Flag checks
  const flags = document.getElementById('fin-flags');
  if (flags) {
    const alerts = [];
    if (f.runway < 6) alerts.push({ type: 'red', msg: '⚠️ Runway below 6 months — immediate fundraise or cut required' });
    if (f.churn > 5) alerts.push({ type: 'red', msg: '⚠️ High churn rate (>5%) — customer retention is critical' });
    if (f.cac > 0 && f.ltv / f.cac < 3) alerts.push({ type: 'amber', msg: '⚡ LTV:CAC below 3x — unit economics need improvement' });
    if (f.burnRate > f.mrr) alerts.push({ type: 'red', msg: '🔴 Burn exceeds MRR — unsustainable trajectory' });
    if (alerts.length === 0) alerts.push({ type: 'green', msg: '✅ All financial metrics within healthy thresholds' });
    flags.innerHTML = alerts.map(a => `<div class="alert alert-${a.type}">${a.msg}</div>`).join('');
  }
}

// ── Calendar Render ──────────────────────────────────────────
function renderCalendar() {
  const wp = document.getElementById('weekly-priority-val');
  if (wp) wp.value = window.FOS.weeklyPriority || '';
  window.FOS.highLeverageTasks.forEach((t, i) => {
    const el = document.getElementById('hlt-' + i);
    if (el) el.value = t;
  });
  const el = document.getElementById('energy-slider');
  if (el) { el.value = window.FOS.energyLevel; updateEnergyDisplay(); }
}

function updateEnergyDisplay() {
  const slider = document.getElementById('energy-slider');
  const v = slider ? parseInt(slider.value) : 7;
  setInner('energy-display', v + '/10');
  setInner('energy-label', v >= 8 ? '🟢 Peak' : v >= 6 ? '🟡 Moderate' : '🔴 Low');
}

// ── Decisions Render ─────────────────────────────────────────
function renderDecisions() {
  const list = document.getElementById('decision-list');
  if (!list) return;
  const d = window.FOS.decisions;
  if (d.length === 0) {
    list.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:32px">No decisions logged yet.</td></tr>';
    return;
  }
  list.innerHTML = d.map((dec, i) => `
    <tr>
      <td><strong style="color:var(--text-primary)">${escapeHtml(dec.title)}</strong></td>
      <td><span class="badge badge-${dec.confidence > 70 ? 'green' : dec.confidence > 40 ? 'amber' : 'red'}">${dec.confidence}%</span></td>
      <td><span class="badge badge-${dec.reversibility === 'Reversible' ? 'blue' : 'amber'}">${escapeHtml(dec.reversibility)}</span></td>
      <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escapeHtml(dec.outcome)}</td>
      <td>${escapeHtml(dec.reviewDate)}</td>
      <td><button class="btn btn-ghost btn-sm" onclick="deleteDecision(${i})" aria-label="Delete decision">✕</button></td>
    </tr>`).join('');
}

function deleteDecision(i) {
  window.FOS.decisions.splice(i, 1); saveState(); renderDecisions();
}

function submitDecision() {
  const get = id => (document.getElementById(id)?.value || '').trim();
  const dec = {
    title: get('dec-title'), context: get('dec-context'),
    options: get('dec-options'), assumptions: get('dec-assumptions'),
    confidence: parseInt(get('dec-confidence')) || 50,
    reversibility: get('dec-reversibility'), outcome: get('dec-outcome'),
    reviewDate: get('dec-review'), created: new Date().toISOString().split('T')[0]
  };
  if (!dec.title) { showToast('Decision title is required.'); return; }
  window.FOS.decisions.unshift(dec); saveState();
  renderDecisions();
  ['dec-title', 'dec-context', 'dec-options', 'dec-assumptions', 'dec-outcome', 'dec-review'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  switchTab('decisions', 'log');
}

// ── Learning Render ──────────────────────────────────────────
function renderLearning() {
  const list = document.getElementById('learning-list');
  if (!list) return;
  const items = window.FOS.learningItems;
  if (items.length === 0) {
    list.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:32px">No items tracked yet.</td></tr>';
    return;
  }
  list.innerHTML = items.map((it, i) => `
    <tr>
      <td><strong style="color:var(--text-primary)">${escapeHtml(it.title)}</strong></td>
      <td><span class="badge badge-${it.type === 'Book' ? 'blue' : it.type === 'Podcast' ? 'cyan' : it.type === 'Case Study' ? 'purple' : 'green'}">${escapeHtml(it.type)}</span></td>
      <td><div class="progress-bar" style="width:80px"><div class="progress-fill" style="width:${it.progress}%"></div></div></td>
      <td>${it.progress}%</td>
      <td><button class="btn btn-ghost btn-sm" onclick="deleteLearning(${i})" aria-label="Delete item">✕</button></td>
    </tr>`).join('');
}

function deleteLearning(i) { window.FOS.learningItems.splice(i, 1); saveState(); renderLearning(); }

function submitLearning() {
  const it = {
    title: (document.getElementById('learn-title')?.value || '').trim(),
    type: document.getElementById('learn-type')?.value || 'Book',
    progress: parseInt(document.getElementById('learn-progress')?.value) || 0
  };
  if (!it.title) { showToast('Title required.'); return; }
  window.FOS.learningItems.unshift(it); saveState(); renderLearning();
  document.getElementById('learn-title').value = '';
}

// ── Network Render ───────────────────────────────────────────
function renderNetwork() {
  const list = document.getElementById('contact-list');
  if (!list) return;
  const contacts = window.FOS.contacts;
  if (contacts.length === 0) {
    list.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:32px">No contacts added yet.</td></tr>';
    return;
  }
  list.innerHTML = contacts.map((c, i) => `
    <tr>
      <td><strong style="color:var(--text-primary)">${escapeHtml(c.name)}</strong></td>
      <td><span class="badge badge-${c.tier === 'Tier 1' ? 'blue' : c.tier === 'Tier 2' ? 'cyan' : 'purple'}">${escapeHtml(c.tier)}</span></td>
      <td>${escapeHtml(c.role)}</td>
      <td>${escapeHtml(c.lastContact)}</td>
      <td><button class="btn btn-ghost btn-sm" onclick="deleteContact(${i})" aria-label="Delete contact">✕</button></td>
    </tr>`).join('');
}

function deleteContact(i) { window.FOS.contacts.splice(i, 1); saveState(); renderNetwork(); }

function submitContact() {
  const c = {
    name: (document.getElementById('con-name')?.value || '').trim(),
    tier: document.getElementById('con-tier')?.value || 'Tier 1',
    role: (document.getElementById('con-role')?.value || '').trim(),
    lastContact: document.getElementById('con-date')?.value || new Date().toISOString().split('T')[0]
  };
  if (!c.name) { showToast('Name required.'); return; }
  window.FOS.contacts.unshift(c); saveState(); renderNetwork();
  document.getElementById('con-name').value = '';
}

// ── Q-Goals ──────────────────────────────────────────────────
function renderQGoals() {
  const list = document.getElementById('qgoals-list');
  if (!list) return;
  const goals = window.FOS.quarterlyGoals;
  list.innerHTML = goals.length === 0
    ? '<p class="text-muted" style="font-size:.85rem">No quarterly goals set.</p>'
    : goals.map((g, i) => `
        <div class="card mb-sm" style="padding:12px 16px;">
          <div class="flex justify-between items-center">
            <div>
              <div style="font-weight:600;font-size:.9rem">${escapeHtml(g.goal)}</div>
              <div style="font-size:.8rem;color:var(--text-muted)">${escapeHtml(g.quarter)} · <span class="badge badge-${g.status === 'On Track' ? 'green' : g.status === 'At Risk' ? 'amber' : 'red'}">${escapeHtml(g.status)}</span></div>
            </div>
            <button class="btn btn-ghost btn-sm" onclick="deleteGoal(${i})" aria-label="Delete goal">✕</button>
          </div>
          <div class="progress-bar mt-sm"><div class="progress-fill" style="width:${g.progress}%"></div></div>
        </div>`).join('');
}

function deleteGoal(i) { window.FOS.quarterlyGoals.splice(i, 1); saveState(); renderQGoals(); }

function submitGoal() {
  const g = {
    goal: (document.getElementById('goal-text')?.value || '').trim(),
    quarter: document.getElementById('goal-quarter')?.value || 'Q1 2025',
    status: document.getElementById('goal-status')?.value || 'On Track',
    progress: parseInt(document.getElementById('goal-progress')?.value) || 0
  };
  if (!g.goal) { showToast('Goal required.'); return; }
  window.FOS.quarterlyGoals.unshift(g); saveState(); renderQGoals();
  document.getElementById('goal-text').value = '';
}

// ── Risk Log ─────────────────────────────────────────────────
function submitRisk() {
  const r = {
    title: (document.getElementById('risk-title')?.value || '').trim(),
    description: (document.getElementById('risk-desc')?.value || '').trim(),
    severity: document.getElementById('risk-sev')?.value || 'Medium',
    mitigation: (document.getElementById('risk-mit')?.value || '').trim()
  };
  if (!r.title) { showToast('Risk title required.'); return; }
  window.FOS.riskLog.unshift(r); saveState();
  document.getElementById('risk-title').value = '';
  document.getElementById('risk-desc').value = '';
  show('risk-saved');
  setTimeout(() => hide('risk-saved'), 2000);
}

// ── Onboarding ───────────────────────────────────────────────
function completeOnboarding() {
  window.FOS.onboarded = true;
  window.FOS.founderStage = document.getElementById('ob-stage')?.value || 'Operator';
  const skillFields = document.querySelectorAll('[data-skill]');
  skillFields.forEach(f => {
    window.FOS.skills[f.dataset.skill] = parseInt(f.value) || 50;
  });
  const goalText = (document.getElementById('ob-goal')?.value || '').trim();
  if (goalText) {
    window.FOS.quarterlyGoals.push({ goal: goalText, quarter: 'Q1 2025', status: 'On Track', progress: 0 });
  }
  saveState();
  const stageEl = document.getElementById('sidebar-stage');
  if (stageEl) stageEl.textContent = window.FOS.founderStage;
  navigate('dashboard');
}

// ── DOM helpers ──────────────────────────────────────────────
function show(id) { const el = document.getElementById(id); if (el) el.style.display = 'block'; }
function hide(id) { const el = document.getElementById(id); if (el) el.style.display = 'none'; }
function toggle(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

// ── XSS Protection ──────────────────────────────────────────
function escapeHtml(str) {
  if (!str) return '';
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(str).replace(/[&<>"']/g, c => map[c]);
}

// ── Toast Notification (replaces alert) ──────────────────────
function showToast(msg) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = 'position:fixed;top:72px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none;';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.style.cssText = `
    background:var(--bg-elevated);border:1px solid var(--border-strong);border-radius:var(--r-lg);
    padding:12px 20px;font-size:.85rem;color:var(--text-primary);box-shadow:var(--shadow-elevated);
    pointer-events:auto;opacity:0;transform:translate3d(16px,0,0);
    transition:opacity 250ms ease,transform 250ms ease;max-width:320px;`;
  toast.textContent = msg;
  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translate3d(0,0,0)';
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translate3d(16px,0,0)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ── Advice Filter ────────────────────────────────────────────
function evaluateAdvice() {
  const source = (document.getElementById('adv-source')?.value || '').trim();
  const advice = (document.getElementById('adv-text')?.value || '').trim();
  const context = (document.getElementById('adv-context')?.value || '').trim();
  if (!advice) { showToast('Enter the advice first.'); return; }

  const warnings = [];
  if (!source) warnings.push('Source not provided — incentives cannot be assessed.');
  if (advice.toLowerCase().includes('always') || advice.toLowerCase().includes('never'))
    warnings.push('Absolute language detected — question universality.');
  if (context && advice.length < 40)
    warnings.push('Advice is very generic — insufficient context specificity.');

  const score = Math.max(20, Math.min(95, 85 - warnings.length * 20));
  const color = score >= 70 ? 'green' : score >= 50 ? 'amber' : 'red';

  const resultEl = document.getElementById('adv-result');
  if (resultEl) resultEl.style.display = 'block';
  setInner('adv-score', score + '%');

  const scoreEl = document.getElementById('adv-score');
  if (scoreEl) {
    scoreEl.style.color =
      color === 'green' ? 'var(--accent-green)' : color === 'amber' ? 'var(--accent-amber)' : 'var(--accent-red)';
  }

  const warningsEl = document.getElementById('adv-warnings');
  if (warningsEl) {
    warningsEl.innerHTML = warnings.length === 0
      ? '✅ No immediate red flags detected.'
      : warnings.map(w => `<div class="alert alert-amber mb-sm">${escapeHtml(w)}</div>`).join('');
  }
}

// ── Save handlers ────────────────────────────────────────────
function saveCalendar() {
  window.FOS.weeklyPriority = (document.getElementById('weekly-priority-val')?.value || '').trim();
  window.FOS.highLeverageTasks = [0, 1, 2].map(i => (document.getElementById('hlt-' + i)?.value || '').trim());
  window.FOS.energyLevel = parseInt(document.getElementById('energy-slider')?.value) || 7;
  saveState();
  showToast('✓ Calendar saved successfully.');
}

function saveFinancials() {
  const f = window.FOS.financials;
  const fields = {
    'fin-input-mrr': 'mrr', 'fin-input-arr': 'arr', 'fin-input-burn': 'burnRate',
    'fin-input-runway': 'runway', 'fin-input-cac': 'cac', 'fin-input-ltv': 'ltv',
    'fin-input-churn': 'churn', 'fin-input-margin': 'grossMargin', 'fin-input-growth': 'growthRate'
  };
  Object.entries(fields).forEach(([id, key]) => {
    const v = parseFloat(document.getElementById(id)?.value);
    if (!isNaN(v)) f[key] = v;
  });
  window.FOS.mrrHistory.push(f.mrr);
  if (window.FOS.mrrHistory.length > 7) window.FOS.mrrHistory.shift();
  saveState(); renderFinance();
  showToast('✓ Financials updated.');
}

// ── Topbar Scroll Effect ─────────────────────────────────────
function initScrollEffect() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  const onScroll = () => {
    if (window.scrollY > 8) {
      topbar.classList.add('scrolled');
    } else {
      topbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Theme Toggle ─────────────────────────────────────────────
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle-input');
  const labelText = document.getElementById('theme-label-text');
  const iconIndicator = document.getElementById('theme-icon-indicator');
  const metaThemeColor = document.getElementById('meta-theme-color');

  if (!toggle) return;

  // Read current theme
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const isLight = currentTheme === 'light';
  toggle.checked = isLight;
  updateThemeUI(isLight);

  toggle.addEventListener('change', () => {
    const light = toggle.checked;
    if (light) {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.style.colorScheme = 'light';
      localStorage.setItem('founderOS_theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.style.colorScheme = 'dark';
      localStorage.setItem('founderOS_theme', 'dark');
    }
    updateThemeUI(light);

    // Re-render charts with correct colors
    requestAnimationFrame(() => renderActivePage(window.FOS.currentPage));
  });

  function updateThemeUI(isLight) {
    if (labelText) labelText.textContent = isLight ? 'Light' : 'Dark';
    if (metaThemeColor) metaThemeColor.setAttribute('content', isLight ? '#f5f7fa' : '#060a10');

    // Update topbar background for light mode
    const topbar = document.querySelector('.topbar');
    if (topbar) {
      if (isLight) {
        topbar.style.setProperty('--topbar-bg', 'rgba(255, 255, 255, 0.85)');
      } else {
        topbar.style.removeProperty('--topbar-bg');
      }
    }

    // Swap the sidebar label icon
    if (iconIndicator) {
      iconIndicator.innerHTML = isLight
        ? '<circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />'
        : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />';
    }
  }
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateTopbarDate();

  const stageEl = document.getElementById('sidebar-stage');
  if (stageEl) stageEl.textContent = window.FOS.founderStage;

  const execEl = document.getElementById('topbar-exec-score');
  if (execEl) execEl.textContent = window.FOS.executionScore + '%';

  // Nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => navigate(item.dataset.page));
  });

  // Mobile
  document.getElementById('mobile-menu-btn')?.addEventListener('click', openMobileMenu);
  document.getElementById('sidebar-overlay')?.addEventListener('click', closeMobileMenu);

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tabgroup, btn.dataset.tabid));
  });

  // Topbar scroll effect
  initScrollEffect();

  // Theme toggle
  initThemeToggle();

  // Handle resize for chart redraw
  window.addEventListener('resize', debounce(() => {
    renderActivePage(window.FOS.currentPage);
  }, 300));

  // Start
  checkOnboarding();
});


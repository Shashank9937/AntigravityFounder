/* ============================================================
   FOUNDER OS – DOMAINS MODULE
   9 Domains of CEO Mastery — interactive expandable cards
   ============================================================ */

'use strict';

const DOMAINS = [
    {
        id: 'market', icon: '📊', title: 'Market & Industry Analysis',
        color: '#3b82f6',
        mastery: 'You read competitive moats before they form. You spot second-order market shifts 12–18 months early. You can map industry structure in one whiteboard session.',
        metrics: ['Market share %', 'TAM penetration', 'Competitive win rate', 'Category position index'],
        modules: ['Porter\'s Five Forces in practice', 'Jobs-to-be-done framework', 'Competitive intelligence systems', 'Market timing analysis'],
        exercises: ['Map your full industry value chain this week', 'Identify 3 non-obvious competitors', 'Write a 1-page market thesis'],
    },
    {
        id: 'product', icon: '⚙️', title: 'Product & Systems Thinking',
        color: '#8b5cf6',
        mastery: 'You build products that create compounding value. You think in systems, not features. You design for 10x, not 10%.',
        metrics: ['NPS score', 'Feature adoption rate', 'Time to value (TTV)', 'MAU / WAU ratio'],
        modules: ['Systems dynamics for product builders', 'Jobs-to-be-done design sprint', 'How to kill features ruthlessly', 'Building product intuition with data'],
        exercises: ['Draw your product flywheel diagram', 'Interview 3 churned customers', 'Cut one feature this sprint'],
    },
    {
        id: 'finance', icon: '💰', title: 'Finance & Capital Allocation',
        color: '#10b981',
        mastery: 'Capital follows you, not the other way around. You understand the difference between revenue and value. Every dollar has an ROI decision behind it.',
        metrics: ['LTV:CAC ratio', 'Gross margin %', 'Capital efficiency ratio', 'Revenue per employee'],
        modules: ['Unit economics from first principles', 'Capital allocation frameworks (Buffett model)', 'Startup financial modeling', 'Fundraising strategy & timing'],
        exercises: ['Build a 12-month cash flow model', 'Calculate your exact unit economics', 'Identify your top 3 capital inefficiencies'],
    },
    {
        id: 'sales', icon: '🤝', title: 'Sales & Negotiation',
        color: '#f59e0b',
        mastery: 'You can close any room. You understand human psychology and decision dynamics. You build sales systems, not just individual relationships.',
        metrics: ['Win rate %', 'Average deal size', 'Sales cycle length', 'Pipeline coverage ratio'],
        modules: ['Challenger sale methodology', 'SPIN selling for enterprise', 'Negotiation frameworks (BATNA)', 'Building a repeatable sales motion'],
        exercises: ['Do 5 cold outreach calls this week', 'Map your top 3 objections & responses', 'Role-play a negotiation scenario'],
    },
    {
        id: 'marketing', icon: '📣', title: 'Marketing & Brand Positioning',
        color: '#ef4444',
        mastery: 'Your brand has gravity — it attracts customers, talent, and capital. You define the category. You don\'t compete in it.',
        metrics: ['CAC by channel', 'Organic traffic growth', 'Brand search volume', 'Content conversion rate'],
        modules: ['Category design (Play Bigger framework)', 'Distribution thinking: channels & loops', 'Content as a compounding asset', 'Positioning strategy'],
        exercises: ['Write your one-sentence positioning statement', 'Map your top-performing acquisition channel', 'Identify one viral distribution loop'],
    },
    {
        id: 'operations', icon: '🏗️', title: 'Operations & Scaling Systems',
        color: '#06b6d4',
        mastery: 'You engineer leverage. Your business runs better without you than with you. Every process is documented, owned, and measured.',
        metrics: ['Process automation rate', 'Defect / error rate', 'Time to hire', 'Revenue per FTE'],
        modules: ['Building operating rhythms (OKR, L10)', 'Process documentation systems', 'Hiring for scale: A-player frameworks', 'Delegation architecture'],
        exercises: ['Document your top 3 recurring processes', 'Identify one task to delegate by Friday', 'Run a bottleneck audit this week'],
    },
    {
        id: 'ai', icon: '🤖', title: 'AI & Technology Leverage',
        color: '#3b82f6',
        mastery: 'You use AI as a strategic multiplier, not a feature. You identify where technology creates asymmetric advantages in your market.',
        metrics: ['AI automation rate', 'Tech stack cost efficiency', 'Engineering velocity', 'Data asset value'],
        modules: ['AI strategy for non-technical founders', 'Building vs buying technology', 'Data moats and network effects', 'Prompt engineering for business ops'],
        exercises: ['Identify 5 workflows to AI-automate this month', 'Evaluate your build vs buy tech decisions', 'Audit your data collection strategy'],
    },
    {
        id: 'leadership', icon: '👥', title: 'Leadership & Organizational Design',
        color: '#8b5cf6',
        mastery: 'You attract A-players who compound each other. Your culture is a strategic weapon. You make people better by working with you.',
        metrics: ['Employee NPS', 'Attrition rate', 'Time to full productivity', 'Culture assessment score'],
        modules: ['Founder to CEO transition', 'Building a senior leadership team', 'Org design for different growth stages', 'Managing with radical candor'],
        exercises: ['Conduct one skip-level 1:1 this week', 'Write your leadership principles', 'Identify your lowest-performing hire decision'],
    },
    {
        id: 'legal', icon: '⚖️', title: 'Legal, Risk & Governance',
        color: '#f59e0b',
        mastery: 'You protect what you\'ve built. You understand the asymmetry of downside risk. You govern before you need to.',
        metrics: ['Open legal exposures', 'IP protection coverage', 'Compliance completion rate', 'Board meeting cadence'],
        modules: ['Cap table management fundamentals', 'Investor rights & protections', 'Employment law for founders', 'Risk identification frameworks'],
        exercises: ['Audit your IP ownership documentation', 'Review all outstanding contractor agreements', 'Create a risk register for your top 5 exposures'],
    },
];

let openDomain = null;

function renderDomains() {
    const grid = document.getElementById('domains-grid');
    if (!grid) return;
    grid.innerHTML = DOMAINS.map(d => `
    <div class="domain-card card" id="domain-${d.id}" style="cursor:pointer;border-color:var(--border);transition:all .25s"
         onclick="toggleDomain('${d.id}')">
      <div class="flex justify-between items-center">
        <div class="flex gap-md items-center">
          <div style="font-size:1.5rem;width:40px;height:40px;background:${d.color}18;border-radius:var(--r-md);display:flex;align-items:center;justify-content:center">${d.icon}</div>
          <div>
            <div style="font-size:.88rem;font-weight:700;color:var(--text-primary)">${d.title}</div>
            <div style="font-size:.75rem;color:var(--text-muted);margin-top:2px">
              ${getSkillForDomain(d.id)}% mastery
            </div>
          </div>
        </div>
        <svg id="chevron-${d.id}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--text-muted);transition:transform .25s"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="progress-bar mt-md">
        <div class="progress-fill" style="width:${getSkillForDomain(d.id)}%;background:linear-gradient(90deg,${d.color},${d.color}aa)"></div>
      </div>
      <div class="domain-expand" id="expand-${d.id}" style="display:none;margin-top:var(--sp-lg)">
        <div class="divider" style="margin:0 0 var(--sp-md)"></div>
        <div class="grid-2 gap-md" style="margin-bottom:var(--sp-md)">
          <div>
            <h5 style="margin-bottom:var(--sp-sm)">What Mastery Looks Like</h5>
            <p style="font-size:.84rem;line-height:1.7">${d.mastery}</p>
          </div>
          <div>
            <h5 style="margin-bottom:var(--sp-sm)">Key Metrics</h5>
            <div class="flex-col gap-xs">
              ${d.metrics.map(m => `<div style="display:flex;align-items:center;gap:8px;font-size:.84rem;color:var(--text-secondary)"><div style="width:5px;height:5px;border-radius:50%;background:${d.color};flex-shrink:0"></div>${m}</div>`).join('')}
            </div>
          </div>
        </div>
        <div class="grid-2 gap-md">
          <div>
            <h5 style="margin-bottom:var(--sp-sm)">Training Modules</h5>
            <div class="flex-col gap-xs">
              ${d.modules.map((m, i) => `<div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:var(--bg-input);border-radius:var(--r-sm);font-size:.82rem;color:var(--text-secondary)"><span style="color:${d.color};font-weight:700">${i + 1}.</span>${m}</div>`).join('')}
            </div>
          </div>
          <div>
            <h5 style="margin-bottom:var(--sp-sm)">Execution Exercises</h5>
            <div class="flex-col gap-xs">
              ${d.exercises.map(e => `<div style="display:flex;align-items:flex-start;gap:8px;font-size:.82rem;color:var(--text-secondary)"><span style="color:${d.color};margin-top:2px">→</span>${e}</div>`).join('')}
            </div>
          </div>
        </div>
        <div class="mt-md">
          <button class="btn btn-sm" style="background:${d.color}22;color:${d.color};border:1px solid ${d.color}44" onclick="event.stopPropagation();updateSkill('${d.id}')">Update Mastery Score</button>
        </div>
      </div>
    </div>`).join('');
}

function getSkillForDomain(id) {
    const map = {
        market: 'Market Analysis', product: 'Product Thinking', finance: 'Finance',
        sales: 'Sales', marketing: 'Marketing', operations: 'Operations',
        ai: 'AI/Tech', leadership: 'Leadership', legal: 'Legal/Risk'
    };
    return window.FOS.skills[map[id]] || 50;
}

function toggleDomain(id) {
    const expand = document.getElementById('expand-' + id);
    const chevron = document.getElementById('chevron-' + id);
    const card = document.getElementById('domain-' + id);
    if (!expand) return;
    const isOpen = expand.style.display !== 'none';
    // Close all
    DOMAINS.forEach(d => {
        const e = document.getElementById('expand-' + d.id);
        const c = document.getElementById('chevron-' + d.id);
        if (e) e.style.display = 'none';
        if (c) c.style.transform = 'rotate(0deg)';
    });
    if (!isOpen) {
        expand.style.display = 'block';
        chevron.style.transform = 'rotate(180deg)';
        card.style.borderColor = 'var(--border-strong)';
    }
}

function updateSkill(domainId) {
    const map = { market: 'Market Analysis', product: 'Product Thinking', finance: 'Finance', sales: 'Sales', marketing: 'Marketing', operations: 'Operations', ai: 'AI/Tech', leadership: 'Leadership', legal: 'Legal/Risk' };
    const key = map[domainId];
    const val = parseInt(prompt(`Update mastery score for "${key}" (0–100):`, window.FOS.skills[key] || 50));
    if (isNaN(val) || val < 0 || val > 100) return;
    window.FOS.skills[key] = val;
    saveState();
    renderDomains();
}

// Auto-render when domains page is activated
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(renderDomains, 100);
});

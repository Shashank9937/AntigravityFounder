'use strict';

/* ============================================================
   FOUNDER OS – LEARNING LIBRARY
   All 9 domains + 4 bonus founder topics
   ============================================================ */

const LIBRARY = [
    {
        id: 'market',
        icon: '📊',
        color: '#3b82f6',
        badge: 'badge-blue',
        title: 'Market Intelligence',
        tagline: 'See markets before others do.',
        overview: 'Market intelligence is the founder\'s highest-leverage skill. The ability to read industry structure, spot timing windows, and understand competitive dynamics separates category creators from feature builders.',
        frameworks: [
            { name: 'Porter\'s Five Forces', desc: 'Map competitive pressure: suppliers, buyers, substitutes, new entrants, rivalry. Reveals where your moat must sit.' },
            { name: 'Jobs To Be Done (JTBD)', desc: 'Customers don\'t buy products—they hire solutions for jobs. Identify the functional, social, and emotional jobs your market is trying to complete.' },
            { name: 'TAM / SAM / SOM', desc: 'Total addressable, serviceable addressable, serviceable obtainable market. Quantify the prize and define your beach-head.' },
            { name: 'Market Timing Framework', desc: 'Sequencing, enabling tech, and regulatory tailwinds determine if you\'re early, right, or late. Early is often indistinguishable from wrong.' },
            { name: 'Category Design', desc: 'From Play Bigger: don\'t compete in categories—create them. Define the problem space, design the category, and crown yourself king.' },
        ],
        books: [
            { title: 'Crossing the Chasm', author: 'Geoffrey Moore', why: 'The definitive guide on moving a product from early adopters to the mass market.' },
            { title: 'The Innovator\'s Dilemma', author: 'Clayton Christensen', why: 'Why great companies fail—and the disruptive market forces you must master.' },
            { title: 'Play Bigger', author: 'Ramadan, Peterson, Lochhead, Maney', why: 'Category design as a strategic weapon for founders.' },
            { title: 'Blue Ocean Strategy', author: 'Kim & Mauborgne', why: 'Make competition irrelevant by creating uncontested market space.' },
            { title: 'Zero to One', author: 'Peter Thiel', why: 'The case for monopoly and why competition is for losers.' },
        ],
        mentalModels: [
            'Second-order thinking — what are the downstream consequences of market shifts?',
            'Inversion — what would have to be true for this market NOT to grow?',
            'Contrast effect — how does your offer look relative to alternatives?',
            'Narrative fallacy — separate the story from what the data actually says.',
        ],
        caseStudies: [
            { company: 'Airbnb', lesson: 'Created a new lodging category by repositioning unused bedrooms as a market.' },
            { company: 'Salesforce', lesson: 'Destroyed on-premise CRM by defining "Software as a Service" as a category, not a product.' },
            { company: 'Uber', lesson: 'Entered a regulated market by redefining the job: not taxis, but personal transportation on demand.' },
        ],
        weeklyExercises: [
            'Map your full industry value chain — every player, every margin, every dependency.',
            'Write a 1-page "market thesis" explaining why now is the right time for your solution.',
            'Identify 3 non-obvious competitors — the ones solving the same job, not same product.',
            'Interview 2 churned customers — find out what job they fired you and hired instead.',
        ],
    },
    {
        id: 'product',
        icon: '⚙️',
        color: '#8b5cf6',
        badge: 'badge-purple',
        title: 'Product & Systems Thinking',
        tagline: 'Build products that compound.',
        overview: 'Elite founders don\'t build features—they architect systems. Product thinking at the CEO level means understanding feedback loops, compounding user value, and making ruthless trade-off decisions based on real behavioral data.',
        frameworks: [
            { name: 'Jobs To Be Done Design Sprint', desc: '4-day process to go from job statement to prototype tested with real users.' },
            { name: 'Flywheel Design', desc: 'Map the self-reinforcing loop that makes your product stronger with each user. Amazon, Airbnb, LinkedIn all run on flywheels.' },
            { name: 'Systems Thinking (Causal Loops)', desc: 'Identify reinforcing and balancing loops in your product. Where are your leverage points?' },
            { name: 'North Star Metric Framework', desc: 'One metric that captures delivered user value. Everything else is an input or output of the NSM.' },
            { name: 'Feature Sequencing (Shape Up)', desc: 'Basecamp\'s methodology: appetite-based development with fixed time, variable scope. Stops feature bloat.' },
        ],
        books: [
            { title: 'The Mom Test', author: 'Rob Fitzpatrick', why: 'Learn how to talk to customers without getting lied to. The most practical founder book on product discovery.' },
            { title: 'Inspired', author: 'Marty Cagan', why: 'How the best product companies discover and deliver products customers love.' },
            { title: 'Continuous Discovery Habits', author: 'Teresa Torres', why: 'Weekly customer touchpoints as a product habit, not a project.' },
            { title: 'Thinking in Systems', author: 'Donella Meadows', why: 'The foundational text on systems thinking—mandatory for any builder.' },
            { title: 'Shape Up', author: 'Ryan Singer (Basecamp)', why: 'A radically different and effective way to manage product development cycles.' },
        ],
        mentalModels: [
            'First principles — break down the problem to atoms; don\'t analogy your way to a solution.',
            'Feedback loops — identify reinforcing loops (growth) vs balancing loops (ceilings) in your product.',
            'Minimal viable change — what\'s the smallest change that produces the largest learning?',
            'Reversibility test — Type 1 (irreversible) vs Type 2 (reversible) decisions. Slow down on Type 1 only.',
        ],
        caseStudies: [
            { company: 'Notion', lesson: 'Built a flexible block system instead of fixed templates — the meta-layer that lets users build any product.' },
            { company: 'Slack', lesson: 'Reduced time to first "aha moment" to under 11 minutes through obsessive onboarding engineering.' },
            { company: 'Figma', lesson: 'Multiplayer collaboration as a core system constraint, not a feature — fundamentally changed the design workflow.' },
        ],
        weeklyExercises: [
            'Draw your product flywheel on a whiteboard — identify the weakest link.',
            'Define your North Star Metric and verify it correlates to retention.',
            'Kill one feature that has <5% adoption but consumes 15%+ maintenance bandwidth.',
            'Do 3 user sessions — observe, don\'t explain. Watch where they get confused.',
        ],
    },
    {
        id: 'finance',
        icon: '💰',
        color: '#10b981',
        badge: 'badge-green',
        title: 'Finance & Capital Allocation',
        tagline: 'Capital follows clear thinking.',
        overview: 'The CEO\'s core job is capital allocation—deciding how each dollar of time, money, and attention is deployed. Most founders optimize for revenue and ignore the capital efficiency story that investors actually buy.',
        frameworks: [
            { name: 'Rule of 40', desc: 'Growth rate + profit margin should exceed 40%. Below 40 signals burn-without-return. Fundraise before you dip.' },
            { name: 'Unit Economics Stack', desc: 'CAC → LTV → Payback Period → Margin. Build this by cohort, not average. Averages lie.' },
            { name: 'Capital Allocation Matrix', desc: 'For every dollar: R&D, S&M, G&A, or return to investors. Allocate consciously, not reactively.' },
            { name: 'Scenario Planning (Base/Bull/Bear)', desc: 'Model three scenarios quarterly. Your base is your plan. Your bear is your covenant. Your bull is your pitch.' },
            { name: 'DCF Mental Model', desc: 'All value is the present value of future cash flows. Every strategic decision is a DCF decision—even ones that don\'t feel financial.' },
        ],
        books: [
            { title: 'Secrets of Sand Hill Road', author: 'Scott Kupor', why: 'How venture capital actually works—term sheets, board dynamics, dilution explained.' },
            { title: 'The Intelligent Investor', author: 'Benjamin Graham', why: 'Capital allocation principles that translate directly from public markets to private companies.' },
            { title: 'Venture Deals', author: 'Brad Feld & Jason Mendelson', why: 'The term sheet bible. Know every clause before you sign anything.' },
            { title: 'The Outsiders', author: 'William Thorndike', why: '8 contrarian CEOs who beat the market through radical capital allocation discipline.' },
            { title: 'Financial Intelligence', author: 'Berman & Knight', why: 'Accounting for non-financial managers—read your P&L, balance sheet, and cash flow fluently.' },
        ],
        mentalModels: [
            'Opportunity cost — every capital deployment decision forecloses another. Name the alternative.',
            'Marginal returns — the last dollar allocated to a channel rarely performs like the first.',
            'Sunk cost fallacy — past capital deployed is irrelevant to future allocation decisions.',
            'Float — Berkshire\'s model: use customers\' money to invest before delivering. Where\'s your float?',
        ],
        caseStudies: [
            { company: 'Berkshire Hathaway', lesson: 'Buffett\'s capital allocation framework: only deploy capital when you have an edge or a moat. Return the rest.' },
            { company: 'Constellation Software', lesson: 'Vertical SaaS roll-up strategy — acquire niche software businesses at 5x EBITDA and optimize.' },
            { company: 'HubSpot', lesson: 'Chose to IPO at $30M ARR to use public currency for acquisitions. Strategic not financial decision.' },
        ],
        weeklyExercises: [
            'Build a cohort-level unit economics model separating Q1 vs Q4 customers.',
            'Calculate your true CAC payback period including onboarding and support costs.',
            'Run a capital allocation audit: what % of spend directly drives revenue in 90 days?',
            'Model three scenarios for next 12 months: bear (-30% growth), base, bull (+50% growth).',
        ],
    },
    {
        id: 'sales',
        icon: '🤝',
        color: '#f59e0b',
        badge: 'badge-amber',
        title: 'Sales & Negotiation',
        tagline: 'Revenue is the only proof of value.',
        overview: 'Sales is the founder\'s first job. Before you hire a VP of Sales, you must understand every step of the funnel, close deals personally, and build the playbook others will run. Negotiation is the highest-leverage skill in capital allocation.',
        frameworks: [
            { name: 'Challenger Sale', desc: 'Teach → Tailor → Take Control. Stop responding to buyer needs; challenge their worldview with insight.' },
            { name: 'MEDDIC Qualification', desc: 'Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion. Qualify rigorously or lose late.' },
            { name: 'SPIN Selling', desc: 'Situation → Problem → Implication → Need-Payoff questions. The research-backed B2B sales framework.' },
            { name: 'BATNA Framework', desc: 'Best Alternative To Negotiated Agreement. Know yours. Discover theirs. Whoever has the stronger BATNA has the power.' },
            { name: 'Sandler Selling System', desc: 'Pain → Budget → Decision. Get commitment before pitching. Stop unpaid consulting.' },
        ],
        books: [
            { title: 'The Challenger Sale', author: 'Dixon & Adamson', why: 'The most rigorous sales research ever done on B2B. Challengers outperform relationship builders.' },
            { title: 'Never Split the Difference', author: 'Chris Voss', why: 'FBI hostage negotiation applied to business. Tactical empathy, mirroring, and labeling.' },
            { title: 'Spin Selling', author: 'Neil Rackham', why: '35,000 sales calls analyzed. The definitive research on what actually closes complex deals.' },
            { title: 'Fanatical Prospecting', author: 'Jeb Blount', why: 'Pipeline is a leading indicator. This book will fix your top-of-funnel permanently.' },
            { title: 'Getting to Yes', author: 'Fisher & Ury', why: 'The Harvard negotiation methodology. Principled negotiation over positional bargaining.' },
        ],
        mentalModels: [
            'Anchoring — the first number stated frames the entire negotiation. Always anchor first.',
            'Reciprocity — give before you ask. Value before pitch. Strategic generosity compounds.',
            'Social proof — case studies, logos, and references reduce friction more than features.',
            'Loss aversion — framing around what they\'ll lose without you is 2x more powerful than what they\'ll gain.',
        ],
        caseStudies: [
            { company: 'Salesforce (early days)', lesson: 'Marc Benioff personally closed first 100 customers. Founder-led sales builds the playbook before you delegate it.' },
            { company: 'Gong.io', lesson: 'Used their own product data to prove their product worked — compressed objection handling time to near zero.' },
            { company: 'HubSpot', lesson: 'Built inbound sales as a content machine — made sales feel like service, not selling.' },
        ],
        weeklyExercises: [
            'Map your full sales process: every step from cold outreach to signed contract.',
            'Document your top 5 objections with a structured response to each.',
            'Do one cold outreach per day for 5 days — track response rates by message type.',
            'Role-play a negotiation where the buyer says "we need a 30% discount."',
        ],
    },
    {
        id: 'marketing',
        icon: '📣',
        color: '#ef4444',
        badge: 'badge-red',
        title: 'Marketing & Brand Positioning',
        tagline: 'The brand that defines the category wins.',
        overview: 'Marketing at the CEO level is positioning and distribution strategy, not campaigns. The best founders build brands with gravitational pull—they attract customers, talent, and capital without proportional spending.',
        frameworks: [
            { name: 'April Dunford\'s Positioning Framework', desc: 'Competitive alternatives → unique attributes → value → customers → market category. The cleanest positioning process available.' },
            { name: 'Pirate Metrics (AARRR)', desc: 'Acquisition → Activation → Retention → Revenue → Referral. Diagnose your growth bottleneck by stage.' },
            { name: 'Distribution Flywheel', desc: 'Product-led growth, content, community, or sales? Each distribution model requires a different org structure and investment pattern.' },
            { name: 'Brand Architecture', desc: 'Positioning statement → messaging hierarchy → proof points. Everything downstream from this decision must be consistent.' },
            { name: 'Content Compound Interest', desc: 'Content that earns SEO, builds authority, and converts—indexed once, earning forever. The highest-ROI long-game channel.' },
        ],
        books: [
            { title: 'Obviously Awesome', author: 'April Dunford', why: 'The best practical framework for product positioning ever written.' },
            { title: 'Traction', author: 'Gabriel Weinberg & Justin Mares', why: '19 traction channels tested with a systematic framework for finding your core distribution channel.' },
            { title: 'Building a StoryBrand', author: 'Donald Miller', why: 'Make the customer the hero. Clarify your message so customers engage.' },
            { title: 'Contagious', author: 'Jonah Berger', why: 'Why things go viral: STEPPS framework. Social currency, Triggers, Emotion, Public, Practical value, Stories.' },
            { title: 'This Is Marketing', author: 'Seth Godin', why: 'Marketing as serving the smallest viable audience. Stop shouting; start solving.' },
        ],
        mentalModels: [
            'Brand as signal — brands reduce decision friction. The stronger your brand, the less you explain.',
            'Distribution eats product — a mediocre product with great distribution beats great product with weak distribution.',
            'Market of one — the more specifically you speak, the more broadly you resonate.',
            'Category gravity — define the category and you become the default comparison point.',
        ],
        caseStudies: [
            { company: 'Notion', lesson: 'Community-led growth: power users built templates, YouTube tutorials, and subreddits. Zero paid acquisition.' },
            { company: 'Linear', lesson: 'Built an elite brand through rigorous product quality and aesthetic — GitHub stars as a distribution channel.' },
            { company: 'Drift', lesson: 'Invented the "conversational marketing" category, published relentlessly, and became the category default.' },
        ],
        weeklyExercises: [
            'Write your positioning statement using April Dunford\'s template.',
            'Map your AARRR funnel with real numbers — find the biggest drop-off.',
            'Identify your #1 distribution channel by CPL and conversion quality.',
            'Create one piece of content that answers the question your best customers asked before buying.',
        ],
    },
    {
        id: 'operations',
        icon: '🏗️',
        color: '#06b6d4',
        badge: 'badge-cyan',
        title: 'Operations & Scaling Systems',
        tagline: 'Build the machine that runs the machine.',
        overview: 'Operational excellence is the difference between a founder-dependent business and a self-compounding organization. The goal is to engineer systems where output scales faster than headcount.',
        frameworks: [
            { name: 'EOS / Traction Model', desc: 'Vision, People, Data, Issues, Process, Traction. Six components that run a management operating system.' },
            { name: 'OKR System', desc: 'Objectives and Key Results. Company → Department → Individual. Alignment without micromanagement.' },
            { name: 'L10 Meeting Cadence', desc: 'Level 10 meetings: scorecard review, rocks, IDSing — 90 min weekly management ritual that replaces 10 hours of email.' },
            { name: 'Process Documentation (SOP Framework)', desc: 'Standard Operating Procedures: trigger, steps, owner, output, review cadence. Document before you delegate.' },
            { name: 'Delegation Ladder', desc: '7 levels from "do it and don\'t tell me" to "wait for my instructions." Match level to employee competence.' },
        ],
        books: [
            { title: 'Traction', author: 'Gino Wickman', why: 'The EOS playbook for scaling an operations-driven company.' },
            { title: 'The E-Myth Revisited', author: 'Michael Gerber', why: 'Why businesses fail when founders work IN the business instead of ON the system.' },
            { title: 'High Output Management', author: 'Andy Grove', why: 'Intel\'s legendary CEO on manager leverage, 1:1 meetings, and performance reviews.' },
            { title: 'Work the System', author: 'Sam Carpenter', why: 'Everything is a system. Document, optimize, delegate, and step away.' },
            { title: 'Measure What Matters', author: 'John Doerr', why: 'How Google, Bono, and the Gates Foundation rocked the world with OKRs.' },
        ],
        mentalModels: [
            'Leverage — what actions have the highest force multiplier? Prioritize relentlessly.',
            'Bottleneck theory — the system output equals the capacity of its weakest constraint.',
            'Process over outcome — build processes that produce good outcomes consistently, not heroics.',
            'Reversibility — automate and systematize decisions that are reversible; slow down on irreversible ones.',
        ],
        caseStudies: [
            { company: 'Amazon', lesson: 'The "two-pizza team" rule and API mandate — operational decisions that created the AWS business as a side effect.' },
            { company: 'McDonald\'s', lesson: 'Not a restaurant chain — a system that replicates consistently at global scale. The franchise as an operations playbook.' },
            { company: 'Toyota', lesson: 'Kaizen and the Toyota Production System: continuous improvement baked into every process at every level.' },
        ],
        weeklyExercises: [
            'Document your highest-frequency recurring process as an SOP this week.',
            'Run a bottleneck audit: what single constraint is limiting your company\'s output?',
            'Identify one task you are doing that someone else could do at 80% quality.',
            'Set 3 company-level OKRs for the quarter and cascade to each team lead.',
        ],
    },
    {
        id: 'ai',
        icon: '🤖',
        color: '#3b82f6',
        badge: 'badge-blue',
        title: 'AI & Technology Leverage',
        tagline: 'AI is your asymmetric multiplier.',
        overview: 'AI is the most compressive technology since the internet. Founders who integrate AI leverage into their operating model — not just their product — will build companies that outpace the market permanently.',
        frameworks: [
            { name: 'AI Automation Audit', desc: 'Map every workflow: repeatable + rule-based → automate now. Creative + strategic → augment. Novel + human → keep.' },
            { name: 'Build vs Buy vs API Decision', desc: 'Foundation models (API), fine-tuning (adapt), own model (data moat). Decision tree based on proprietary data advantage.' },
            { name: 'Data Moat Framework', desc: 'Proprietary data + unique insights = defensible AI asset. Where is your business generating data others cannot replicate?' },
            { name: 'AI ROI Model', desc: 'Hours saved × cost per hour vs implementation cost. Payback period under 90 days is always justified.' },
            { name: 'Prompt Engineering for Ops', desc: 'Structured prompting for repeatable business tasks: research, analysis, communication, documentation, code review.' },
        ],
        books: [
            { title: 'Power and Prediction', author: 'Agrawal, Gans & Goldfarb', why: 'AI as a prediction machine — how it redistributes power across industries.' },
            { title: 'The Coming Wave', author: 'Mustafa Suleyman', why: 'The strategic and societal implications of AI from a founder of DeepMind.' },
            { title: 'AI Superpowers', author: 'Kai-Fu Lee', why: 'US vs China AI race — and the strategic implications for founders globally.' },
            { title: 'Human Compatible', author: 'Stuart Russell', why: 'AI alignment — for founders building AI-native products with real-world stakes.' },
            { title: 'The Lean Startup', author: 'Eric Ries', why: 'Build-measure-learn loop applies directly to AI feature experimentation.' },
        ],
        mentalModels: [
            'Automation frontier — what can AI do today, what will it do in 12 months? Stay one year ahead.',
            'Data network effects — more users → more data → better model → more users. Where is your loop?',
            'Cognitive overhead — AI\'s highest leverage is removing decisions from human cognitive stack.',
            'Technology as leverage — Claude/GPT-4 gives a solo founder the research capacity of a 10-person team.',
        ],
        caseStudies: [
            { company: 'Klarna', lesson: 'Replaced 700 support agents with AI — reduced resolution time from 11 minutes to 2. $40M annual savings.' },
            { company: 'Cursor', lesson: 'Wrapped existing AI models in a superior UX — became a $900M company without building a foundation model.' },
            { company: 'Harvey.ai', lesson: 'Vertical AI for law — fine-tuned on legal corpus, built workflow integrations. $100M ARR in 2 years.' },
        ],
        weeklyExercises: [
            'Audit 5 workflows in your company — identify which are fully automatable with current AI.',
            'Build one AI-powered internal tool (research, summarization, drafting) this week.',
            'Map your company\'s proprietary data assets — what can you train or fine-tune on?',
            'Test GPT-4 and Claude on your top 3 repetitive cognitive tasks. Compare quality.',
        ],
    },
    {
        id: 'leadership',
        icon: '👥',
        color: '#8b5cf6',
        badge: 'badge-purple',
        title: 'Leadership & Organizational Design',
        tagline: 'Your organization is your product.',
        overview: 'Leadership at scale is about system design, not personal charisma. The CEO\'s job is to build an organization that produces great decisions without the founder in the room. Culture is a strategic weapon.',
        frameworks: [
            { name: 'Founder to CEO Transition', desc: 'Player → Coach → GM. Three distinct leadership modes as the company scales: doing, managing, architecting.' },
            { name: 'Radical Candor', desc: 'Care personally + challenge directly. 2x2: Ruinous Empathy, Obnoxious Aggression, Manipulative Insincerity, Radical Candor.' },
            { name: 'Org Design by Stage', desc: '0–10: flat. 10–50: functional. 50–200: divisional. 200+: matrix or squad model. Design for the next stage, not the current one.' },
            { name: 'SLT Hiring Framework', desc: 'Hire senior leaders who\'ve done the job at your next scale. Gap between current and target state is the job spec.' },
            { name: 'Culture Operating System', desc: 'Values → Norms → Rituals → Artifacts. Each layer reinforces and makes visible the layer above it.' },
        ],
        books: [
            { title: 'The Hard Thing About Hard Things', author: 'Ben Horowitz', why: 'The most honest CEO memoir — how to lead through the moments no one talks about.' },
            { title: 'Radical Candor', author: 'Kim Scott', why: 'The feedback framework that Google, Apple, and Twitter use. Care + challenge.' },
            { title: 'An Elegant Puzzle', author: 'Will Larson', why: 'Engineering org design — applies across any technical organization building for scale.' },
            { title: 'The Culture Code', author: 'Daniel Coyle', why: 'What actually builds high-performing teams: safety, vulnerability, and shared purpose.' },
            { title: 'Who', author: 'Geoff Smart & Randy Street', why: 'The scorecard hiring method. A-players only. The cost of a bad hire is 15x salary.' },
        ],
        mentalModels: [
            'Return on management — Andy Grove\'s metric: output of your team per hour of your involvement.',
            'Trust battery — Tobi Lütke\'s metaphor: every interaction charges or drains trust. You can\'t spend what you haven\'t charged.',
            'First team — your peer leadership team is your first team; your direct reports are your second.',
            'Disagree and commit — have the argument; once decided, full alignment. No passive resistance.',
        ],
        caseStudies: [
            { company: 'Netflix', lesson: 'Culture deck as recruiting and management tool. "Adequate performance gets a generous severance package."' },
            { company: 'Amazon', lesson: 'Leadership Principles embedded in hiring, promotions, and every major decision. Culture as operating system.' },
            { company: 'Bridgewater', lesson: 'Radical transparency — all meetings recorded, all decisions logged. Extreme but instructive.' },
        ],
        weeklyExercises: [
            'Write your personal leadership principles — 5 behaviors you will hold yourself to publicly.',
            'Conduct one skip-level 1:1 to understand what your team experiences without you.',
            'Give one piece of Radical Candor feedback you\'ve been avoiding.',
            'Draw your org chart for 18 months from now — identify the gaps you must hire into.',
        ],
    },
    {
        id: 'governance',
        icon: '⚖️',
        color: '#f59e0b',
        badge: 'badge-amber',
        title: 'Legal, Risk & Governance',
        tagline: 'Protect what you build.',
        overview: 'Founders routinely underinvest in legal and governance until it\'s expensive. Understanding IP, cap table mechanics, board dynamics, employment law, and regulatory risk is the difference between building on solid ground vs. building on sand.',
        frameworks: [
            { name: 'Cap Table Management', desc: 'Fully diluted shares outstanding. Understand pre/post-money, pro-rata rights, anti-dilution, and option pool impact before every round.' },
            { name: 'Risk Register Framework', desc: 'Identify → Assess probability + impact → Mitigate → Monitor. Treat risk as a portfolio to manage, not events to react to.' },
            { name: 'Board Management', desc: 'Board = fiduciary + strategic + network. Manage board relationships like investors — pre-meeting, meeting, post-meeting cadences.' },
            { name: 'IP Fortress Strategy', desc: 'Patents (process), trademarks (brand), copyright (content), trade secrets (know-how). Protect all four layers systematically.' },
            { name: 'Investor Rights Checklist', desc: 'Pro-rata, information rights, board seats, protective provisions, drag-along, tag-along. Know every clause before signing.' },
        ],
        books: [
            { title: 'Venture Deals', author: 'Brad Feld & Jason Mendelson', why: 'The definitive term sheet guide. Required before any fundraise conversation.' },
            { title: 'The Founder\'s Dilemmas', author: 'Noam Wasserman', why: 'Data-driven analysis of early founder decisions — co-founder splits, equity, control.' },
            { title: 'The Startup Checklist', author: 'David Rose', why: 'Entity formation, IP assignment, employment agreements — the practical legal checklist.' },
            { title: 'Secrets of Sand Hill Road', author: 'Scott Kupor', why: 'VC mechanics from the inside — how investment decisions and governance actually work.' },
            { title: 'Scaling Up', author: 'Verne Harnish', why: 'Growth requires governance infrastructure. This covers the organizational compliance stack.' },
        ],
        mentalModels: [
            'Asymmetric downside — one legal mistake can destroy 10 years of value. Spend on prevention, not litigation.',
            'Optionality preservation — structure your company to keep options open. Avoid governance decisions that close doors.',
            'Principal-agent alignment — board, investors, and employees all have different incentives. Map them explicitly.',
            'Precautionary principle — if the downside is catastrophic and irreversible, treat it as a constraint, not a risk.',
        ],
        caseStudies: [
            { company: 'Uber (early days)', lesson: 'Ignored regulatory risk as a growth strategy. Worked — then created massive legal exposure in 10 markets simultaneously.' },
            { company: 'WeWork IPO', lesson: 'Governance failures: self-dealing, concentration of founder control, and related-party transactions destroyed $40B of value.' },
            { company: 'Stripe', lesson: 'Delayed IPO intentionally to maintain governance control and strategic flexibility. Patient capital = founder leverage.' },
        ],
        weeklyExercises: [
            'Pull up your cap table — model the impact of a 20% down round on founder ownership.',
            'Audit your IP assignment agreements — do all contractors and early employees have signed them?',
            'Review your investor agreements — list every protective provision that requires investor approval.',
            'Create a risk register for your top 5 business exposures with mitigation plans.',
        ],
    },
    // ── BONUS FOUNDER TOPICS ─────────────────────────────────
    {
        id: 'fundraising',
        icon: '💎',
        color: '#06b6d4',
        badge: 'badge-cyan',
        title: 'Fundraising & Investor Relations',
        tagline: 'Raise capital from a position of strength.',
        overview: 'Fundraising is a sales process with a 12-month cycle. The best founders start investor relationships 18 months before needing capital, create real optionality, and close rounds on their terms.',
        frameworks: [
            { name: 'Investor Tier System', desc: 'Lead investors → strategic angels → follow-on. Build your target list by tier, warm intro source, and check size.' },
            { name: 'Narrative Architecture', desc: 'Why now → why us → why this market → proof points → use of funds. Every slide is an argument in a logical chain.' },
            { name: 'FOMO Engineering', desc: 'Create momentum: parallel process, defined timeline, named lead. Remove the option for indefinite delay.' },
            { name: 'DD Readiness Checklist', desc: 'Cap table, financials, customer contracts, IP assignments, employment agreements. Pre-build your data room.' },
            { name: '18-Month Relationship Map', desc: 'Identify target investors → provide value first → request for a meeting only after 3 touch points.' },
        ],
        books: [
            { title: 'Venture Deals', author: 'Brad Feld & Jason Mendelson', why: 'Every clause of a term sheet explained.' },
            { title: 'The Art of the Start', author: 'Guy Kawasaki', why: 'Pitching, storytelling, and fundraising from a former Apple evangelist and VC.' },
            { title: 'Secrets of Sand Hill Road', author: 'Scott Kupor', why: 'How investment decisions are actually made inside a VC firm.' },
            { title: 'Fundraising', author: 'Ryan Breslow', why: 'Tactical playbook from a founder who raised $1B+ for Bolt.' },
            { title: 'The Lean Startup', author: 'Eric Ries', why: 'Evidence generation that makes fundraising arguments credible.' },
        ],
        mentalModels: [
            'Momentum is capital — investor decisions are contagious. One "yes" makes the next easier.',
            'Asymmetric information — you know your business; they project risk. Your job is to reduce perceived uncertainty.',
            'Optionality maintenance — never be in a position where you must raise. That\'s the worst negotiating position.',
            'Investor returns math — a $1M check needs to return $50M for a top VC. Your story must support a $1B outcome.',
        ],
        caseStudies: [
            { company: 'Stripe', lesson: 'Built investor relationships through technical credibility long before needing capital. Raised at premium valuations every round.' },
            { company: 'Figma', lesson: 'Raised at $10M ARR based on product vision, not financials — because the product was self-evidently category-defining.' },
            { company: 'SpaceX (2008)', lesson: 'Musk funded the company personally after three failed launches — control over capital structure gave him survival optionality.' },
        ],
        weeklyExercises: [
            'Build a 25-firm investor target list tiered by stage, check size, and portfolio overlap.',
            'Write a 3-paragraph founder story that connects your origin to this company mission.',
            'Create your data room folder structure and identify every missing document.',
            'Send one warm relationship-building email to a target investor with no ask attached.',
        ],
    },
    {
        id: 'mentalmodels',
        icon: '🧠',
        color: '#8b5cf6',
        badge: 'badge-purple',
        title: 'Mental Models & First Principles',
        tagline: 'Think better, decide better, build better.',
        overview: 'The quality of your decisions determines the ceiling of your company. Mental models are thinking frameworks that reduce the time to good decisions. First-principles reasoning is the antidote to cargo-culting other people\'s answers.',
        frameworks: [
            { name: 'First Principles (Socratic Decomposition)', desc: 'Break any problem into its most fundamental truths. Ask "why" 5 times. Discard assumptions. Rebuild from base reality.' },
            { name: 'Inversion', desc: 'Don\'t ask "how do I succeed?" Ask "what would guarantee failure?" Avoid the failure conditions. Success follows.' },
            { name: 'Second-Order Thinking', desc: 'First-order: this action causes this effect. Second-order: this effect causes what next? Think 3 moves ahead.' },
            { name: 'Circle of Competence', desc: 'Know exactly where your knowledge edge is. Act decisively inside it. Move slowly outside it.' },
            { name: 'Probabilistic Thinking', desc: 'Attach explicit probabilities to beliefs. Update them with new evidence. Avoid binary thinking on continuous distributions.' },
        ],
        books: [
            { title: 'Poor Charlie\'s Almanack', author: 'Charlie Munger', why: 'The definitive collection of mental models from one of the greatest thinkers in business history.' },
            { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', why: 'System 1 vs System 2 thinking. How your brain misleads you and how to override it.' },
            { title: 'The Great Mental Models Vol. 1', author: 'Shane Parrish', why: 'Farnam Street\'s structured breakdown of the most powerful mental models.' },
            { title: 'Superforecasting', author: 'Philip Tetlock', why: 'How to make accurate predictions — and the discipline of calibrated uncertainty.' },
            { title: 'Seeking Wisdom', author: 'Peter Bevelin', why: 'Munger-inspired synthesis of psychology, philosophy, and decision science.' },
        ],
        mentalModels: [
            'Map vs territory — your mental model of reality is not reality. Update the map constantly.',
            'Hanlon\'s razor — never attribute to malice what can be explained by ignorance or incentives.',
            'Occam\'s razor — among competing explanations, the simpler one is usually correct.',
            'Confirmation bias — you find what you look for. Actively seek disconfirming evidence.',
        ],
        caseStudies: [
            { company: 'SpaceX', lesson: 'First principles on rocket cost: Musk calculated raw material cost was 2% of market price. Built from atoms up.' },
            { company: 'Amazon', lesson: 'Inversion applied to product launches: start with the press release. Work backwards. If it\'s not compelling, don\'t build it.' },
            { company: 'Berkshire Hathaway', lesson: 'Munger\'s "lollapalooza effect" — multiple mental models converging on one decision creates conviction.' },
        ],
        weeklyExercises: [
            'Apply first-principles thinking to your biggest current business constraint.',
            'Invert your biggest fear: what specific actions would guarantee that outcome?',
            'For one major decision, write out 3 second-order consequences before deciding.',
            'Identify one belief you hold strongly — actively seek one strong counter-argument.',
        ],
    },
    {
        id: 'founderpsych',
        icon: '🔥',
        color: '#ef4444',
        badge: 'badge-red',
        title: 'Founder Psychology & Resilience',
        tagline: 'The founder is the constraint.',
        overview: 'The company can only scale as fast as the founder scales. Psychological resilience, emotional regulation, identity separation from the company, and stress response management are CEO competencies — not soft skills.',
        frameworks: [
            { name: 'Identity Separation Protocol', desc: 'Your company\'s performance ≠ your worth. Separate the role from the self. Founders who conflate these make fear-driven decisions.' },
            { name: 'Stoic Decision Filter', desc: 'Dichotomy of control: what is in your control vs what is not. Direct all energy only to what you control.' },
            { name: 'Recovery Architecture', desc: 'Sleep, exercise, nutrition, and recovery are performance inputs, not rewards. Design them into your calendar like board meetings.' },
            { name: 'Stress Inoculation', desc: 'Pre-mortem your worst scenarios. When you\'ve already faced the worst mentally, it loses power over your decisions.' },
            { name: 'Board of Advisors for Self', desc: 'Identify 3 mentors: one who\'s 10 years ahead, one peer at the same stage, one therapist or coach. Deploy deliberately.' },
        ],
        books: [
            { title: 'The Hard Thing About Hard Things', author: 'Ben Horowitz', why: 'The most honest account of psychological pressure in founding — and how Horowitz survived it.' },
            { title: 'Meditations', author: 'Marcus Aurelius', why: 'Stoic philosophy from a leader managing an empire. The most effective "founder therapy" ever written.' },
            { title: 'Can\'t Hurt Me', author: 'David Goggins', why: 'Extreme mental resilience. The callus-your-mind approach to building tolerance for discomfort.' },
            { title: 'The Founder\'s Mentality', author: 'Zook & Allen', why: 'How founder-thinking sustains insurgent energy as companies scale — and how to preserve it.' },
            { title: 'Antifragile', author: 'Nassim Taleb', why: 'Systems that get stronger under stress. Build yourself and your company to be antifragile.' },
        ],
        mentalModels: [
            'Equanimity — the capacity to remain stable under volatility is a skill that compounds over time.',
            'Process focus — you control effort and process, not outcomes. Grade yourself on process quality.',
            'Narrative control — the story you tell yourself about a setback determines your response speed.',
            'Long-game identity — who must you become to lead the company at 10x current scale? Start becoming that now.',
        ],
        caseStudies: [
            { company: 'Brian Chesky (Airbnb)', lesson: 'Nearly bankrupt in 2009, selling cereal boxes to survive. Psychological commitment to the mission kept the company alive.' },
            { company: 'Elon Musk (SpaceX, 2008)', lesson: 'Three failed launches, divorced, Tesla near bankruptcy. Bet last $50M on a fourth launch that succeeded.' },
            { company: 'Steve Jobs (Return to Apple)', lesson: 'Used the exile period to learn what he didn\'t know. The setback compounded into strength.' },
        ],
        weeklyExercises: [
            'Write a pre-mortem: your company fails in 12 months — what caused it? Now mitigate each cause.',
            'Design your recovery block: 3 non-negotiable rituals that protect your energy this week.',
            'Identify one fear-based decision you made recently — what would a non-fearful version decide?',
            'Write a 3-year letter from your future self — what did you have to become to get there?',
        ],
    },
];

// ── Active filter state ──────────────────────────────────────
let activeLibFilter = 'all';
let openLibCard = null;

// ── Render ───────────────────────────────────────────────────
function renderLibrary() {
    const grid = document.getElementById('library-grid');
    if (!grid) return;

    const items = activeLibFilter === 'all'
        ? LIBRARY
        : LIBRARY.filter(item =>
            activeLibFilter === 'bonus'
                ? ['fundraising', 'mentalmodels', 'founderpsych'].includes(item.id)
                : !['fundraising', 'mentalmodels', 'founderpsych'].includes(item.id)
        );

    grid.innerHTML = items.map(item => buildLibCard(item)).join('');

    // Update counter
    const counter = document.getElementById('lib-count');
    if (counter) counter.textContent = items.length + ' modules';
}

function buildLibCard(item) {
    return `
  <div class="lib-card card" id="lib-${item.id}" style="cursor:pointer;border-color:var(--border);transition:all .25s"
       onclick="toggleLibCard('${item.id}')">

    <!-- Card Header -->
    <div class="flex justify-between items-center">
      <div class="flex gap-md items-center">
        <div style="font-size:1.4rem;width:42px;height:42px;background:${item.color}18;border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;flex-shrink:0">${item.icon}</div>
        <div>
          <div style="font-weight:700;font-size:.92rem;color:var(--text-primary)">${item.title}</div>
          <div style="font-size:.76rem;color:var(--text-muted);margin-top:2px;font-style:italic">${item.tagline}</div>
        </div>
      </div>
      <svg id="lib-chev-${item.id}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" style="color:var(--text-muted);flex-shrink:0;transition:transform .25s">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </div>

    <!-- Pill row -->
    <div class="flex gap-sm mt-md" style="flex-wrap:wrap">
      <span class="badge ${item.badge}" style="font-size:.68rem">${item.frameworks.length} Frameworks</span>
      <span class="badge badge-blue" style="font-size:.68rem">${item.books.length} Books</span>
      <span class="badge badge-purple" style="font-size:.68rem">${item.mentalModels.length} Mental Models</span>
      <span class="badge badge-green" style="font-size:.68rem">${item.weeklyExercises.length} Exercises</span>
    </div>

    <!-- Expand body -->
    <div id="lib-body-${item.id}" style="display:none;margin-top:var(--sp-lg)">
      <div class="divider" style="margin:0 0 var(--sp-md)"></div>

      <!-- Overview -->
      <p style="font-size:.88rem;line-height:1.75;color:var(--text-secondary);margin-bottom:var(--sp-lg)">${item.overview}</p>

      <!-- Frameworks -->
      <h5 style="margin-bottom:var(--sp-sm);color:${item.color}">Core Frameworks</h5>
      <div class="flex-col gap-sm mb-lg">
        ${item.frameworks.map(f => `
          <div style="background:var(--bg-input);border-radius:var(--r-md);padding:12px 14px;border-left:3px solid ${item.color}">
            <div style="font-weight:700;font-size:.85rem;color:var(--text-primary);margin-bottom:4px">${f.name}</div>
            <div style="font-size:.82rem;color:var(--text-secondary)">${f.desc}</div>
          </div>`).join('')}
      </div>

      <!-- Books + Mental Models: 2 col -->
      <div class="grid-2 gap-md mb-lg">
        <div>
          <h5 style="margin-bottom:var(--sp-sm);color:${item.color}">Curated Reading</h5>
          <div class="flex-col gap-sm">
            ${item.books.map(b => `
              <div style="background:var(--bg-input);border-radius:var(--r-md);padding:10px 14px">
                <div style="font-weight:700;font-size:.82rem;color:var(--text-primary)">${b.title}</div>
                <div style="font-size:.75rem;color:var(--text-muted);margin-bottom:4px">by ${b.author}</div>
                <div style="font-size:.78rem;color:var(--text-secondary)">${b.why}</div>
              </div>`).join('')}
          </div>
        </div>
        <div>
          <h5 style="margin-bottom:var(--sp-sm);color:${item.color}">Mental Models</h5>
          <div class="flex-col gap-sm mb-lg">
            ${item.mentalModels.map(m => `
              <div style="display:flex;gap:8px;align-items:flex-start;padding:8px 12px;background:var(--bg-input);border-radius:var(--r-md)">
                <span style="color:${item.color};flex-shrink:0;margin-top:2px">◆</span>
                <span style="font-size:.82rem;color:var(--text-secondary)">${m}</span>
              </div>`).join('')}
          </div>

          <!-- Case Studies -->
          <h5 style="margin-bottom:var(--sp-sm);color:${item.color}">Case Studies</h5>
          <div class="flex-col gap-sm">
            ${item.caseStudies.map(c => `
              <div style="background:var(--bg-input);border-radius:var(--r-md);padding:10px 14px">
                <div style="font-weight:700;font-size:.82rem;color:var(--text-primary);margin-bottom:3px">${c.company}</div>
                <div style="font-size:.78rem;color:var(--text-secondary)">${c.lesson}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- Weekly Exercises -->
      <h5 style="margin-bottom:var(--sp-sm);color:${item.color}">This Week's Exercises</h5>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
        ${item.weeklyExercises.map((e, i) => `
          <div style="background:${item.color}10;border:1px solid ${item.color}28;border-radius:var(--r-md);padding:12px 14px;display:flex;gap:10px;align-items:flex-start">
            <span style="color:${item.color};font-weight:800;font-size:.8rem;flex-shrink:0">${i + 1}</span>
            <span style="font-size:.82rem;color:var(--text-secondary)">${e}</span>
          </div>`).join('')}
      </div>

      <!-- Add to tracker -->
      <div class="mt-lg">
        <button class="btn btn-sm" style="background:${item.color}22;color:${item.color};border:1px solid ${item.color}44"
          onclick="event.stopPropagation();addModuleToTracker('${item.id}','${item.title.replace(/'/g, '\\\'')}')"
        >+ Add to Learning Tracker</button>
      </div>
    </div>
  </div>`;
}

function toggleLibCard(id) {
    const body = document.getElementById('lib-body-' + id);
    const chev = document.getElementById('lib-chev-' + id);
    const card = document.getElementById('lib-' + id);
    if (!body) return;
    const isOpen = body.style.display !== 'none';
    // Close all
    LIBRARY.forEach(item => {
        const b = document.getElementById('lib-body-' + item.id);
        const c = document.getElementById('lib-chev-' + item.id);
        const d = document.getElementById('lib-' + item.id);
        if (b) b.style.display = 'none';
        if (c) c.style.transform = 'rotate(0deg)';
        if (d) d.style.borderColor = 'var(--border)';
    });
    if (!isOpen) {
        body.style.display = 'block';
        chev.style.transform = 'rotate(180deg)';
        card.style.borderColor = 'var(--border-strong)';
        setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
}

function filterLibrary(filter) {
    activeLibFilter = filter;
    document.querySelectorAll('.lib-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    renderLibrary();
}

function addModuleToTracker(id, title) {
    const exists = window.FOS.learningItems.some(i => i.title === title);
    if (exists) { alert('Already in your tracker.'); return; }
    window.FOS.learningItems.unshift({ title, type: 'Course', progress: 0 });
    saveState();
    alert('"' + title + '" added to your Learning Tracker.');
}

// ── Init hook ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(renderLibrary, 150);
});

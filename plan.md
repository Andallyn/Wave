# Wave product plan

## 1. Vision

Wave is the operating system between hiring an agency and doing everything manually. It packages the workflows, judgment, and cadence of a marketing team into a coordinated set of specialist agents—while keeping clients in control of brand, risk, and spend.

### Primary customer

- Post-raise or post-TGE teams preserving runway.
- Founder-led projects with one marketer or community lead.
- Agency alumni who no longer need or cannot justify a full retainer.
- Small technology teams that need continuous coverage across time zones.

### Jobs to be done

1. “Tell me what needs attention before it becomes a problem.”
2. “Keep our content and community cadence consistent without adding headcount.”
3. “Turn ecosystem signals into qualified relationships and opportunities.”
4. “Give leadership one truthful view of marketing, customers, and obligations.”
5. “Let me approve consequential work quickly without micromanaging agents.”

## 2. Product structure

Wave should feel like one coordinated marketing team, not a collection of unrelated AI features.

### Command Center

The daily briefing: goals, work queue, emerging risks, agent activity, budget, and decisions awaiting approval. Every metric should link to evidence and an owner.

### Content Studio

Brand-trained ideation, briefs, drafts, repurposing, visual requests, calendar, approvals, scheduling, and performance feedback. Start with X and LinkedIn; add blog/newsletter only after the approval workflow is strong.

### Community Desk

Ingest Discord, Telegram, and social mentions; cluster questions and sentiment; identify unresolved issues, advocates, churn risks, scams, and moderation incidents. Agents may draft replies, but public or sensitive responses require approval.

### Partnerships CRM

Ecosystem map, lead discovery, fit scoring, relationship history, suggested intros, outreach drafts, follow-ups, and pipeline stages. Avoid automated spam: require evidence for fit and human approval for first contact.

### Event Matcher

Match project goals, audience, location, and budget to conferences, spaces, hackathons, grants, and speaking opportunities. Track deadlines and estimate total attendance cost and likely value.

### Customer Health

Combine support signals, product usage, NPS/CSAT, account notes, and community activity into explainable health indicators. The system suggests interventions; a person owns the relationship.

### Finance Ops

Partner/vendor directory, contracts, deliverables, invoices, approval chain, due dates, and payment status. Initially integrate with accounting/payment providers—do not custody funds. Require multi-person approval and immutable audit logs for payment instructions.

## 3. Coordinated agent model

Each agent has a narrow charter, allowed tools, memory boundary, confidence threshold, budget, and escalation route.

| Agent | Watches | Produces | Escalates when |
| --- | --- | --- | --- |
| Content Strategist | Calendar, goals, performance, brand kit | Briefs, drafts, repurposing plans | Claim is unverifiable or topic is sensitive |
| Community Guardian | Messages, mentions, moderation events | Summaries, reply drafts, issue clusters | Scam, threat, legal issue, or sentiment spike |
| Partnership Scout | Ecosystem news, CRM, shared connections | Fit scores, lead records, outreach drafts | Conflict, unclear consent, or first outreach |
| Market Listener | Competitors, narratives, product news | Signal briefs and campaign implications | Source quality is low or material claim conflicts |
| Customer Advocate | Usage, tickets, survey feedback | Health rationale and intervention plan | Churn risk or high-value customer changes |
| Operations Coordinator | Tasks, approvals, deadlines, budgets | Briefings, reminders, workload routing | SLA or budget boundary will be breached |

Agents communicate through structured work items rather than free-form hidden conversations. Each item has evidence, confidence, proposed action, impact, owner, deadline, and approval policy.

## 4. MVP boundary (10–12 weeks)

The MVP should prove the core loop: **connect → observe → recommend → approve → execute → learn**.

### In scope

- Multi-tenant workspaces, email/social login, roles (owner, manager, reviewer, viewer).
- Brand profile: voice, audiences, prohibited claims, examples, and approval policy.
- X, LinkedIn, Discord, and Telegram connectors (subject to platform access).
- Command Center with briefing, task queue, alerts, and audit trail.
- Content drafts, calendar, approval, publishing, and basic performance capture.
- Community digest, issue clustering, answer drafts, and escalation.
- Lightweight partnership pipeline with manual/imported leads and AI fit summaries.
- Agent schedules, pause switch, per-agent limits, and token/cost visibility.
- Notifications through email and Slack/Telegram.

### Explicitly out of scope

- Autonomous payments or custody of customer funds.
- Unreviewed mass outreach, auto-moderation bans, or crisis communications.
- Full CRM/accounting replacement.
- Every social network at launch.
- Custom model training; use retrieval and structured brand context first.

## 5. Delivery phases

### Phase 0 — Discovery and concierge pilot (2 weeks)

- Interview 8–12 former/current clients; collect real weekly workflows and artifacts.
- Select three design partners representing different maturity levels.
- Deliver a manual “Monday brief” to learn what customers act on.
- Define prohibited actions, approval matrix, and baseline time/cost measures.

**Exit:** at least three teams use the brief weekly and can identify two recurring workflows worth automating.

### Phase 1 — Operating core (weeks 1–4)

- Identity, workspace isolation, roles, brand profile, connectors, event ingestion.
- Unified work item, approval, notification, and audit-log primitives.
- Command Center and agent configuration.

**Exit:** a customer connects channels and receives an evidence-linked daily brief.

### Phase 2 — Content + community loop (weeks 5–8)

- Content workflow from brief to approved publication.
- Community clusters, escalation inbox, and reply drafting.
- Evaluations for voice adherence, factual grounding, and alert precision.

**Exit:** 70% of suggested drafts are approved with light edits and urgent community issues are surfaced inside the agreed SLA.

### Phase 3 — Growth operations (weeks 9–12)

- Partnership pipeline, event suggestions, outcome reporting, usage/billing.
- Pilot onboarding, playbooks, reliability hardening, and data export/deletion.

**Exit:** design partners ship measurable outcomes weekly and at least two convert to paid plans.

### Later

- Customer health connectors and explainable scoring.
- Invoice intake, vendor approvals, and accounting/payment-provider handoff.
- Agency console to supervise multiple client workspaces.
- Playbook marketplace and optional human expert review.

## 6. Core data model

`Workspace`, `Member`, `BrandProfile`, `Connector`, `Agent`, `AgentRun`, `Signal`, `Source`, `WorkItem`, `Approval`, `Campaign`, `ContentAsset`, `CommunityThread`, `Contact`, `Organization`, `Opportunity`, `Event`, `CustomerAccount`, `Contract`, `Invoice`, and `AuditEvent`.

Signals are immutable observations. Work items are proposed actions derived from signals. Approvals authorize bounded side effects. This separation makes the system explainable and allows recommendations to be regenerated without rewriting history.

## 7. Packaging and business model

Price by active workspace plus included agent runs/connectors, not seats alone.

- **Monitor:** briefing, community monitoring, and limited drafts for teams that mainly need coverage.
- **Operate:** publishing, approvals, partnership pipeline, more connectors, and higher usage.
- **Scale:** advanced roles, customer health, finance workflows, custom retention, and priority support.
- **Human assist add-on:** monthly expert review or incident support supplied by the agency.

Do not market savings alone. Sell continuity, faster response, retained institutional knowledge, and safer execution. Offer a guided migration for former agency clients using their existing brand strategy and campaign history.

## 8. Measurement

### Product

- Weekly approved outcomes per workspace (north star).
- Time from signal to decision and decision to execution.
- Draft approval rate, edit distance, and rejection reason.
- Alert precision/recall and median escalation time.
- Weekly active decision-makers and workspace retention.

### Business

- Trial-to-paid conversion, gross margin, expansion, and logo retention.
- AI/integration cost per approved outcome.
- Human support minutes per workspace.
- Percentage of agency alumni retained through software.

### Trust

- Unauthorized external actions (target: zero).
- Factual correction rate and unsupported-claim rate.
- Connector failure rate and recovery time.
- Privacy/security incidents and deletion-request SLA.

## 9. Immediate next decisions

1. Choose one narrow launch segment (for example, post-TGE infrastructure projects with Discord + X).
2. Recruit three design partners and obtain sanitized operating artifacts.
3. Define the approval policy before selecting models.
4. Validate API access, rate limits, and terms for the first four connectors.
5. Prototype the daily briefing and content approval loop with real data.
6. Establish evaluation datasets from previously accepted/rejected agency work.
7. Threat-model tenant isolation, prompt injection through ingested messages, and connector credentials.
8. Price the concierge pilot and set a maximum human-support budget per customer.

## 10. Key risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Low-quality autonomous output damages the brand | Approval defaults, grounding, claim checks, channel-specific policies |
| “All-in-one” scope delays value | Lead with briefing + content/community; add modules after core retention |
| Platform API restrictions | Validate access early, build connector abstraction, support manual imports |
| Agents become expensive/noisy | Task-specific models, caching, batching, budgets, confidence thresholds |
| Customer data leaks across tenants | Row-level security, per-tenant encryption context, isolation tests |
| Customers distrust opaque health/sentiment scores | Show evidence, confidence, trend, and user-correctable rationale |
| Automated outreach becomes spam | Fit evidence, rate limits, suppression lists, human first-send approval |
| Finance scope creates fraud exposure | No custody, strong roles, dual approval, provider handoff, immutable logs |

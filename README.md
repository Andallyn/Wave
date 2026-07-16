# Wave — AI Marketing Operations Hub

Wave is a working product prototype for an **agent-managed marketing operations platform**. It gives lean Web3 and technology teams the visibility of an agency relationship—content, community, partnerships, events, customer health, and payments—from one operating console.

The prototype is deliberately more than a landing page. It includes a command-center dashboard, editable task workflow, content approval queue, agent controls, campaign navigation, local persistence, search, filters, notifications, and a command palette.

## Product thesis

Fundraising and TGE are not the end of a project's marketing needs, but they often are the end of an agency-sized budget. Wave turns an agency's repeatable playbooks into supervised software agents. A small internal team remains in control while the system watches channels, proposes work, routes approvals, and keeps an auditable operating rhythm.

Wave should be positioned as **agency intelligence in a product**, not “fully autonomous marketing.” Its advantage is coordinated execution with human approval, brand memory, and clear escalation paths.

## Prototype capabilities

- **Executive overview:** live operating metrics, attention queue, goal progress, and an activity feed.
- **Agent roster:** specialist agents for content, community, partnerships, and market intelligence with visible states and controls.
- **Work management:** create, assign, filter, search, complete, and persist tasks.
-  codex/create-proposal-for-client-management-tools-rdmhq8
- **Content operations:** generate, review, approve, and schedule on-brand drafts from an editorial pipeline.
- **Community Desk:** review evidence-linked signals, recurring questions, sentiment changes, and resolve incidents.
- **Partnership pipeline:** move scored ecosystem leads from discovery through meetings using a visual board.
- **Event Matcher:** review fit scores, deadlines, match rationale, and save high-value opportunities.
- **Customer Health:** inspect explainable health changes and turn suggested interventions into assigned work.
- **Finance Operations:** review deliverable-linked invoices through a dual-approval workflow without custodying funds.
- **Outcome Analytics:** understand approved outcomes, time saved, cost efficiency, and specialist contributions.
- **Content operations:** review and approve draft content from a central queue.
  main
- **Quick actions:** create a task, draft a post, scan community signals, or open the command palette.
- **Local workspace state:** changes persist in `localStorage`, making the demo usable across refreshes.
- **Responsive interface:** designed for desktop operations and compact mobile monitoring.

The remaining navigation areas represent the intended integrated product line: Community, Partnerships, Events, Customers, and Finance. Their MVP and later-stage scope is detailed in [`plan.md`](./plan.md).

## Run locally

No install or build step is required. Start any local static server:

```bash
python3 -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

> The current repository is a high-fidelity, dependency-free front-end prototype. Production implementation should add authentication, a persistent database, background jobs, provider integrations, permissions, and billing before handling real customers or funds.

## Interaction guide

1. Use the sidebar to switch operating areas.
2. Press **⌘/Ctrl + K** to search commands and workspaces.
3. Select **New task** to add work; tasks are saved locally.
4. Filter the Today queue by status and mark items complete.
codex/create-proposal-for-client-management-tools-rdmhq8
5. Open the Content Studio to generate and approve a draft for scheduling.
6. Resolve a detected community signal or advance a qualified partnership lead.
7. Save an event, create an intervention from a customer-health change, or approve an invoice for second review.
8. Export an outcome report from Analytics.
9. Pause or resume an agent from the Agent roster or Settings.
10. Use **Reset demo data** in Settings to restore the original workspace.
5. Open the Content Studio or use **Draft post**, then approve a draft.
6. Pause or resume an agent from the Agent roster.
7. Use **Reset demo data** in Settings to restore the original workspace.
main

## Suggested production architecture

| Layer | Recommendation | Why |
| --- | --- | --- |
| Web application | Next.js + TypeScript | Fast product iteration, server rendering, route-level access control |
| API / workflow | Typed API plus durable job runner (Temporal or Trigger.dev) | Agent jobs need retries, schedules, logs, and human checkpoints |
| Data | PostgreSQL + object storage | Multi-tenant, relational operating data and media assets |
| Retrieval | `pgvector` initially | Brand memory and campaign context without another database |
| AI gateway | Provider-agnostic model router | Cost controls, fallbacks, evaluation, and task-appropriate models |
| Integrations | OAuth vault + webhook ingestion | Secure connections to social, community, CRM, calendar, and finance tools |
| Observability | Structured audit log, traces, spend meter | Every agent action must be explainable and attributable |

## Safety and operating principles

- **Draft first:** agents propose; humans approve external publishing, outreach, and payments.
- **Least privilege:** each connector and agent receives only the scopes it needs.
- **Tenant isolation:** never share embeddings, prompts, files, or credentials across clients.
- **Auditable actions:** record the prompt/context, output, approver, timestamps, provider, and cost.
- **Budget boundaries:** enforce channel, campaign, and workspace spending caps.
- **Escalation over invention:** uncertainty, sentiment crises, legal claims, and financial actions route to people.
- **Consent and compliance:** respect platform policies, privacy law, opt-outs, and sponsored-content disclosure.

## Repository

```text
.
├── index.html   # Application shell and dialogs
├── styles.css   # Responsive visual system
├── app.js       # State, rendering, persistence, and interactions
├── README.md    # Product and setup overview
└── plan.md      # Product strategy and delivery roadmap
```

## Success metrics

The north-star metric is **approved outcomes shipped per active workspace per week**. Guardrails should include approval-to-rejection rate, response SLA, agent intervention rate, customer retention, connector reliability, and AI cost per approved outcome.

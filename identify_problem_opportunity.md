# Identify Problem/Opportunity

## Summary of AB Tests

AB testing (also called split testing) is a method of comparing two or more versions of a webpage, app feature, or user experience to determine which performs better. By showing different versions to similar groups of users and measuring their behaviour, we can make data-driven decisions about what changes actually improve our key metrics.

**Why AB testing matters:**
- **Removes guesswork** - Instead of debating opinions, we let user behaviour decide
- **Reduces risk** - Test changes before fully committing resources
- **Builds knowledge** - Each test teaches us something about our users
- **Drives growth** - Even small improvements compound over time

**The foundation of good testing:** Every experiment should solve a real problem or capitalise on a genuine opportunity, backed by data and user insights.

---

## Importance of Knowing Business and User Goals

Before identifying problems to test, you need crystal clarity on what success looks like for both your business and your users.

**Business goals to understand:**
- Primary KPIs your team is responsible for (conversion rate, revenue, sign-ups, etc.)
- Quarterly/annual targets and how experimentation supports them
- Resource constraints and timelines
- Risk tolerance for different types of changes

**User goals to understand:**
- What users are trying to accomplish on your site/app
- Their pain points and frustrations
- What motivates their decision-making
- How they currently navigate your experience

**Why this alignment matters:**
- Ensures experiments address meaningful problems, not just surface-level issues
- Helps prioritise which opportunities to test first
- Creates shared understanding across stakeholders about what "winning" looks like
- Prevents testing changes that improve one metric whilst harming another

**Action step:** Before identifying test opportunities, document your primary business metric and 2-3 key user goals for the area you're optimising.

---

## Large Experiments vs. Smaller Experiments

One of the most strategic decisions in experimentation is choosing the scope of your changes. This decision impacts everything from development resources to how quickly you'll get results.

### Large Experiments (Multiple Changes)

**What they are:** Testing significant changes that involve multiple elements - full page redesigns, complete flow overhauls, or major feature additions.

**Advantages:**
- **Faster to statistical significance** - Bigger changes typically create larger effect sizes
- **Tests holistic experience** - Captures how multiple elements work together
- **Higher potential impact** - Can drive meaningful business results more quickly
- **Better for concept validation** - Useful when testing entirely new approaches

**Disadvantages:**
- **Less granular learning** - Can't isolate which specific element drove the result
- **Higher development cost** - Requires more time and resources to build
- **Harder to iterate** - If it fails, you don't know what specifically to fix
- **Higher risk** - More moving parts mean more potential failure points

**When to choose large experiments:**
- You have sufficient traffic to reach significance within a reasonable timeframe
- You're testing a fundamentally different approach or concept
- Development resources are available for bigger changes
- You need to prove/disprove a major strategic direction
- Small iterative changes haven't moved the needle

### Smaller Experiments (Single Changes)

**What they are:** Testing focused changes to individual elements - button text, colours, headlines, single features, or specific copy changes.

**Advantages:**
- **Clear attribution** - You know exactly what worked or didn't work
- **Easier to build upon** - Learnings can be systematically applied elsewhere
- **Lower development cost** - Quick to implement and lower risk
- **Easier iteration** - Clear next steps based on results
- **Builds knowledge systematically** - Creates a library of what works for your users

**Disadvantages:**
- **Slower to significance** - Smaller effect sizes require longer test durations or more traffic
- **May miss interaction effects** - Elements might work differently when combined
- **Potentially lower impact** - Individual changes might not move business metrics meaningfully
- **Can be incrementally slow** - Building meaningful change one small test at a time

**When to choose smaller experiments:**
- You have lower traffic volumes (smaller changes are more realistic to detect)
- You're building systematic understanding of what drives conversion
- Development resources are limited
- You're optimising an already well-performing experience
- You want to reduce risk and iterate quickly

### Decision Framework

Ask yourself these questions to choose your approach:

1. **Traffic volume:** Can we realistically detect small changes with our current traffic?
2. **Learning goals:** Do we need to validate a big concept or understand specific elements?
3. **Development capacity:** What level of change can we realistically build and maintain?
4. **Business urgency:** Do we need results quickly or can we build knowledge systematically?
5. **Risk tolerance:** How comfortable are we with bigger swings vs. safer iterations?

**Remember:** Neither approach is inherently better. The best choice depends on your specific situation, goals, and constraints.

---

## Where Do Experiment Ideas Come From?

Experiment ideas are the fuel for our optimisation efforts. They can stem from various sources, each providing unique insights into user behaviour, business needs, and potential improvements.

### Data Analysis

Dive into quantitative data from tools like Google Analytics or Contentsquare to uncover areas of friction, unexpected user behaviour, or underperforming sections.

**Examples:**
- High bounce rates on key pages (e.g., your homepage has a 52.8% bounce rate)
- Low scroll rates (e.g., only 27.3% of users scroll below the fold on your homepage)
- Unexpected drop-offs in funnels (e.g., 14.9% conversion from Home to Quote ARHI Welcome)

**Actionable Questions:** Where are users getting stuck? What are they looking for but not finding? Are there any significant deviations from expected user flows?

### User Research & Feedback

Leverage qualitative insights to understand the "why" behind user behaviour. This includes direct feedback and observations.

**Examples:**
- User interviews
- Usability testing sessions
- Customer support inquiries
- Direct feedback forms and surveys

**Actionable Questions:** What are users explicitly saying about their pain points or desires? What are their unmet needs or confusions?

### UX/UI Audits & Best Practices

Conduct an expert review of your current interface, comparing it against established usability heuristics and industry best practices.

**Examples:**
- Identifying cluttered layouts
- Unclear calls-to-action
- Inconsistent design elements
- Non-responsive sections

**Actionable Questions:** Is our design intuitive and easy to use? Are we following modern web standards?

### Competitive Analysis

Study what direct and indirect competitors are doing well (or poorly) on their sites and in their user experiences.

**Examples:**
- Observing new features, design patterns, or messaging strategies adopted by industry leaders

**Actionable Questions:** What competitive advantages or disadvantages do we have in our user experience? Are there successful patterns we could adapt or improve upon?

### Stakeholder Requests & Business Goals

Translate broader business objectives and specific requests from internal teams (e.g., Marketing, Product, Sales) into testable opportunities. Always dig deeper into vague requests to ensure the problem or opportunity is clearly defined.

**Examples:**
- A request to drive more sign-ups for a specific product
- To improve engagement with a new feature

**How to refine stakeholder requests:**
- Stakeholder says: "Improve the homepage"
- You ask: "What specific outcome are we trying to achieve? How will we measure success? What evidence suggests the homepage needs improvement?"

**Actionable Questions:** What are the key business metrics we need to move? Is the problem or opportunity presented by the stakeholder clear and quantifiable? What data supports this as a priority?

### Capturing and Managing Ideas

**Documentation:** Capture all ideas in a centralised location (like an ideas board, Trello, or Jira) with the source and supporting data. At our company, we use a Microsoft Form for idea submissions and manage our experiment backlog in Jira, but you could adapt this to any project management tool (Asana, Notion, etc.).

**Cross-validation:** The strongest experiment ideas often come from multiple sources pointing to the same problem (e.g., data shows high bounce rate + user research reveals confusion about value proposition).

**Prioritisation:** After identifying multiple opportunities, consider both potential impact and implementation effort to decide which to tackle first.
export function createReadmeTemplate(
  input: ModuleTemplateInput,
): string {
  return `# ${input.title} Module

## Classification

HOLY ARC Module

## Primary Responsibility

Define the single responsibility owned by this module.

## Multiplier

This module must increase the capability of future ARC work.

### Multiplier Dimensions

| Dimension | Score | Explanation |
|---|---:|---|
| Reuse | 0/10 | How reusable is this capability? |
| Speed | 0/10 | How much future time does it save? |
| Safety | 0/10 | How much risk or error does it reduce? |
| Knowledge | 0/10 | How well does it preserve learning? |
| Scale | 0/10 | How well does it support future growth? |

### Current Multiplier Score

0/10

### Expected Future Multiplier

Define how this module should become more valuable over time.

### Evidence Required

- Usage across another module
- Reduction in repeated work
- Measurable time saved
- Reduced failure rate
- Reusable knowledge produced

### Review Date

Not scheduled.

## Command

\`\`\`powershell
arc ${input.slug} <action>
\`\`\`

## Structure

- command.ts — CLI interaction
- service.ts — business logic
- validator.ts — input validation
- templates.ts — generated content
- logger.ts — audit access
- config.ts — module configuration
- types.ts — data contracts
- tests — module tests

## Lifecycle

Intent → Command → Validation → Service → Logging → Knowledge → Multiplier → Result

## Governing Rules

1. This module must not assume responsibilities owned by another HOLY ARC module.
2. This module must increase the long-term multiplier of future work.
3. Multiplier claims must eventually be supported by evidence.
4. Reusable capabilities should be promoted into shared infrastructure.
`;
}
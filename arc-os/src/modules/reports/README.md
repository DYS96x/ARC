# Reports Module

## Classification

HOLY ARC Module

## Responsibility

Define the single primary responsibility of this module.

## Command

```powershell
arc reports <action>
```

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

Intent → Command → Validation → Service → Logging → Result

## Governing Rule

This module must not assume responsibilities owned by another HOLY ARC module.

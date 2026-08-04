# ARC Engineering Standards

## Purpose

The ARC Engineering Standards define the non-negotiable rules for designing, building, testing, deploying, and maintaining every ARC platform.

These standards exist to ensure:

- Consistency
- Quality
- Security
- Simplicity
- Long-term maintainability

Every repository follows these standards.

Every engineer follows these standards.

Every AI agent follows these standards.

---

# Engineering Philosophy

We build systems.

Not features.

Features are temporary.

Systems compound.

Every line of code should strengthen the architecture.

Never weaken it.

---

# Engineering Priorities

Priority 1

Truth

↓

Priority 2

Security

↓

Priority 3

Correctness

↓

Priority 4

Simplicity

↓

Priority 5

Performance

↓

Priority 6

Scale

Never sacrifice correctness for speed.

---

# Definition of Good Engineering

Good engineering is:

Understandable

↓

Predictable

↓

Observable

↓

Testable

↓

Recoverable

↓

Maintainable

↓

Reusable

↓

Secure

↓

Documented

↓

Replaceable

---

# Code Principles

Every change should:

Reduce complexity.

Increase clarity.

Improve maintainability.

Reduce duplication.

Respect architecture.

Improve documentation.

Improve testing.

If it doesn't...

Question why it exists.

---

# Architecture Rules

Business logic never belongs inside UI.

Infrastructure never owns business rules.

Security never depends on user interfaces.

Analytics never owns operational truth.

Knowledge never bypasses workflow.

AI never bypasses security.

Identity always exists before action.

Everything has ownership.

---

# SOLID Principles

Single Responsibility

Open for Extension

Closed for Modification

Liskov Substitution

Interface Segregation

Dependency Inversion

These principles apply where appropriate, but clarity takes precedence over unnecessary abstraction.

---

# File Structure

Every project should separate:

Domain

Application

Infrastructure

Presentation

Configuration

Tests

Documentation

No mixed responsibilities.

---

# Naming

Names should explain intent.

Avoid:

Manager

Helper

Utils

Misc

Thing

Stuff

Prefer:

WorkflowService

KnowledgeRepository

IdentityProvider

SecurityPolicy

RecommendationEngine

Names reduce cognitive load.

---

# Documentation

Every major component documents:

Purpose

Inputs

Outputs

Dependencies

Failure behaviour

Security considerations

Owner

Version

Documentation is part of the product.

---

# Error Handling

Errors should be:

Explicit

Structured

Actionable

Logged

Traceable

Recoverable

Never silently ignore failure.

---

# Logging

Log:

Important state changes.

Failures.

Security events.

Integrations.

Warnings.

Avoid logging sensitive data.

Logs should explain reality.

---

# Testing

Every feature should include:

Unit Tests

Integration Tests

Contract Tests

Security Tests where appropriate

Regression Tests

Critical systems require automated testing.

---

# Performance

Optimise only after measurement.

Avoid premature optimisation.

Measure:

Latency

Memory

CPU

Network

Storage

User experience

Reality decides.

---

# Security

Every pull request considers:

Permissions

Authentication

Authorisation

Input validation

Output validation

Secrets

Encryption

Audit

Security is reviewed continuously.

---

# Dependencies

Every dependency should justify its existence.

Questions:

Do we need it?

Can we maintain it?

Does it increase risk?

Can ARC replace it later?

Dependencies are architectural decisions.

---

# APIs

APIs should be:

Versioned

Documented

Consistent

Secure

Observable

Backward compatible where practical

Contracts matter more than implementation.

---

# Database Rules

Databases store facts.

Business rules belong elsewhere.

Never expose database structure directly.

Protect migrations.

Protect integrity.

---

# Configuration

Configuration belongs outside source code.

Support:

Development

Testing

Staging

Production

Configuration should never contain secrets.

---

# Code Reviews

Every review asks:

Does this respect architecture?

Does it reduce complexity?

Is ownership clear?

Is security maintained?

Can another engineer understand this?

Will this still make sense in two years?

---

# Technical Debt

Debt must be visible.

Every shortcut records:

Reason

Owner

Risk

Review date

Expected removal

Invisible debt becomes permanent debt.

---

# Deployment

Deployments should be:

Repeatable

Automated

Observable

Rollback capable

Auditable

Small deployments reduce risk.

---

# Engineering Culture

We encourage:

Questions

Evidence

Experimentation

Learning

Documentation

Constructive disagreement

Architecture discussions

We discourage:

Assumptions

Hidden complexity

Personal ownership of knowledge

Hero engineering

Unexplained decisions

---

# Final Engineering Principle

Code is not the product.

The system is the product.

Code is simply today's implementation of that system.

# ARC Engine Contracts

## Purpose

ARC Engine Contracts define how the six core engines communicate without becoming tightly coupled.

Each engine must remain independently understandable, secure, replaceable, and testable.

Engines may exchange information.

They must not silently control one another.

---

# Core Rule

Every engine owns its domain.

Every interaction uses an explicit contract.

No hidden dependencies.

No direct ownership violations.

---

# Contract Requirements

Every contract must define:

- Contract name
- Purpose
- Provider
- Consumer
- Inputs
- Outputs
- Permissions
- Validation rules
- Failure behaviour
- Audit requirements
- Version
- Owner

---

# Contract Types

ARC uses four main contract types:

1. Request contracts
2. Response contracts
3. Event contracts
4. Decision contracts

---

# Request Contracts

A request asks an engine to perform an action.

Every request should include:

- Request ID
- Correlation ID
- Organisation ID
- Platform ID
- Actor identity
- Requested action
- Target resource
- Permission context
- Timestamp
- Input data
- Security classification

A request does not guarantee approval or success.

---

# Response Contracts

A response records the result of a request.

Every response should include:

- Request ID
- Correlation ID
- Status
- Outcome
- Result data
- Error information
- Timestamp
- Source engine
- Audit reference

Responses should never hide failure.

---

# Event Contracts

Events record facts that have already occurred.

Events should be:

- Immutable
- Versioned
- Time-stamped
- Traceable
- Organisation-scoped
- Security-classified

Examples:

- IdentityVerified
- AccessGranted
- KnowledgeValidated
- WorkflowCompleted
- RecommendationAccepted
- OutcomeRecorded

Events should not contain commands disguised as facts.

---

# Decision Contracts

A decision contract records an approval, denial, recommendation, or policy result.

Every decision should include:

- Decision ID
- Decision type
- Decision owner
- Request context
- Evidence
- Outcome
- Reason
- Confidence where relevant
- Approval authority
- Timestamp
- Review date where relevant

Important decisions must remain explainable.

---

# Identity Engine Contract

## Provides

- Identity verification
- Organisation context
- Role context
- Session context
- Service identity
- AI agent identity

## Accepts

- Identity registration requests
- Role assignment requests
- Session validation requests
- Access removal requests

## Does Not Own

- Security policy
- Workflow state
- Knowledge content
- Analytics interpretation

---

# Security Engine Contract

## Provides

- Access decisions
- Risk assessments
- Policy evaluation
- Security requirements
- Incident status
- Audit requirements

## Accepts

- Access evaluation requests
- Risk signals
- Incident reports
- Policy review requests
- Access revocation requests

## Does Not Own

- User identity records
- Business knowledge
- Workflow execution
- AI reasoning

---

# Knowledge Engine Contract

## Provides

- Validated knowledge
- Document versions
- Source references
- Relationships
- Confidence states
- Knowledge search results

## Accepts

- Knowledge creation requests
- Update requests
- Validation requests
- Archive requests
- Relationship requests

## Does Not Own

- Identity permissions
- Approval execution
- Security policy
- AI recommendations

---

# Workflow Engine Contract

## Provides

- Workflow state
- Task ownership
- Approval status
- Next action
- Transition history
- Escalation state

## Accepts

- Workflow creation requests
- Transition requests
- Approval requests
- Assignment requests
- Completion requests

## Does Not Own

- Identity records
- Security policy
- Knowledge truth
- Analytics metrics

---

# Intelligence Engine Contract

## Provides

- Recommendations
- Summaries
- Predictions
- Explanations
- Comparisons
- Suggested actions

## Accepts

- Reasoning requests
- Analysis requests
- Approved knowledge context
- Workflow context
- Analytics context
- Feedback on outcomes

## Does Not Own

- Organisational truth
- Final human decisions
- Access permissions
- Workflow execution
- Source records

---

# Analytics Engine Contract

## Provides

- Metrics
- Trends
- Alerts
- Forecasts
- Dashboards
- Outcome measurements

## Accepts

- Structured events
- Metric definitions
- Outcome records
- Data-quality signals
- Threshold definitions

## Does Not Own

- Identity records
- Operational workflow state
- Knowledge content
- Security policy
- AI authority

---

# Standard Request Flow

Application

↓

Identity Engine validates actor

↓

Security Engine evaluates permission

↓

Domain engine performs action

↓

Domain event is published

↓

Analytics Engine updates visibility

↓

Knowledge or Workflow Engine updates where required

↓

Audit record is preserved

---

# Standard AI Contract Flow

Human or system submits request

↓

Identity context is verified

↓

Security policy is evaluated

↓

Approved knowledge is retrieved

↓

Intelligence Engine generates output

↓

Confidence and evidence are attached

↓

Human approval occurs when required

↓

Workflow Engine executes approved action

↓

Outcome is measured

↓

Feedback returns to Intelligence and Knowledge

---

# Error Contract

Every failure should include:

- Error code
- Error category
- Human-readable message
- Technical detail where permitted
- Source engine
- Retry guidance
- Correlation ID
- Audit reference
- Security classification

Errors must not expose sensitive information.

---

# Failure Categories

## Validation Failure

The request is incomplete or invalid.

## Authentication Failure

Identity could not be verified.

## Authorisation Failure

The actor is not permitted to perform the action.

## Conflict

The requested change conflicts with current state.

## Dependency Failure

A required service or engine is unavailable.

## Security Failure

The request violates a security control.

## Processing Failure

The engine could not complete the action.

## Timeout

The request exceeded its permitted processing time.

---

# Versioning

Every contract must include a version.

Breaking changes require:

- A new contract version
- Migration guidance
- Compatibility period
- Consumer notification
- Test coverage
- Retirement date

Contracts should evolve without silently breaking platforms.

---

# Idempotency

Repeated requests should not create unintended duplicate outcomes.

Where appropriate, requests should include an idempotency key.

Examples:

- Creating identities
- Granting access
- Starting workflows
- Recording payments
- Publishing events
- Executing approved AI actions

---

# Audit Requirements

Every high-impact contract interaction should record:

- Actor
- Organisation
- Source
- Destination
- Request
- Decision
- Outcome
- Timestamp
- Correlation ID
- Permission used
- Approval reference

---

# Privacy Requirements

Contracts should exchange only the data required for the approved purpose.

Do not send entire records when a smaller approved context is sufficient.

Every contract must respect:

- Organisation boundaries
- Data classification
- Purpose limitation
- Retention rules
- Export restrictions
- User privacy

---

# Testing Requirements

Every contract should be tested for:

- Valid requests
- Invalid requests
- Missing permissions
- Expired permissions
- Duplicate requests
- Timeouts
- Dependency failure
- Partial failure
- Cross-organisation access
- Sensitive data leakage
- Version compatibility

---

# Contract Registry

ARC should maintain a central registry containing:

- Contract name
- Current version
- Owner
- Provider
- Consumers
- Documentation
- Schema
- Security classification
- Status
- Deprecation date

The registry becomes the map of system relationships.

---

# Governing Principles

1. Engines communicate through contracts.

2. Engines never mutate another engine's source of truth directly.

3. Every request carries identity and organisation context.

4. Every important action passes security evaluation.

5. Every state change produces an event.

6. Every failure remains visible.

7. Every contract is versioned.

8. Every contract has an owner.

9. Every high-impact interaction is auditable.

10. Every relationship supports appropriate feedback.

---

# Definition of Success

ARC Engine Contracts succeed when:

- Responsibilities remain clear.
- Engines can evolve independently.
- Data ownership remains protected.
- Security boundaries remain enforceable.
- Failures are recoverable.
- Events remain traceable.
- AI remains controlled.
- Platforms can reuse the same architecture.
- New systems connect without creating hidden complexity.

---

# Final Contract Principle

Architecture is not defined by what components exist.

Architecture is defined by the agreements between them.

Clear contracts create trustworthy systems.

# ARC Publication Policy

## Governing Rule

The public ARC website may read content only from:

C:\ARC\00_PUBLIC

No other ARC directory is an approved publishing source.

---

## Security Tiers

### 00_PUBLIC

Approved for unrestricted public access.

May include:

- Mission
- Vision
- Constitution
- Principles
- Services
- Public methodology
- High-level platform descriptions
- Sanitised architecture overviews

### 01_PARTNER

Approved partners only.

May include:

- Integration documentation
- Partner APIs
- SDK guidance
- Limited roadmaps
- Contract-specific information

### 02_INTERNAL

ARC personnel only.

May include:

- Engineering plans
- Sprint notes
- Internal ADRs
- Operational procedures
- Internal architecture
- Research and meeting records

### 03_RESTRICTED

Minimum necessary access only.

May include:

- Security controls
- Infrastructure details
- Incident response
- Production operations
- Recovery procedures
- Access records

---

## Publication Workflow

Draft

↓

Security Review

↓

Content Review

↓

Approval

↓

Copy into 00_PUBLIC

↓

Website Sync

↓

Build Validation

↓

Publish

A document is not public merely because it exists in the ARC repository.

It becomes public only after it is deliberately placed inside 00_PUBLIC.

---

## Prohibited Public Content

Never publish:

- Passwords
- API keys
- Access tokens
- Encryption keys
- Connection strings
- Client information
- Personal information
- Production addresses
- Internal administrator URLs
- Detailed security controls
- Vulnerability information
- Incident records
- Private financial records
- Confidential contracts

Secrets must not be stored in Markdown or source control at any security tier.

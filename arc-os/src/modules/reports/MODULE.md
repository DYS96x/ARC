# Reports Module

Status: Growing  
Version: 0.2.0  
Maturity: Growing  
Classification: HOLY ARC Platform Module

---

## Mission

Transform validated information into controlled, traceable and client-ready reports.

---

## Primary Responsibility

The Reports Module owns the complete report lifecycle:

- Creation
- Drafting
- Review
- Approval
- Export
- Sending preparation
- Archiving
- Audit evidence

---

## Not Responsible For

- Creating or managing clients
- Collecting intelligence
- Making unapproved business decisions
- Sending email without explicit approval
- Public documentation publishing
- Product-specific reporting interfaces
- Storing secrets or unrestricted client evidence

Client ownership remains with the Clients Module.

Intelligence remains with VOID.

Coordination remains with WOS.

Execution occurs through approved Services.

---

## Dependencies

- Central configuration
- Workspace resolution
- Filesystem infrastructure
- Audit logging
- Shared IDs
- Shared validation
- Clients Module
- Report templates

---

## Provides

The Reports Module will provide:

- Unique report IDs
- Standard report workspaces
- Markdown report generation
- Report metadata
- Status transitions
- Review and approval controls
- Report register updates
- DOCX export
- PDF export
- Client delivery packages
- Audit events
- Archived report history

---

## Report Lifecycle

```text
Intake
  ↓
Research
  ↓
Draft
  ↓
Review
  ↓
Approved
  ↓
Export
  ↓
Sent
  ↓
Archive
  ↓
Knowledge and Feedback
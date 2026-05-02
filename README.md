# IDOR Vulnerability Case Study (Real-World Inspired)

This repository demonstrates an Insecure Direct Object Reference (IDOR) vulnerability using a controlled demo, based on a real vulnerability identified in a university system.

## What makes this different
- Real vulnerability discovery (sanitized)
- Working exploit demonstration (local demo)
- Secure implementation with fixes

---

## Real-World Context (Sanitized)

While testing a university web application, an IDOR vulnerability was identified in the notification system.

### Observation
The application used a parameter:
GET /api/notifications?user_id=XXXX

By modifying `user_id`, it was possible to access:
- Other students' data
- Teacher records
- Admin-level information

Sensitive details, domain, and identifiers are intentionally removed for ethical reasons.

---

## Mapping to Demo

| Real System Issue | Demo Equivalent |
|------------------|----------------|
| user_id parameter | /api/user?id= |
| Unauthorized access | Data exposure |
| No access control | Missing auth check |

---

## Why this matters
This demonstrates how a small access control flaw can escalate into large-scale data exposure, relevant in real cybercrime investigations.

---

## Ethical Disclosure
- No data was misused
- No system damage was caused
- Details are anonymized

---

## Learning Outcome
Understanding IDOR is critical for:
- Preventing data breaches
- Investigating unauthorized access
- Strengthening backend security

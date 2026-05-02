# idor-case-study-realworld
This project replicates a real-world IDOR vulnerability identified in a university system, demonstrating how improper access control can lead to unauthorized data exposure
# Real-World IDOR Case Report (Sanitized)

## 1. Context
During security testing of a university web system, an access control flaw was identified.

---

## 2. Vulnerability
Insecure Direct Object Reference (IDOR)

---

## 3. Affected Functionality
Notification API endpoint using:
user_id parameter

---

## 4. Attack Vector
An authenticated user intercepts a request and modifies the user_id parameter to access unauthorized data.

---

## 5. Impact
- Exposure of student personal data  
- Access to teacher and admin-level information  
- Risk of phishing and impersonation  

---

## 6. Severity
High

---

## 7. Root Cause
No server-side validation of resource ownership.

---

## 8. Remediation
- Enforce authorization checks  
- Use session-based identity  
- Implement role-based access control  

---

## 9. Validation via Demo
A controlled Node.js application was created to replicate the same flaw and demonstrate:
- Exploitation
- Impact
- Secure fix

---

## 10. Ethical Consideration
All sensitive identifiers and system details have been removed to ensure responsible disclosure.

Based on the **proposal document** and your current dashboard design, here is a **detailed breakdown of the essential pages for the user dashboard**, along with **exactly what each page should display**, to fully align with the system's objectives.

---

## 🎯 OVERALL DASHBOARD STRUCTURE (Per Proposal)

The proposal defines **four key user-facing features** that must be reflected in the dashboard:

1.  **User Registration & Profile Management**
2.  **Contribution Dashboard**
3.  **Loan Eligibility Checker & Application**
4.  **Loan Tracking**

Your current design already has a solid foundation for the main `/dashboard` page. Below are the detailed specifications for each page.

---

# ✅ 1. `/dashboard` — Main Dashboard Overview

This is the **central hub** after login. It should provide a **real-time snapshot** of the user’s cooperative account.

### A. Header & User Info
- **Current Page**: `Dashboard`
- **User Greeting**: “Welcome back, [Full Name]!”
- **User Details**: Display name, department, and Staff ID (e.g., `NDC-001`) as shown in your image.
- **Profile Dropdown**: Allow access to Profile settings or Logout.

### B. Key Performance Indicators (KPIs) - 4 Cards
*(As shown in your mockup — excellent start)*

1.  **Total Contributions**
    - **Label**: “Total Contributions”
    - **Value**: Sum of all contributions made to date (e.g., `₦2,450,000`)
    - **Change**: Optional percentage change from last period (e.g., `+12.5%`)
    - **Icon**: Dollar sign (`$`) or piggy bank.

2.  **Active Loans**
    - **Label**: “Active Loans”
    - **Value**: Total outstanding balance across all active loans (e.g., `₦850,000`)
    - **Sub-text**: Number of active loans (e.g., “2 loans”)
    - **Icon**: Document or loan icon.

3.  **Loan Eligibility**
    - **Label**: “Loan Eligibility”
    - **Value**: Maximum loan amount the user is currently eligible for (e.g., `₦1,200,000`)
    - **Status**: “Available” (green checkmark) or “Not Eligible” (red cross) based on rules.
    - **Logic**: Calculated automatically per proposal: minimum 6 months contribution + total sum → multiplier (2x, 3x, 4x).
    - **Icon**: Green checkmark or shield.

4.  **Next Payment**
    - **Label**: “Next Payment”
    - **Value**: Date of next scheduled repayment (e.g., `Dec 28, 2025`)
    - **Amount**: The installment amount due (e.g., `₦45,000`)
    - **Icon**: Clock or calendar.

> 💡 **Why these KPIs?** They directly map to the proposal’s goals: transparency, real-time access, and automated eligibility checks.

---

### C. Recent Activity Feed
- **Title**: “Recent Activity”
- **Purpose**: Show a chronological log of recent events to build trust and awareness.
- **Items to Display**:
    - **Monthly contribution received** → Date + Amount (e.g., `December 1, 2025 • ₦35,000`)
    - **Loan application approved/rejected** → Date + Loan Amount (e.g., `November 15, 2025 • ₦500,000`)
    - **Loan payment processed** → Date + Amount Paid (e.g., `November 28, 2025 • ₦45,000`)
    - **System notifications** (if applicable): e.g., “Document uploaded successfully.”

> ✅ **Proposal Alignment**: This satisfies “Real-time status updates” and “Notifications”.

---

### D. Quick Actions Panel
- **Title**: “Quick Actions”
- **Buttons**:
    1.  **Primary Button**: “Apply for Loan” → Links to `/dashboard/loans/apply`
        - *This is the most critical action.*
    2.  **Secondary Button**: “View Contribution History” → Links to `/dashboard/contributions`
    3.  **Tertiary Button**: “Update Profile” → Links to `/dashboard/profile`

> 💡 **Why?** Reduces friction. Users can immediately take the most common actions without navigating menus.

---

# ✅ 2. `/dashboard/contributions` — Contribution History

This page provides **full historical data** on contributions.

### A. Page Title & Summary
- **Title**: “My Contribution History”
- **Summary Card** (optional):
    - Total Contributions: `₦2,450,000`
    - Months Contributed: `18 months`
    - Average Monthly Contribution: `₦136,111`

### B. Contribution Table / List
- **Columns**:
    - **Date**: Month and Year (e.g., `December 2025`)
    - **Amount**: Contribution amount (e.g., `₦35,000`)
    - **Status**: “Received” or “Pending” (if payroll sync is delayed)
    - **Action**: (Optional) “Download Receipt” or “View Details”

> ✅ **Proposal Alignment**: “Access full historical contributions with dates and totals” and “Auto-calculated contribution summary”.

---

# ✅ 3. `/dashboard/loans` — Loan Overview

This page lists **all past and current loans**.

### A. Page Title & Summary
- **Title**: “My Loan History”
- **Summary Card** (optional):
    - Total Loans Taken: `3`
    - Total Repaid: `₦700,000`
    - Outstanding Balance: `₦850,000`

### B. Loan List / Table
Each row represents one loan.

| Loan ID | Purpose           | Amount     | Status         | Disbursed On | Due Date   | Repayment Plan |
|---------|-------------------|------------|----------------|--------------|------------|----------------|
| LOAN-001| Home Renovation   | ₦500,000   | Repaying       | Nov 15, 2025 | Dec 28, 2025 | 12 months      |
| LOAN-002| Medical Emergency | ₦350,000   | Completed      | Oct 10, 2025 | Jan 10, 2026 | 6 months       |

> ✅ **Proposal Alignment**: “Loan Tracking” and “Real-time status updates”.

### C. Filter & Search (Optional but Recommended)
- Filter by: Status (All, Active, Completed, Rejected)
- Search by: Loan ID, Purpose, or Date Range

---

# ✅ 4. `/dashboard/loans/apply` — Loan Application Form

This is where users apply for new loans.

### A. Page Title & Eligibility Reminder
- **Title**: “Apply for a New Loan”
- **Eligibility Banner** (Critical!):
    > “You are eligible for up to **₦1,200,000** based on your contribution history.”
    > *(Link to “View Eligibility Rules” if needed)*

### B. Loan Application Form Fields
*(Must validate against eligibility rules)*

1.  **Loan Type** (Dropdown):
    - Select from pre-defined types (e.g., Personal, Education, Medical, Housing) — *based on cooperative policy*.

2.  **Requested Amount** (Input field):
    - **Validation**: Must be ≤ Eligible Amount (e.g., ≤ ₦1,200,000). Show error if exceeded.
    - Auto-suggest max amount.

3.  **Purpose of Loan** (Textarea):
    - Free text description (e.g., “To cover tuition fees for my child”).

4.  **Supporting Documents** (File Upload):
    - Accept: PDF, JPG, PNG
    - Max size: 5MB per file
    - Required? Only if specified by loan type or admin rule.

5.  **Terms & Conditions Checkbox**:
    - “I agree to the cooperative’s loan terms and repayment schedule.”

### C. Submit Button
- **Button Text**: “Submit Loan Application”
- **On Submit**:
    - Validate all fields.
    - Save draft or submit to admin queue.
    - Redirect to `/dashboard/loans` with success message: “Your loan application has been submitted for review.”

> ✅ **Proposal Alignment**: “Loan Application form”, “Validation to prevent applying for more than qualified”, “Supporting documents”.

---

# ✅ 5. `/dashboard/profile` — Profile Management

This page allows users to manage their personal information.

### A. Page Title
- **Title**: “My Profile”

### B. Editable Fields
*(From Proposal: Full Name, Email, Phone, Staff ID, Department, Profile Picture)*

1.  **Full Name** (Text Input)
2.  **Email Address** (Text Input)
3.  **Phone Number** (Text Input)
4.  **Staff ID** (Read-only — cannot be changed)
5.  **Department** (Dropdown or Text — may be editable if staff changes roles)
6.  **Profile Picture** (Upload button + preview)
    - Crop/resize tool recommended.
    - File format: JPG, PNG

### C. Save Button
- **Button Text**: “Save Changes”
- **On Save**: Update database, show success toast: “Profile updated successfully.”

> ✅ **Proposal Alignment**: “User Registration & Profile Management”, “Verification via staff ID database”.

---

# ✅ 6. `/dashboard/loans/:id` — Loan Detail Page (Optional but Highly Recommended)

When a user clicks on a loan in `/dashboard/loans`, they should see a detailed view.

### A. Loan Summary
- Loan ID, Purpose, Amount, Status, Disbursement Date, Due Date

### B. Repayment Schedule
- Table showing:
    - Installment # | Due Date | Amount Due | Amount Paid | Status (Paid/Overdue)

### C. Loan Timeline / Status Tracker
- Visual flow: Submitted → Under Review → Approved → Disbursed → Repaying → Completed

### D. Download Documents
- Option to download loan agreement or repayment schedule as PDF.

> ✅ **Proposal Alignment**: “Loan Tracking” and “Real-time status updates”.

---

## 🚫 What NOT to Include on User Dashboard (For Now)
- Admin-specific features (staff approval, contribution upload, reporting)
- Payroll integration UI (this happens behind the scenes)
- Voting or messaging systems (future expansion)

---

## 📌 FINAL RECOMMENDATIONS

1.  **Prioritize the 5 Core Pages**: `/dashboard`, `/contributions`, `/loans`, `/loans/apply`, `/profile`. These deliver 90% of the value.
2.  **Use Clear Icons & Colors**: Green for positive/available, red for warnings, blue for info.
3.  **Add Loading States & Error Handling**: Especially for API calls (e.g., fetching eligibility).
4.  **Mobile Responsiveness**: Ensure all pages work flawlessly on phones.
5.  **Security First**: Never expose sensitive data (like other users’ info) or allow unauthorized edits.

---

By building these pages exactly as described, you will have a **fully compliant, user-centric dashboard** that directly fulfills every requirement outlined in the proposal. Your current mockup is already very close — just expand the detail on each page as above.
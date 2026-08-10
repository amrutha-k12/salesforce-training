# 🚀 Placement Management System – Sprint 10

## Building Components That Think Together

### Component Communication, Forms, LDS and Reusable LWC Architecture

---

## 📌 Project Overview

This sprint extends the Student Placement Portal from a collection of individual Lightning Web Components into a coordinated Salesforce application.

The main focus of Sprint 10 is **LWC component architecture and communication**.

Instead of building one large component responsible for everything, the application is divided into focused and reusable components that communicate through clearly defined interfaces.

The application demonstrates:

- Parent-to-child communication
- Child-to-parent communication
- Custom events
- Public properties using `@api`
- Lightning base components
- Student profile forms
- Client-side validation
- Server-side validation
- Lightning Data Service (LDS)
- Reactive data
- Data refresh
- Reusable components
- Loading, success, empty and error states
- Component architecture
- Final application integration

The overall goal is to make the Student Placement Portal behave as a **coherent application rather than a collection of isolated screens**.

---

# 🎯 Sprint Objectives

The major objectives of this sprint are:

- Design a group of LWCs as one application
- Create focused components with clear responsibilities
- Implement parent-to-child communication
- Implement child-to-parent communication
- Use `@api` public properties appropriately
- Create meaningful custom events
- Build forms using Salesforce Lightning base components
- Implement client-side validation
- Maintain server-side business validation
- Understand when to use Lightning Data Service
- Use reactive data appropriately
- Refresh dependent components after data changes
- Create reusable components
- Create a reusable empty-state component
- Handle loading, success, empty and error states
- Review and improve component architecture
- Integrate the complete Student Placement Portal workflow

---

# 🏗️ Component Architecture

The Student Placement Portal is organized into focused components.

```text
StudentPortal
│
├── StudentSummary
│
├── StudentProfile
│
├── EligibleJobs
│   │
│   ├── JobCard
│   └── EmptyState
│
├── MyApplications
│   │
│   ├── ApplicationCard
│   └── EmptyState
│
└── OfferSummary
    │
    └── StatusBadge
```

Each component has a specific responsibility.

The parent coordinates the application while child components focus on their individual capabilities.

---

# 🔄 Component Communication

Component communication is one of the primary concepts of this sprint.

There are two major communication directions:

```text
Parent
  │
  │ Data
  ▼
Child
```

and:

```text
Child
  │
  │ Event
  ▼
Parent
```

---

# 1️⃣ Parent → Child Communication

Parent-to-child communication is used when the parent owns information that a child needs.

LWC uses the `@api` decorator to expose public properties.

### Parent JavaScript

```javascript
selectedJob;
```

### Child JavaScript

```javascript
@api job;
```

### Parent HTML

```html
<c-job-details
    job={selectedJob}>
</c-job-details>
```

The child receives the information from the parent instead of unnecessarily retrieving the same information again.

---

## Engineering Principle

> Give a component what it needs.

If the parent already owns the required information, the child should not independently retrieve the same information unless there is a valid architectural reason.

This reduces unnecessary data retrieval and makes data ownership clearer.

---

# 2️⃣ Child → Parent Communication

A child component communicates with its parent using **Custom Events**.

For example, when a student clicks the View Details button inside `JobCard`, the child can dispatch an event.

### Child JavaScript

```javascript
this.dispatchEvent(
    new CustomEvent('viewdetails', {
        detail: {
            jobId: this.job.Id
        }
    })
);
```

The parent listens for the event:

```html
<c-job-card
    job={job}
    onviewdetails={handleViewDetails}>
</c-job-card>
```

The parent then decides what should happen.

---

# 📡 Custom Events Implemented

The `JobCard` component should support:

| Event | Purpose |
|---|---|
| `viewdetails` | Notify parent that the student wants to view a job |
| `apply` | Notify parent that the student wants to apply |
| `favorite` | Optional stretch feature |

The event should contain enough information for the parent to identify the relevant job.

Example:

```javascript
this.dispatchEvent(
    new CustomEvent('apply', {
        detail: {
            jobId: this.job.Id
        }
    })
);
```

---

# 📜 Event Contract

A custom event must communicate accurately what actually happened.

For example:

```text
applyclicked
```

means:

> The user clicked the Apply button.

It does **not** necessarily mean:

```text
applicationsubmittedsuccessfully
```

because the application may not have been created yet.

The important distinction is:

```text
User Intent
     ↓
Component Event
     ↓
Parent / Service
     ↓
Business Operation
     ↓
Outcome
```

The child reports facts.

The parent coordinates behaviour.

---

# 📝 Student Profile Form

Sprint 10 introduces a Student Profile form.

### User Story

> As a student, I want to update my placement profile so that recruiters can see accurate information.

---

## Profile Fields

| Field | Type | Required |
|---|---|---|
| Phone | Text | Yes |
| Email | Email | Yes |
| Branch | Picklist | Yes |
| CGPA | Number | Yes |
| Skills | Long Text | No |
| Preferred Location | Picklist | No |

---

# 🧩 Lightning Base Components

The profile form should use Salesforce Lightning base components instead of manually recreating standard controls.

Examples:

```html
<lightning-input>
<lightning-combobox>
<lightning-textarea>
<lightning-checkbox-group>
<lightning-radio-group>
```

These components provide standard Salesforce behaviour and styling.

The engineering principle is:

> Reuse the platform before reinventing the platform.

---

# ✏️ Example Form Fields

```html
<lightning-input
    label="Phone"
    value={phone}
    onchange={handlePhoneChange}>
</lightning-input>
```

```html
<lightning-input
    type="email"
    label="Email"
    value={email}
    onchange={handleEmailChange}>
</lightning-input>
```

JavaScript can receive the changed values:

```javascript
handlePhoneChange(event) {
    this.phone = event.target.value;
}

handleEmailChange(event) {
    this.email = event.target.value;
}
```

---

# ✅ Validation Strategy

Validation is divided into two responsibilities.

## Client-Side Validation

Client-side validation improves the user experience.

For example:

```text
CGPA >= 0
CGPA <= 10
```

The user can immediately receive feedback when entering an invalid value.

---

## Server-Side Validation

Client-side validation must not be treated as business security.

A user or another client could potentially bypass JavaScript and communicate with the backend directly.

Therefore:

```text
Client Validation
       ↓
Better User Experience
```

while:

```text
Server Validation
       ↓
Business Integrity
```

Both can exist because they have different responsibilities.

Existing business rules such as application eligibility and duplicate application prevention remain authoritative on the server.

---

# ⚡ Lightning Data Service

Lightning Data Service (LDS) provides Salesforce-supported mechanisms for working with records.

Custom Apex is not always necessary for basic record operations.

LDS can be considered for:

- Retrieving supported Salesforce records
- Updating records
- Handling standard record operations
- Keeping record data reactive where appropriate

---

# 🏛️ Architecture Decision

Before implementing the Student Profile form, evaluate three approaches:

```text
Option A
LDS-based record operations

Option B
Custom Apex

Option C
Combination of LDS and Apex
```

The implementation should be based on the actual requirement.

Do not choose Apex simply because Apex is familiar.

The requirement determines the architecture.

---

# 🔄 Reactive Data

The Student Placement Portal contains information that depends on the Student record.

For example:

```text
Student Record
      │
      ├── Student Summary
      │
      ├── Eligible Jobs
      │
      └── Applications
```

If the student's CGPA changes, the dependent information may also need to change.

For example:

```text
CGPA = 7.4
```

After profile update:

```text
CGPA = 8.2
```

The student's eligible jobs may change.

Therefore, the application must consider how dependent components receive updated information.

---

# 🔄 Refresh Behaviour

Example scenario:

```text
Student Profile
      │
      │ Update CGPA
      ▼
Student Record Changes
      │
      ├── Student Summary Refresh
      │
      └── Eligible Jobs Refresh
```

The important questions are:

1. Which data changed?
2. Which component owns the data?
3. Which components depend on that data?
4. How should those components refresh?

Possible strategies include:

- Parent-owned state
- Custom events
- Refreshing wired data
- LDS-supported record notifications
- Reactive updates
- Re-querying data when genuinely necessary

The simplest architecture that keeps the UI consistent should be preferred.

---

# 🔄 Loading, Success, Empty and Error States

Forms and components should clearly communicate their current state.

## Loading

```text
Loading your profile...
```

## Editing

```text
Normal profile form
```

## Saving

```text
Saving...
```

## Success

```text
Profile updated successfully.
```

## Error

```text
We could not update your profile.
Please review the highlighted fields.
```

The user should never have to guess whether an operation is still processing, succeeded, or failed.

---

# ♻️ Reusable Components

Sprint 10 introduces reusable component design.

For example, multiple screens may need an application status indicator.

Instead of implementing the same logic separately:

```text
ApplicationCard
    ↓
StatusBadge

InterviewCard
    ↓
StatusBadge

OfferCard
    ↓
StatusBadge
```

One reusable component can provide the common capability.

---

# 🏷️ StatusBadge

A reusable `StatusBadge` component can accept values such as:

```text
status
variant
label
```

It can then be reused by:

- Application Card
- Interview Card
- Offer Card

---

# ♻️ Reusability Principle

> Reuse behaviour, not just markup.

Good reusable component names communicate business or UI meaning.

Examples:

```text
StatusBadge
ApplicationStatus
JobCard
EmptyState
LoadingIndicator
```

Avoid meaningless names such as:

```text
SmallBlueBox
```

Reuse should reduce duplication without creating unnecessary abstraction.

---

# 📭 Reusable Empty State

The Eligible Jobs page should provide a meaningful empty state.

Instead of:

```text
No records found.
```

the application can communicate useful information:

```text
No eligible opportunities are available right now.

Keep your profile updated and check again
as new companies are added.

[ UPDATE PROFILE ]
```

---

## EmptyState Component

The reusable component can accept:

| Property | Purpose |
|---|---|
| `title` | Empty-state heading |
| `message` | Explanation shown to the user |
| `actionLabel` | Optional action button |

Example:

```html
<c-empty-state
    title="No Eligible Jobs"
    message="Check again when new opportunities are added.">
</c-empty-state>
```

The optional action can communicate back to the parent through a custom event.

---

# 🧱 Final Component Architecture

The final portal architecture is:

```text
StudentPortal
│
├── StudentSummary
│
├── StudentProfile
│
├── EligibleJobs
│   │
│   ├── JobCard
│   └── EmptyState
│
├── MyApplications
│   │
│   ├── ApplicationCard
│   └── EmptyState
│
└── OfferSummary
    │
    └── StatusBadge
```

---

# 🚫 Avoiding the God Component

A major architectural problem is creating one component that handles everything.

Example:

```text
StudentPortal
      ↓
   Everything
      ↓
     Apex
      ↓
   Everything
```

The parent retrieves all data, owns all state, handles every event, and controls every child.

This is commonly described as a **God Component** pattern.

It may work initially, but becomes difficult to maintain as the application grows.

---

# ✅ Preferred Architecture

A healthier structure is:

```text
StudentPortal
│
├── StudentSummary
│
├── StudentProfile
│
├── EligibleJobs
│   └── JobCard
│
└── MyApplications
    └── ApplicationCard
```

The design principles are:

- Parent coordinates
- Children have focused responsibilities
- Communication is explicit
- Data ownership is clear
- Business logic remains in appropriate backend layers
- Reusable components are extracted when justified

---

# 🔗 Complete Application Workflow

The final integration challenge connects the major components into one user journey.

```text
Student Login
      ↓
Student Summary
      ↓
Update Profile
      ↓
Profile Saved
      ↓
Eligible Jobs Refresh
      ↓
Select Job
      ↓
Job Details
      ↓
Apply
      ↓
Application Created
      ↓
My Applications Refresh
      ↓
Student Sees New Status
```

---

# 🔄 Complete Technical Flow

The system should demonstrate the following:

```text
User Click
    ↓
LWC Event
    ↓
Parent Component
    ↓
Apex / LDS
    ↓
Service Layer
    ↓
Database
    ↓
Business Rules
    ↓
Result
    ↓
UI Refresh
```

The implementation should demonstrate:

- Parent-child communication
- Custom events
- Data binding
- Form handling
- LDS where appropriate
- Imperative Apex where appropriate
- Server-side business validation
- Loading states
- Error states
- Successful updates
- Appropriate refresh behaviour

---

# 🧪 Architecture Review

The application should be reviewed using the following questions:

### Data

- Which components retrieve data?
- Which components display data?
- Which components own state?

### Communication

- Which components report events?
- How does parent-to-child communication work?
- How does child-to-parent communication work?
- How are sibling components coordinated?

### Backend

- Where does business logic live?
- Where is Apex required?
- Where can LDS be used?

### Reusability

- Which components are reusable?
- Are there duplicated implementations?
- Has abstraction gone too far?

### Data Consistency

- What happens when Student CGPA changes?
- Which components depend on CGPA?
- How are those components refreshed?

---

# 🧪 Debugging Scenarios

The following architectural problems should be considered during code review.

### Scenario 1

A child directly modifies a parent's property.

**Problem:** Tight coupling between child and parent.

**Preferred approach:**

```text
Child
  ↓
Custom Event
  ↓
Parent
  ↓
State Update
```

---

### Scenario 2

A child retrieves a record that the parent already has.

**Problem:** Potentially unnecessary data retrieval.

**Preferred approach:**

```text
Salesforce
    ↓
Parent
    ↓
Child
```

when the parent's data is sufficient.

---

### Scenario 3

Three components contain identical status-display logic.

**Solution:**

Consider extracting:

```text
StatusBadge
```

as a reusable component.

---

### Scenario 4

CGPA is validated in JavaScript and Apex.

**This is not necessarily duplication.**

```text
JavaScript
    ↓
User Experience

Apex
    ↓
Business Integrity
```

---

### Scenario 5

Profile save succeeds but Eligible Jobs still shows old results.

Investigate:

- Data ownership
- Reactive data
- Wired data
- Refresh behaviour
- Custom events
- LDS notifications
- Whether a new data retrieval is required

---

### Scenario 6

A reusable component requires 18 properties.

This may indicate that reuse has become over-engineering.

The component's responsibility and API should be reconsidered.

---

# ✅ Definition of Done

The Student Placement Portal is considered complete for this sprint when:

- [ ] Student can view their profile
- [ ] Student can update their profile
- [ ] Profile validation works
- [ ] Eligible Jobs reflect current student information
- [ ] Job Cards are reusable
- [ ] Child components communicate with parents through events
- [ ] Parents deliberately pass information to children
- [ ] Application submission works
- [ ] Duplicate application attempts are handled
- [ ] My Applications reflects the new application
- [ ] Loading states are visible
- [ ] Empty states are meaningful
- [ ] Errors are handled professionally
- [ ] Business rules remain server-side
- [ ] Components have clear responsibilities
- [ ] Complete data flow can be explained

---

# 📝 Data Strategy

Document where each data-access mechanism is used.

| Mechanism | Purpose |
|---|---|
| LDS | Standard Salesforce record operations where appropriate |
| Wire | Reactive read operations |
| Imperative Apex | User-driven operations or operations requiring custom server-side logic |
| Service Layer | Business/process orchestration |
| Database | Persistent Salesforce data |

The choice should be based on the requirement rather than familiarity with a particular technology.

---

# 🔐 Validation Strategy

The project follows a two-layer validation approach.

```text
Client-Side Validation
        ↓
User Experience
        ↓
Server-Side Validation
        ↓
Business Integrity
```

Client validation helps users correct invalid input quickly.

Server-side validation remains authoritative because clients cannot be trusted as the only enforcement layer.

---

# ♻️ Reusable Components

At least two reusable components should be identified in the project.

Examples:

### JobCard

Used for displaying job information and communicating actions to the parent.

### EmptyState

Reusable across:

- Eligible Jobs
- My Applications
- Other lists requiring an empty state

### StatusBadge

Reusable across:

- Application Status
- Interview Status
- Offer Status

---

# 🐞 Debugging

Document at least one real problem encountered during implementation.

Use the following format:

```text
Problem:
Describe the issue.

Expected Behaviour:
What should have happened?

Actual Behaviour:
What actually happened?

Investigation:
What did you inspect?

Root Cause:
What caused the problem?

Solution:
How was it fixed?

Learning:
What architectural or technical lesson was learned?
```

---

# 🏛️ Architectural Decision

Document at least one important design decision.

Example:

```text
Decision:
Use parent-child communication instead of allowing child
components to directly modify parent state.

Reason:
This reduces coupling and gives the parent ownership of
application-level state.

Result:
Child components report meaningful events and the parent
coordinates the resulting behaviour.
```

---

# 👥 Pod Code Review

Before completing the sprint, conduct a code review.

Suggested roles:

```text
Student 1 → Presenter
Student 2 → Interviewer
Student 3 → Technical Lead
Student 4 → UI Reviewer
Student 5 → Apex/Data Flow Reviewer
```

Rotate the roles so everyone understands the architecture.

---

# 📊 Engineering Principles

The major engineering principles from this sprint are:

### 1. Focused Components

A component should have a clear responsibility.

### 2. Explicit Communication

Components should communicate through defined interfaces.

### 3. Children Report, Parents Coordinate

```text
Child → Event
Parent → Decision
```

### 4. Give Components What They Need

Avoid unnecessary duplicate data retrieval.

### 5. Reuse the Platform

Use Salesforce Lightning base components and LDS where they fit the requirement.

### 6. Client Validation ≠ Business Security

Client validation improves UX.

Server validation protects business integrity.

### 7. Clear Data Ownership

Avoid maintaining conflicting copies of the same changing data.

### 8. Reuse Behaviour

Reusable components should provide meaningful capabilities.

### 9. Avoid God Components

Do not place the entire application inside one LWC.

### 10. Prefer the Simplest Architecture That Works

Do not introduce unnecessary global state or abstraction.

---

# 🏁 Conclusion

Sprint 10 transforms the Student Placement Portal from a set of individual Salesforce components into a coordinated application.

The focus is no longer only on writing individual Apex or LWC files. The focus is on understanding how the components cooperate:

```text
User
 ↓
LWC
 ↓
Component Communication
 ↓
Apex / LDS
 ↓
Service Layer
 ↓
Salesforce Database
 ↓
Business Rules
 ↓
Result
 ↓
UI Refresh
```

The application now demonstrates:

- Component communication
- Parent-child architecture
- Custom events
- Forms
- Validation
- Lightning Data Service
- Reactive data
- Reusable components
- UI state management
- Application integration

The next stage of the project moves toward **Salesforce APIs and Integration**, including REST APIs, callouts, Named Credentials, authentication, integration patterns, and external systems.

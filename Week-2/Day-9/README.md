# Dashboard Architecture and Component Communication – College Management System

# 1. Dashboard Design

# Student Dashboard

## Components
- Header Component
- Student Profile Component
- Attendance Component
- Course Component
- Notification Component

## Purpose
The Student Dashboard allows students to:
- View personal details
- Check attendance percentage
- View enrolled courses
- Receive important notifications

---

# Faculty Dashboard

## Components
- Header Component
- Faculty Profile Component
- Student Management Component
- Attendance Update Component
- Course Management Component
- Notification Component

## Purpose
The Faculty Dashboard helps faculty members:
- Manage students
- Update attendance
- Handle courses
- View notifications and alerts

---

# Admin Dashboard

## Components
- Header Component
- Student Analytics Component
- Faculty Analytics Component
- Course Management Component
- Reports Component
- Notification Management Component

## Purpose
The Admin Dashboard allows administrators to:
- Monitor system activity
- Manage departments and courses
- View analytics and reports
- Control notifications

---

# 2. Component Communication

# Student Dashboard Communication

```text
Header Component
        ↓
Student Profile Component
        ↓
Attendance Component
        ↓
Course Component
        ↓
Notification Component
```

## Explanation
- Attendance Component receives student data from Student Profile Component.
- Course Component updates attendance and enrollment information.
- Notification Component displays alerts received from backend events.

---

# Faculty Dashboard Communication

```text
Faculty Profile Component
        ↓
Student Management Component
        ↓
Attendance Update Component
        ↓
Notification Component
```

## Explanation
- Attendance updates automatically refresh student information.
- Notification Component receives alerts when attendance drops below limits.

---

# Admin Dashboard Communication

```text
Reports Component
        ↓
Student Analytics Component
        ↓
Course Management Component
        ↓
Notification Management Component
```

## Explanation
- Analytics components receive data from multiple objects.
- Reports display summarized enterprise data.

---

# 3. Data Flow Explanation

# Process Chosen: Student Registration

## Step 1 – UI Layer

The student enters:
- Name
- Email
- Course
- Department

through the registration form.

---

## Step 2 – Validation Layer

Validation rules verify:
- Required fields are filled
- Email format is correct
- Duplicate records do not exist

---

## Step 3 – Flow Automation

Flow automatically:
- Sends confirmation email
- Updates registration status
- Triggers notification process

---

## Step 4 – Apex Logic

Apex handles:
- Complex business rules
- Seat allocation logic
- Duplicate checking
- Backend processing

---

## Step 5 – Database Storage

Records are stored inside:
- Student Object
- Course Object
- Department Object

---

## Step 6 – Notification System

Notifications are sent to:
- Student
- Faculty
- Administration

---

# Complete Data Flow

```text
UI Form
   ↓
Validation Rules
   ↓
Flow Automation
   ↓
Apex Logic
   ↓
Database Storage
   ↓
Notifications
```

---

# 4. Aura vs LWC

| Aura Components | Lightning Web Components (LWC) |
|---|---|
| Older Salesforce framework | Modern Salesforce framework |
| More complex architecture | Lightweight and faster |
| Uses Aura-specific syntax | Uses modern JavaScript standards |
| Slower performance | Better performance |
| Harder to maintain | Easier to maintain |
| Less reusable | Highly reusable |

---

# Why Salesforce Moved to LWC

Salesforce adopted LWC because modern enterprise systems require:
- Faster UI rendering
- Better scalability
- Improved security
- Reusable components
- Modern web development standards

LWC provides better performance and developer experience compared to Aura.

---

# 5. Reflection – Why Enterprise Applications Need Modular Architecture

Enterprise applications are large and continuously evolving. Modular architecture divides applications into smaller reusable components.

Benefits include:
- Easier maintenance
- Faster development
- Better scalability
- Improved testing
- Code reusability
- Better collaboration among teams

Modular architecture helps organizations build flexible and maintainable enterprise systems efficiently.

<img width="1600" height="764" alt="day9" src="https://github.com/user-attachments/assets/044a5846-b2ea-420c-8ea6-165636ee92a4" />

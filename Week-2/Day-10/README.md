# College Management System – Salesforce Project

# 1. System Overview

The College Management System is a Salesforce-based enterprise application designed to manage:
- Student registration
- Course management
- Faculty management
- Attendance tracking
- Notifications
- Reports and analytics

The system uses:
- CRM concepts
- Salesforce objects
- Validation rules
- Flow automation
- Apex logic
- Lightning Web Components (LWC)

to build a scalable and automated enterprise solution.

---

# 2. CRM Concepts

CRM (Customer Relationship Management) helps organizations manage data, communication, and business processes efficiently.

In this system:
- Students are managed like customer records
- Faculty and departments are connected through relationships
- Automation improves communication and workflow management

### CRM Features Used
- Centralized data storage
- Automation
- Reports and dashboards
- Notifications
- Relationship management

---

# 3. Data Model

# Objects

## Student
Stores student information.

### Fields
- Student ID
- Student Name
- Email
- Attendance
- Course ID
- Department ID

---

## Faculty
Stores faculty information.

### Fields
- Faculty ID
- Faculty Name
- Email
- Department ID

---

## Course
Stores course information.

### Fields
- Course ID
- Course Name
- Total Seats
- Available Seats
- Faculty ID

---

## Department
Stores department information.

### Fields
- Department ID
- Department Name
- HOD Name

---

# Relationships

```text
1 Department → Many Students
1 Department → Many Faculty
1 Department → Many Courses
1 Faculty → Many Courses
1 Course → Many Students
```

---

# 4. Validation Rules

## 1. Email Cannot Be Empty

### Purpose
Prevents incomplete records.

---

## 2. Student Age Cannot Be Negative

### Purpose
Prevents invalid student data.

---

## 3. Course Seats Cannot Exceed Limit

### Purpose
Prevents course overbooking.

---

## 4. Duplicate Student ID Check

### Purpose
Prevents duplicate registrations.

---

# 5. Flows

# Automation Examples

## 1. Student Registration Confirmation

### Action
Automatically sends confirmation email after registration.

---

## 2. Attendance Warning Notification

### Action
Sends warning if attendance drops below 75%.

---

## 3. Fee Reminder Notification

### Action
Sends reminder before fee due date.

---

## 4. Course Full Notification

### Action
Notifies faculty when seats become full.

---

# 6. Apex Logic

# Apex Use Cases

## 1. Complex Fee Calculation

### Purpose
Calculate fees using multiple business conditions.

---

## 2. Course Seat Allocation Logic

### Purpose
Handle advanced enrollment validation.

---

## 3. External API Integration

### Purpose
Connect payment gateways and external systems.

---

## 4. Trigger-Based Record Updates

### Purpose
Automatically update related records after data changes.

---

# 7. UI Screens

# Student Dashboard

### Features
- Student profile
- Attendance details
- Course information
- Notifications

---

# Faculty Dashboard

### Features
- Student management
- Attendance updates
- Course management

---

# Admin Dashboard

### Features
- Reports and analytics
- Department management
- Notification management
- System monitoring

---

# Student Registration Screen

### Features
- Registration form
- Course selection
- Validation handling

---

# Notification Panel

### Features
- Attendance warnings
- Fee reminders
- Course alerts

---

# 8. Complete Data Flow

# Student Registration Workflow

## Step 1 – LWC Screen

Student enters registration details through the frontend UI.

---

## Step 2 – Validation Rules

System validates:
- Required fields
- Email format
- Seat availability
- Duplicate records

---

## Step 3 – Flow Automation

Flow automatically:
- Sends confirmation email
- Updates registration status
- Starts notifications

---

## Step 4 – Apex Trigger

Trigger handles:
- Seat allocation updates
- Business rule processing
- Related record updates

---

## Step 5 – Database Storage

Records are stored inside Salesforce objects.

---

## Step 6 – Notifications

System sends notifications to:
- Students
- Faculty
- Administration

---

# Complete Flow Diagram

```text
Student Registration
          ↓
LWC Screen
          ↓
Validation Rules
          ↓
Flow Automation
          ↓
Apex Trigger
          ↓
Database Storage
          ↓
Notifications
```

---

# 9. Reflection

After learning Salesforce and enterprise system design, I realized that modern business applications require:
- Structured data models
- Automation
- Scalable architecture
- Secure backend logic
- Reusable UI components
- Event-driven processing

Enterprise systems combine frontend, backend, database, automation, and integrations to manage large-scale business operations efficiently.

Salesforce demonstrates how cloud platforms simplify enterprise application development while maintaining scalability, security, and performance.

<img width="1914" height="846" alt="Screenshot 2026-05-26 144633" src="https://github.com/user-attachments/assets/d68c660c-c4a8-4dc1-af6d-243ab2d2982d" />

# 🚀 Salesforce Day 6 – Apex Trigger & Trigger Handler

## 📌 Project Description

This project demonstrates the implementation of **Apex Triggers** using the **Trigger Handler Pattern** in a Salesforce Placement Management System.

The trigger validates student applications before they are inserted and executes additional business logic after updates.

---

## 🎯 Features

- ✅ Before Insert Trigger
- ✅ After Update Trigger
- ✅ Trigger Handler Pattern
- ✅ Business Rule Validations
- ✅ Anonymous Apex Testing
- ✅ Clean and Modular Apex Code

---

## 📂 Project Structure

```
Day6/
│── ApplicationTrigger.trigger
│── ApplicationTriggerHandler.cls
│── README.md
```

---

# ⚙️ Trigger Flow

```text
User Creates Application
           │
           ▼
Before Insert Trigger
           │
           ▼
ApplicationTriggerHandler.beforeInsert()
           │
           ├── Validate Student
           ├── Validate Job
           ├── Check Minimum CGPA
           ├── Check Last Date
           ├── Prevent Duplicate Applications
           └── Set Default Status
           │
           ▼
Record Saved
           │
           ▼
After Update Trigger
           │
           ▼
ApplicationTriggerHandler.afterUpdate()
           │
           ├── Placement Statistics
           └── Status Notifications
```

---

# 📝 Business Rules

## 1️⃣ Minimum CGPA Validation

Ensures the student's CGPA is greater than or equal to the minimum CGPA required by the selected job.

**Error Message**

```
Student CGPA is below the required minimum CGPA.
```

---

## 2️⃣ Application Deadline Validation

Checks whether the application is submitted before the job's last application date.

**Error Message**

```
Application deadline has passed.
```

---

## 3️⃣ Duplicate Application Validation

Prevents a student from applying to the same job more than once.

**Error Message**

```
Student has already applied for this job.
```

---

## 4️⃣ Default Status Assignment

If the Status field is empty during insertion, it is automatically assigned:

```
Applied
```

---

# 🔄 After Update Logic

Whenever an Application record is updated:

### ✔ Placement Statistics

If the Status changes to:

```
Selected
```

the handler executes placement statistics logic.

(Current implementation logs a debug message.)

---

### ✔ Status Notifications

Notifications are triggered whenever the status changes to:

- Interview Scheduled
- Selected
- Rejected
- Offer Accepted

(Currently simulated using debug logs.)


---

# 🧠 Trigger Handler Highlights

The `ApplicationTriggerHandler` class performs:

- Collect Student and Job IDs
- Query Student records
- Query Job records
- Check existing applications
- Validate CGPA
- Validate deadline
- Prevent duplicate applications
- Assign default status
- Handle placement updates
- Handle notification logic

---

# 🧪 Anonymous Apex Test

```apex
Student__c student = [
    SELECT Id
    FROM Student__c
    LIMIT 1
];

Job__c job = [
    SELECT Id
    FROM Job__c
    LIMIT 1
];

Application__c app = new Application__c();

app.Student__c = student.Id;
app.Job__c = job.Id;

insert app;
```

---

# 📷 Output

The trigger successfully prevented duplicate applications.

<img width="782" height="168" alt="image" src="https://github.com/user-attachments/assets/0edccbbf-0947-489a-a590-620a1a61eb68" />


---

# 📚 Concepts Covered

- Apex Triggers
- Trigger Handler Pattern
- Before Insert Trigger
- After Update Trigger
- SOQL
- Maps
- Sets
- `addError()`
- Anonymous Apex
- Salesforce Best Practices

---

# 🎓 Learning Outcome

Through this assignment, I learned how to build scalable Apex Triggers by separating business logic into a Trigger Handler class. I implemented multiple validation rules, automated default field assignments, handled status updates, and tested the functionality using Anonymous Apex while following Salesforce development best practices.

---

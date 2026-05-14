# SOQL and Apex Trigger Concepts – College Management System

# 1. What is SOQL?

SOQL stands for Salesforce Object Query Language. It is used to retrieve data from Salesforce objects.

SOQL helps:
- Search records
- Filter data
- Access related object information
- Generate reports and business logic

### Example
Retrieve all students enrolled in a specific course.

---

# 2. What is an Apex Trigger?

An Apex Trigger is a piece of Apex code that runs automatically when data changes occur in Salesforce objects.

Triggers can execute:
- Before inserting records
- After inserting records
- Before updating records
- After updating records
- Before deleting records
- After deleting records

### Purpose
Triggers automate actions and enforce custom business logic.

---

# 3. Difference Between Flow vs Trigger

| Flow | Apex Trigger |
|---|---|
| No-code/low-code automation | Code-based automation |
| Easy to create using drag-and-drop | Requires Apex programming |
| Best for simple automation | Best for complex logic |
| Limited flexibility | Highly customizable |
| Faster for standard processes | Better for advanced operations |

---

# Difference Between Before vs After Trigger

| Before Trigger | After Trigger |
|---|---|
| Runs before data is saved | Runs after data is saved |
| Used for validation and field updates | Used for notifications and related actions |
| Faster for modifying records | Used when record ID is needed |
| Example: Update student status | Example: Send email after registration |

---

# 4. Trigger Use Cases

## 1. Send Welcome Email After Student Registration

### Trigger Event
After student record creation.

### Action
Send automatic welcome email.

---

## 2. Update Remaining Seats After Enrollment

### Trigger Event
After student enrolls in a course.

### Action
Reduce available course seats automatically.

---

## 3. Notify Faculty When Course Becomes Full

### Trigger Event
After available seats become 0.

### Action
Send notification to faculty.

---

## 4. Attendance Warning Notification

### Trigger Event
After attendance update.

### Action
Notify students if attendance falls below 75%.

---

## 5. Prevent Duplicate Student Registration

### Trigger Event
Before student record insertion.

### Action
Check if email or student ID already exists.

---

# 5. Query Examples

## Find all students in Course A

```text
Show all students enrolled in Course A
```

---

## Find all courses handled by Faculty X

```text
Show all courses assigned to Faculty X
```

---

## Find students with attendance below 75%

```text
Show students whose attendance is less than 75%
```

---

## Find all students in Computer Science Department

```text
Show all students belonging to the Computer Science department
```

---

## Find courses with no available seats

```text
Show all courses where available seats are 0
```

---

# 6. Reflection – Why Enterprise Systems React Automatically to Data Changes

Enterprise systems must handle large amounts of data efficiently and respond quickly to business events. Automatic reactions to data changes help organizations reduce manual work, improve accuracy, and maintain real-time operations.

Automatic processing helps:
- Send notifications instantly
- Update related records automatically
- Enforce business rules
- Improve productivity
- Reduce human errors

Event-driven behavior allows enterprise systems to work faster, smarter, and more efficiently.


---

# Trailblazer Profile

<img width="1896" height="910" alt="image" src="https://github.com/user-attachments/assets/d560873a-3d95-4067-8af9-ea47ea866a56" />

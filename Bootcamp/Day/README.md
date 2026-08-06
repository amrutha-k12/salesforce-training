# 🚀 Placement Management System – Sprint 7
## Bulk-Safe Apex Trigger using Trigger Handler Pattern

## 📖 Project Overview

This project demonstrates the implementation of a **Bulk-Safe Apex Trigger** for a Placement Management System using the **Trigger Handler Pattern**.

The solution validates student job applications before insertion and detects important application status changes after updates while following Salesforce **Governor Limits** and **Bulkification** best practices.

---

# ✨ Features

## 🔹 Before Insert

The trigger performs the following validations before creating an Application record:

- ✅ Validate Student existence
- ✅ Validate Job existence
- ✅ Validate Student CGPA against Job Minimum CGPA
- ✅ Validate Job Application Deadline
- ✅ Prevent duplicate job applications
- ✅ Automatically assign **Applied** as the default Application Status

---

## 🔹 After Update

The trigger detects important business events by:

- ✅ Detecting when the Application Status changes to **Selected**
- ✅ Tracking important application status transitions
- ✅ Logging notification events using `System.debug()`

---

# ⚡ Bulkification Techniques Used

This project follows Salesforce Bulkification principles to ensure efficient processing of multiple records.

### ✔ Collections Used

- List
- Set
- Map

### ✔ Bulk SOQL

Student and Job records are queried only once.

```apex
Map<Id, Student__c> studentMap;
Map<Id, Job__c> jobMap;
```

### ✔ No SOQL Inside Loops

All database queries are executed before processing records.

### ✔ No DML Inside Loops

The project avoids DML operations inside processing loops.

### ✔ Trigger Handler Pattern

Business logic is separated from the Trigger.

```
ApplicationTrigger
        │
        ▼
ApplicationTriggerHandler
        │
        ▼
Business Logic
```

---

# 🗂 Objects Used

## Student__c

| Field | Purpose |
|--------|---------|
| Name | Student Name |
| CGPA__c | Student CGPA |

---

## Job__c

| Field | Purpose |
|--------|---------|
| Name | Job Name |
| Minimum_CGPA__c | Required Minimum CGPA |
| Last_Date__c | Application Deadline |

---

## Application__c

| Field | Purpose |
|--------|---------|
| Name | Application Name |
| Student__c | Lookup to Student |
| Job__c | Lookup to Job |
| Status__c | Application Status |
| Application_Date__c | Application Date |

---

# ⚙ Trigger Events

| Event | Description |
|-------|-------------|
| Before Insert | Validates new job applications |
| After Update | Detects important status changes |

---

# ✅ Validation Rules Implemented

### Rule 1 – CGPA Validation

Ensures the student's CGPA is greater than or equal to the minimum CGPA required for the selected job.

---

### Rule 2 – Deadline Validation

Prevents applications from being submitted after the job application deadline.

---

### Rule 3 – Duplicate Application Validation

Prevents a student from applying to the same job more than once.

---

### Rule 4 – Default Status

Automatically assigns **Applied** if the Status field is left blank.

---

# 📌 Governor Limit Best Practices

The solution follows Salesforce Governor Limits by:

- Using **Sets** to collect record IDs
- Using **Maps** for fast record retrieval
- Executing **Bulk SOQL**
- Avoiding **SOQL inside loops**
- Avoiding **DML inside loops**
- Processing records completely in memory

---

# 🏗 Trigger Architecture

```
ApplicationTrigger
        │
        ▼
ApplicationTriggerHandler
        │
        ▼
Validation Logic
```

---


# 📄 ApplicationTriggerHandler.apxc

```

public class ApplicationTriggerHandler {

    // BEFORE INSERT
    public static void beforeInsert(List<Application__c> newApplications) {

        // Collect Student and Job IDs
        Set<Id> studentIds = new Set<Id>();
        Set<Id> jobIds = new Set<Id>();

        for (Application__c app : newApplications) {
            if (app.Student__c != null) {
                studentIds.add(app.Student__c);
            }

            if (app.Job__c != null) {
                jobIds.add(app.Job__c);
            }
        }

        // Query Students
        Map<Id, Student__c> studentMap = new Map<Id, Student__c>([
            SELECT Id, CGPA__c
            FROM Student__c
            WHERE Id IN :studentIds
        ]);

        // Query Jobs
        Map<Id, Job__c> jobMap = new Map<Id, Job__c>([
            SELECT Id,
                   Minimum_CGPA__c,
                   Last_Date__c
            FROM Job__c
            WHERE Id IN :jobIds
        ]);

        // Existing Applications
        Set<String> existingApplications = new Set<String>();

        for (Application__c app : [
            SELECT Student__c,
                   Job__c
            FROM Application__c
            WHERE Student__c IN :studentIds
            AND Job__c IN :jobIds
        ]) {

            existingApplications.add(
                app.Student__c + '-' + app.Job__c
            );

        }

        // Validation
        for (Application__c app : newApplications) {

            Student__c student = studentMap.get(app.Student__c);
            Job__c job = jobMap.get(app.Job__c);

            if(student == null){
                app.addError('Please select a valid Student.');
            }

            if(job == null){
                app.addError('Please select a valid Job.');
            }

            if(student == null || job == null){
                continue;
            }

            // Rule 1 - CGPA
            if(student.CGPA__c < job.Minimum_CGPA__c){

                app.addError(
                    'Student CGPA is below the required minimum CGPA.'
                );

            }

            // Rule 2 - Last Date
            if(Date.today() > job.Last_Date__c){

                app.addError(
                    'Application deadline has passed.'
                );

            }

            // Rule 3 - Duplicate
            String key = app.Student__c + '-' + app.Job__c;

            if(existingApplications.contains(key)){

                app.addError(
                    'Student has already applied for this job.'
                );

            }

            // Rule 4 - Default Status
            if(String.isBlank(app.Status__c)){

                app.Status__c = 'Applied';

            }

        }

    }

    // AFTER UPDATE
    public static void afterUpdate(
        List<Application__c> newApplications,
        Map<Id, Application__c> oldMap
    ){

        for(Application__c app : newApplications){

            Application__c oldApp = oldMap.get(app.Id);

            // US-14
            if(app.Status__c == 'Selected'
               && oldApp.Status__c != 'Selected'){

                System.debug(
                    'Placement statistics updated.'
                );

            }

            // US-15
            if(app.Status__c != oldApp.Status__c){

                if(app.Status__c == 'Interview Scheduled'
                || app.Status__c == 'Selected'
                || app.Status__c == 'Rejected'
                || app.Status__c == 'Offer Accepted'){

                    System.debug(
                        'Notification sent for status : '
                        + app.Status__c
                    );

                }

            }

        }

    }

}
```




# 📄 ApplicationTrigger.apxt

```
trigger ApplicationTrigger on Application__c (
    before insert,
    after update
) {

    if (Trigger.isBefore && Trigger.isInsert) {
        ApplicationTriggerHandler.beforeInsert(Trigger.new);
    }

    if (Trigger.isAfter && Trigger.isUpdate) {
        ApplicationTriggerHandler.afterUpdate(
            Trigger.new,
            Trigger.oldMap
        );
    }
}
```

This keeps the Trigger lightweight and follows Salesforce best practices.

---




---

# 🧪 Anonymous Apex Testing

The trigger was tested using **Anonymous Apex**.

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

# 📸 Test Result

<img width="1413" height="609" alt="Screenshot 2026-08-04 151327" src="https://github.com/user-attachments/assets/23a957ac-f68c-46b0-88d9-7cac5d379ff2" />


---

# 📚 What I Learned

During this sprint, I gained practical experience with:

- Apex Trigger Handler Pattern
- Salesforce Bulkification
- Governor Limits
- Trigger.new and Trigger.oldMap
- Bulk SOQL Queries
- Collections (List, Set, Map)
- Bulk-Safe Trigger Design
- Salesforce Trigger Best Practices

---

# 🎯 Key Highlights

✔ Trigger Handler Pattern

✔ Bulk-Safe Apex Trigger

✔ Bulk SOQL Queries

✔ No SOQL Inside Loops

✔ No DML Inside Loops

✔ Duplicate Application Prevention

✔ CGPA Validation

✔ Deadline Validation

✔ Automatic Default Status Assignment

✔ Efficient Processing of Multiple Records

---

# 🏁 Conclusion

This project demonstrates the implementation of a scalable and bulk-safe Apex Trigger using the **Trigger Handler Pattern**. By applying Salesforce Bulkification techniques such as **Sets**, **Maps**, **Bulk SOQL**, and **collection-based processing**, the solution efficiently handles multiple records while staying within Salesforce Governor Limits and following industry best practices.

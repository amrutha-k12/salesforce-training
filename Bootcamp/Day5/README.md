# 🚀 Salesforce Training – Day 5
## Building Business Logic with Apex

> **Project:** Placement Management System  
> **Focus:** Implementing business logic using Apex Service Classes

---

# 📌 Project Overview

In this assignment, I implemented the business logic for the **Placement Management System** using Apex. Instead of placing all logic inside triggers or the user interface, I created a dedicated **ApplicationService** class to manage the complete student job application process.

The service validates business rules, prevents duplicate applications, checks student eligibility based on CGPA, creates application records, and returns appropriate success or error messages.

---

# 🎯 Learning Objectives

After completing this assignment, I was able to:

- Design a Service Layer using Apex
- Implement business logic independently from the UI
- Process student job applications through Apex methods
- Validate business rules before saving records
- Perform SOQL queries and DML operations
- Handle exceptions using try-catch blocks
- Build maintainable and reusable Apex code

---

# 🛠️ Features Implemented

### 📥 Application Submission

- Created a service class named **ApplicationService**
- Developed the `submitApplication()` method
- Accepted Student ID and Job ID as inputs

---

### 🚫 Duplicate Application Check

Before creating a new application, the system verifies whether the student has already applied for the same job.

**Result**

- Duplicate application → Rejected
- New application → Continue processing

---

### 🎓 Eligibility Validation

The application is validated by comparing:

- Student CGPA
- Job Minimum CGPA

If the student's CGPA is lower than the required value, the application is rejected with an informative message.

---

### 💾 Record Creation

When all validations pass:

- A new **Application** record is created
- Application Date is automatically assigned
- Record is inserted using Apex DML

---

### ⚠️ Exception Handling

The insert operation is enclosed inside a `try-catch` block to ensure any DML errors are handled gracefully and meaningful feedback is returned.

---

# 🔄 Business Workflow

```text
Student Applies
       │
       ▼
Check Duplicate Application
       │
       ▼
Validate CGPA Eligibility
       │
       ▼
Create Application Record
       │
       ▼
Insert into Salesforce
       │
       ▼
Return Success / Error Message
```

---

# 📋 Business Rules

✔ A student can apply only once for the same job.

✔ Student CGPA must satisfy the minimum CGPA requirement.

✔ Applications are saved only after successful validation.

✔ Proper success and failure messages are returned after processing.

---

# 🧠 Apex Concepts Covered

- Apex Classes
- Static Methods
- Method Parameters
- SOQL Queries
- DML Operations
- Conditional Statements
- Lists
- Exception Handling
- Business Logic
- Service Layer Architecture

---

# 📂 Project Structure

```text
force-app/
└── main/
    └── default/
        └── classes/
            ├── ApplicationService.cls
            
```

---

# 💻 ApplicationService.cls

```apex
public with sharing class ApplicationService {

    public static String submitApplication(Id studentId, Id jobId) {

        List<Application__c> existingApplications = [
            SELECT Id
            FROM Application__c
            WHERE Student__c = :studentId
            AND Job__c = :jobId
            LIMIT 1
        ];

        if (!existingApplications.isEmpty()) {
            return 'Duplicate application found. You have already applied for this job.';
        }

        Student__c student = [
            SELECT CGPA__c
            FROM Student__c
            WHERE Id = :studentId
        ];

        Job__c job = [
            SELECT Minimum_CGPA__c
            FROM Job__c
            WHERE Id = :jobId
        ];

        if (student.CGPA__c < job.Minimum_CGPA__c) {
            return 'Application rejected. Minimum CGPA requirement not satisfied.';
        }

        Application__c application = new Application__c();

        application.Student__c = studentId;
        application.Job__c = jobId;
        application.Application_Date__c = Date.today();

        try {
            insert application;
            return 'Application submitted successfully.';
        }
        catch (DmlException e) {
            return 'Application could not be submitted. ' + e.getMessage();
        }
    }
}
```

---

# 📸 Output

## Execute Anonymous Window


<img width="940" height="317" alt="Execute Anonymous" src="https://github.com/user-attachments/assets/4c4cf283-9b31-4b76-a89a-d598388adfcb"/>

---

## Debug Log



<img width="940" height="168" alt="Debug Log" src="https://github.com/user-attachments/assets/f8795a92-bf08-4e45-aba4-a2a2dd9b4ab3"/>

---

# 📖 Key Takeaways

This assignment helped me understand how enterprise applications separate business logic into reusable service classes instead of mixing it with database operations or the user interface.

I gained practical experience in:

- Designing Apex service classes
- Applying business rule validations
- Using SOQL for data retrieval
- Performing DML operations
- Preventing duplicate records
- Validating eligibility conditions
- Handling exceptions effectively
- Writing clean and maintainable Apex code

---

# 🛠️ Technologies & Tools

| Technology | Purpose |
|------------|---------|
| Salesforce Platform | CRM Development |
| Apex | Business Logic |
| SOQL | Data Retrieval |
| DML | Record Operations |
| VS Code (Salesforce DX) | Development |
| Developer Console | Testing & Debugging |

---

# 🎯 Outcome

Successfully implemented an **Application Service** that processes student job applications by validating duplicate entries, checking CGPA eligibility, creating application records, and handling errors efficiently. This assignment strengthened my understanding of Apex business logic and enterprise application design principles.

---

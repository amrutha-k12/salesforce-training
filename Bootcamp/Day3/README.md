# Salesforce Bootcamp – Day 3

# Placement Cell Automation using Salesforce Flow

This project showcases how Salesforce automation can simplify the Placement Cell application process by leveraging **Record-Triggered Flows**, **Validation Rules**, and **Apex Triggers** where declarative tools are insufficient.

The implementation follows Salesforce's recommended **Clicks Before Code** methodology, using Flow wherever possible and relying on Apex only for advanced business validations.

---

# Tech Stack

- Salesforce Flow Builder
- Record-Triggered Flow
- Validation Rules
- Apex Trigger
- Custom Objects
- Lookup Relationships

---

# Data Model

## Student__c

| Field | Data Type |
|---------|-----------|
| Name | Text |
| CGPA__c | Number |

---

## Job__c

| Field | Data Type |
|---------|-----------|
| Name | Text |
| Minimum_CGPA__c | Number |
| Last_Date__c | Date |

---

## Application__c

| Field | Data Type |
|---------|-----------|
| Student__c | Lookup(Student__c) |
| Job__c | Lookup(Job__c) |
| Application_Date__c | Date |
| Status__c | Picklist |

---

# Automation Implemented

| Business Requirement | Implementation |
|----------------------|----------------|
| Automatically set Application Date | Before Save Flow |
| Send confirmation email | After Save Flow |

---

# Before Save Record-Triggered Flow

## Objective

Whenever a new **Application** record is created, the system should automatically populate the **Application Date**.

---

## Flow Configuration

**Flow Type**

- Before Save Record-Triggered Flow

**Trigger**

- When a new Application record is created

---

## Process

```text
Application Record Created
            │
            ▼
Assign TODAY() to Application_Date__c
            │
            ▼
Save Record
```

---

## Flow Diagram

<img width="567" height="725" alt="image" src="https://github.com/user-attachments/assets/612cd3f3-66c5-44c0-bb80-97c598692c21" />


---

## Start Configuration

<img width="975" height="542" alt="image" src="https://github.com/user-attachments/assets/a375ae1a-7543-4dc6-9e19-1da277f5381e" />

<img width="975" height="467" alt="image" src="https://github.com/user-attachments/assets/cc69669f-7395-4334-9aee-ae3b301d372d" />


---

## Assignment Configuration

<img width="975" height="473" alt="image" src="https://github.com/user-attachments/assets/35741359-1bef-48c7-a123-8617ba119f3a" />


---

# After Save Record-Triggered Flow

## Objective

Automatically notify the Placement Officer after an application is successfully submitted.

---

## Flow Configuration

**Flow Type**

- After Save Record-Triggered Flow

**Trigger**

- After Application record creation

---

## Process

```text
Application Created
        │
        ▼
Prepare Email Details
        │
        ▼
Send Email
```

---

## Flow Diagram

<img width="500" height="760" alt="image" src="https://github.com/user-attachments/assets/c9648c39-27ca-4577-be45-2d6ebaaf6a04" />

---

## Start Configuration

<img width="975" height="476" alt="image" src="https://github.com/user-attachments/assets/cc99e8cb-2f4e-4228-8ced-627ac4466528" />


---

## Email Assignment

<img width="944" height="358" alt="image" src="https://github.com/user-attachments/assets/d95991ac-d44a-45e5-b358-f9d91a84704f" />


---

## Send Email Action

<img width="975" height="466" alt="image" src="https://github.com/user-attachments/assets/6fdc6738-0a93-4d29-9ea7-af9fe027ac97" />


---

# Execution

<img width="975" height="356" alt="image" src="https://github.com/user-attachments/assets/09abc168-48cb-4d1f-988c-28d9f4c0f86e" />




---

# Success Message

## Expected Requirement

Display a success message once the Application is submitted.

---

## Current Status

**Not Supported with Record-Triggered Flow**

---

### Explanation

Record-Triggered Flows execute entirely in the background without any interaction with the user interface.

Because of this limitation, they **cannot display custom success messages or confirmation screens**.

Only **Screen Flows** provide Screen elements capable of displaying messages such as:

```
Application Submitted Successfully!
```

---

### Current Behaviour

The automation successfully performs all background tasks:

- Sets the Application Date automatically.
- Sends confirmation email.
- Saves the record successfully.

The completion was validated through Flow execution logs and generated records.

---

# Validation Rules

Only validations suitable for declarative implementation were created as Validation Rules.

---

## Validation Rule

### Required Lookup Fields

Ensures every Application is linked with both a Student and a Job before saving.

### Formula

```text
OR(
    ISBLANK(Student__c),
    ISBLANK(Job__c)
)
```

### Error Message

```
Student and Job fields are mandatory.
```

---

# Business Rules Implemented Using Apex

Some validations require accessing multiple related records or querying existing data. These scenarios exceed the capabilities of Validation Rules.

| Validation | Implementation |
|------------|----------------|
| Prevent duplicate applications | Apex Trigger |
| Validate Student CGPA against Job requirement | Apex Trigger |
| Ensure Application Date is before Job Closing Date | Apex Trigger |

---
# Assignment Discussion

## 1. Which tasks were completed using Salesforce Flow?

The following business processes were automated using **Record-Triggered Flows**:

- Automatically populate the **Application Date** when a new Application record is created.
- Send a **confirmation email** to the Placement Officer after a successful application.
- Automatically **create an Offer Letter record** whenever an Application status changes to **Selected**.

---

## 2. What was implemented using Validation Rules?

Validation Rules were used for straightforward record-level validation to ensure essential information is entered before saving.

Implemented validation:

- Prevent saving an Application record if the **Student** or **Job** lookup fields are empty.

More advanced validations involving related records were handled through Apex.

---

## 3. Which requirements required Apex?

The following business rules were implemented using **Apex Triggers** because they involve cross-record validation and complex logic:

- Prevent duplicate job applications from the same student.
- Verify that the student's **CGPA** satisfies the minimum CGPA required for the selected job.
- Ensure the **Application Date** does not exceed the job's closing date.

---

## 4. Why were these implementation choices made?

The project was designed according to Salesforce's **Clicks Before Code** best practice.

- **Record-Triggered Flows** were selected for declarative automation tasks such as field updates, email notifications, and automatic record creation.
- **Validation Rules** were used for simple input validation that can be enforced without writing code.
- **Apex Triggers** were used only where declarative tools were insufficient, particularly for complex business rules involving related objects, duplicate detection, and cross-object comparisons.

---


# Project Outcome

The Placement Cell Automation successfully reduces manual effort during the application process.

Key achievements include:

- Automatic population of application details
- Email notification after submission
- Validation of mandatory inputs
- Enforcement of business rules through Apex
- Separation of declarative automation and programmatic logic following Salesforce best practices

---

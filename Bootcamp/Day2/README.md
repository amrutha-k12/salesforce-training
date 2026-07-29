# Salesforce Interview Readiness Bootcamp – Day 2
## Apex Triggers & Governor Limits

### Objective
This assignment focuses on understanding Apex Triggers, Governor Limits, Bulkification, and implementing business requirements using Apex in Salesforce.

---

## Business Scenario

The Placement Cell wants to automate the student job application process.

The trigger performs the following tasks:

- Prevents duplicate job applications.
- Validates whether the student's CGPA meets the job's minimum CGPA.
- Prevents applications after the job's last application date.
- Automatically sets the application status to **Applied**.
- Displays meaningful error messages when validation fails.

---

## Technologies Used

- Salesforce Apex
- Apex Triggers
- SOQL
- Trigger Handler Pattern
- Lists, Sets, and Maps
- Salesforce Developer Org

---

## Trigger Functionality

- Before Insert Trigger
- Duplicate Application Validation
- Student Eligibility (CGPA) Validation
- Job Last Date Validation
- Default Status Assignment
- Bulkified Code

---

## Bulkification

The trigger is written using Salesforce best practices.

- SOQL queries are written outside loops.
- No DML statements are used inside loops.
- Sets are used to collect unique Student and Job IDs.
- Maps are used for efficient record lookup.
- Lists are used to store queried records.
- The trigger can process multiple records in a single transaction without exceeding Governor Limits.

---

## Test Scenarios

### Successful Application
- Student CGPA is greater than or equal to the Job's minimum CGPA.
- Application is submitted before the last date.
- Student has not applied previously.
- Status is automatically set to **Applied**.

  <img width="656" height="356" alt="image" src="https://github.com/user-attachments/assets/c5df090e-9bf3-4428-8f81-595996b511ba" />


### Failed Test Cases
----

**Duplicate Application**


<img width="505" height="380" alt="Screenshot 2026-07-29 103935" src="https://github.com/user-attachments/assets/35b8146b-ca1b-4980-a4d7-4127911025ef" />

---
**Low CGPA**


<img width="489" height="394" alt="Screenshot 2026-07-29 104221" src="https://github.com/user-attachments/assets/e712799a-6ac4-42e6-903a-c8ba3242ca63" />




---
**Last Date Expired**



<img width="476" height="389" alt="Screenshot 2026-07-29 104337" src="https://github.com/user-attachments/assets/88b811da-fc6c-46c4-a4df-7f008fed1f0d" />



---

# README Questions

## 1. Why did you choose a Trigger?

I chose an Apex Trigger because the business requirements involve validating and processing data automatically whenever a new Application record is created. A Trigger ensures these validations happen before the record is saved.

---

## 2. Why Before Insert?

I used a **Before Insert Trigger** because:

- It validates records before they are saved.
- It allows field values such as **Status** to be updated before insertion.
- It prevents invalid records from being inserted using `addError()`.
- It improves performance since no additional update operation is required.

---

## 3. How did you bulkify your code?

I bulkified the trigger by following Salesforce best practices:

- Used **Sets** to collect unique Student and Job IDs.
- Queried related records only once using SOQL.
- Used **Maps** for efficient record lookup.
- Avoided SOQL queries inside loops.
- Avoided DML statements inside loops.
- Wrote the trigger to process multiple records in a single transaction.

---

## 4. What did you learn today?

From this assignment, I learned:

- How Apex Triggers work.
- The difference between Before and After Triggers.
- How to use Trigger Context Variables.
- Why Governor Limits are important.
- How to bulkify Apex code using Lists, Sets, and Maps.
- Why SOQL and DML should not be written inside loops.
- How to implement real-world business requirements using Apex Triggers.
- How to organize trigger logic using the Trigger Handler pattern.

---


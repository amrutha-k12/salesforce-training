# Salesforce Basics and College Admission App

## 1. What is Salesforce Platform?

Salesforce Platform is a cloud-based platform used to build and manage business applications.

It helps companies:

* Store customer data
* Manage sales and services
* Automate business processes
* Create custom applications
* Generate reports and dashboards

Salesforce works completely on the cloud, so users can access it from anywhere using the internet.

### Simple Example

A college can use Salesforce to:

* Manage student admissions
* Store student records
* Track fee payments
* Send notifications automatically

---

# 2. Explain:

## App

An App in Salesforce is a collection of related tabs, objects, and features grouped together for a specific purpose.

### Example

College Admission App

It may contain:

* Students
* Courses
* Admissions
* Payments
* Reports

Apps help users work easily in one place.

---

## Object

An Object is a database table used to store information.

It contains:

* Records (rows)
* Fields (columns)

### Example

Student Object

| Student Name | Roll Number | Course |
| ------------ | ----------- | ------ |
| Amrutha        | 10         | BTech    |


---

## Tab

A Tab is used to access objects and features in Salesforce.

### Example Tabs

* Students Tab
* Courses Tab
* Payments Tab

Tabs help users quickly open and manage records.

---

# 3. Difference: Configuration vs Coding

| Configuration                  | Coding                             |
| ------------------------------ | ---------------------------------- |
| No programming required        | Requires programming               |
| Uses built-in Salesforce tools | Uses Apex and Lightning Components |
| Faster and easier              | More flexible and powerful         |
| Best for simple tasks          | Best for complex logic             |
| Used by admins                 | Used by developers                 |

---

## When to Use Configuration

Use configuration when the requirement is simple.

### Examples

1. Creating validation rules
2. Sending automatic emails using Flow Builder

---

## When to Use Coding

Use coding when advanced functionality is needed.

### Examples

1. Payment gateway integration
2. Complex admission eligibility calculations

---

# 4. System Design

# App Name

## Smart College Admission Management System

---

# Objects Used in the App


### Account

Represents the college or institution.

### Contact

Represents students or parents.

### Lead

Represents students interested in admission.

### Opportunity

Represents students likely to confirm admission.

---

# Tabs Inside the App

* Students
* Courses
* Admissions
* Payments
* Reports
* Dashboards

---

# User Interaction

## Admission Staff

* Add student inquiries
* Verify documents
* Manage admissions

## Students

* Fill admission forms
* Upload documents
* Check admission status

## Faculty

* View student details
* Manage course information

## Management

* Monitor reports and dashboards
* Track admissions and fee collections

---

# Admission Process Flow

Student Inquiry
↓
Lead Created
↓
Student Registration
↓
Course Selection
↓
Admission Review
↓
Fee Payment
↓
Admission Confirmed

---
<img width="1914" height="1071" alt="image" src="https://github.com/user-attachments/assets/4a3475ff-31db-4317-a2af-f334eda695d4" />




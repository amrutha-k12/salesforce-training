# College Management System – Salesforce Concepts

## 1. Difference Between App, Object, Record, and Field

| Concept | Meaning                                                                         | Example in College Management System |
| ------- | ------------------------------------------------------------------------------- | ------------------------------------ |
| App     | A collection of related objects, tabs, and features used for a specific purpose | College Management App               |
| Object  | A database table that stores related data                                       | Student Object, Course Object        |
| Record  | A single entry inside an object                                                 | One student's details                |
| Field   | A single piece of information inside a record                                   | Student Name, Email, Age             |

---

# 2. Standard vs Custom Objects

| Standard Objects                         | Custom Objects                                   |
| ---------------------------------------- | ------------------------------------------------ |
| Pre-built objects provided by Salesforce | Objects created by users based on business needs |
| Already available in Salesforce          | Created manually                                 |
| Examples: Account, Contact, Opportunity  | Examples: Student, Faculty, Course               |
| Cannot be deleted                        | Can be modified or deleted                       |
| Used for common CRM processes            | Used for organization-specific requirements      |

---

# 3. College Data Model

## Objects

### Student

Stores student information.

**Fields:**

* Student ID
* First Name
* Last Name
* Email
* Phone Number
* Department
* Course

---

### Faculty

Stores faculty information.

**Fields:**

* Faculty ID
* Faculty Name
* Email
* Department
* Subject Specialization

---

### Course

Stores course details.

**Fields:**

* Course ID
* Course Name
* Total Seats
* Available Seats
* Assigned Faculty
* Department

---

### Department

Stores department information.

**Fields:**

* Department ID
* Department Name
* HOD Name

---

# Relationships

| Parent Object | Child Object | Relationship Type |
| ------------- | ------------ | ----------------- |
| Department    | Student      | One-to-Many       |
| Department    | Faculty      | One-to-Many       |
| Department    | Course       | One-to-Many       |
| Faculty       | Course       | One-to-Many       |
| Course        | Student      | One-to-Many       |

---

# Data Model Diagram

                              +----------------------+
                              |      Department      |
                              +----------------------+
                              | Department ID        |
                              | Department Name      |
                              | HOD Name             |
                              +----------------------+
                                  |      |      |
                 One-to-Many -----       |       ----- One-to-Many
                                  |      |      |
                                  |      |      |
                    +----------------+   |   +----------------+
                    |    Student     |   |   |    Faculty     |
                    +----------------+   |   +----------------+
                    | Student ID     |   |   | Faculty ID     |
                    | Student Name   |   |   | Faculty Name   |
                    | Email          |   |   | Email          |
                    | Phone Number   |   |   | Specialization |
                    | Course ID      |   |   +----------------+
                    | Department ID  |   |
                    +----------------+   |
                             |            |
                             |            |
                             |            |
                             |            |
                             |     One-to-Many
                             |            |
                             v            v
                      +------------------------+
                      |         Course         |
                      +------------------------+
                      | Course ID              |
                      | Course Name            |
                      | Total Seats            |
                      | Available Seats        |
                      | Faculty ID             |
                      | Department ID          |
                      +------------------------+

Relationships:

1 Department → Many Students  
1 Department → Many Faculty  
1 Department → Many Courses  
1 Faculty → Many Courses  
1 Course → Many Students
---

# 4. Formula Fields

## Full Name

### Formula

```text
First Name + " " + Last Name
```

### Explanation

Automatically combines first name and last name into a complete name.
This reduces manual work and keeps naming consistent.

---

## Remaining Seats

### Formula

```text
Total Seats - Enrolled Students
```

### Explanation

Automatically calculates how many seats are still available in a course.
This helps avoid admission mistakes and seat overbooking.

---

## Percentage

### Formula

```text
(Obtained Marks / Total Marks) * 100
```

### Explanation

Automatically calculates student percentage.
This improves accuracy and saves time during result preparation.

---

# 5. Validation Rules

## Email Cannot Be Empty

### Rule

Email field must contain a value.

### Explanation

Prevents incomplete student or faculty records and ensures communication is possible.

---

## Student Age Cannot Be Negative

### Rule

Age must be greater than 0.

### Explanation

Prevents invalid age values and maintains accurate student data.

---

## Course Seats Cannot Exceed Limit

### Rule

Enrolled students should not be greater than total seats.

### Explanation

Prevents overbooking of courses and maintains proper classroom capacity management.

---

# 6. Reflection – Why Structured Enterprise Data Matters

Structured enterprise data helps organizations store information in an organized and connected way. Instead of using random spreadsheets, companies use structured systems to improve efficiency, reduce errors, and manage large amounts of data easily.

In a college management system, structured data helps:

* Track students and faculty efficiently
* Connect departments with courses
* Generate reports quickly
* Improve data accuracy
* Avoid duplicate records
* Support automation and analytics

With structured relationships between objects, organizations can easily retrieve information, maintain consistency, and make better business decisions.

---

# College Management System – Salesforce Concepts

## 1. Difference Between App, Object, Record, and Field

| Concept | Meaning                                                                         | Example in College Management System |
| ------- | ------------------------------------------------------------------------------- | ------------------------------------ |
| App     | A collection of related objects, tabs, and features used for a specific purpose | College Management App               |
| Object  | A database table that stores related data                                       | Student Object, Course Object        |
| Record  | A single entry inside an object                                                 | One student's details                |
| Field   | A single piece of information inside a record                                   | Student Name, Email, Age             |

---

# 2. Standard vs Custom Objects

| Standard Objects                         | Custom Objects                                   |
| ---------------------------------------- | ------------------------------------------------ |
| Pre-built objects provided by Salesforce | Objects created by users based on business needs |
| Already available in Salesforce          | Created manually                                 |
| Examples: Account, Contact, Opportunity  | Examples: Student, Faculty, Course               |
| Cannot be deleted                        | Can be modified or deleted                       |
| Used for common CRM processes            | Used for organization-specific requirements      |

---

# 3. College Data Model

## Objects

### Student

Stores student information.

**Fields:**

* Student ID
* First Name
* Last Name
* Email
* Phone Number
* Department
* Course

---

### Faculty

Stores faculty information.

**Fields:**

* Faculty ID
* Faculty Name
* Email
* Department
* Subject Specialization

---

### Course

Stores course details.

**Fields:**

* Course ID
* Course Name
* Total Seats
* Available Seats
* Assigned Faculty
* Department

---

### Department

Stores department information.

**Fields:**

* Department ID
* Department Name
* HOD Name

---

# Relationships

| Parent Object | Child Object | Relationship Type |
| ------------- | ------------ | ----------------- |
| Department    | Student      | One-to-Many       |
| Department    | Faculty      | One-to-Many       |
| Department    | Course       | One-to-Many       |
| Faculty       | Course       | One-to-Many       |
| Course        | Student      | One-to-Many       |

---

# Data Model Diagram

                              +----------------------+
                              |      Department      |
                              +----------------------+
                              | Department ID        |
                              | Department Name      |
                              | HOD Name             |
                              +----------------------+
                                  |      |      |
                 One-to-Many -----       |       ----- One-to-Many
                                  |      |      |
                                  |      |      |
                    +----------------+   |   +----------------+
                    |    Student     |   |   |    Faculty     |
                    +----------------+   |   +----------------+
                    | Student ID     |   |   | Faculty ID     |
                    | Student Name   |   |   | Faculty Name   |
                    | Email          |   |   | Email          |
                    | Phone Number   |   |   | Specialization |
                    | Course ID      |   |   +----------------+
                    | Department ID  |   |
                    +----------------+   |
                             |            |
                             |            |
                             |            |
                             |            |
                             |     One-to-Many
                             |            |
                             v            v
                      +------------------------+
                      |         Course         |
                      +------------------------+
                      | Course ID              |
                      | Course Name            |
                      | Total Seats            |
                      | Available Seats        |
                      | Faculty ID             |
                      | Department ID          |
                      +------------------------+

Relationships:

1 Department → Many Students  
1 Department → Many Faculty  
1 Department → Many Courses  
1 Faculty → Many Courses  
1 Course → Many Students
---

# 4. Formula Fields

## Full Name

### Formula

```text
First Name + " " + Last Name
```

### Explanation

Automatically combines first name and last name into a complete name.
This reduces manual work and keeps naming consistent.

---

## Remaining Seats

### Formula

```text
Total Seats - Enrolled Students
```

### Explanation

Automatically calculates how many seats are still available in a course.
This helps avoid admission mistakes and seat overbooking.

---

## Percentage

### Formula

```text
(Obtained Marks / Total Marks) * 100
```

### Explanation

Automatically calculates student percentage.
This improves accuracy and saves time during result preparation.

---

# 5. Validation Rules

## Email Cannot Be Empty

### Rule

Email field must contain a value.

### Explanation

Prevents incomplete student or faculty records and ensures communication is possible.

---

## Student Age Cannot Be Negative

### Rule

Age must be greater than 0.

### Explanation

Prevents invalid age values and maintains accurate student data.

---

## Course Seats Cannot Exceed Limit

### Rule

Enrolled students should not be greater than total seats.

### Explanation

Prevents overbooking of courses and maintains proper classroom capacity management.

---

# 6. Reflection – Why Structured Enterprise Data Matters

Structured enterprise data helps organizations store information in an organized and connected way. Instead of using random spreadsheets, companies use structured systems to improve efficiency, reduce errors, and manage large amounts of data easily.

In a college management system, structured data helps:

* Track students and faculty efficiently
* Connect departments with courses
* Generate reports quickly
* Improve data accuracy
* Avoid duplicate records
* Support automation and analytics

With structured relationships between objects, organizations can easily retrieve information, maintain consistency, and make better business decisions.

---

<img width="1916" height="1015" alt="Screenshot 2026-05-11 154818" src="https://github.com/user-attachments/assets/26ad830a-b2d6-4f22-b989-5f8ba5e50850" />

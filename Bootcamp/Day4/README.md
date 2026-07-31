# Salesforce Training – Day 4
## Lightning Web Components (LWC)

## 📌 Project Overview

This repository contains the hands-on activities completed during **Salesforce Training Day 4**, where I learned the fundamentals of **Lightning Web Components (LWC)**.

The project demonstrates:
- Creating Lightning Web Components
- Deploying components to a Lightning Page
- Data Binding
- Event Handling
- Dynamic UI updates using JavaScript

---

# 🛠 Activities Completed

## Activity 1 – Placement Home

Created a Lightning Web Component that displays:

> **Welcome to Vishnu Placement Portal**

---

## Activity 2 – Student Details

Created JavaScript variables for:
- Student Name
- Roll Number
- Department

Displayed the values on the Lightning page using data binding.

---

## Activity 3 – Welcome Message

Created a button labeled:

**Show Welcome Message**

After clicking the button, the following message is displayed:

> Welcome to Salesforce Development.

---

## Activity 4 – Application Status

Initially the page displays:

> Status : Not Applied

When the **Apply** button is clicked, the status changes to:

> Status : Applied

This functionality was implemented using only JavaScript without Apex or Salesforce Database.

---

# 📂 Project Structure

```
force-app
└── main
    └── default
        └── lwc
            ├── placementHome
            ├── welcomeMessage
            └── applicationStatus
```

---

# 📸 Screenshots

## Activity 1

<img width="975" height="456" alt="image" src="https://github.com/user-attachments/assets/8230e85e-3779-4aa0-91b5-390f93e805f6" />



---

## Activity 2

<img width="975" height="385" alt="image" src="https://github.com/user-attachments/assets/77617f56-1d93-4bb8-ae8d-ab0b111c4211" />


---

## Activity 3

<img width="975" height="511" alt="image" src="https://github.com/user-attachments/assets/c8e9cad3-0db8-4d85-9280-e7e823fe24b6" />

<img width="975" height="585" alt="image" src="https://github.com/user-attachments/assets/ccd11676-ef44-4f8d-b79c-7953168b69d6" />

---

## Activity 4

<img width="975" height="734" alt="image" src="https://github.com/user-attachments/assets/57d5d05a-d608-423c-818c-c71919d90b96" />

<img width="975" height="791" alt="image" src="https://github.com/user-attachments/assets/adac73b8-dd76-4a5f-a137-13934f0531e5" />


---

# ❓ README Questions

## 1. What is LWC?

Lightning Web Components (LWC) is Salesforce's modern UI framework used to build reusable and high-performance web components. It is developed using HTML, JavaScript, CSS, and XML, making it easy to build interactive Salesforce applications.

---

## 2. What did you build?

During this training, I built the following Lightning Web Components:

- Placement Home Component
- Student Details Component
- Welcome Message Component
- Application Status Component

These components demonstrate basic UI development, data binding, and event handling.

---

## 3. Which file contains HTML?

The **`.html`** file contains the user interface of the Lightning Web Component. It defines the layout, text, buttons, and other visual elements displayed on the page.

Example:

```
componentName.html
```

---

## 4. Which file contains JavaScript?

The **`.js`** file contains the logic of the component. It manages variables, handles events such as button clicks, updates data dynamically, and controls the behavior of the component.

Example:

```
componentName.js
```

---

## 5. What did you learn today?

Today's session helped me understand:

- Introduction to Lightning Web Components
- LWC Architecture
- Component Structure
- HTML and JavaScript in LWC
- Meta XML Configuration
- Deploying LWCs
- Data Binding
- Button Click Events
- Dynamic User Interface Updates
- Basic understanding of how LWC interacts with Apex in Salesforce

---

# 🚀 Technologies Used

- Salesforce Developer Org
- Lightning Web Components (LWC)
- Salesforce CLI
- Visual Studio Code
- HTML
- JavaScript
- XML

---

# 📚 Conclusion

This training provided a strong foundation in Lightning Web Components by building interactive components and understanding how the presentation layer of Salesforce applications is developed. These concepts will be useful for building dynamic applications and integrating them with Apex in future sessions.

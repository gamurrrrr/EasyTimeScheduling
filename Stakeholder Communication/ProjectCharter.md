
# P2 Project Charter

## 1. Identification:
Project Name - EasyTime, a business scheduling web application
Current Version Charter Date - 19 September 2025
Sponsor - UBCO, Dr Patricia Lasserre
Project Manager - Tanhab Hossain Sarkar (TA Lab 03)
Development Team - Gamuchirai Mhere, Spencer Stephen, Benedict Astan, Serena Chen


## 2. Overview of the Project
Our project is a scheduling app for small businesses that will simplify the scheduling process for both employers and employees. Smaller companies often still use physical schedules and timesheets, which can easily lead to mistakes or inefficiencies. Switching to this web app will make sure that all different aspects of schedule management are condensed in one easy-to-use place.


## 3. Project Purpose
The purpose of this project is to develop a comprehensive staff scheduling and time-tracking web application that directly addresses the needs of small businesses.
Develop a staff scheduling and clock-in/out web app for small local businesses: The core objective is to create a web-based platform that replaces manual, paper-based systems. This provides a centralized and accessible solution for all scheduling and time-tracking needs.
Simplify schedule creation for employers and managers: The app will feature an intuitive interface that allows managers to quickly build, adjust, and distribute work schedules. This will drastically reduce the time and effort currently spent on manual scheduling.
Provide reliable scheduling with shift reminders and clock-in tracking: The system will automatically notify employees of their upcoming shifts, reducing missed shifts and improving punctuality. The integrated clock-in/out feature will accurately track employee hours.
Reduce scheduling conflicts and missed shifts: By allowing managers to easily view employee availability and providing automated reminders, the app will minimize scheduling errors and communication breakdowns that lead to conflicts.
Give employers and employees a simple, direct line of communication: The app will include a basic messaging feature that facilitates quick communication between managers and their teams.
Allow employees to update availability as needed: Employees will have the ability to submit their availability preferences directly through the app, giving managers the real-time information they need to create fair and accurate schedules.
Provide immediate payroll estimates: By automatically calculating total hours worked based on clock-in/out data, the app will generate a real-time summary of hours for each employee, simplifying the payroll process for managers.


## 4. Business Needs or Opportunities
The current process for managing employee schedules in many small businesses is inefficient and prone to error.

Problem: Lots of small businesses still rely on manual, paper-based timesheets and schedules. This method is time-consuming for managers to create and update, and it makes it difficult for employees to access their schedules or track their hours. This process is also prone to human error, leading to inaccuracies in payroll and scheduling conflicts.
Solution/Opportunity: There is a clear opportunity to develop a web-based application that can address these inefficiencies. This app would simplify the scheduling process by digitizing it, making it accessible from anywhere and reducing the administrative burden on employers and managers.
Expected Benefits: After the initial setup, this application would provide a significant return on investment by reducing the time spent on creating and maintaining paper schedules. It would also improve accuracy, streamline communication, and provide a modern, efficient solution for both employers and their hourly employees

## 5. Scope
In-Scope:
Calendar page
Separate user authentication for employers and employees
Menus for employers to add/remove shifts
Menu to request shift changes between employees
Menu for employees to indicate specific shift availability in the future.
Home page that lists the user’s upcoming shifts, employee birthdays, and provides a button to “clock in” to work
Simple chat page for direct communication between employees and employers
Pay estimate for employees based on their hourly wages and upcoming shifts
Modern, corporate-friendly UI that avoids unnecessary stylization
For employers/managers: export weekly summaries into a spreadsheet
For employees: convert the schedule into a CSV or ICS file for calendar integration
Collaborative task board and personal to-do lists
Page for employees to request and see available sick leave
Option for employees to export past timesheets listing their hours worked (weekly)


### Out-of-Scope:
Accounting/banking features: No financial transactions or payroll, calculations only.
Mobile app compatibility: No native app for iOS or Android. It's a web-based solution.
Robust chatting interface: No built-in chat. The project will use an external platform like Discord.
Employee conflict forms: No features for handling sensitive HR issues or conflict reports.
Specific job/project management tools: No features for tracking deadlines or project timelines.


## 6. Key Stakeholder Summary
Businesses (aimed at smaller companies with ≤ 20 employees): These are the end-users who will adopt and use our final product. Their needs and feedback are crucial to the project's success.
Business Owners/Employers: The decision-makers who care about the product's return on investment and how it addresses a key business problem (scheduling)
Managers: Need the product to streamline daily operations and improve their team's efficiency and productivity.
HR Representatives: Focus is on compliance and how the product integrates with existing HR processes for things like payroll and employee records.
Hourly employees: The direct users of the system. Their priority is a simple, intuitive interface that makes their daily tasks easier.
Development team: This group is responsible for building and testing the product based on project requirements:
2 weekly check-in meetings: These meetings are for tracking progress, discussing issues, and staying aligned on project goals.
Discord chat is the main form of communication: This is the primary channel for day-to-day collaboration, quick questions, and updates outside of scheduled meetings.
5 hours of work per week expected: This is the fixed time commitment for          team members to work on the project.
Banks: A potential stakeholder if the product handles financial transactions. They are interested in data security and regulatory compliance.
Regulatory/Compliance Bodies: A potential stakeholder of the product handles payroll or compliance features, businesses must follow labor laws on hours, breaks, and 
Sponsor (UBCO and Dr Patricia Lasserre): They provide the funding, resources, and strategic guidance for the project, ensuring it aligns with academic and research goals.
Project Manager (Tanhab): responsible for leading the team, managing the timeline, and ensuring all project objectives are met.

## 7. User Profiles
Employees: can access features such as viewing their shifts, viewing all shifts, editing availability, send messages to other employees, request shift changes or swaps with other employees, view estimated individual payroll for the week
Supervisors/Managers: can edit employee schedules, accept or deny shift change requests, approve payroll for all employees, as well as the basic features the employees can access.
Business owners: all basic features plus the added ability to see weekly business budget based on total hours of all employees
HR - can approve sick leave requests put in by employees and managers as well as view and change shifts subject to manager or supervisor approval


## 8.  Project Milestones


Week:
1
2
3
4
5
6
7
8
Milestone:
Prototype Development
Prototype Development
Prototype Development
Prototype Testing
Polished Product Development
Polished Product Development
Final Testing
Publishing




## 9. Major Deliverables

Completion and upload of the basic functional website. This will contain a calendar view as well as a way to add shifts for employees
Completion and integration of user authentication into the website. This will allow shifts to be added for employees.
Full integration of all multi-user features, such as shift change requests and the chat page.
Fully completed site with finished design by the first week of December.
Documentation page for users or FAQ/help page

## 10. Assumptions
The business has reliable internet service.
Employees have basic computer knowledge
The business has modern computers and hardware
The business works on a shift-based system instead of a salaried system.


## 11. Constraints
Only 4 developers to cover all aspects of the application
Time constraint: Only 8 weeks to provide a working product
The application must be web-based, not downloadable
Limited data available; all data is fabricated for demonstration
Limited budget - $3400 total

## 12. Logistics
Developer salary: $20 per hour
Hours per week: 3-5 hours, 2 meetings per week (in-lab and online)
Budget per week: $20 * 5 hours/week * 4 employees = $400/week
Software and equipment costs - $200 total (includes web hosting, software licenses, and internet service)
Total budget: $400 * 8 weeks + $200  = $3400 total


## 13. Tech Stack
Frontend:
HTML/CSS, potentially using Tailwind CSS
Backend:
TypeScript
Database: 
MySQL
Tools: 
Postman: APIs
Figma: front-end prototyping
Testing requirements:
Unit testing
Integration testing
Acceptance testing


## 14. Project Charter Acceptance

Dr. Patricia Lasserre :

Tanhab Hossain Sarker: 

Anuradha Herath: 

**Disclaimer**: AI was used in some parts of this document for structuring and conciseness

- IT Help Desk & Ticketing Management System

- Project Overview

The IT Help Desk & Ticketing Management System is a full-stack web application developed as part of the IDS Academy Full Stack Internship. The system enables employees to submit IT support requests while allowing administrators and support agents to manage, assign, track, and resolve tickets efficiently through a centralized dashboard.


- Features:

- JWT Authentication
- Role-Based Access Control
- Ticket Management (Create, Read, Update, Delete)
- Ticket Categories, Priorities & Statuses
- Ticket Assignment Workflow
- Internal Comments & Activity Logs
- Dashboard Analytics
- Notifications
- File Attachments


- Technology Stack:

-> Frontend
- React.js
- Vite
- Recharts

-> Backend
- Laravel
- JWT Authentication

-> Database
- SQLite


- Installation:

-> Clone Repository

bash
git clone https://github.com/RazanFarhat/Helpdesk-system.git


- Backend Setup:

bash
cd helpdesk-api1/helpdesk-api
composer install
php artisan key:generate
php artisan jwt:secret
php artisan migrate
php artisan serve


- Frontend Setup:

bash
cd helpdesk-frontend1/helpdesk-frontend
npm install
npm run dev



- Test User:

**Email**

test@example.com

**Password**

password


- Project Structure:

Helpdesk-system
│
├── helpdesk-api1
│   └── Laravel Backend
│
└── helpdesk-frontend1
    └── React Frontend


- Repository:

https://github.com/RazanFarhat/Helpdesk-system


- Authors: Razan Farhat and Jana Alayan

Developed during the IDS Academy Full Stack Internship.
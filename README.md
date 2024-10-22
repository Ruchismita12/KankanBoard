# KanbanBoard
Kanban Board Application
This project is an interactive Kanban board built using React.js that interacts with the API provided at https://api.quicksell.co/v1/internal/frontend-assignment. The application allows users to group tickets by status, assigned user, and priority. It also enables sorting tickets by priority and title.

Features
Dynamic Grouping: Users can group tickets by Status, User, or Priority using a "Display" button and dropdown menu.
Sorting Options: Tickets can be sorted by priority (in descending order) or by title (in ascending order).
Persistent View State: The application preserves the user's chosen group and sorting options across page reloads.
Responsive Design: The Kanban board adjusts dynamically to fit different screen sizes.

API
The application interacts with the following API endpoint:
https://api.quicksell.co/v1/internal/frontend-assignment

This API provides ticket data that includes attributes such as title, status, assigned user, and priority.

Priority Levels:
4 - Urgent
3 - High
2 - Medium
1 - Low
0 - No Priority

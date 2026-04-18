# Personal Portfolio Website – Assignment 3

## Project Description

This project is an advanced version of my personal portfolio website developed as part of Assignment 3.  
The goal of this assignment was to implement more complex functionality, integrate external APIs, apply advanced JavaScript concepts, and demonstrate problem-solving and debugging skills.

The website showcases my projects, allows user interaction, connects to external services, and demonstrates state management and performance optimization techniques.

---

## Features Implemented

### 1. External API Integration
The website connects to the GitHub API to dynamically fetch and display my public repositories.  
This makes the portfolio more interactive and keeps project information up-to-date.

Features:
- Fetch GitHub repositories using JavaScript
- Display repository name and description
- Provide direct links to repositories
- Show loading message while data is being fetched
- Display an error message if the API fails

---

### 2. Complex Logic

The Projects section includes multiple interactive controls:

**Search**
- Users can search for projects by typing keywords.

**Filter**
- Users can filter projects by category:
  - Web
  - Academic
  - All Projects

**Sort**
- Users can sort projects alphabetically:
  - A–Z
  - Z–A

These features demonstrate conditional logic, event handling, and dynamic DOM updates.

---

### 3. State Management

The application stores user preferences and data using localStorage.

Implemented features:

**Theme Persistence**
- Light/Dark mode is saved and restored after page refresh.

**Visitor Name Storage**
- Users can enter their name.
- The website remembers the name and displays a personalized greeting.

---

### 4. Form Validation

The contact form includes validation to ensure proper input.

Checks performed:

- Fields cannot be empty
- Email format must be valid
- Success message displayed after submission
- Form reset after successful submission

---

### 5. Performance Optimization

Several steps were taken to improve performance:

- Optimized image sizes
- Removed unused code
- Used efficient JavaScript event handling
- Organized CSS and JavaScript into separate files
- Ensured fast loading and smooth interaction

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- GitHub API
- LocalStorage
- Fetch API

---

## Project Structure


id-name-assignment3/
│
├── README.md
├── index.html
│
├── css/
│ └── styles.css
│
├── js/
│ └── script.js
│
├── assets/
│ └── images/
│
├── docs/
│ ├── ai-usage-report.md
│ └── technical-documentation.md
│
└── .gitignore


---

## setup instructions 

### Step 1 — Open Terminal

Navigate to the project folder:


cd id-name-assignment3


### Step 2 — Start Local Server

Run:


python -m http.server


### Step 3 — Open Browser

Visit:


http://localhost:8000


---

## Example User Interactions

Users can:

- Toggle dark and light mode
- Enter and save their name
- Search for projects
- Filter projects by category
- Sort projects alphabetically
- Submit the contact form
- View GitHub repositories dynamically

---

## AI Usage Summary

Artificial Intelligence tools were used to support development and learning throughout this assignment.

AI assisted with:

- Code generation
- Debugging
- JavaScript logic implementation
- UI/UX design improvements
- Documentation writing
- Problem-solving explanations

A detailed explanation of AI usage is provided in:


docs/ai-usage-report.md


---

## Future Improvements

Possible enhancements for future versions include:

- Adding more API integrations
- Implementing authentication
- Improving animations and UI design
- Adding a database for storing messages
- Deploying the site online

---

## Author

Reem Alghuzawi  
Software Engineering Student

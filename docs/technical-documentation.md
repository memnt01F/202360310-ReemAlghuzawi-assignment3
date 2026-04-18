# Technical Documentation – Assignment 3

## System Overview

This portfolio website is a client-side web application built using HTML, CSS, and JavaScript.  
It demonstrates advanced functionality including API integration, complex logic, state management, and performance optimization.

The application runs in the browser and interacts with external services using the Fetch API.  
User preferences and data are stored locally using localStorage to maintain state between sessions.

---

## Application Architecture

The project follows a simple front-end architecture with separated responsibilities:

HTML  
Defines the structure of the website.

CSS  
Controls styling, layout, responsiveness, and visual themes.

JavaScript  
Handles application logic, user interaction, data fetching, validation, and state management.

---

## File Structure


id-name-assignment3/
│
├── index.html
├── README.md
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

## Core Features Implementation

### 1. Theme Toggle (State Management)

The application allows users to switch between light and dark mode.  
The selected theme is stored using localStorage so the preference persists after page refresh.

Implementation:

JavaScript:


localStorage.setItem("theme", "dark")


On page load:


const savedTheme = localStorage.getItem("theme");


This ensures consistent user experience across sessions.

---

### 2. Visitor Name Storage (State Management)

Users can enter their name, which is saved in localStorage.  
When the page reloads, the application retrieves the stored name and displays a personalized greeting.

Workflow:

User enters name  
Click Save button  
Name stored in localStorage  
Greeting message updated  
Name restored after refresh

---

### 3. Contact Form Validation (Complex Logic)

The contact form validates user input before submission.

Validation rules:

- Name cannot be empty
- Email cannot be empty
- Message cannot be empty
- Email must match valid format

Email validation pattern:


/^[^\s@]+@[^\s@]+.[^\s@]+$/


If validation fails:

An error message is displayed.

If validation succeeds:

A success message is displayed and the form resets.

---

### 4. Project Search, Filter, and Sort (Complex Logic)

The Projects section supports dynamic filtering and sorting.

Search:

Users can type keywords to filter projects.

Filter:

Projects are filtered using a category value:


data-category="web"
data-category="academic"


Sort:

Projects are sorted alphabetically using:


localeCompare()


Example:


titleA.localeCompare(titleB)


This feature demonstrates conditional logic, array manipulation, and DOM updates.

---

### 5. GitHub API Integration

The application connects to the GitHub API to retrieve repository data.

API endpoint:


https://api.github.com/users/{username}/repos


JavaScript uses:


fetch()


Example:


fetch(https://api.github.com/users/${githubUsername}/repos)


The application:

- Sends a request to the GitHub API
- Receives repository data
- Displays repository information
- Handles errors gracefully

Error handling:

If the API fails:

A user-friendly error message is displayed.

---

## Error Handling

The application includes basic error handling mechanisms.

Examples:

API failure handling


if (!response.ok)
throw new Error("Failed to fetch repositories");


Form validation errors


Please fill in all fields.
Please enter a valid email address.


User feedback improves usability and reliability.

---

## State Management

The application manages state using localStorage.

Stored values:

Theme preference  
Visitor name  

Example:


localStorage.setItem("visitorName", name);


Benefits:

Persistent user settings  
Improved user experience  
Consistent behavior

---

## Performance Optimization

Performance improvements implemented:

Optimized image sizes  
Removed unused code  
Used efficient event listeners  
Reduced unnecessary DOM updates  
Organized CSS and JavaScript into separate files  

These steps improve loading speed and responsiveness.

---

## Browser Compatibility

The application works on:

- Google Chrome
- Microsoft Edge
- Firefox
- Safari

The website uses standard web technologies compatible with modern browsers.

---

## Security Considerations

Basic client-side security practices implemented:

Input validation  
Controlled DOM updates  
Safe handling of user input  
No sensitive data stored  

The application does not store passwords or personal data.

---

## Future Improvements

Potential enhancements include:

- Adding authentication system
- Connecting to a backend database
- Deploying the application online
- Adding more API integrations
- Improving UI animations

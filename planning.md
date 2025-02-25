# Planning for Ubercars app
A full-stack web application that allows users to manage car listings, view details. Users can sign up, log in, and interact with the cars, while the app includes basic CRUD functionality for car records.

# Flask/React CRUD App Project Planning

## Overview
Build a full-stack project with a Flask API secured with JWTs interacting with a PostgreSQL database, and a React front-end that uses AJAX to communicate with the back-end.

## Goals
- Develop a secure back-end API with Flask and JWTs.
- Implement a PostgreSQL database with full CRUD functionality.
- Build a responsive front-end application with React.
- Ensure the application is user-friendly and accessible.
- Deploy the application online for public use.

## Technical Requirements
- **Back-end:** Flask with JWT authentication.
- **Front-end:** React with AJAX for API communication.
- **Database:** PostgreSQL.
- **Authorization:** Implement JWT token-based authentication and authorization.
- **Deployment:** Make the project available online.

### Car Model

- model: String,
- year: Number,
- make: String





## References (Documentation used for quick access)

- Canvas Study Materials
- UNIT 4 Lecture and Support Recordings

## MVP Features
1. **Boilerplate Setup**
   - Basic project setup with routing and server configuration.

2. **Run the Server**
   - Make sure the Flask API server is running.

3. **Connect to MongoDB**
   - Set up the database connection.

4. **GET Route**
   - Create a basic route to display content.

---

## Stretch Features
- Add a User model for user authentication.
- Implement user registration and login functionality.

---

## Build Steps

### Day 1

- create repo
- Build and run the server
- build a landing page
- create a views directory
- create a basic route('/') and render index.ejs from views directory

- Adding a navigation link to the landing page
- Create a sign up page with a form
- Create a new user account through the sign up route
- Create a page with a form for users to sign in

### Day 2

- Implement sign in functionality with sessions
- Sign the user in
- Implement sign out functionality by deleting a session
- Sign the user out
- Working on CRUD routes


### Day 3

- Styling the application

### Day 4
- working on edit routes
- building a form for a new Car data entries


### Days 5-10
- CSS styling edits and changes:
  - Update page layouts for a more user-friendly interface.
  - Improve the look and feel of navigation bars and forms.
  - Add responsive design to ensure compatibility with mobile devices.
  - Enhance the visual presentation of car listings.
  - Final touches on color schemes, fonts, and overall theme consistency.

---

## References
- Canvas Study Materials
- UNIT 4 Lecture and Support Recordings


## Project Milestones
### Week 1: Planning and Setup
- [ ] **Day 1:** Define project scope and goals.
- [ ] **Day 2:** Set up repositories on GitHub.
- [ ] **Day 3:** Initialize Flask back-end and set up PostgreSQL database.
- [ ] **Day 4:** Initialize React front-end.
- [ ] **Day 5:** Plan API routes and database schema.
- [ ] **Day 6:** Research and set up JWT authentication.
- [ ] **Day 7:** Review progress and adjust plans.

### Week 2: Back-end Development
- [ ] **Day 8-9:** Implement user model and JWT authentication.
- [ ] **Day 10-11:** Create additional data entities and relationships.
- [ ] **Day 12-13:** Develop API routes for CRUD operations.
- [ ] **Day 14:** Test and debug API routes.

### Week 3: Front-end Development
- [ ] **Day 15-16:** Build user authentication forms (sign up, sign in).
- [ ] **Day 17-18:** Implement AJAX requests to interact with the back-end.
- [ ] **Day 19-20:** Build components for CRUD functionality.
- [ ] **Day 21:** Ensure front-end does not hold any secret keys.

### Week 4: UI/UX and Deployment
- [ ] **Day 22-23:** Apply consistent visual theme and style UI components.
- [ ] **Day 24-25:** Implement user authorization checks in the UI.
- [ ] **Day 26:** Conduct accessibility checks and make necessary adjustments.
- [ ] **Day 27:** Deploy the application online.
- [ ] **Day 28:** Final testing and adjustments.

## Code Convention
- Ensure proper organization and naming conventions.
- Avoid dead code and unnecessary comments.
- Follow RESTful routing conventions for back-end routes.
- Maintain proper indentation and code formatting.

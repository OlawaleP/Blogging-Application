# Blogging-Application
A simple blogging application developed using Node.js and Express. The application allows authors to create blogs and users to comment on them.

## Features
- Author can create blogs with a title and content.
- Users can comment on blogs.
- Blogs can have multiple comments.
- Optional features:
      - Co-authoring blogs.
      - Liking blogs (with likes count).
      - Tracking blog views (with views count).

## Technologies Used
- Node.js
- Express
- MongoDB Atlas

## Prerequisites
- Node.js and npm installed on your machine
- MongoDB Atlas account for database hosting


## Models
- The application consists of the following models with their attributes:

Author
- First Name 
- Last Name
- Email

Blog
- Title
- Content
- Author (reference to the Author model)

Comment
- Blog (reference to the Blog model)
- User Info


## API Endpoints
- The REST API provides the following endpoints:

- POST /signup: Create a new author/user
- POST /login: Sign in 
- GET /logout: logout user
- GET /user: user profile
- GET /post/all: Retrieve all blogs
- GET /post/:id: Retrieve a specific blog by ID
- POST /post/creste: Create a new blog
- PUT /post/update/:id: Update a specific blog by ID
- DELETE /post/delete/:id: Delete a specific blog by ID
- POST /post/comment/:id: Create a new comment

Optional Endpoints
- PUT /post/addlike/:id: Like a specific blog
- PUT /post/removelike/:id: Remove like


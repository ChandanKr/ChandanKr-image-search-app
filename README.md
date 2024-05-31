# Image Search App With React
### [Author: Chandan Kumar]

## Documentation / Steps to Develop: 

### Introduction
- This document provides a step-by-step guide on how to create an image search web application using React. The application will allow users to search for images, view image details, and navigate between different pages.

### Step 1: Set Up the Project
- Create React App: Use the create-react-app command to initialize a new React project.
  ```
  npx create-react-app image-search-app
  cd image-search-app
  ```

- Install Dependencies: Install necessary libraries including Material-UI, Axios, and React Router.
  ```
  npm install @mui/material @emotion/react @emotion/styled axios react-router-dom
  ```

### Step 2: Create Reusable Components
- Button Component: Create a custom MUI button component for reusability.
- TextField Component: Develop a custom MUI text field component for search input.
- ImageCard Component: Design a component to display image and description.
	
### Step 3: Theme Configuration
- Set Up Theme: Define a theme to maintain consistent typography across the application. 
    - Configure typography settings for headlines, titles, and descriptions.
	
### Step 4: Create Service Component for API Calls
- API Service Component: Utilize Axios to create a service component for making API calls. 
    - Implement functions to fetch images and image details from the API.
    - API URL used: “https://dummyjson.com/products” from DummyJSON.
	
### Step 5: Implement Routing
- Configure Routes: Use React Router to set up routes for the home page and image details page.
    - Define routes for "/" and "/details/".
	
### Step 6: Develop Home Page Component
- Display Images: Fetch and display images on the home page.
    - Use the TextField component for searching images.
    - Implement pagination for navigating between pages.
		
### Step 7: Create Details Page Component
- Show Image Details: Develop a page to display individual image details.
    - Fetch and display details of the selected image.
		
### Step 8: Deploy to Netlify
- Version Control: Create a repository on GitHub and push the code.
- Deploy on Netlify: Link the repository to Netlify for deployment.

### Conclusion
Following these steps will help us to create a responsive image search web application using React, Material-UI, and Axios. The application will feature routing, API integration, and reusable components, providing users with an efficient and user-friendly image search experience.


## Dependencies Used and Justification: 
```
npm install @mui/material @emotion/react @emotion/styled axios react-router-dom
```

### @mui/material
- **What it is:** This library provides ready-made components like buttons, text fields, and grids that we can use to build our web application's user interface.
- **Why we use it:** Instead of creating these components from scratch, we can use MUI components to speed up development and ensure consistent styling across our app. It saves us time and effort.

### @emotion/react and @emotion/styled
- **What they are:** These libraries help us style our components. They allow us to write CSS directly within our JavaScript code.
- **Why we use them:** They make it easy to create custom styles for our components without having to manage separate CSS files. This keeps our styles organized and scoped to specific components, reducing the risk of conflicts.

### axios
- **What it is:** Axios is a library for making HTTP requests from our application to external servers or APIs.
- **Why we use it:** Our image search app needs to fetch images from an external API. Axios simplifies this process by providing a clean and easy-to-use interface for sending and receiving data over the internet.

### react-router-dom
- **What it is:** This library helps us manage navigation within our React application by providing tools for creating different routes and handling URL changes.
- **Why we use it:** We want our image search app to have multiple pages, such as a home page for searching images and a details page for viewing individual image details. React Router enables us to create these different pages and manage navigation between them seamlessly.
	
### Conclusion
These dependencies are essential for building our image search web application. They provide tools and utilities that simplify development tasks, such as creating user interface components, styling them, fetching data from external sources, and managing navigation between different pages. By using these libraries, we can build our app more efficiently and effectively.
 

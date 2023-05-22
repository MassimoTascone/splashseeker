

# SplashSeeker

<div align="center">
  <a href="https://splashseeker.vercel.app">
    <img src="https://i.imgur.com/FdGhQFP.png" alt="Website Preview" width="600" height="400">
  </a>
 </div>
 
 <br/>

SplashSeeker is a frontend application developed as a learning project, using React and TypeScript. It allows users to explore and search for high-quality images from the Unsplash API, a popular platform for sharing photography.

I undertook the development of SplashSeeker as a learning project to enhance my skills in front-end web development using React and TypeScript. By building a real-world application that interacts with external APIs, I aimed to gain practical experience in working with data retrieval, user interface design, and state management. Through this project, I sought to deepen my understanding of React's component-based architecture, TypeScript's static typing capabilities, and the integration of various libraries and tools commonly used in modern web development such as Tailwind.

## Accessing the Deployed Website

To access the deployed website, please visit the following URL: [SplashSeeker](https://splashseeker.vercel.app/)
Simply click on the provided link, and it will take you to the live version of the SplashSeeker website. Feel free to explore and enjoy.

## Features

- Browse and search for a wide variety of images using keywords and filters.
- View detailed information about each image, including the photographer, likes, format, date of upload,...
- Responsive and user-friendly interface for seamless browsing and navigation.

## Backend
> **Warning**
> The first API call after a period of 15 minutes of inactivity may experience a slight delay due to the free subscription plan on the Render platform. This is because the server goes into a "sleep" state to conserve resources.

To fetch the image data from the Unsplash API, a [backend server is implemented using Node.js and Express](https://github.com/MassimoTascone/splashseeker-server). This server acts as a proxy, handling requests from the frontend and securely retrieving the required image information.

## Technologies Used

- **React**: A JavaScript library for building interactive user interfaces.
  - React Functionnal components, React hooks: "useState, useEffect, ..."
- **TypeScript**: A typed superset of JavaScript that adds static typing and improved tooling.
- **Node.js**: A JavaScript runtime for executing server-side applications.
- **Express**: A flexible and minimalistic web application framework for Node.js.
- **Axios**: A popular HTTP client for making API requests.
- **TailwindCSS**: A utility-first CSS framework for creating responsive and customizable designs.
- **UnsplashAPI**: An API that provides access to a vast collection of high-quality images.
- **Platforms**: 
  - Vercel
  - Render

## Deployment

The **frontend** application is deployed on [Vercel](https://vercel.com/), a cloud platform for hosting static websites. The **backend** server is deployed on [Render](https://render.com/), a cloud platform for scalable and reliable web applications.
## Things to improve

- [ ] Add a Download feature for each images
- [ ] Unit testing 
- [ ] Smoother show more images feature
- [ ] Find a better platform to host proxy server (no sleep mode ?)
- [ ] Try reactQuery(TanStack) as an alternative to useEffect

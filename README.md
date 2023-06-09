[![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Cyclic](https://img.shields.io/badge/Cyclic-212121?style=for-the-badge&logo=cyclic&logoColor=white)](https://app.cyclic.sh/#/)



# SplashSeeker

<div align="center">
  <a href="https://splashseeker.vercel.app">
    <img src="https://i.imgur.com/FdGhQFP.png" alt="Website Preview" width="800" height="450">
  </a>
 </div>
 
 <br/>

**SplashSeeker** is a frontend application developed as a learning project, using **React** and **TypeScript**. It allows users to explore and search for high-quality images from the **Unsplash API**, a popular platform for sharing photography.


I undertook the development of SplashSeeker as a learning project to enhance my skills in front-end web development using React and TypeScript. By building a real-world application that interacts with external APIs, I aimed to gain practical experience in working with data retrieval, user interface design, and state management. Through this project, I sought to deepen my understanding of React's component-based architecture, TypeScript's static typing capabilities, and the integration of various libraries and tools commonly used in modern web development such as Tailwind.

## Accessing the Deployed Website

To access the deployed website, please visit the following URL: [SplashSeeker](https://splashseeker.vercel.app/)

Simply click on the provided link, and it will take you to the live version of the SplashSeeker website. Feel free to explore and enjoy.

## Features

- Browse and search for a wide variety of images using keywords.
- Show more images when searching for a keywords (show more button)
- View detailed information about each image, including the photographer, likes, format, date of upload,...
- Download the image that you want in jpeg format (download button)
- Responsive and user-friendly interface for seamless browsing and navigation.

## Backend
> **Note**
> No more cold start as the backend was moved from Render to Cyclic

To fetch the image data from the Unsplash API, a [backend server is implemented using Node.js and Express](https://github.com/MassimoTascone/splashseeker-server). This server acts as a proxy, handling requests from the frontend and securely retrieving the required image information. Used to be deployed on Render but moved to Cyclic to avoid cold start after 15min

## Technologies Used

- **React**: A JavaScript library for building interactive user interfaces.
  - React Functionnal components, React hooks: "useState, useEffect, custom hooks ..."
- **TypeScript**: A typed superset of JavaScript that adds static typing and improved tooling.
- **Node.js**: A JavaScript runtime for executing server-side applications.
- **Express**: A flexible and minimalistic web application framework for Node.js.
- **Axios**: A popular HTTP client for making API requests.
- **TailwindCSS**: A utility-first CSS framework for creating responsive and customizable designs.
- **UnsplashAPI**: An API that provides access to a vast collection of high-quality images.
- **Platforms**: 
  - Vercel
  - Cyclic

## Deployment

The **frontend** application is deployed on [Vercel](https://vercel.com/), a cloud platform for hosting static websites. The **backend** server is deployed on [Render](https://render.com/), a cloud platform for scalable and reliable web applications.
## Things to improve

- [X] Add a Download feature for each images
- [ ] Unit testing 
- [ ] Smoother show more images feature
- [X] Find a better platform to host proxy server (no sleep mode ?)
- [ ] Try reactQuery(TanStack) as an alternative to useEffect
- [ ] Make it responsive for wider screens

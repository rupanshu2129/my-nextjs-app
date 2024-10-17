# My Next.js Project

This project is a web application built with **Next.js**, deployed on **Vercel**, and uses **Supabase** as the backend service for authentication, database management (PostgreSQL), and storage.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project Locally](#running-the-project-locally)
- [Deployment](#deployment)

---

## Features

- **Server-Side Rendering (SSR)** and **Static Generation (SSG)** with Next.js.
- **Supabase Integration**: Authentication, real-time data, and PostgreSQL database for storing posts.
- **Vercel Deployment**: Instantaneous deployment and serverless functionality via Vercel.
- **Post Management**: Posts can be created, displayed, and stored securely in PostgreSQL.
- **Authentication**: User sign-up and login functionality with Supabase.

---

## Technologies Used

- **Next.js**: A React framework for building optimized web applications with built-in SSR and SSG.
- **Supabase**: Provides database (PostgreSQL), authentication, and real-time subscriptions.
- **PostgreSQL**: Relational database managed via Supabase.
- **Vercel**: For seamless deployment and hosting of the Next.js application.

---

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:rupanshu2129/my-nextjs-app.git
   cd my-nextjs-app

2. Install the dependencies

    ```bash
    npm install

## Environment Variables

Create a .env.local file in the root directory and add the following environment variables to configure Supabase and other services:

DATABASE_URL=<your-postgres-url>

DATABASE_URL: PostgreSQL database URL for server-side operations.

## Running the Project Locally
Make sure all the required environment variables are set in .env.local.

Run the development server:

   ```bash
    npm run dev

Open http://localhost:3000 to view the app in your browser.

The app will reload automatically if you make edits.

### Deployment
This project is deployed to Vercel.

To deploy your own instance:

Push your code to a GitHub repository.
Go to Vercel, create an account, and link your repository.
Set up the necessary environment variables in the Vercel dashboard.
Deploy your app. Vercel will handle continuous deployment on each push.

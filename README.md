# SnapBuy Shopping Site 

The code for the E-commerce web application developed with Next.js is contained in this repository.  The project employs a range of technologies and tools, including TypeScript, Redux Toolkit, ESLint, and Tailwind CSS. For login functionality, we utilize the Google Cloud Platform (GCP) for Google authentication and the Fakestore API for data fetching.

## Project Demo 

- [Video](https://www.loom.com/share/1de02053d09e473c9437fb2ca48a1a12?sid=87fd7db8-e93d-4f65-8534-125dbc209d70)



## Table of Contents

- [Features](#features)
- [Roadmap](#roadmap)
- [Installation](#installation)
- [Technology Stack](#technology-stack)
- [Folder Structure](#folder-structure)
- [Acknowledgements](#acknowledgements)

## Features

- **Home page:** Lists products and links to navigate around the website.

![Screenshot 2025-04-14 085315](https://github.com/user-attachments/assets/b58156eb-cf10-457e-a30d-1a2c4a8bcd86)

- **Cart:** View/Edit/Delete cart items.

- **Wishlist:** View/Edit/Delete wishlist items.

- **Login:** Sign in with Google OR Sign in with Credentials

## Roadmap

- [x] ~navbar~
- [x] ~home page~
- [x] ~my cart~
- [x] ~my wishlist~
- [x] ~product detail page~


## Installation

#### Installing Node.js and npm on Ubuntu


1. Install Node.js:

```
 install nodejs
```

3. Install npm ubuntu with the code below.

```
 install npm
```

4. Verify the installation by checking the Node.js and npm versions:

```
node --version
npm --version
```

#### Installing Node.js and npm on Windows

1. Visit the official [Node.js website ](https://nodejs.org)
2. Download the latest LTS version of Node.js for Windows.
3. Run the installer and follow the installation wizard.
4. After installation, open the Command Prompt or PowerShell and verify the Node.js and npm versions:

```
node --version
npm --version
```

#### Running project locally

To run this project locally, follow these steps:

1. Clone the repository using HTTPS:

```
git clone https://github.com/swarnavopramanik/ShopOrbit
```

or

Clone the repository using SSH (if you have set up an SSH key):

```
git clone https://github.com/swarnavopramanik/ShopOrbit.git

```

2. Install the dependencies:

```
npm install

```


## Technology Stack

- [Next.js](https://nextjs.org): A React framework for building server-rendered applications.
- [TypeScript](https://www.typescriptlang.org): A typed superset of JavaScript that enhances code quality and developer productivity.
- [Redux Toolkit](https://redux-toolkit.js.org/): A A powerful state management tool.
- [ESLint](https://eslint.org): A pluggable JavaScript linter that helps identify and fix common code issues.
- [Tailwind CSS](https://tailwindcss.com): A utility-first CSS framework for building custom user interfaces.
- [Shadcn UI](https://ui.shadcn.com/): A collection of re-usable components built using Radix UI and Tailwind CSS.
- [GCP](https://cloud.google.com/?hl=en):  Use your user credentials to sign in to the Google Cloud CLI, and then use the tool to access Google Cloud services.


## Folder Structure

The project follows a common folder structure for a Next.js application:

- `/components`: Contains reusable React components.
- `/app`: contains pages route
- `/public`: Stores static assets such as images and fonts.
- `/app/globals.css`: Holds global CSS styles and Tailwind CSS configuration.
- `/redux`: Holds the app states.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
-[Authentication methods at Google](https://cloud.google.com/docs/authentication)


# SnapBuy Shopping Site 

The code for the E-commerce web application developed with Next.js is contained in this repository.  The project employs a range of technologies and tools, including TypeScript, Redux Toolkit, ESLint, and Tailwind CSS. For login functionality, we utilize the Google Cloud Platform (GCP) for Google authentication and the Fakestore API for data fetching.

## Table of Contents

- [Features](#features)
- [Roadmap](#roadmap)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [Folder Structure](#folder-structure)
- [Acknowledgements](#acknowledgements)

## Features

- **Home page:** Lists products and links to navigate around the website.
- **Cart:** View/Edit/Delete cart items.
- **Wishlist:** View/Edit/Delete wishlist items.
- **Filters:** Filter products based on categroies.



## Roadmap

- [x] ~navbar~
- [x] ~home page~
- [x] ~my cart~
- [x] ~my wishlist~
- [x] ~product detail page~


## Installation

#### Installing Node.js and npm on Ubuntu

1. Update the package repository:

```bash
sudo apt Update
```

2. Install Node.js:

```bash
sudo apt install nodejs
```

3. Install npm ubuntu with the code below.

```bash
sudo apt install npm
```

4. Verify the installation by checking the Node.js and npm versions:

```bash
node --version
npm --version
```

#### Installing Node.js and npm on Windows

1. Visit the official [Node.js website ](https://nodejs.org)
2. Download the latest LTS version of Node.js for Windows.
3. Run the installer and follow the installation wizard.
4. After installation, open the Command Prompt or PowerShell and verify the Node.js and npm versions:

```bash
node --version
npm --version
```

#### Running project locally

To run this project locally, follow these steps:

1. Clone the repository using HTTPS:

```bash
git clone https://github.com/swarnavopramanik/ShopOrbit
```

or

Clone the repository using SSH (if you have set up an SSH key):

```bash
git clone https://github.com/swarnavopramanik/ShopOrbit.git
```


2. Install the dependencies:

```bash
npm install
```

## Usage

To start the development server, run the following command:

```bash
npm run dev
```

Open your web browser and visit `http://localhost:3000` to access the application.

> while running the project locally, if you encounter the >following error, please consider upgrading your `nodejs` version.
>
> ```bash
> showAll: args["--show-all"] ?? false,
>                                         
> SyntaxError: Unexpected token '?'
>    at wrapSafe (internal/modules/cjs/loader.js:915:16)
>    at Module._compile (internal/modules/cjs/loader.js:963:27)
>     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
>     at Module.load (internal/modules/cjs/loader.js:863:32)
>     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
>     at Module.require (internal/modules/cjs/loader.js:887:19)
>     at require (internal/modules/cjs/helpers.js:74:18)
> ```

## Technology Stack

- [Next.js](https://nextjs.org): A React framework for building server-rendered applications.
- [TypeScript](https://www.typescriptlang.org): A typed superset of JavaScript that enhances code quality and developer productivity.
- [Redux Toolkit](https://redux-toolkit.js.org/): A A powerful state management tool.
- [ESLint](https://eslint.org): A pluggable JavaScript linter that helps identify and fix common code issues.
- [Tailwind CSS](https://tailwindcss.com): A utility-first CSS framework for building custom user interfaces.
- [Shadcn UI](https://ui.shadcn.com/): A collection of re-usable components built using Radix UI and Tailwind CSS.

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

# Next.js Authentication Template with Navbar

This project is a template for a Next.js application that includes authentication features included in a navbar. Users can register and log in using credentials or third-party providers such as Google, GitHub, Apple, Facebook, etc. The template utilizes a NoSQL database (MongoDB) and is built using Prisma.

## Getting Started

To get started with this template, follow the steps below:

### Clone the Repository

```
git clone https://github.com/SergioPujol/nextjs-auth-navbar.git
```

### Install Dependencies

Navigate to the project directory and install the required packages:

```
cd nextjs-auth-navbar
npm install
```

### Set Up Environment Variables

Create a `.env` file in the project root directory and configure the following environment variables.

```
MONGODB_URL=
NEXTAUTH_SECRET=
```

And the providers needed:

```
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=

APPLE_ID=
APPLE_SECRET=
```


### Set Up Prisma

Apply the database schema and migrations using the following command:

```
npx prisma db push
```

### Start the Application

Start the Next.js development server with the following command:

```
npm run dev
```

The application will be accessible at `http://localhost:3000` in your web browser.

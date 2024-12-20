TreeshanRestaurant
TreeshanRestaurant is a modern web application designed to provide an intuitive and seamless experience for users. Built with Next.js, TypeScript, Tailwind CSS, and Prisma, it integrates with a PostgreSQL database for efficient and scalable data management. The application features robust API endpoints and offers user authentication via NextAuth.js.

Table of Contents
Features
Getting Started
Prerequisites
Installation
Running the Development Server
Building for Production
API Endpoints
Database
Project Structure
Technologies Used
Contributing
License
Contact
Features
Next.js Framework: Utilizes server-side rendering, static site generation, and client-side rendering.
TypeScript: Ensures type safety, leading to improved developer experience and code quality.
Tailwind CSS: A utility-first CSS framework for rapid and responsive UI design.
Prisma ORM: Provides a type-safe and clean API for database management.
PostgreSQL: A robust relational database for efficient data storage.
REST API: Implements scalable and secure API endpoints.
Authentication: Seamless user authentication using NextAuth.js.
Getting Started
Follow the steps below to set up and run TreeshanRestaurant on your local machine.

Prerequisites
Ensure you have the following installed on your system:

Node.js (v14 or later)
npm (v6 or later) or Yarn (v1 or later)
PostgreSQL (or another database supported by Prisma)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/ytreeshan/TreeshanRestaurant.git
cd TreeshanRestaurant
Install dependencies:

bash
Copy code
yarn install
Set up the environment variables:

Create a .env file in the root directory and add your database connection string and other secrets:

env
Copy code
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/<database_name>
NEXTAUTH_SECRET=your-nextauth-secret
Apply the Prisma migrations:

bash
Copy code
npx prisma migrate dev
Seed your database (if necessary):

bash
Copy code
npx prisma db seed
Launch Prisma Studio to manage your database:

bash
Copy code
npx prisma studio
Running the Development Server
Start the development server with the following command:

bash
Copy code
yarn run dev
The application will be available at http://localhost:3000.

Building for Production
To build the project for production:

Build the application:

bash
Copy code
yarn build
Start the production server:

bash
Copy code
yarn start
API Endpoints
/api/products
GET: Fetches all products, optionally filtered by category.
Query Parameters: ?cat=<category_slug>
POST: Creates a new product.
/api/auth
Handles user authentication using NextAuth.js.
More endpoints are documented within the source code.

Database
The application uses Prisma to interact with a PostgreSQL database. Ensure the database schema matches the application's requirements by running:

bash
Copy code
npx prisma migrate dev
Use Prisma Studio to view and edit your database:

bash
Copy code
npx prisma studio
Project Structure
plaintext
Copy code
TreeshanRestaurant/
├── prisma/                   # Prisma schema and migrations
├── public/                   # Public assets
├── src/
│   ├── app/                  # Next.js App directory
│   │   ├── api/              # API endpoints
│   │   ├── components/       # React components
│   │   ├── styles/           # Global styles
│   │   ├── pages/            # Page components
│   ├── utils/                # Utility functions
├── .env                      # Environment variables
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
Technologies Used
Next.js: Framework for server-side rendering and static site generation.
TypeScript: Provides type safety for the application.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Prisma: ORM for type-safe database interactions.
PostgreSQL: Relational database for data storage.
NextAuth.js: Library for authentication.
Yarn: Package manager.

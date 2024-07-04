Sure, here's an updated `README.md` that includes instructions for running the application, as well as accessing the Swagger UI:

```md
# Movies API

This is a simple backend server built with ExpressJS and TypeScript for managing a collection of movies. The server provides a set of CRUD functionalities to interact with the movies resource and connects to a MongoDB database for data persistence.

## Features

- Create a movie
- List movies with basic filters (title, genre, year) with pagination (limit, offset)
- Get details of a movie
- Update a movie
- Delete a movie

## Prerequisites

- Node.js
- MongoDB (MongoDB Atlas or local MongoDB server)

## Installation

1. Clone the repository:

   ```sh
   cd problem5
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the root directory and add your MongoDB URI:

   ```env
   PORT=3000
   MONGO_URI=your_mongodb_uri
   ```

   Replace `your_mongodb_uri` with your actual MongoDB connection string.

## Running the Application

1. Start the development server:

   ```sh
   npm run dev
   ```

   This command will start the server using `nodemon` and `ts-node`.

2. The server will be running at `http://localhost:3000`.

## API Documentation

The API documentation is available via Swagger UI.

1. Open your browser and go to `http://localhost:3000/api-docs`.

## Endpoints

### Create a Movie

```http
POST /api/movies
```

### List Movies

```http
GET /api/movies
```

**Query Parameters:**

- `title` (optional): Filter by movie title
- `genre` (optional): Filter by movie genre
- `year` (optional): Filter by release year
- `limit` (optional): Number of results to return (default: 20)
- `offset` (optional): Number of results to skip (default: 0)

### Get Movie Details

```http
GET /api/movies/{id}
```

### Update a Movie

```http
PUT /api/movies/{id}
```

### Delete a Movie

```http
DELETE /api/movies/{id}
```

## Project Structure

```sh
src/
├── controllers/
│   └── movieController.ts
├── models/
│   └── movie.ts
├── routes/
│   └── movieRoutes.ts
├── swaggerConfig.ts
└── app.ts
```

## License

This project is licensed under the MIT License.
```

### Notes

- Ensure you replace placeholders like `your_mongodb_uri` with actual values relevant to your setup.
- The Swagger documentation URL (`http://localhost:3000/api-docs`) provides an interactive UI to explore and test the API endpoints.

With these instructions, any developer should be able to set up, run, and interact with your Movies API.
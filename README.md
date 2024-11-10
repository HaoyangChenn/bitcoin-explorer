# Bitcoin Explorer

Bitcoin Explorer is a tool for exploring and analyzing the Bitcoin blockchain. It provides a user-friendly interface to view transactions, blocks, and addresses.

## Features

- View detailed information about Bitcoin transactions
- Explore Bitcoin blocks and their contents
- Search for Bitcoin addresses and view their transaction history
- User-friendly interface for easy navigation

## Installation

To install Bitcoin Explorer, follow these steps:

1. Clone the repository:
  ```sh
  git clone https://github.com/HaoyangChenn/bitcoin-explorer
  ```
2. Navigate to the project directory:
  ```sh
  cd bitcoin-explorer
  ```
## Build and Run with Docker Compose

To build and start all the services (backend, frontend, and PostgreSQL database) using Docker Compose, run the following command:

```bash
docker-compose up --build
```

### This command will:

1. Build the backend Docker image and start the backend service.
2. Build the frontend Docker image and start the frontend service.
3. Pull the PostgreSQL image, initialize the database with `init.sql`, and start the database service.

### Access the Application

Once all the services are up and running, you can access the application in your web browser at:

- Frontend: [http://localhost:8080](http://localhost:8080)
- Backend API: [http://localhost:3001](http://localhost:3001)

### Stopping the Services

To stop the running services, press `Ctrl+C` in the terminal where `docker-compose` is running, or run:

```bash
docker-compose down
```

## Additional Information

- Ensure Docker and Docker Compose are up-to-date.
- Make sure any environment variables required by the backend, frontend, or database services are configured in a `.env` file if needed.

## License

This project is licensed under the MIT License.

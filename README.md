
# Bitcoin Block Explorer Project

This project is a Bitcoin Block Explorer that fetches the latest Bitcoin block height from a locally running Bitcoin Core node and displays it on a web interface. It also includes real-time date and time updates, along with a flashy golden display of the block height.

## Project Structure

- **Backend**: A Node.js server that fetches data from Bitcoin Core using its RPC API, stores the block height in an SQLite database, and serves it through a REST API.
- **Frontend**: A React.js application that displays the block height with real-time updates and animations.

## Setup Instructions

### Prerequisites

1. **Bitcoin Core**: Ensure you have Bitcoin Core installed and running on your machine. The `bitcoin.conf` file must be correctly configured to allow RPC connections.

2. **Node.js & npm**: Ensure that Node.js and npm are installed on your machine.

### Step-by-Step Guide

#### 1. Set Up Bitcoin Core

Make sure that Bitcoin Core is configured to allow RPC connections. Update the `bitcoin.conf` file with the following configuration:

\`\`\`bash
rpcuser=123
rpcpassword=123
rpcallowip=127.0.0.1
rpcport=8332
server=1
\`\`\`

Restart Bitcoin Core after modifying the `bitcoin.conf` file.

#### 2. Clone the Repository

\`\`\`bash
git clone <your-repository-url>
cd bitcoin-explorer
\`\`\`

#### 3. Install Backend Dependencies

Navigate to the backend folder and install the required Node.js packages:

\`\`\`bash
cd backend
npm install
\`\`\`

#### 4. Run the Backend

\`\`\`bash
npx ts-node server.ts
\`\`\`

This will start the backend server on `http://localhost:3001`, which will periodically fetch the latest Bitcoin block height from the Bitcoin Core node and store it in the SQLite database.

#### 5. Install Frontend Dependencies

In a new terminal, navigate to the frontend folder and install the required Node.js packages:

\`\`\`bash
cd ../frontend
npm install
\`\`\`

#### 6. Run the Frontend

\`\`\`bash
npm start
\`\`\`

This will start the frontend server on `http://localhost:3000`. You can now visit this URL in your browser to see the current Bitcoin block height along with the date and time.

### API Endpoints

- **GET /api/block-height**: Returns the latest block height from the SQLite database.

### Credentials for Bitcoin Core

- **Username**: `123`
- **Password**: `123`

These credentials are hardcoded in the project for easy testing and grading. If you wish to change them, make sure to update the credentials in both `bitcoinService.ts` and the `bitcoin.conf` file.

## File Structure

\`\`\`
├── backend
│   ├── server.ts           # Main server file for the backend
│   ├── bitcoinService.ts   # Handles communication with Bitcoin Core RPC API
│   ├── database.ts         # Handles SQLite database operations
│   └── package.json        # Backend dependencies
├── frontend
│   ├── src
│   │   ├── App.tsx         # Main React component for displaying block height
│   │   ├── api.ts          # Fetches block height from the backend
│   ├── public
│   └── package.json        # Frontend dependencies
└── README.md
\`\`\`

## Key Features

- Fetches Bitcoin block height every 10 seconds and updates the UI in real-time.
- Uses SQLite for local storage of block height history.
- Displays a visually attractive golden, animated block height.
- Displays real-time date and time.

## Notes for Grading

1. Ensure Bitcoin Core is running with the RPC username/password `123/123`.
2. The project should work out-of-the-box with no additional configuration needed.
3. To see the latest Bitcoin block height and real-time date, access the frontend at `http://localhost:3000`.

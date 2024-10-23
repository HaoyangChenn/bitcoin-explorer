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

```bash
rpcuser=123
rpcpassword=123
rpcallowip=127.0.0.1
rpcport=8332
server=1

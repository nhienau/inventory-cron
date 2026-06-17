# Cron server for Inventory web app

A Node.js cron server to run scheduled jobs for the inventory management system.

## Features

Cron jobs: calling Next.js API route to

- Save daily balances
- Update public holidays

## Installation

1. Clone the repository

```BASH
git clone https://github.com/nhienau/inventory-cron.git
```

2. Environment variables

- Create a `.env` file (see `.env.example`)
- `API_URL`: Next.js web server URL

3. Install dependencies and start the server

```BASH
cd inventory-cron
bun install
bun run start
```

Build and run Docker container:

```BASH
docker build -t inventory-cron .
docker run -d inventory-cron
```

# Cron server for Inventory web app

A Node.js cron server to run scheduled jobs for the inventory management system.

## Features

- Save daily balances (by calling Next.js API route)

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
npm install
npm run start
```

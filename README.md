# hokx-bot - A World of Tanks Discord Bot (Legacy Demo)

## Overview

`hokx-bot` is a legacy Discord bot created as a proof-of-concept for integrating the Discord API with the World of Tanks (WoT) API. Its primary function is to fetch data from the WoT API, likely for a specific clan or player, and automatically update a user's roles within a Discord server based on that information.

This bot serves as a demonstration of automated role management in a gaming community. This specific version is deprecated and is not actively maintained, but it effectively showcases the core functionality of using an external API to manage a Discord server's permissions dynamically.

## Key Features

- **World of Tanks API Integration:** Connects to the official World of Tanks API to retrieve detailed player and clan statistics.
- **Automated Role Updates:** Updates Discord roles for members based on data retrieved from the WoT API, such as clan membership or performance metrics.
- **Simple Command Structure:** Likely built with a straightforward command-based interface to trigger updates and fetch information.

## Project Structure

Based on a typical Node.js Discord bot project, the structure is likely similar to the following:
```
hokx-bot/
├── index.js             # Main bot file
├── package.json         # Node.js dependencies
└── config.json          # Configuration for bot token and API keys
```
## Technologies Used

- **Node.js:** The core runtime environment.
- **Discord.js:** The primary library for interacting with the Discord API.
- **World of Tanks API:** The external API used to fetch game-related data.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- A Discord Bot Token
- A World of Tanks Application ID (API Key)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/antoniost26/hokx-bot.git](https://github.com/antoniost26/hokx-bot.git)
    cd hokx-bot
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Configuration

1.  Create a `config.json` file in the root directory.
2.  Populate it with your Discord Bot Token and World of Tanks Application ID.

    ```json
    {
      "token": "YOUR_DISCORD_BOT_TOKEN",
      "wot_app_id": "YOUR_WOT_APPLICATION_ID"
    }
    ```

### Running the Bot

To start the bot, run the following command in your terminal:

```bash
node index.js
```

### License
This project is licensed under the MIT License.

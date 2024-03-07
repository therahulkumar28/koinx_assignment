# KoinX Frontend Intern Assignment

## Overview

This project represents the completion of the Frontend Intern Assignment for KoinX. The primary goal was to translate a Figma design into a fully functional React.js application, and I am pleased to present the result.

**Technology Used:** React.js

## Demo

Check out the live demo [here](https://koinx-amber.vercel.app/).

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js and npm
- GitHub account

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/koinx-frontend-intern-assignment.git
    ```

2. **Install dependencies:**

    ```bash
    cd koinx-frontend-intern-assignment
    npm install
    ```

## API Integration

### Coingecko `/simple/price` API

- The application fetches the price of Bitcoin in USD and INR using the Coingecko `/simple/price` API.
- Documentation: [Coingecko API Documentation](https://www.coingecko.com/api/documentation)
- API Parameters:
  - `ids`: `bitcoin`
  - `vs_currencies`: `inr,usd`
  - `include_24hr_change`: `true`

### TradingView Chart Integration

- The application embeds TradingView's BTCUSD chart using the [TradingView Advanced Chart Widget](https://www.tradingview.com/widget-docs/widgets/charts/advanced-chart/).

## Folder Structure

```plaintext
koinx-frontend-intern-assignment/
|-- public/
|-- src/
|   |-- components/
|   |-- pages/
|   |-- assets/
|-- .env.example
|-- .gitignore
|-- package.json
|-- README.md
|-- etc.

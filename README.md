
# Fin-sim-FE

A simulation tool for deal analysis and valuation with team-based roles.

## Folder Structure

```
deal-vision-sim/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   │   └── ui/         # Shadcn UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and helpers
│   ├── pages/          # Page components
│   └── types/          # TypeScript type definitions
├── index.html          # HTML entry point
└── README.md           # Project documentation
```

## Key Components

- **TeamToggle**: Allows switching between Team 1 (Input) and Team 2 (Approval) roles
- **SimulationForm**: Handles input of simulation parameters
- **ValuationDisplay**: Shows calculated company valuation
- **Timer**: Tracks simulation time remaining
- **PieChart**: Visualizes interest allocation

## Installation and Setup

### Installation Steps

```sh
# Step 1: Navigate to the project directory.
cd fin-sim-fe

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

The development server will start at http://localhost:8080

## Development

This project is built with:

- Vite - Fast build tool and development server
- TypeScript - Type-safe JavaScript
- React - UI library
- shadcn-ui - Component library
- Tailwind CSS - Utility-first CSS framework
- React Router - Client-side routing
- React Query - Data fetching and state management

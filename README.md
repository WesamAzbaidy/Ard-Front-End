# Ard Front-End

A modern, responsive React application for the Ard platform.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg)

## 📋 Overview

This repository contains the client-side codebase for the Ard platform, providing an intuitive and responsive user interface built with modern web technologies.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/WesamAzbaidy/Ard-Front-End.git

# Navigate to project directory
cd Ard-Front-End

# Install dependencies
npm install

# Start development server
npm start
```

Then open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **Axios** - API requests

## 📁 Project Structure

```
Ard-Front-End/
├── public/                  # Static files
├── src/
│   ├── api/                 # API services
│   ├── assets/              # Images, fonts, etc.
│   ├── components/          # UI components
│   ├── theme/               # Custom Theme
│   ├── pages/               # Page components
│   ├── routes/              # Routing configuration
│   ├── store/               # Redux store
│   ├── styles/              # Global styles
│   ├── types/               # TypeScript types
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Root component
│   └── index.tsx            # Entry point
└── config files (.env, tsconfig.json, etc.)
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run test` | Run test suite |
| `npm run lint` | Lint codebase |
| `npm run format` | Format with Prettier |

## 📊 State Management

We use Redux Toolkit with the following structure:

- Feature-based slices
- Async operations with `createAsyncThunk`
- Selectors for accessing state

## 🔍 Code Quality

- ESLint for code linting
- Prettier for code formatting
- TypeScript for static type checking

## 📞 Contact

- **Wesam Azbaidy** -  w.azbaidy1999@gmail.com

---

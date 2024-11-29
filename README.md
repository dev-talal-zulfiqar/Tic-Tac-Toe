# Next.js Tic-Tac-Toe Game

A modern implementation of the classic Tic-Tac-Toe game built with Next.js, React, and Tailwind CSS. This project demonstrates the use of React hooks, state management, and responsive design principles.

## Features

- 🎮 Interactive game board
- 🎯 Real-time win detection
- 🔄 Game reset functionality
- 📱 Responsive design
- ⚡ Built with Next.js for optimal performance

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - JavaScript library for user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Geist Font](https://vercel.com/font) - Modern font family by Vercel

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd tic-tac-toe
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to play the game.

## Game Rules

1. The game is played on a 3x3 grid
2. Players take turns placing X's and O's on the board
3. The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins
4. When all squares are filled and no player has won, the game is a draw

## Project Structure

```
tic-tac-toe/
├── app/
│   ├── components/     # React components
│   ├── hooks/         # Custom React hooks
│   ├── constants/     # Game constants
│   └── page.js        # Main page component
├── public/           # Static assets
└── styles/          # Global styles
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

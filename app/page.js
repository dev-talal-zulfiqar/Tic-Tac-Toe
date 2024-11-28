import Board from "./components/Board"
import Header from "./components/Header"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10">
    <Header />
    <Board />
  </div>
  );
}

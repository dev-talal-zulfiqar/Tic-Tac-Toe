import Header from "./components/Header";
import GameWrapper from "./components/GameWrapper";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10">
      <Header />
      <GameWrapper />
    </div>
  );
}

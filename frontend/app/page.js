import Features from "./components/Features";
import Landing from "./components/Landing";
import News from "./components/News";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-clip">
      <Landing />
      <Features />
      <News />
    </main>
  )
}

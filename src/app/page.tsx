import Image from "next/image";
import Home from "./home/Home";

export default function App() {
  return (
    <div className="border border-white min-h-screen flex flex-col justify-start pb-[100px]">
      <Home />
    </div>
  );
}

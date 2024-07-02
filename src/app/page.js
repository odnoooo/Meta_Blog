import Image from "next/image";
import { Header } from "./componenets/Header";
import { Footer } from "./componenets/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <Footer />
      </div>
    </div>
  );
}

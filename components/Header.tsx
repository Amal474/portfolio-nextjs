import Link from "next/link";
import { Button } from "./ui/button";

// Custom Components
import Navbar from "./Navbar";


export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-semibold">
          Mohammed Amal N
        </h1>
        <div className="hidden md:flex">
          <Navbar/>
          <Link href={"/contact"}>
            <Button>Contact Me</Button>
          </Link>
        </div>
        <div className="md:hidden">Mobile Nav</div>
      </div>
    </header>
  );
}
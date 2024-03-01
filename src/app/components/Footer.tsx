import Link from "next/link";

export default function Footer() {
  return (
    <footer className="group overflow-hidden bg-gradient-to-tr">
      <nav className="mx-auto flex max-w-3xl gap-3 p-4 before:duration-700 before:absolute dark before:w-28 before:h-28 before:bg-transparent before:blur-none 
    before:border-8 before:opacity-50 before:rounded-full before:-left-4 
    before:-top-12 relative z-10 group-hover:before:top-28 group-hover:before:left-44 
    group-hover:before:scale-125 group-hover:before:blur">
        <Link href="/privacy" className="hover:text-gray-400">Privacy</Link>
      </nav>
    </footer>
  );
}
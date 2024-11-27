import Link from "next/link";
import React from "react";

const Navbar =()=> {

    return (
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <h2 className="text-3xl style-italic font-bold text-green-600 hover:text-green-400">Zareen Arif</h2>
      <span className="ml-3 text-xl">Tailblocks</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 text-green hover:text-red-300">Home</Link>
      <Link href="/about" className="mr-5 text-green hover:text-orange-300">About</Link>
      <Link href="/projects" className="mr-5 text-green hover:text-yellow-300">Projects</Link>
      <Link href="/contact" className="mr-5 text-green hover:text-green-300">Contact</Link>
    </nav>
    <button className="inline-flex items-center text-green-100 bg-green-900 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0">
      Download CV
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

    )
}

export default Navbar
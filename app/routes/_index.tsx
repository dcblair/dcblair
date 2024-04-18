import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "DCBlair" },
    { name: "description", content: "Devin Blair - Frontend Engineer" },
  ];
};

export default function Index() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center p-8 md:py-24 md:px-44">
      <div className="mb-10">
        {/* Header */}
        <div className="items-center flex space-y-4 flex-col mb-4">
          <h1 className="font-bold tracking-widest text-3xl">Devin Blair</h1>
          <h2 className="font-semibold text-xl">Frontend Engineer</h2>
        </div>

        {/* Navbar */}
        <nav className="flex items-center space-x-4 p-2 text-xl tracking-widest leading-6">
          <Link className="px-2.5 py-0.5 hover:focus:no-underline hover:underline focus:outline-none focus:border-3 focus:border-black" to="/">
            About
          </Link>
          <div className="rounded-sm bg-black w-0.5 h-8" />
          <Link className="px-2.5 py-0.5 hover:focus:no-underline hover:underline focus:outline-none focus:border-3 focus:border-black" to="/resume">
            Résumé
          </Link>
        </nav>
      </div>

      <div className="flex flex-col md:grid md:grid-rows-2 md:grid-flow-col md:gap-16 w-full md:w-1/3 h-full md:space-y-8">
        {/* Photo */}
        <div className="md:row-span-4 flex flex-end items-center relative w-full">
          <img className="relative rounded-full shadow-2xl w-64 md:w-80" src="/assets/profile_500.png" alt="devin blair wearing glasses and a jacket" />
          <div className="-z-10 absolute rounded-full top-28 bg-gradient-to-br from-slate-200 to-black h-64 w-64 md:h-96 md:w-96" />
        </div>

        {/* Intro statement */}
        <div className="flex md:row-start-2 md:row-end-2 md:row-span-4">
          <p>Welcome!</p>
          <p>Thanks for visiting.</p>
          <p>Here is something about me.</p>
        </div>
      </div>
    </div>
  );
}

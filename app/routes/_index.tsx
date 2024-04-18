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
    <div className="w-full flex flex-col items-center mt-9 p-8 md:p-16">
      <div className="items-center flex flex-col mb-4">
        <h1 className="font-bold text-2xl">Devin Blair</h1>
        <h2 className="font-semibold text-xl">Frontend Engineer</h2>
      </div>

      <ul className="flex items-center space-x-4 p-2">
        <Link className="px-2.5 py-0.5 hover:focus:no-underline hover:underline focus:outline-none focus:border-3 focus:border-black" to="/">
          About
        </Link>
        <div className="bg-black w-4 h-full" />
        <Link className="px-2.5 py-0.5 hover:focus:no-underline hover:underline focus:outline-none focus:border-3 focus:border-black" to="/resume">
          Résumé
        </Link>
      </ul>

        <div className="w-full flex flex-end">
          <img className="rounded-full w-64" src="../../public/assets/profile_500.png" alt="devin blair wearing glasses and a jacket" />
        </div>
        <div className="w-full flex flex-start">
          <p>Welcome!</p>
        </div>
      </div>
  );
}

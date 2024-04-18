import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import './tailwind.css'
import LoadingSpinner from "./components/LoadingSpinner";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-slate-200 via-sky-100 to-slate-100">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return (
    <div className="w-full h-full flex items-center sm:justify-center md:pt-28">
      <LoadingSpinner/>
      <div className="mt-4">
        <p>Just a moment.</p>
      </div>
    </div>
  );
}

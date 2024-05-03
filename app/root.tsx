import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import { Footer, LoadingSpinner, Header } from '~/components';

import './tailwind.css';

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
  return (
    <div className="min-h-screen w-full p-8 md:px-44 md:py-24">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export function HydrateFallback() {
  return (
    <div className="flex h-full w-full flex-col items-center sm:justify-center md:pt-48">
      <LoadingSpinner />
      <div className="mt-4">
        <p>Just a moment.</p>
      </div>
    </div>
  );
}
